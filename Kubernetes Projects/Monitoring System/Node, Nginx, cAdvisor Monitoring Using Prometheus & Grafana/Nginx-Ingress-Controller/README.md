## Setup Nginx-Ingress-Controller to Access Kubernetes Cluster from Internet

1. **Apply:** ```kubectl apply -f Ingress.yml```

2. **Edit Nginx Reverse Proxy Configuration:** ```sudo vim /etc/nginx/sites-available/reverse-proxy``` --> Just put only the Minikube IP without any Port

3. **Restart Nginx Service:** ```sudo systemctl restart nginx```