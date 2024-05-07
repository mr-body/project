import configparser
import random

from functions.info import *

# Define as informações a serem escritas no arquivo
ip_Privado = get_private_ip()

# Define o nome do arquivo a ser criado
ServiceConfig = "./keyboard/config/Service.config"

def create_ServiceConfig(key,port):
    with open(ServiceConfig, "w") as f:
        f.write("[DEFAULT]\n")
        f.write(f"IP = {ip_Privado}\n")
        f.write(f"PORT = {port}\n")
        f.write(f"KEY = {key}\n")