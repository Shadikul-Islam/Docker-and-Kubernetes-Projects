## <p align=left>Deploy ASP.NET Core Application with Microsoft SQL Server Database in Kubernetes Cluster<br> <br> </p>
| **SL** | **Topic** |
| --- | --- |
| 01 | [Introduction](#01) |
| 02 | [Prepare a Deployment YAML File](#02) |
| 03 | [Prepare a NodePort YAML File](#03) |
| 04 | [Prepare a Ingress YAML File](#04) |
| 05 | [Prepare Database Pod](#05) |
| 06 | [Network Connection Within the Cluster](#06) |

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

### <a name="02">:diamond_shape_with_a_dot_inside: &nbsp;Prepare a Deployment YAML File</a> 
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
        image: shadikul/dot-net-core-app:v3   #Here eneter your dockerhub image
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
        image: shadikul/dot-net-core-db:v1   #Here eneter your dockerhub image
        resources:
        ports:
        - containerPort: 1433
````

You can see that we defined one replica for each pod. We have given a selector name myapp. We have created two pods. In **Deployment-App.yml**, application pod name is: **dotnetapp** and in **Deployment-DB.yml**, database pod name is: **dotnetdb**. Our deployment file is completed.

Now run this command to apply this manifest into Kubernetes: ````kubectl apply -f Deployment-App.yml````.

### <a name="03">:diamond_shape_with_a_dot_inside: &nbsp;Prepare a NodePort YAML File</a> 
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

Now run this command to apply this manifest into Kubernetes: ````kubectl apply -f NodePort.yml````.

You can see your application from browser. Open chrome or any browser and visit your IP address with Nodeport. In my case my IP address is: 20.127.49.237 and I have defined Nodeport ports: 30000. So my full address will be: http://20.127.49.237:30000/. You see that browser is loading our application successfully.
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-1.png" alt="Application in NodePort"> <br><br>

### <a name="04">:diamond_shape_with_a_dot_inside: &nbsp;Prepare a Ingress YAML File</a> 
In nodeport we can see that our application is loading properly but we had to use a port. Ingress will resovle that issue by running the application default port 80.
We browse our application from anywhere from internet without using any port. If you didn't setup Ingress in your Kubernetes configuration then run this command and setup the Ingress in Kubernetes: ````minikube addons enable ingress````. Now your Ingress service setup is completed.

**Ingress.yml**
````
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: dotnetingress
  labels:
    name: myapp
spec:
  rules:
  - host:
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: dotnet-nodeport
            port:
              number: 80
````
You can see that the Ingress name is **dotnetingress**. You can also notice that we have given the selector name **myapp** which we defined on the deployment and Nodeport manifest too. This is the way to know each other. We gave the service name **dotnet-nodeport** which will communicate with NodePort service.

Now run this command to apply this manifest into Kubernetes: ````kubectl apply -f Ingress.yml````.

Open your browser and visit your IP address without any port you can see your application which is running default port 80. In my case you can see like this:
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-2.png" alt="Application in Ingress"> <br><br>

### <a name="05">:diamond_shape_with_a_dot_inside: &nbsp;Prepare Database Pod</a> 
Run this command ````kubectl get pods`````. It will be shown to pods like below.
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-3.png" alt="Pods"> <br><br>
You can see that we have two pods one is application and other is database. Now it's time to connect the application with database.
Now we need to connect the database pod to **SQL Server Management Studio (SSMS)**. To connect we need to do the following steps:
- Open SSMS:- Press windows key --> Scroll down and click Microsoft SQL Server Tools --> Click Microsoft SQL Server Management Studio
- Provide the Credentials:
  **Server Type:** Database Engine
  
  **Server Name:** IP Address of the server/localhost, Port _(In my case my IP address of the VM is 20.127.49.237, and Port we provided in the NodePort manifest 30001)_
  
  **Authentication:** Select **SQL Server Authentication** from the dropdown
  
  **Login:** sa _(**sa** will be the database Login Username)_
  
  **Password:** rootpa@sw0rdmysql _(We provided this password in the source code during the time of dockerization)_
  
  Your Provided information will look like the below:
  <br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-4.png" alt="DB Credentials"> <br><br>
  Click **Connect**. You will be connected to the database.
  
Now restore the database by following this docs: [Restore the Database On  SQL Server Management Studio (SSMS)](https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/tree/master/Docker%20Projects/Dockerize%20ASP.NET%20Core%20Application%20with%20MSSQL%20Server#07)

After successfully restore the database we need to login to check it works or not. On the application login page provide the **Username: _Sadik_** and **Password: _admin_**. 
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-5.png" alt="Main Page"> <br><br>
These credentials will fetch and check from the database and redirect you to the next page.
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-6.png" alt="Main Page"> <br><br>

This is the main page of this sample application.

### <a name="06">:diamond_shape_with_a_dot_inside: &nbsp;Network Connection Within the Cluster</a> 
Networking is a central part of Kubernetes, but it can be challenging to understand exactly how it is expected to work. There are 4 distinct networking problems to address:

Highly-coupled container-to-container communications: this is solved by Pods and localhost communications.
Container-to-Container communications: Use **localhost**/
Pod-to-Pod communications: Every pod has their own IP. So they communicate each other with the help of IP.
Pod-to-Service communications: this is covered by services. Service mean Nodeport, Load Balancer etc.
External-to-Service communications: this is covered by services. Service mean Ingress.

**Short Description of NodePort:**
A NodePort service is the most primitive way to get external traffic directly to your service. NodePort, as the name implies, opens a specific port on all the Nodes (the VMs), and any traffic that is sent to this port is forwarded to the service.
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-7.png" alt="NodePort"> <br><br>
Basically, a NodePort service has two differences from a normal “ClusterIP” service. First, the type is “NodePort.” There is also an additional port called the nodePort that specifies which port to open on the nodes. If you don’t specify this port, it will pick a random port. Most of the time you should let Kubernetes choose the port. You can only use ports 30000–32767.

**Short Description of Ingress:**
Unlike all the above examples, Ingress is actually NOT a type of service. Instead, it sits in front of multiple services and act as a “smart router” or entrypoint into your cluster. Ingress is the most useful if you want to expose multiple services under the same IP address, and these services all use the same L7 protocol (typically HTTP). 
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/Deploy%20ASP.NET%20Core%20Application%20with%20MSSQL%20Database%20in%20Kubernetes%20Cluster/Images/Image-8.png" alt="NodePort"> <br><br>






