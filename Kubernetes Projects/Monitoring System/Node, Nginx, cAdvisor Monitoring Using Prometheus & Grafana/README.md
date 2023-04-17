## Setup All Necessery Configuration Files <br><br>

### Prometheus

- **Apply:** ```kubectl apply -f prometheus-conf.yml,prometheus-deploy.yml,prometheus-svc.yml```

- **Delete:** ```kubectl delete -f prometheus-conf.yml,prometheus-deploy.yml,prometheus-svc.yml```

### Grafana

- **Apply:** ```kubectl apply -f grafana-deploy.yml,grafana-svc.yml```

- **Delete:** ```kubectl delete -f grafana-deploy.yml,grafana-svc.yml```

### Node Exporter ##

- **Apply:** ```kubectl apply -f node-exporter-deploy.yml,node-exporter-svc.yml```

- **Delete:** ```kubectl delete -f node-exporter-deploy.yml,node-exporter-svc.yml```

### Nginx and Nginx Exporter 

- **Apply:** ```kubectl apply -f nginx-conf.yml,nginx-deploy.yml,nginx-exporter-deploy.yml,nginx-exporter-svc.yml,nginx-svc.yml```

- **Delete:** ```kubectl delete -f nginx-conf.yml,nginx-deploy.yml,nginx-exporter-deploy.yml,nginx-exporter-svc.yml,nginx-svc.yml```

### Cadvisor 

- **Apply:** ```kubectl apply -f cadvisor-deploy.yml,cadvisor-svc.yml```

- **Delete:** ```kubectl delete -f cadvisor-deploy.yml,cadvisor-svc.yml```
<br><br><br>

## Setup Nginx-Reverse-Proxy to Access Kubernetes Cluster from Internet<br><br>

1. **Install Nginx:** ```sudo apt update && sudo apt install nginx```

2. **Create Nginx Configuration:** ```vim /etc/nginx/sites-available/reverse-proxy```
```
server {
  listen 80;
  location / {
    proxy_pass http://MINIKUBE_IP:30001; # Replace MINIKUBE_IP with your Minikube node IP
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```
3. **Copy Minikube IP:** ```minikube ip```

4. **Edit Nginx Configuration:** ```vim /etc/nginx/sites-available/reverse-proxy``` --> Paste the Minikube IP and Grafana Port

5. **Create a symbolic link:** ```sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/```

6. **Remove the default configuration:** ```sudo rm /etc/nginx/sites-enabled/default```

7. **Test the Nginx configuration:** ```sudo nginx -t```

8. **Restart Nginx:** ```sudo systemctl restart nginx```

9. **Access Grafana From Kubernetes Cluster:** http://minikube-vm-ip

10. **Login Grafana:** ```Username: admin & Password: admin```

11. **Add Prometheus Datasource:** ```URL: http://prometheus-svc``` --> Click Save and Test

12. **Import Grafana Dashboard:** ```159, 12767, 13946, 315```


**Now we can see the dashboards**
