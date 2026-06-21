#!/bin/bash

# Enhanced Deploy Script with Status Check
# Usage: ./deploy-check.sh "Your commit message"

if [ -z "$1" ]; then
    echo "❌ Error: Please provide a commit message"
    echo "Usage: ./deploy-check.sh \"Your commit message\""
    exit 1
fi

echo "🚀 Starting enhanced deployment process..."

# Step 1: Update cache versions
echo "📦 Step 1: Updating cache bust versions..."
./update-cache-versions.sh

# Step 2: Git operations
echo "📝 Step 2: Committing changes..."
git add -A
git commit -m "$1"

# Step 3: Push to repository
echo "🌐 Step 3: Pushing to GitHub..."
git push origin main

# Step 4: Wait and check deployment status
echo "⏳ Step 4: Waiting for deployment to start..."
sleep 10

echo "✅ Deployment triggered successfully!"
echo "🔗 Check deployment status at: https://github.com/Saja8/kaiweb/actions"
echo "🌐 Your site will be available at: https://kailinks.com"
echo "⏰ DNS propagation may take 5-10 minutes"

# Step 5: DNS Check
echo "🔍 Checking DNS resolution..."
nslookup kailinks.com
