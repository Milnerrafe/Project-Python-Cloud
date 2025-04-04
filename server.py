from flask import Flask, render_template, redirect, url_for, request, send_from_directory, render_template_string
import subprocess
import random
import string
import uuid
from server_db import make, read, right, list


def listcomponenthtml(server_id):

    sid = int(server_id)

    dbresponse = read.serverdb(sid)

    if dbresponse:
        status, name, config = dbresponse
    else:
        status = "db error"
        name = "db error"
        config = "db error"
        print(f"db error, server id {server_id}, sid {sid}.")

    link = ""

    f_name = name
    action = link

    if status == "true":
        f_status_color = "#04B101"
        f_status_text = "Online"
    else:
        f_status_color = "#B10004"
        f_status_text = "offline"


    with open('templates/listcomponent.html', 'r') as file:
        fstring_content = file.read()

    # Use eval to format the F-string dynamically
    formatted_string = eval(f"f'''{fstring_content}'''")

    html = formatted_string

    return(html)


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/list', methods=['POST','GET'])
def list_flask():
    server_ids = list.serverdb()
    return render_template('list.html', server_ids=server_ids, listcomponenthtml=listcomponenthtml)



@app.route('/listcomponent/<server_id>', methods=['POST','GET'])
def listcomponent(server_id):
    return listcomponenthtml(server_id)


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
