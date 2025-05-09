#!/bin/bash

echo "🔄 Updating & Upgrading Termux..."
pkg update -y && pkg upgrade -y

echo "📦 Installing Essential Packages..."
pkg install -y termux-api nano git curl wget openssh zip unzip python python-pip nodejs 

echo "⚙️ Installing Extra Tools..."
pkg install -y neofetch htop figlet toilet ncdu 

echo "🔐 Setting up Storage Access..."
termux-setup-storage

echo "✅ Setup Complete! Restart Termux: exit & reopen."
