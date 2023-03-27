from flask import Flask, jsonify
import requests
import hashlib

app = Flask(__name__)

url = "http://server:3000"
filename = "random.txt"
checksum_header = 'Checksum'

def verify_file_checksum():
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)

        checksum = response.headers.get(checksum_header)
        if checksum:
            with open(filename, 'rb') as f:
                file_data = f.read()
            hash_object = hashlib.sha256(file_data)
            file_checksum = hash_object.hexdigest()

            if file_checksum == checksum:
                return "Checksum verification succeeded"
            else:
                return "Checksum verification failed"
        else:
            return "Error: Checksum header not found in response"
    else:
        return f"Error: {response.status_code}"

@app.route('/')
def index():
    verification_status = verify_file_checksum()
    return jsonify({"verification_status": verification_status})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
