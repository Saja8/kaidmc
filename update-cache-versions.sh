#!/bin/bash

# Automatic Cache Buster Script for KaiLinks
# This script updates all version parameters in index.html

echo "🔄 Updating cache bust versions..."

# Get current timestamp
TIMESTAMP=$(date +"%Y-%m-%d-%H%M")
VERSION="v${TIMESTAMP}"

# Backup the original file
cp index.html index.html.backup

# Update CSS version
sed -i.bak "s/main\.css?v=[^\"]*\"/main.css?v=${VERSION}\"/g" index.html

# Update JS versions
sed -i.bak "s/main\.js?v=[^\"]*\"/main.js?v=${VERSION}\"/g" index.html
sed -i.bak "s/team1\.js?v=[^\"]*\"/team1.js?v=${VERSION}\"/g" index.html
sed -i.bak "s/services-tabs\.js?v=[^\"]*\"/services-tabs.js?v=${VERSION}\"/g" index.html
sed -i.bak "s/bootstrap-enhancements\.js?v=[^\"]*\"/bootstrap-enhancements.js?v=${VERSION}\"/g" index.html
sed -i.bak "s/lang\.js?v=[^\"]*\"/lang.js?v=${VERSION}\"/g" index.html

# Clean up backup files
rm index.html.bak
rm index.html.backup

echo "✅ Cache bust versions updated to: ${VERSION}"
echo "📝 Files updated: CSS + 5 JS files"
echo "🚀 Ready to commit and deploy!"
