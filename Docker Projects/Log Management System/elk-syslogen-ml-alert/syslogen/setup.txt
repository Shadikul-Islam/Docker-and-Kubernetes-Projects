sudo apt install rsyslog -y

python3 send_logs.py

docker logs -f logstash