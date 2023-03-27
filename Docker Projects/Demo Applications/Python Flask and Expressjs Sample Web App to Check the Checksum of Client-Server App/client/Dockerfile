FROM python:3.9

RUN mkdir /app
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --upgrade jinja2

COPY client.py .
EXPOSE 5000
CMD ["python", "client.py"]