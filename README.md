
# ZeusI3-dotfiles

This repository contains all the configuration files and setup scripts for setting up my Arch Linux environment with i3 window manager, essential applications, and personal dotfiles. The goal is to provide a seamless one-click installation to quickly replicate my environment.


## Screenshots

![Code](https://github.com/dumiduzee/zeusI3-dotfiles/blob/master/screenshots/code.png?raw=true)

![deksktop](https://github.com/dumiduzee/zeusI3-dotfiles/blob/f23f9e173e487c43270e09ef12233e463c081eeb/screenshots/desktop.png)

![fcmanfm](https://github.com/dumiduzee/zeusI3-dotfiles/blob/f23f9e173e487c43270e09ef12233e463c081eeb/screenshots/file.png)

![terminal](https://github.com/dumiduzee/zeusI3-dotfiles/blob/f23f9e173e487c43270e09ef12233e463c081eeb/screenshots/terminal.png)

## 📋 Table of Contents

[Overview](https://linktodocumentation)

[Features](https://linktodocumentation)

[Installation](https://linktodocumentation)

[Troubleshooting and Debugging](https://linktodocumentation)

[Customization](https://linktodocumentation)

[Contributing](https://linktodocumentation)

## Overview

This repository is designed to automate the setup of my customized Arch Linux environment. It includes configurations for commonly used tools, applications, and the i3 window manager, as well as a convenient installation script for deploying all settings and applications quickly.

## Features

- One-click Installation Script: Quickly deploy dotfiles, configurations, and applications with a single command.

- Auto-installs yay: The script will install yay (an AUR helper) if it's not already installed, ensuring AUR packages are handled smoothly.

- Override Existing Configurations: Existing configurations are replaced with those in this repository for a consistent setup.

- Application and Dependency Installation: Installs all applications and dependencies listed in full_installed_packages.txt


## Installation

Prerequisites

An Arch Linux-based distribution with internet access.
One-Click Installation

To install the configuration and applications, simply run the following command in your terminal:

```bash
  curl -sL https://raw.githubusercontent.com/dumiduzee/zeusI3-dotfiles/master/zeusi3dot.sh | bash

```

### This command will:

- Update your system.
- Install yay if it's not already installed.
- Clone this repository to your local system.
- Install all applications and dependencies listed in full_installed_packages.txt.
- Copy all dotfiles and configuration files to their respective locations, overwriting any existing ones.


## Troubleshooting and Debugging
### Common Issues 

1 - Git Clone Failure:

    Error: Failed to clone repository. Exiting.
    Solution: Ensure you have internet access. Check if Git is installed with 



2 - yay Installation Issues:

Error: If yay fails to install or clone, it may be due to missing base-devel packages.
Solution: Ensure base-devel is installed:

```bash
  sudo pacman -S --needed base-devel
```

### Application Installation Failure

- **Error**: `yay -S --needed --noconfirm - < full_installed_packages.txt` fails for certain AUR packages.

- **Solution**: Update `yay` with the following command:

  ```bash
  yay -S <package-name>
    ```

### Permission Issues

1. **Error**: `Permission denied` during installation.
2. **Solution**: Ensure the script is run with sufficient privileges. Precede the command with `sudo` if necessary.

---

### Configuration File Overwrite Warning

- **Info**: This script overwrites existing dotfiles. Back up any important configurations before running the script.

---

### Debugging Tips

1. **Run Script Verbosely**: To see detailed output, you can run the script with the following command:

   ```bash
   bash -x zeusi3dot.sh
    ```


### Customization

#### Adding New Applications

1. Open `full_installed_packages.txt`.
2. Add the name of the application you want to install.
3. Run the installation script to install the new applications.

#### Customizing Dotfiles

1. Modify files in `.config`, `.bashrc`, `.vimrc`, etc., in the repository.
2. After making changes, push them to GitHub to keep your setup updated.








## 👨‍💻 About Me

Hello! I'm an undergraduate Software Engineering student passionate about coding, automation, and open-source projects. This repository is a collection of my personal dotfiles and configuration scripts, created to streamline my development environment on Arch Linux. I’m constantly learning and love to explore new tools and technologies that can enhance productivity and efficiency. 🚀

Feel free to explore, fork, and contribute! 😊


