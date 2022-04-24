## <p align=left>Deploy ASP.NET Core Application with Microsoft SQL Server Database in Kubernetes Cluster<br> <br> </p>
| **SL** | **Topic** |
| --- | --- |
| 01 | [Introduction](#01) |
| 02 | [Prepare a Deployment YAML File](#02) |
| 03 | [Prepare a NodePort YAML File](#03) |
| 04 | [Prepare a Ingress YAML File](#04) |
| 05 | [Network Connection Within the Cluster](#05) |

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Introduction</a> 
We will Deploy ASP.NET Core Application with Microsoft SQL Server Database in Kubernetes Cluster. We have a project that we already dockerized and upload the images into docker hub. We will use Minikube to implement this Kubernetes cluster. You can read this documentation to know details: [How to Install/Setup Kubernetes Environment in Linux Virtual Machine](https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/tree/master/Kubernetes%20Projects/How%20to%20Install%20Kubernetes%20in%20Linux%20VM#readme)

Aslo you can check this project for details: [How to Dockerize ASP.NET Core Application with MSSQL Server](https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/tree/master/Docker%20Projects/Dockerize%20ASP.NET%20Core%20Application%20with%20MSSQL%20Server#readme). 

So, we have the necessery image to add them in Kubernetes cluster. Here we have to understand a very important things that is **Database Connection String** of the **Source Code** during the time of dockerization of the project. When you dockerized your application you have to make sure you change the following things of the source code:

**Data Source:** **It will be the VM IP address of the Nodes. (20.85.228.101,30001;)**__
**Port:** **It will be Nodeport IP that you will defined on Manifest. We will discuss it below in details.**__
**Database Name:** **Set your database name what you want.**__
**User ID:** **sa**__
**Password:** **AnyStrongPassword**__

I am assuming that you dockerized your application successfully. Let's start to add them in kubernetes cluster.

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Prepare a Deployment YAML File</a> 
First, we will prepare a deployment manifest to create pods. We need to create two pods, first one is for application and second one is for database. 

**Deployment-App.yml:**

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
````

**Deployment-DB.yml:**

````
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dotnetdb
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
      - name: db
        image: shadikul/dot-net-core-db:v1
        resources:
        ports:
        - containerPort: 1433
````

You can see that we defined one replica for each pod. We have given a selector name myapp. We have created two pods. In **Deployment-App.yml**, application pod name is: **dotnetapp** and in **Deployment-DB.yml**, database pod name is: **dotnetdb**. Our deployment file is completed.

Now run this command to apply this manifest into Kubernetes: ````kubectl apply -f Deployment-App.yml````.

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Prepare a NodePort YAML File</a> 
Now our second step is to prepare a Nodeport manifest file. Nodeport will create network connection between pods and give an advantage to browse it from internet using its defined port.

**NodePort.yml:**
````
apiVersion: v1
kind: Service
metadata:
  name: dotnet-nodeport
spec:
  selector:
    name: myapp
  type: NodePort
  ports:
  - name: http
    port: 80
    targetPort: 80
    nodePort: 30000
    protocol: TCP
  - name: db
    protocol: TCP
    port: 1433
    targetPort: 1433
    nodePort: 30001
````

You can see that the NodePort name is **dotnet-nodeport**. You can also notice that we have given the selector name **myapp** which we defined on the deployment manifest too. This is the way to know each other of deployment and nodeport.

Now run this command to apply this manifest into Kubernetes: ````kubectl apply -f NodePort.yml.yml````.

You can see your application from browser. Open chrome or any browser 




