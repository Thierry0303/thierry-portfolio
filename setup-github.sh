#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Portfolio GitHub Setup Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${YELLOW}Git is not installed. Please install git first.${NC}"
    exit 1
fi

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Create repo name
REPO_NAME="thierry-portfolio"
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo ""
echo -e "${BLUE}Setting up repository:${NC}"
echo "Username: $GITHUB_USERNAME"
echo "Repository: $REPO_NAME"
echo "URL: $REPO_URL"
echo ""

# Initialize git
echo -e "${YELLOW}Initializing git repository...${NC}"
git init

# Set user config (if not already set)
if [ -z "$(git config user.name)" ]; then
    read -p "Enter your Git name: " GIT_NAME
    git config user.name "$GIT_NAME"
fi

if [ -z "$(git config user.email)" ]; then
    read -p "Enter your Git email: " GIT_EMAIL
    git config user.email "$GIT_EMAIL"
fi

# Add all files
echo -e "${YELLOW}Adding files to git...${NC}"
git add .

# Create initial commit
echo -e "${YELLOW}Creating initial commit...${NC}"
git commit -m "Initial commit: Professional animated portfolio with React, Vite, Framer Motion"

# Set main branch
git branch -M main

# Add remote
echo -e "${YELLOW}Adding remote repository...${NC}"
git remote add origin "$REPO_URL"

# Instructions
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Setup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to ${BLUE}https://github.com/new${NC}"
echo "   - Repository name: ${YELLOW}${REPO_NAME}${NC}"
echo "   - Make it ${YELLOW}PUBLIC${NC}"
echo "   - Click ${YELLOW}Create repository${NC}"
echo ""
echo "2. Push to GitHub:"
echo -e "   ${YELLOW}git push -u origin main${NC}"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to ${BLUE}https://vercel.com${NC}"
echo "   - Sign up/Login with GitHub"
echo "   - Click ${YELLOW}New Project${NC}"
echo "   - Select ${YELLOW}${REPO_NAME}${NC}"
echo "   - Click ${YELLOW}Deploy${NC}"
echo ""
echo -e "${GREEN}That's it! Your portfolio will be live in 2-3 minutes!${NC}"
echo ""

