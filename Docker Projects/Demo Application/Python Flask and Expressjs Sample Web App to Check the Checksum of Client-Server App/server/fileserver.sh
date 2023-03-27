#!/bin/bash
docker volume create servervol
docker network create my-network
docker build -t server-image .
docker run -d --name server --network my-network -v servervol:/serverdata -p 3000:3000 server-image
