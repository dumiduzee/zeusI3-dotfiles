#!/bin/bash

REPO_URL="https://github.com/dumiduzee/zeusI3-dotfiles.git"
INSTALL_DIR="$HOME/dotfiles"

echo "Updating system and installing essential packages..."
sudo pacman -Syu --noconfirm
sudo pacman -S --needed --noconfirm git base-devel

if ! command -v yay &> /dev/null; then
    echo "Installing yay (AUR helper)..."
    git clone https://aur.archlinux.org/yay.git ~/yay
    cd ~/yay
    makepkg -si --noconfirm
    cd ..
    rm -rf ~/yay
fi

echo "Cloning dotfiles repository from GitHub..."
git clone $REPO_URL $INSTALL_DIR || { echo "Failed to clone repository. Exiting."; exit 1; }

echo "Installing all applications and dependencies with yay..."
yay -S --needed --noconfirm - < "$INSTALL_DIR/full_installed_packages.txt"

echo "Copying dotfiles to the home directory..."

cp -rf "$INSTALL_DIR/.bashrc" "$HOME/.bashrc"
cp -rf "$INSTALL_DIR/.vimrc" "$HOME/.vimrc"
cp -rf "$INSTALL_DIR/.xprofile" "$HOME/.xprofile"

echo "Copying .config directory files..."
cp -rf "$INSTALL_DIR/.config/"* "$HOME/.config/"

echo "Setup complete! All applications and dotfiles have been installed and copied."
