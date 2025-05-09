from flask import Flask, request, jsonify
import logging

app = Flask(__name__)

# Configure logging
logging.basicConfig(filename='requests.log', level=logging.INFO,
                    format='%(asctime)s %(message)s')

@app.route('/ajax/browser_error_reports/', methods=['POST'])
def handle_post_request():
    data = request.json
    logging.info(f"Received data: {data}")
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)