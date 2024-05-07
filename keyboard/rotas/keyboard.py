from flask import Blueprint,Flask, render_template, request, redirect, url_for, session
from functools import wraps
import pyautogui
import random
import configparser
import os

def keycode():
    serviceDataBase = configparser.ConfigParser()
    config_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'config/Service.config')
    serviceDataBase.read(config_path)
    return serviceDataBase['DEFAULT']['KEY']

keyboard_bp = Blueprint('keyboard', __name__)

#code = 1234

def type_key(key):
    if key == 'backspace':
        pyautogui.press('backspace')
    elif key == 'enter':
        pyautogui.press('enter')
    elif key == 'space':
        pyautogui.press('space')
    elif key == 'CapsLock':
        pyautogui.press('capslock')
    elif key == 'Windows':
        pyautogui.press('win')
    elif key == 'Alt':
        pyautogui.press('alt')
    elif key == 'Ctrl':
        pyautogui.press('ctrl')
    elif key == 'Tab':
        pyautogui.press('tab')
    elif key == 'Ctrl+C':
        pyautogui.hotkey('ctrl', 'c')
    elif key == 'Ctrl+V':
        pyautogui.hotkey('ctrl', 'v')
    elif key == 'Ctrl+X':
        pyautogui.hotkey('ctrl', 'x')
    elif key == 'Ctrl+Z':
        pyautogui.hotkey('ctrl', 'z')
    elif key == 'Windows+Tab':
        pyautogui.hotkey('alt', 'tab')
    elif key == 'Alt+Tab':
        pyautogui.hotkey('win', 'tab')
    else:
        pyautogui.write(key)

@keyboard_bp.route('/')
def validar():
    return render_template('validar.html')

@keyboard_bp.route('/', methods=['POST'])
def keyboardCode():
    confirm = str(request.form.get('code'))
    codigo = str(keycode())
    
    if confirm == codigo:
        return redirect(url_for('keyboard.validar_Comfirm', key=codigo))
    else:
        return render_template('validar.html', error=True)

@keyboard_bp.route('/<key>')
def validar_Comfirm(key):
    confirm = str(key)
    codigo = str(keycode())

    if confirm == codigo:
        return render_template('keyboard.html', codigo=key)
    else:
        return render_template('validar.html', error=True)

@keyboard_bp.route('/<key>/<tecla>')
def printer(key,tecla):
    confirm = str(key)
    codigo = str(keycode())
    
    if confirm == codigo:
        print(tecla)
        type_key(tecla)
        return render_template('keyboard.html')
    else:
        return render_template('validar.html', error=True)