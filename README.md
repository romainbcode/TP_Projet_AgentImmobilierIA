# Projet d'Estimation Immobilière par Intelligence Artificielle à Calgary

## Introduction

Ce projet vise à développer un outil d'aide à la décision pour les agents immobiliers de Calgary au Canada, permettant une estimation plus précise des prix immobiliers à partir de données actualisées. L'outil utilise des modèles d'apprentissage automatique avancés pour prédire les valeurs des propriétés sur la base de divers attributs des biens.

## Description du Projet

### Sélection et Traitement des Données

Le projet s'appuie sur un dataset de ventes immobilières à Calgary, accessible via Kaggle, incluant des détails tels que le nombre de chambres, de salles de bain, la superficie et les prix de vente. Un nettoyage approfondi des données a été réalisé pour éliminer les valeurs aberrantes et les entrées incomplètes, et les adresses ont été converties en coordonnées GPS à l'aide de l'API Geoapify.

### Modélisation

Deux modèles principaux ont été développés :
1. **K-Nearest Neighbors (KNN)** : Utilisé pour estimer le prix des propriétés en se basant sur les caractéristiques similaires des biens les plus proches. (90% de précision)
2. **Perceptron multicouches (MLP)** : Employé pour classifier les propriétés dans différentes tranches de prix, améliorant ainsi la précision des estimations. (82% de précision)

### Développement de l'Application Web

Une application web a été créée pour faciliter l'utilisation des modèles par les agents immobiliers. L'application permet de saisir les détails d'une propriété et utilise ces informations pour prédire le prix à l'aide des modèles intégrés. 

## Conclusion

Le projet a abouti à la création de deux outils d'intelligence artificielle efficaces qui fournissent des estimations précises des prix immobiliers. Les possibilités d'amélioration incluent l'ajout de données supplémentaires et l'exploration de techniques d'apprentissage plus avancées pour optimiser encore les performances des modèles.

## Visuel du projet 

<img src="https://github.com/romainbcode/repo_gif/blob/main/screen_app_immobiliere.png"/>
