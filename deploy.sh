#!/bin/bash

# Quick Deploy Script with Automatic Cache Busting
# Usage: ./deploy.sh "Your commit message"

if [ -z "$1" ]; then
    echo "❌ Error: Please provide a commit message"
    echo "Usage: ./deploy.sh \"Your commit message\""
    exit 1
fi

echo "🚀 Starting deployment process..."

# Step 1: Update cache versions
echo "📦 Step 1: Updating cache bust versions..."
./update-cache-versions.sh

# Step 2: Compile SCSS if needed
echo "🎨 Step 2: Compiling SCSS..."
cd assets/scss
if sass main.scss main.css; then
    echo "✅ SCSS compiled successfully"
else
    echo "❌ SCSS compilation failed"
    exit 1
fi
cd ../..

# Step 3: Git operations
echo "📝 Step 3: Committing changes..."
git add -A
git commit -m "$1"

# Step 4: Optional - Push to repository
read -p "🌐 Push to GitHub? (y/n): " push_choice
if [[ $push_choice == "y" || $push_choice == "Y" ]]; then
    git push origin main
    echo "✅ Pushed to GitHub successfully!"
fi

echo "🎉 Deployment complete!"
echo "📊 New cache version applied to all assets"
echo "🔄 Users will see fresh content immediately"
