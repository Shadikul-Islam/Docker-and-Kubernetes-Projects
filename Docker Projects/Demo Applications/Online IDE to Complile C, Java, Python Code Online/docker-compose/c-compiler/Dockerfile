FROM python:3.8-slim

RUN apt-get update && \
    apt-get install -y build-essential openjdk-11-jdk-headless && \
    apt-get clean

COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt

COPY app.py /app/app.py
ENTRYPOINT [ "python", "app.py" ]

