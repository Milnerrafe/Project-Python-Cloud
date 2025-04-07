from flask import Flask, render_template, redirect, url_for, request, send_from_directory, render_template_string
import subprocess
import random
import string
import uuid
from server_db import make, read, right, list
from components import listcomponenthtml, serverpagecomponenthtml


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', htmxgoesto="list")

@app.route('/list', methods=['POST','GET'])
def list_flask():
    server_ids = list.serverdb()
    return render_template('list.html', server_ids=server_ids, listcomponenthtml=listcomponenthtml)



@app.route('/listcomponent/<server_id>', methods=['POST'])
def listcomponent(server_id):
    return listcomponenthtml(server_id)


@app.route('/serverpage/<server_id>', methods=['POST','GET'])
def serverpage(server_id):
    if request.method == 'GET':
        return 'This is a GET response'
    elif request.method == 'POST':
        return 'This is a POST response'


@app.route('/htmx.js')
def get_htmx():
    return send_from_directory('templates', 'htmx.js')

@app.route('/jquery.js')
def get_jquery():
    return send_from_directory('templates', 'jquery.js')


@app.route('/index.js')
def get_js():
    return send_from_directory('templates', 'index.js')


@app.route('/tailwind.js')
def get_tailwind():
    return send_from_directory('templates', 'tailwind.js')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)
