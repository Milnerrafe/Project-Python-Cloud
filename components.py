from readorm import read, list
from rightorm import right, make

def serverpagecomponenthtml(server_id):

    with open('templates/serverpagecomponent.html', 'r') as file:
        fstring_content = file.read()

    # Use eval to format the F-string dynamically
    formatted_string = eval(f"f'''{fstring_content}'''")

    html = formatted_string

    return(html)



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
