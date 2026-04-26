# Monitoring Stack (Prometheus + Grafana + Exporters)

This repository contains multiple real-world monitoring setups using Prometheus and Grafana, covering different services and architectures. Each setup is organized in its own folder and demonstrates production-style monitoring patterns including metrics collection, visualization, and observability best practices.


## Repository Structure

```
.
├── celestia-monitoring/
├── node-nginx-redis-monitoring/
├── flask-api-monitoring/
├── traefik-postgres-monitoring/
└── README.md
```

Each directory is self-contained with its own Docker Compose configuration, exporters, and dashboards.


## Overview

This repository focuses on:

* Service-level monitoring
* Container-level observability
* Metrics scraping using Prometheus
* Visualization using Grafana
* Exporter-based integrations
* Realistic DevOps monitoring patterns



## 1. Celestia Setup & Monitoring (Prometheus + Grafana + OpenTelemetry)

### Description

Monitoring a Celestia node using Prometheus, Grafana, and OpenTelemetry for distributed observability.

### Components

* Celestia node
* Prometheus
* Grafana
* OpenTelemetry Collector

### Features

* Metrics collection via OpenTelemetry
* Prometheus scraping
* Grafana dashboards for node health
* Observability pipeline (OTel → Prometheus → Grafana)

### Run

```bash
docker-compose up -d
```

### Notes

* Ensure correct endpoint configuration in OpenTelemetry
* Verify metrics exposure from Celestia node



## 2. Node, Nginx, Redis Monitoring

### Description

Comprehensive monitoring of Node.js application, Nginx, and Redis using exporters.

### Components

* Node.js app (instrumented)
* Nginx
* Redis
* Prometheus
* Grafana
* Exporters:

  * Node Exporter
  * Nginx Exporter
  * Redis Exporter

### Features

* Application metrics (request rate, latency)
* System-level metrics (CPU, memory)
* Nginx traffic monitoring
* Redis performance metrics

### Run

```bash
docker-compose up -d
```

### Notes

* Ensure metrics endpoints are exposed (e.g., `/metrics`)
* Validate Prometheus targets in `prometheus.yml`



## 3. Python Flask Storage API Monitoring

### Description

Monitoring a Flask-based storage API with Prometheus instrumentation.

### Components

* Flask API (instrumented with Prometheus client)
* Prometheus
* Grafana

### Features

* Request count
* Request latency
* Error rates
* Custom business metrics

### Run

```bash
docker-compose up -d
```

### Notes

* Flask app exposes `/metrics`
* Use Prometheus Python client for instrumentation



## 4. Traefik & PostgreSQL Monitoring

### Description

Monitoring reverse proxy (Traefik) and PostgreSQL database performance.

### Components

* Traefik
* PostgreSQL
* Prometheus
* Grafana
* Exporters:

  * Traefik metrics endpoint
  * PostgreSQL Exporter

### Features

* HTTP routing metrics
* Database performance metrics
* Query insights
* Connection tracking

### Run

```bash
docker-compose up -d
```

### Notes

* Enable metrics in Traefik config
* Configure PostgreSQL exporter credentials correctly



## Prerequisites

* Docker
* Docker Compose
* Minimum 4GB RAM (8GB recommended)
* Open ports (varies per setup):

  * 9090 (Prometheus)
  * 3000 (Grafana)



## Configuration

Each folder contains:

* `docker-compose.yml`
* `prometheus.yml`
* Exporter configurations
* Grafana provisioning (optional)

Update configs based on your environment.



## Access Services

* Prometheus: [http://localhost:9090](http://localhost:9090)
* Grafana: [http://localhost:3000](http://localhost:3000)

Default Grafana credentials:

Username: ```admin``` and Password: ```admin```



## Dashboards

Grafana dashboards may be:

* Pre-provisioned via JSON
* Imported manually



## Validation

* Check Prometheus targets: `Status → Targets`
* Verify metrics endpoints
* Confirm dashboards show live data



## Common Issues

### 1. Targets Down

* Check container networking
* Verify service names in Prometheus config

### 2. No Metrics in Grafana

* Validate data source configuration
* Check Prometheus scrape interval

### 3. Exporter Not Working

* Ensure correct ports and credentials



## Cleanup

```bash
docker-compose down -v
```



## Best Practices

* Use labels for better metric filtering
* Keep scrape intervals optimized
* Avoid high cardinality metrics
* Secure endpoints in production


