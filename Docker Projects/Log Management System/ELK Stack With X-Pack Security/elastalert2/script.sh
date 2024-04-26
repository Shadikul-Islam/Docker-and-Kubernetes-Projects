#!/bin/bash

# Update package lists
sudo apt update
sleep 5

# Check if update succeeded
if [ $? -ne 0 ]; then
    echo "Error: Failed to update package lists."
    exit 1
fi

# Install necessary dependencies
sudo apt install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget
sleep 5

# Check if installation succeeded
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies."
    exit 1
fi

# Download Python 3.12 source code
wget https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tar.xz
sleep 5

# Check if download succeeded
if [ $? -ne 0 ]; then
    echo "Error: Failed to download Python source code."
    exit 1
fi

# Extract the downloaded archive
tar -xf Python-3.12.0.tar.xz
sleep 5

# Change directory to Python source
cd Python-3.12.0
sleep 5

# Configure Python build with optimizations
./configure --enable-optimizations
sleep 5

# Compile Python source
make -j$(nproc)
sleep 5

# Install Python as an alternate version
sudo make altinstall
sleep 5

# Check if installation succeeded
if [ $? -ne 0 ]; then
    echo "Error: Failed to install Python."
    exit 1
fi

# Download get-pip.py script
wget https://bootstrap.pypa.io/get-pip.py
sleep 5

# Check if download succeeded
if [ $? -ne 0 ]; then
    echo "Error: Failed to download get-pip.py script."
    exit 1
fi

# Install pip for Python 3.12
sudo python3.12 get-pip.py
sleep 5

# Check if installation succeeded
if [ $? -ne 0 ]; then
    echo "Error: Failed to install pip."
    exit 1
fi

# Display Python version
echo "Python version:"
python3.12 --version
sleep 5

# Display pip version
echo "pip version:"
pip3.12 --version
sleep 5

# Display OpenSSL version used by Python
echo "OpenSSL version used by Python:"
python3.12 -c "import ssl; print(ssl.OPENSSL_VERSION)"
sleep 5

echo "Installation completed successfully."
