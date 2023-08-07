from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import Flask, request
import json
import mysql.connector

conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='Arc@mysql018',
            database='poker'
        )

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

@app.route('/decision', methods=['POST'])
def add_decisions():
    print("in decision")
    try:
        id = request.get_json()
        cursor = conn.cursor()
        print(id['table_id'])
        print(type(id))
        query = "SELECT * FROM poker_table WHERE table_id = %s"
        cursor.execute(query, id)

        # Commit the changes and close the cursor and connection
        conn.commit()
        cursor.close()
        conn.close()

        return 'JSON object feteched successfully'
    except Exception as e:
        return str(e)

@app.route('/dev/api/v2/preflop_post', methods=['POST'])
def insert_json():
    print("In insert")
    try:
        # Get the JSON object from the request
        json_data = request.get_json()
        #print(json_data)

        print(type(json_data['position']))
        print(type(json_data['player_type']))
        cursor = conn.cursor()
        # Insert the JSON object into the database
        query = "INSERT INTO pre_flop_decision_table (position,player_type,preflop_table) VALUES (%s,%s,%s)"
        values = ((json_data['preflop_table']),)
        print(type(json_data['preflop_table']))
        cursor.execute(query, (json_data['position'],json_data['player_type'],values))

        # query = "INSERT INTO poker_table (data) VALUES (%s)"
        # values = (json.dumps(json_data)),
        # cursor.execute(query, values)

        # Commit the changes and close the cursor and connection
        conn.commit()
        cursor.close()
        conn.close()

        return 'JSON object inserted successfully'
    except Exception as e:
        return str(e)
