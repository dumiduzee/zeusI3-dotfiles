#!/bin/bash

# Directory containing your wallpapers
WALLPAPER_DIR="$HOME/.config/wallpaper/"

# Loop to change wallpaper every 5 seconds
while true; do
  # Select a random image from the directory
  feh --bg-scale "$(find "$WALLPAPER_DIR" -type f | shuf -n 1)"
  
  # Wait for 5 seconds before changing again
  sleep 60
done
