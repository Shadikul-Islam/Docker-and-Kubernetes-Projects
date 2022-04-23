## <p align=left>How to Setup Kubernetes Environment in Linux Virtual Machine<br> <br> </p>
| **SL** | **Topic** |
| --- | --- |
| 01 | [Prerequisite](#01) |
| 02 | [One master Node and Multiple Worker Node Setup <br>- Master Node Configuration <br>- Worker Nodes Configuration](#02) |
| 03 | [Master and Worker in the Same VM Setup<br> - Minikkube Configuration](#03) |

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Prerequisite</a> 
Today we will setup the Kubernetes environment in the Linux VM. We will use Ubuntu VM. We will seutp k8s in two ways. One way is **One Master Node VM** and **Multiple Worker Nodes VM** and the second way is **Master and Worker in the Same VM**. 

**In the first way**, we will need one VM for the master node and atleast two VM for the worker node. Specification of the master node VM will be at least RAM: 4 GB and CPU: 2 core and any specification of the VM can be run worker node.

**In the second way**, we need just one VM causes the master and the worker will be in the same node. Specification of this VM will be: At least RAM: 4 GB and CPU: 2 core.

Let's do it...

### <a name="02">:diamond_shape_with_a_dot_inside: &nbsp;One master Node and Multiple Worker Node Setup</a> 
I have created three VM one for master node and another two for worker node in Azure. You can see in the screenshot.
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/How%20to%20Install%20Kubernetes%20in%20Linux%20VM/Images/Image-1.png" alt="VM List"> <br><br>

### Master Node Configuration

I am doing ssh on the **Master VM** and start to configure it. Now I am inside the Master VM. I am using putty. Run this following command one by one from terminal.
````Bash
# I am giving the root access
sudo su

# Update all of the packages
apt-get update

# Install the transport-https
apt-get install apt-transport-https

# Install docker
apt install docker.io -y

# Start docker and Enable to automatic start docker after VM start
systemctl start docker
systemctl enable docker

# Check the version of the docker
docker --version

# Check the status of the docker. You should see it as Active (Running) status
systemctl status docker
````
After running all of the commands you should see like below image on the putty for the last two commands:
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/How%20to%20Install%20Kubernetes%20in%20Linux%20VM/Images/Image-2.png" alt="Commands"> <br><br>

Now we will start to install Kubernetes and its necessary component.
````Bash
# Download GPG Key to connect nodes with master
sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add

# Create a file
nano /etc/apt/sources.list.d/kubernetes.list

# Put this text into the file
deb http://apt.kubernetes.io/ kubernetes-xenial main

# Check the file the text was successfully saved or not
cat /etc/apt/sources.list.d/kubernetes.list

# Again update all
apt-get update

# Install kubelet, kubeadm, kubectl
apt-get install -qy kubelet kubectl kubeadm

# Hold kubelet, kubeadm, kubectl for a moment
apt-mark hold kubelet kubeadm kubectl

# Add new daemon config file into docker (Copy and paste the full text below)
path="$PWD" && cd /etc/docker && cat <<EOF | sudo tee /etc/docker/daemon.json
{
"exec-opts": ["native.cgroupdriver=systemd"],
"log-driver": "json-file",
"log-opts": {
"max-size": "100m"
},
"storage-driver": "overlay2"
}
EOF
cd $path

# Reload the daemon
systemctl daemon-reload

# Restart Docker 
systemctl restart docker
````

After successfully running those commands now we need to run some more commands in the Master Node VM. **Remember that,** these following commands will be run just in the **Master node VM only.**

````Bash
# Initialize the kubeadm in the master node
kubeadm init
````
After running kubeadm init command you will get some text like the following in the terminal:
````
kubeadm join 10.2.0.6:6443 --token gvnywi.tj5w7bgv3hxa2ha9 \
        --discovery-token-ca-cert-hash sha256:5466957f48cba6106ada1516179b82a620d3dc39b7b5a566aeb608404c83df9d
````

just keep a copy of that part in notepad for further use. It will be used to connect to the worker node when we configure those.

Now run the following command on the **Master Node VM Terminal**.
````
# Create a directory named **.kube**
mkdir -p $HOME/.kube

# Copy config files into that folder
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config

# Change the ownership of the file
chown $(id -u):$(id -g) $HOME/.kube/config

# Create the ClusteRrole and ClusterRoleBinding
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# Again create the ClusteRrole and ClusterRoleBinding
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/k8s-manifests/kube-flannel-rbac.yml
````

### Worker Nodes Configuration

Now I am doing ````ssh```` on the **Worker Node VM**. We have two Worker Node. So we will make an ssh connection in both VM and run all commands at a time on two VM. You can do it on one VM and then another VM. This is your choice. Now I am inside the two Worker Node VM. I am using putty. Run the following commands one by one from the terminal for both VM.

**Run this command for your all worker node VM**

````Bash
# I am giving the root access
sudo su

# Update all of the packages
apt-get update

# Install the transport-https
apt-get install apt-transport-https

# Install docker
apt install docker.io -y

# Start docker and Enable to automatic start docker after VM start
systemctl start docker
systemctl enable docker

# Check the version of the docker
docker --version

# Check the status of the docker. You should see it as Active (Running) status
systemctl status docker
````
After running all of the commands you should see like below image on the putty for the last two commands:
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/How%20to%20Install%20Kubernetes%20in%20Linux%20VM/Images/Image-3.png" alt="Commands"> <br><br>

Now we will start to install Kubernetes and its necessary component.
````Bash
# Download GPG Key to connect nodes with master
sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add

# Create a file
nano /etc/apt/sources.list.d/kubernetes.list

# Put this text into the file
deb http://apt.kubernetes.io/ kubernetes-xenial main

# Check the file the text was successfully saved or not
cat /etc/apt/sources.list.d/kubernetes.list

# Again update all
apt-get update

# Install kubelet, kubeadm, kubectl
apt-get install -qy kubelet kubectl kubeadm

# Hold kubelet, kubeadm, kubectl for a moment
apt-mark hold kubelet kubeadm kubectl

# Add new daemon config file into docker (Copy and paste the full text below)
path="$PWD" && cd /etc/docker && cat <<EOF | sudo tee /etc/docker/daemon.json
{
"exec-opts": ["native.cgroupdriver=systemd"],
"log-driver": "json-file",
"log-opts": {
"max-size": "100m"
},
"storage-driver": "overlay2"
}
EOF
cd $path

# Reload the daemon
systemctl daemon-reload

# Restart Docker 
systemctl restart docker
````

**Did you remember?** We were told to copy a text in notepad which will be needed during the time of worker node configuration. Yes! now we use that text to connect this worker node with that master node.

After running all of the above commands successfully, now run this command in all of your worker node VM. Since we have two worker nodes so we need to run that command on both VMs that we copied from notepad. Command was like this.** Don't use this following command. Use yours!**
````Bash
kubeadm join 10.2.0.6:6443 --token gvnywi.tj5w7bgv3hxa2ha9 \
        --discovery-token-ca-cert-hash sha256:5466957f48cba6106ada1516179b82a620d3dc39b7b5a566aeb608404c83df9d
````

Now our two worker nodes are connected with the master node successfully.

**Master Node VM's Terminal:** In the master node VM terminal run this command ````kubectl get nodes````. You will see the list of the nodes.
<br> <br> <img src= "https://github.com/Shadikul-Islam/Docker-and-Kubernetes-Projects/blob/master/Kubernetes%20Projects/How%20to%20Install%20Kubernetes%20in%20Linux%20VM/Images/Image-4.png" alt="Nodes list of the k8s cluster"> <br><br>

You have successfully configured One Master Node and Two Worker Nodes in the Kubernetes Cluster.

Now it's time to focus on the second way of the Kubernetes setup.

### <a name="03">:diamond_shape_with_a_dot_inside: &nbsp;Master and Worker in the Same VM Setup</a> 
