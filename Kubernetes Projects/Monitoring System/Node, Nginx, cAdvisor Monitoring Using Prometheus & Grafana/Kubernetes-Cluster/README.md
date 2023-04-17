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

