FROM python:3.9-slim-buster
WORKDIR /app
COPY . .
RUN apt-get update
RUN apt-get install python3-pip -y
RUN pip3 install prometheus-flask-exporter
RUN pip3 install -e .
RUN pip3 install -e .[dev]
RUN pip3 install gunicorn
RUN pytest storage/test.py
EXPOSE 5000
CMD ["gunicorn", "--workers=4", "--bind=0.0.0.0:5000", "app:app", "--prometheus-addr=0.0.0.0:8000"]
