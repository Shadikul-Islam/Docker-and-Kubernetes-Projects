FROM grafana/grafana:latest
USER root
RUN grafana-cli plugins install redis-datasource
RUN apk update
RUN apk add vim
