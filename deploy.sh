#!/bin/bash

# Variables
PROJECT_DIR="/var/www/lefilanthrope-front"
BRANCH="main"
LOG_FILE="/var/log/deploy.log"

# Aller dans le répertoire du projet
cd $PROJECT_DIR || exit

# Mettre à jour les logs
echo "----- Déploiement : $(date) -----" >> $LOG_FILE

# Vérifier les changements sur la branche main
git fetch origin $BRANCH >> $LOG_FILE 2>&1
LOCAL_COMMIT=$(git rev-parse $BRANCH)
REMOTE_COMMIT=$(git rev-parse origin/$BRANCH)

if [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
  echo "Changements détectés sur $BRANCH. Déploiement en cours..." >> $LOG_FILE

  # Mettre à jour le code
  git pull origin $BRANCH >> $LOG_FILE 2>&1

  # Installer les nouvelles dépendances si nécessaire
  npm install >> $LOG_FILE 2>&1

  # Construire le projet
  npm run build >> $LOG_FILE 2>&1

  # Redémarrer l'application avec PM2
  pm2 delete ecosystem.config.js || true
  pm2 start ecosystem.config.js >> $LOG_FILE 2>&1

  echo "Déploiement terminé avec succès." >> $LOG_FILE
else
  echo "Aucun changement détecté. Déploiement non nécessaire." >> $LOG_FILE
fi

