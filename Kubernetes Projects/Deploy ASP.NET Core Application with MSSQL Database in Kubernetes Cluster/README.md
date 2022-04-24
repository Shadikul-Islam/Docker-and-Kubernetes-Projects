## <p align=left>Deploy ASP.NET Core Application with Microsoft SQL Server Database in Kubernetes Cluster<br> <br> </p>
| **SL** | **Topic** |
| --- | --- |
| 01 | [Introduction](#01) |
| 02 | [Prepare a Deployment YAML File](#02) |
| 03 | [Prepare a Nodeport YAML File](#03) |
| 04 | [Prepare a Ingress YAML File](#04) |
| 05 | [Network Connection Within the Cluster](#05) |

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Introduction</a> 
We will Deploy ASP.NET Core Application with Microsoft SQL Server Database in Kubernetes Cluster. We have a project that we already dockerized and upload the images into docker hub. We will use Minikube to implement this Kubernetes cluster. You can read this documentation to know details: [How to Install/Setup Kubernetes Environment in Linux Virtual Machine](https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/tree/master/Kubernetes%20Projects/How%20to%20Install%20Kubernetes%20in%20Linux%20VM#readme)

Aslo you can check this project for details: [How to Dockerize ASP.NET Core Application with MSSQL Server](https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/tree/master/Docker%20Projects/Dockerize%20ASP.NET%20Core%20Application%20with%20MSSQL%20Server#readme). 

So, we have the necessery image to add them in Kubernetes cluster. Here we have to understand a very important things that is **Database Connection String** of the **Source Code** during the time of dockerization of the project. When you dockerized your application you have to make sure you change the following things of the source code:

**Data Source:** **It will be the VM IP address of the Nodes.**__
**Port:** **It will be Nodeport IP that you will defined on Manifest. We will discuss it below in details.**__
**Database Name:** **Set your database name what you want.**__
**User ID:** **sa**__
**Password:** **AnyStrongPassword**__

I am assuming that you dockerized your application successfully. Let's start to add them in kubernetes cluster.

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Prepare a Deployment YAML File</a> 
First, we will prepare a deployment manifest to create pods. We need to create two pods, first one is for application and second one is for database. This will be the deployment.yml file:
````
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dotnetapp
spec:
  selector:
    matchLabels:
      name: myapp
  replicas: 1
  template:
    metadata:
      labels:
        name: myapp
    spec:
      containers:
      - name: dotnetappcon
        image: shadikul/dot-net-core-app:v2
        resources:
        ports:
        - containerPort: 80
      - name: db
        image: shadikul/dot-net-core-db:v1
        resources:
        ports:
        - containerPort: 1433
````

You can see that we defined one replica for each pod. We have given a selector name myapp. We have created two pods. Application pod name is: 






