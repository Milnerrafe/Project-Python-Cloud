from flask import Flask, render_template, redirect, url_for, request, send_from_directory, render_template_string
import subprocess
import random
import string

def listcomponenthtml(name, status, link):
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


@app.route('/servercom/<name>/<status>/<link>', methods=['POST','GET'])
def flaskservercom(name, status, link):
    return listcomponenthtml(name, status, link)


var1 = int(0)


@app.route('/listcomponent', methods=['POST','GET'])
def listcomponent():
    global var1
    var1 += 1

    name = "test"

    if var1 % 2:
        status = "true"
    else:
        status = "false"

    link = ""

    return listcomponenthtml(name, status, link)


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
