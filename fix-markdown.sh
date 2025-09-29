#!/bin/bash

# Script pour corriger les balises <code> avec des asterisques dans les fichiers markdown français

echo "Correction des balises <code> problématiques..."

# Trouver tous les fichiers markdown français
find config/docs/fr -name "*.md" | while read file; do
    echo "Traitement de: $file"
    
    # Remplacer <code> par des backticks pour éviter les conflits avec **
    # Utiliser perl pour une meilleure gestion des regex
    perl -i -pe 's/<code>([^<]*)<\/code>/`$1`/g' "$file"
    
    echo "  -> Balises <code> corrigées"
done

echo "Correction terminée!"