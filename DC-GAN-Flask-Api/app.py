import os, io, sys
import time
import numpy as np
import tensorflow as tf

import config
import tfutil
import misc
import random
import string
from PIL import Image
import glob

from IPython.core.display import display, HTML
display(HTML("<style>.container { width:100% !important; }</style>"))

from ipywidgets import interact, interactive, fixed, interact_manual
import ipywidgets as widgets

import matplotlib.pyplot as plt
import matplotlib
import cv2
import base64



imsize = 128
resume_network_pkl = "network-snapshot-000052.pkl"
#resume_network_pkl = "./results/023-pgan-mnist-cond-preset-v2-1gpu-fp32-nogrowing-VERBOSE/network-snapshot-000468.pkl"



print("Model Loaded")

mask_list = glob.glob("./dataset/masks/*.png")

def get_random_mask(batch_size):
    
    ix = np.random.randint(len(mask_list), size=(batch_size,))
    
    random_masks = []
    for i in ix:
        temp = Image.open(mask_list[i])
        temp = temp.resize((imsize, imsize))
        temp = (np.float32(temp) - 127.5)/127.5
        temp = temp.reshape((1, 1, imsize, imsize))
        random_masks.append(temp)
    random_masks = np.vstack(random_masks)
    
    return random_masks

def get_random_color(batch_size):
    return np.random.rand(batch_size, 3) * 2 - 1

def convert_to_image(x):
    return x.transpose((0,2,3,1)).clip(-1, 1) * 0.5 + 0.5



from flask_ngrok import run_with_ngrok
from flask import Flask, request, jsonify, json, render_template
app = Flask(__name__)
run_with_ngrok(app)   #starts ngrok when the app is run
import urllib.request
import re

texture_list = []


@app.route("/", methods=["POST"])
def hello():
    tfutil.init_tf(config.tf_config)
    with tf.device('/gpu:0'):
      G, D, Gs = misc.load_pkl(resume_network_pkl)
    
    imsize = Gs.output_shape[-1]
    selected_textures = misc.random_latents(1, Gs)
    selected_shapes = get_random_mask(1)
    selected_colors = get_random_color(1)
    fake_images = Gs.run(selected_textures, selected_colors, selected_shapes)

    return "DCGAN endpoint -> /predict ";

#print(hello())

@app.route("/predict", methods=["POST"])
def predict():

    tfutil.init_tf(config.tf_config)
    with tf.device('/gpu:0'):
      G, D, Gs = misc.load_pkl(resume_network_pkl)
    imsize = Gs.output_shape[-1]

    random_masks = []
    temp = Image.open(request.files['image']).convert('L')
    temp = temp.resize((imsize, imsize))
    temp = (np.float32(temp) - 127.5)/127.5
    temp = temp.reshape((1, 1, imsize, imsize))
    random_masks.append(temp)
    masks = np.vstack(random_masks)
    #masks = get_random_mask(1)

    ctemp = []
    ctemp.append(float(request.form['R']))
    ctemp.append(float(request.form['G']))
    ctemp.append(float(request.form['B']))
    colors = np.array([ctemp], dtype=object)
    #colors = get_random_color(1)

    texid = -1
    selected_textures = None
    if request.form['texflag'] == "true":
      selected_textures = misc.random_latents(1, Gs)
      texture_list.append(selected_textures[0])
      texid = len(texture_list) - 1
    else:
      selected_textures = np.array([texture_list[int(request.form['texid'])]], dtype=object)
      texid = int(request.form['texid'])
    #selected_textures = misc.random_latents(1, Gs)

    fake_images = Gs.run(selected_textures, colors, masks)
    fake_images = convert_to_image(fake_images)
    matplotlib.image.imsave('localtemp.png', fake_images[0])

    conv_image = Image.open('localtemp.png')
    buffered = io.BytesIO()
    conv_image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue())
    #jsonify({"image": str(img_str), "id": texid})
    return jsonify({"image": str(img_str)[2:-1], "id": texid});

app.run()

