from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/compile', methods=['POST'])
def compile_code():
    code = request.form.get('code')
    with open('source_code.java', 'w') as f:
        f.write(code)

    # Replace 'command' with the appropriate compiler command for the language
    result = subprocess.run(['javac source_code.java && java source_code', 'source_code.java'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    return jsonify({
        'stdout': result.stdout.decode('utf-8'),
        'stderr': result.stderr.decode('utf-8')
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

