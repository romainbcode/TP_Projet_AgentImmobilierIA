import os
from flask import *
from flask_cors import CORS
from dotenv import load_dotenv
from urllib.parse import quote
import requests
from requests.structures import CaseInsensitiveDict
import pandas as pd
from joblib import load

app = Flask(__name__)
CORS(app)
load_dotenv()

def callTransformAdressGPS(address: str):

  API_Key = os.getenv('API_GEOAPIFY')
  print(API_Key)
  # Encodez la chaîne pour qu'elle puisse être utilisée dans une URL
  encoded_string = quote(address)

  #L'api ne foncionne plus car le projet a été supprimé, doit refaire un projet et regénérer une clef
  url = "https://api.geoapify.com/v1/geocode/search?text=" + encoded_string + "&apiKey=" + API_Key
  print(url)

  headers = CaseInsensitiveDict()
  headers["Accept"] = "application/json"

  resp = requests.get(url, headers=headers)

  if resp.status_code == 200:
    data = resp.json()

    #Récupère la données depuis l'appel API
    longitude = data['features'][0]['properties']['lon']
    latitude = data['features'][0]['properties']['lat']

    #Retourne les latitute et longitude 
    return latitude, longitude
    
  else:
      # Affichez le code d'état en cas d'échec de la requête
      print(f"La requête a échoué avec le code d'état {resp.status_code}")

def transfData(beds: float, baths: float, surface: float, longitude:float, latitude:float):
    """
    Affichage la valeur la plus élevée du nombre de SDB 8
    Affichage la valeur la moins élevée du nombre de SDB 1
    Affichage la valeur la plus élevée du nombre de chambre 10
    Affichage la valeur la moins élevée du nombre de chambre 1
    Affichage la valeur la plus élevée de la surface 9031
    Affichage la valeur la moins élevée de la surface 307
    """

    min_value = 1.0
    max_value_beds = 10.0
    values_beds = 0.0
    values_beds = (beds - min_value) / (max_value_beds - min_value)
    print(values_beds)

    max_value_baths = 8.0
    values_baths= 0.0
    values_baths = (baths - min_value) / (max_value_baths - min_value)
    print(values_baths)

    min_value_surface = 307.0
    max_value_surface = 9031.0
    values_surface = "Sq.Ft"
    values_surface = (surface - min_value_surface) / (max_value_surface - min_value_surface)
    print(values_surface)

    min_value_latitude = 50.842
    max_value_latitude = 51.212
    value_latitude = (latitude - min_value_latitude) / (max_value_latitude - min_value_latitude)
    print(value_latitude)

    min_value_longitude = -114.315
    max_value_longitude = -113.859
    value_longitude = (longitude - min_value_longitude) / (max_value_longitude - min_value_longitude)
    print(value_longitude)

    return values_beds, values_baths, values_surface, value_latitude, value_longitude
      
@app.route('/generatePrice', methods=['POST'])
def envoieMail():        
    data = request.get_json()
    beds = data["bedrooms"]
    baths = data["bathrooms"]
    surface = data["surface"]
    localisation = data["localisation"]
    print("Localisation : ", localisation)
    latitude, longitude = callTransformAdressGPS(localisation)
    print("Latitude : ", latitude, ", Longitude : ", longitude)
    if beds == "" or baths == "" or surface == "" or localisation == "":
      return "Empty values"
    values_beds, values_baths, values_surface, value_latitude, value_longitude= transfData(float(beds), float(baths), float(surface), float(-114.215645), float(51.050652))

    # Définir les données
    data = {
        'longitude': [value_longitude],
        'latitude': [value_latitude],
        'Beds': [values_beds],
        'Bath': [values_baths],
        'Sq.Ft': [values_surface]
    }

    # Créer un DataFrame à partir des données
    df = pd.DataFrame(data)
    
    model_choice = load("./modeles/modele_find_range.joblib")
    predictions_range = model_choice.predict(df)
    print("Range predicted : ", predictions_range[0])

    model = load("./modeles/modele_KNN" + str(predictions_range[0]) + ".joblib")

    # Utiliser le modèle pour faire des prédictions
    predictions = model.predict(df)


    return str(predictions[0])


if __name__ == '__main__':
    
    app.run(host='localhost', port=3000, debug=True)
    