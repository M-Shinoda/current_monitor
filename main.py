from flask import Flask, render_template, jsonify, request
import os
# import pymysql
# import db

app = Flask(__name__)

arr = ['shinoda', 'masami']

@app.route("/")
def index():
    return render_template('node_parts.html', title='current monitor', arr=arr)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))