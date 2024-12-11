from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

# Temporary storage for votes (in production, use a database)
votes = {}

# JDoodle API settings
JDoodle_API = "https://api.jdoodle.com/v1/execute"
CLIENT_ID = os.getenv('JDOODLE_CLIENT_ID', "94a1c7ee3324dd95d353b5fdb3453bd5")
CLIENT_SECRET = os.getenv('JDOODLE_CLIENT_SECRET', "e77619596c82c688cd3afd27dd79bd2d7790efb74a2c9d49697409415fd95e9a")

@app.route('/api/execute', methods=['POST'])
def execute_code():
    try:
        data = request.json
        payload = {
            "script": data.get('script'),
            "language": data.get('language'),
            "versionIndex": data.get('versionIndex', "0"),
            "clientId": CLIENT_ID,
            "clientSecret": CLIENT_SECRET
        }
        response = requests.post(JDoodle_API, json=payload)
        return jsonify(response.json())

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Add new routes for voting
@app.route('/api/vote/submit', methods=['POST'])
def submit_vote():
    try:
        data = request.json
        submission_id = data.get('submissionId')
        voter_id = data.get('voterId')
        
        if submission_id not in votes:
            votes[submission_id] = {'count': 0, 'voters': set()}
            
        # Check if user hasn't voted before
        if voter_id not in votes[submission_id]['voters']:
            votes[submission_id]['count'] += 1
            votes[submission_id]['voters'].add(voter_id)
            return jsonify({"message": "Vote recorded successfully", "votes": votes[submission_id]['count']})
        else:
            return jsonify({"error": "User has already voted"}), 400
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/vote/count/<submission_id>', methods=['GET'])
def get_vote_count(submission_id):
    if submission_id in votes:
        return jsonify({"votes": votes[submission_id]['count']})
    return jsonify({"votes": 0})

# React 앱을 처리하지 않고 기본 경로에 대한 요청은 무시
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return jsonify({"message": "Flask API Server"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
