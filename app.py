from functions.config import *
from functions.info import *
import eel
import random
import subprocess

eel.init('app')

code = random.randint(100000,900000)
host = get_private_ip()
system = get_name_system()
user = get_name_usuario()
port = random.randint(1000,9000)

create_ServiceConfig(code,port)


@eel.expose
def dados():
	return [host, port, code, user , system]

@eel.expose
def codeGenerator():
	code = random.randint(100000,900000)
	create_ServiceConfig(code,port)
	print(f"new code: {code}")
	return code

php_process = subprocess.Popen(['python', 'keyboard/service.py', str(host), str(port)])

eel.start('public/index.html', size=(800, 500))
