######################################################

 One Master Node VM and Multiple Worker Node VM Setup

######################################################
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

# Download GPG Key to connect node with master
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add

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

# Initialize the kubeadm in the master node
kubeadm init

kubeadm join 10.2.0.6:6443 --token gvnywi.tj5w7bgv3hxa2ha9 \
        --discovery-token-ca-cert-hash sha256:5466957f48cba6106ada1516179b82a620d3dc39b7b5a566aeb608404c83df9d

# Create a directory named .kube
mkdir -p $HOME/.kube

# Copy config files into that folder
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config

# Change the ownership of the file
chown $(id -u):$(id -g) $HOME/.kube/config

# Create the ClusteRrole and ClusterRoleBinding
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# Again create the ClusteRrole and ClusterRoleBinding
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/k8s-manifests/kube-flannel-rbac.yml

# Check all the Nodes
kubectl get nodes

#############################################################

 Master and Worker in the Same VM Setup 

#############################################################
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

# Download and Install kubectl
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x ./kubectl && mv ./kubectl /usr/local/bin/kubectl

# Check the version of kubectl
kubectl version

# Install Minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && mv minikube /usr/local/bin/

# Check the version of Minikube
minikube version

# To run minikube properly install Conntrack
apt install conntrack

# Check the version of conntrack
conntrack --version

# Start Minikube for the first time only after the installation
minikube start --vm-driver=none

# Minikube status
minikube status

# Check the list of the Nodes
kubectl get nodes

#########################################################


