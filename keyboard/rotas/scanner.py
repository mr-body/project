from flask import Blueprint,Flask, render_template, request, redirect, url_for, session
from functools import wraps
import configparser
import pytesseract
import sys
from PIL import Image
import os
import json

def keycode():
    serviceDataBase = configparser.ConfigParser()
    config_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'config/Service.config')
    serviceDataBase.read(config_path)
    return serviceDataBase['DEFAULT']['KEY']

scanner_bp = Blueprint('scanner', __name__)

#code = 1234

@scanner_bp.route('/')
def validar():
    return render_template('440.html')

@scanner_bp.route('/', methods=['POST'])
def upload_image():
     # Verifica se um arquivo de imagem foi enviado
    if 'image' not in request.files:
        return 'Nenhum arquivo de imagem foi enviado.'

    # Carrega a imagem enviada
    image = request.files['image']
    img = Image.open(image)

    # Extrai o texto da imagem usando o Pytesseract
    extracted_text = pytesseract.image_to_string(img)

    # Retorna o texto extraído
    return json.dumps({'text': extracted_text})

@scanner_bp.route('/scannerLogin', methods=['POST'])
def scannerLogin():
    confirm = str(request.form.get('code'))
    codigo = str(keycode())

    if confirm == codigo:
        return redirect(url_for('scanner.validar_Comfirm', key=codigo))
    else:
        return render_template('440.html', error=True)

@scanner_bp.route('/<key>')
def validar_Comfirm(key):
    confirm = str(key)
    codigo = str(keycode())

    if confirm == codigo:
        return render_template('scanner.html', codigo = key)
    else:
        return render_template('440.html', error=True)
