import flask
import sys

from functools import wraps
from flask import Flask, render_template, request, redirect, url_for, session

from rotas.keyboard import keyboard_bp
from rotas.scanner import scanner_bp


app = Flask(__name__)
app.register_blueprint(keyboard_bp, url_prefix='/keyboard')
app.register_blueprint(scanner_bp, url_prefix='/scanner') 

@app.route('/')
def index():
    return render_template('validar.html')

@app.route("/static/assets/js/script.js")
def GlobalScript():
    return app.send_static_file("assets/js/script.js")

@app.route("/static/libs/jquery.js")
def jquery():
    return app.send_static_file("libs/jquery.js")

@app.route("/static/libs/drop-zone.js")
def drop_zone():
    return app.send_static_file("libs/drop-zone.js")

if __name__ == '__main__':
    app.run(debug=True, host=sys.argv[1], port=sys.argv[2], threaded=sys.argv[2])
