### Documentation of Step-by-Step Process for this Project

1. Created two folder named **Client** and **Server** 
2. I have used **Express.js** for running **server** application and **Python Flask** for running **client** application.
3. Prepared **Dockerfile** for server and client applications with the necessary package installation process.
4. Prepared two script file named **fileserver.sh** and **fileclient.sh** to run our dockerized project. Within this file, I defined to create a docker volume, Build a docker image and Run a docker container in a specific port.
5. After running successfully both containers the client application will create a random.txt file which we can see in the browser http://ipaddress:3000 and the server application will copy that file and calculate the checksum and show the output as per the calculation. We can see the server application output in the browser http://ipaddress:5000

### Commands to Run this Project
1. ```git clone URLofThisProject```
2. ```cd ProjectDir```
3. ```chmod +x server/fileserver.sh client/fileclient.sh```
4. ```cd server/```
5. ```./fileserver.sh```
6. ```cd ..```
7. ```cd client/```
8. ```./fileclient.sh```
9. ```docker ps```
