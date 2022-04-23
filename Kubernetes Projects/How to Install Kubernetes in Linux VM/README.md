## <p align=left>How to Setup Kubernetes Environment in Linux VM<br> <br> </p>
| **SL** | **Topic** |
| --- | --- |
| 01 | [Prerequisite](#01) |
| 02 | [One master Node and Multiple Worker Node Setup](#02) |
| 03 | [Master and Worker in the Same VM Setup](#03) |

### <a name="01">:diamond_shape_with_a_dot_inside: &nbsp;Prerequisite</a> 
Today we will setup the Kubernetes environment in the Linux VM. We will use Ubuntu VM. We will seutp k8s in two ways. One way is **One master Node and Multiple worker Node** and the second way is **Master and Worker in the Same VM**. 

**In the first way**, we will need one VM for the master node and at least two VM for the worker node. Specification of the master node VM will be at least RAM: 4 GB and CPU: 2 core and any specification of the VM can be run worker node.

**In the second way**, we need just one VM causes the master and the worker will be in the same node. Specification of this VM will be: At least RAM: 4 GB and CPU: 2 core.

Let's do it...

### <a name="02">:diamond_shape_with_a_dot_inside: &nbsp;One master Node and Multiple Worker Node Setup</a> 
I have created three VM one for master node and another two for worker node. You can see in the screenshot.
<br> <br> <img src= "Image1" alt="VM List"> <br><br>
I am doing ssh on the Master VM and start to configure it. Now I am inside the Master VM. I am using putty. Run this following command one by one.
````Bash
# I am giving the root access
sudo su

# Updating all of the packages
apt-get update

# Installing the transport-https
apt-get install apt-transport-https

# Installing docker
apt install docker.io -y

# Starting docker and Enabling to automatic start docker after VM start
systemctl start docker
systemctl enable docker

# Checking the version of the docker
docker --version

# Checking the status of the docker. You should see it is Active (Running) status
systemctl status docker
````
After running all of the commands you should see like this on the putty for the last two commands:
<br> <br> <img src= "Image-2" alt="Commands"> <br><br>

Now we will start to install kubernetes and it's necessery component.


### <a name="03">:diamond_shape_with_a_dot_inside: &nbsp;Master and Worker in the Same VM Setup</a> 
