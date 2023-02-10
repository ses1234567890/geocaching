"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cache
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/cache', methods=['GET'])
def get_caches():

    # name = request.json.get("name")
    # description = request.json.get("description")
    # country = request.jeson.get("country")
    # city = request.jeson.get("city")
    # postal_code = request.jeson.get("postal_code")
    # coordinates_y = request.jeson.get("coordinates_y")
    # coordinates_x = request.jeson.get("coordinates_x")
    # difficulty = request.jeson.get("difficulty")
    # size = request.jeson.get("size")
    # qr_url = request.jeson.get("qr_url")
    # owner_id = request.jeson.get("owner_id")
    caches = Cache.query.all()
    

    return jsonify({"results": [cache.serialize() for cache in caches]}), 200