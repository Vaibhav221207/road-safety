from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)
DATA_PATH = os.path.join('data', 'sample_data.json')


def load_data():
    with open(DATA_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)


@app.route('/')
def index():
    data = load_data()
    return render_template('index.html', data=data)


@app.route('/api/data')
def api_data():
    return jsonify(load_data())


if __name__ == '__main__':
    app.run(debug=True)
