from flask import Flask
from prometheus_flask_exporter import PrometheusMetrics
from storage.bucket import bucket_blueprint

app = Flask(__name__, static_url_path="", static_folder="../static")
metrics = PrometheusMetrics(app)
app.config.from_object(__name__)
app.register_blueprint(bucket_blueprint, url_prefix="/api")

@app.route('/storage_api')
def my_route():
    metrics.counter('my_route_requests', 'Number of requests to my route').inc()

@app.route('/metrics')
def metrics():
    return metrics.export()

