from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/compile', methods=['POST'])
def compile_code():
    code = request.form.get('code')
    with open('source_code.c', 'w') as f:
        f.write(code)

    result = subprocess.run(['gcc', '-o', 'output', 'source_code.c'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if result.returncode != 0:
        return jsonify({
            'stdout': '',
            'stderr': result.stderr.decode('utf-8')
        })

    result = subprocess.run(['./output'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    return jsonify({
        'stdout': result.stdout.decode('utf-8'),
        'stderr': result.stderr.decode('utf-8')
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

