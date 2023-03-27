#!/bin/bash
docker volume create clientvol
docker build -t client-image .
docker run -d --name client --network my-network -v clientvol:/clientdata -p 5000:5000 client-image
