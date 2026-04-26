# ELK Stack Dockerized Setups

This repository contains multiple Dockerized configurations of the ELK Stack (Elasticsearch, Logstash, Kibana) for different use cases. Each setup is isolated in its own folder to make it easier to experiment, learn, and deploy based on requirements.



## Project Structure

```
.
├── ELK Stack With X-Pack Security/
├── ELK Stack Without X-Pack Security/
├── ELK With TLS/
├── elk-syslogen-ml-alert/
└── README.md
```

Each folder contains its own `docker-compose.yml`, configuration files, and environment-specific setup.



## Overview of Setups

### 1. ELK Without X-Pack

A minimal ELK stack setup without any security features.

**Features:**

* Elasticsearch
* Logstash
* Kibana
* No authentication
* No encryption

**Use Case:**

* Local development
* Learning ELK basics

**Run:**

```bash
docker-compose up -d
```



### 2. ELK With X-Pack Security

This setup enables X-Pack security features, including authentication and role-based access.

**Features:**

* Elasticsearch with security enabled
* Kibana login system
* User roles and permissions
* Password-protected APIs

**Default Credentials:** Defined in the setup script

**Run:** Follow the setup.txt file




### 3. ELK With TLS

Secure communication between ELK components using TLS/SSL.

**Features:**

* HTTPS enabled for Elasticsearch and Kibana
* Certificate-based authentication
* Encrypted internal communication

**Certificates:**

* Generated using Elasticsearch certutil or provided manually

**Run:** Follow the setup.txt file

**Notes:**

* Certificates must be correctly mounted
* Ensure proper DNS or host configuration



### 4. ELK With Syslog + ML Alerting

Advanced setup integrating syslog ingestion and machine learning-based anomaly detection.

**Features:**

* Syslog data ingestion via Logstash
* Elasticsearch ML jobs
* Anomaly detection
* Alerting based on ML results

**Pipeline:**

* Syslog → Logstash → Elasticsearch → ML Job → Alert

**Run:**

```bash
docker-compose up -d
```

**Notes:**

* Requires proper ML license (trial or higher)
* Preconfigured ML jobs may be included



## Prerequisites

* Docker
* Docker Compose
* Minimum 4GB RAM (8GB recommended)
* Open ports: 9200, 5601, 5044 (depending on setup)



## Configuration

Each setup includes:

* `docker-compose.yml`
* `.env` file
* Elasticsearch configs (`elasticsearch.yml`)
* Logstash pipeline configs
* Kibana configs



## Testing

After starting the stack:

* Elasticsearch: [http://localhost:9200](http://localhost:9200)
* Kibana: [http://localhost:5601](http://localhost:5601)

For secured setups:

* Use configured username/password



## Logging & Monitoring

* Logs are accessible via Docker logs:

```bash
docker logs <container_name>
```

* Kibana provides visualization dashboards


## Common Issues

**1. Elasticsearch not starting**

* Check memory limits
* Increase `vm.max_map_count`

```bash
sysctl -w vm.max_map_count=262144
```

**2. Permission issues**

* Ensure correct file ownership

**3. TLS errors**

* Verify certificate paths and validity


## Cleanup

```bash
docker-compose down -v
```


## Notes

* Each setup is independent
* Do not run multiple setups on the same ports simultaneously
* Customize ports if needed

