from flask import Flask, render_template, jsonify, request
import pymysql
import db

app = Flask(__name__)

arr = ['shinoda', 'masami']

@app.route("/")
def index():
    return render_template('node_parts.html', title='flask test', arr=arr)

if __name__ == "__main__":
    app.run(debug=True)