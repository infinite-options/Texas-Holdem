from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/post_strategy', methods=['POST'])
def post_strategy():
    strategy = request.get_json()
    print("\n\n------------------------New Strategy Received------------------------")
    print(strategy)
    print("---------------------------------------------------------------------\n\n")
    return jsonify({'status': 'success'}), 200
