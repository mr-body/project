from socket import gethostbyname,create_connection
import os
import socket

def get_name_usuario():
    return os.getlogin()

def get_name_system():
    if os.name == 'posix':
        return "linux"
    elif os.name == 'nt':
        return "Windows"
    else:
        return "Não identificado"

def get_private_ip():
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        try:
            s.connect(('10.255.255.255', 1))
            return s.getsockname()[0]
        except socket.error:
            return 'localhost'
