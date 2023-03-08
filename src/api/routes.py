"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cache
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route('/login', methods=['POST'])
def user_login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    user = User.query.filter_by(email= body_email, password=body_password).first()
    if not user:
        return jsonify({"Error": "Invalid credentials"}), 401
    token = create_access_token(identity=user.id)
    return jsonify({"response": "Hola", "token": token}), 200
    
@api.route('/user', methods=['GET'])
@jwt_required()
def current_user_email():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"response": user.serialize()}), 200

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

@api.route('/ToShowcache', methods=['GET'])
def get_ToShowCaches():
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
    toShowcache = Cache.query.all()
    return jsonify({"results": [cache.serialize() for cache in toShowcache]}), 200

@api.route('/perfil-cache/<int:id>', methods=['GET'])
def get_details(id):
    cache = Cache.query.filter_by(id=id).first()
    if not cache:
        return jsonify({"error": "Cache no encontrada"}), 404
    return jsonify(cache.serialize()), 200

@api.route('/register', methods=['POST'])
def user_register():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    user_already_exist = User.query.filter_by(email= body_email).first()
    if user_already_exist:
        return jsonify({"response": "Email already used"}), 300
    new_user = User(email=body_email, password=body_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"response": "User registered successfully"}), 200   

@api.route('/reg_cache', methods=['POST'])
@jwt_required()
def cache_register():
    user_id = get_jwt_identity()
    body_name = request.json.get("name")
    body_description = request.json.get("description")
    body_country = request.json.get("country")
    body_state = request.json.get("state")
    body_city = request.json.get("city")
    body_postal_code = request.json.get("postal_code")
    body_coordinates_y = request.json.get("coordinates_y")
    body_coordinates_x = request.json.get("coordinates_x")
    body_difficulty = request.json.get("difficulty")
    body_size = request.json.get("size")
    body_qr_url = request.json.get("qr_url")
    cache_already_exist = Cache.query.filter_by(name= body_name).first()
    if cache_already_exist:
        return jsonify({"response": "Cache already created, choose another name"}), 300
    new_cache = Cache(
        name=body_name,
        description=body_description,
        country="España",
        state=body_state,
        city=body_city,
        postal_code=body_postal_code,
        coordinates_y=body_coordinates_y,
        coordinates_x=body_coordinates_x,
        difficulty=body_difficulty,
        size=body_size,
        qr_url=body_qr_url,
        owner_id=user_id,
        )
    db.session.add(new_cache)
    db.session.commit()
    return jsonify({"response": "Cache registered successfully"}), 200   
 
@api.route('/admin_cache_moderation', methods=['POST'])
@jwt_required()
def status_cache():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.id_admin:
        body_is_accepted = request.json.get("is_accepted")
        body_is_declined = request.json.get("is_declined")
        body_is_pending = request.json.get("is_pending")
        cache_status = Cache(
            is_accepted=body_is_accepted,
            is_declined=body_is_declined,
            is_pending=body_is_pending,
            )
        db.session.add(cache_status)
        db.session.commit()
        return jsonify({"response": "Cache status changed successfully"}), 200
    return jsonify({"error": "Not authorised"}), 400

@api.route('/admin_cache_moderation', methods=['GET'])
@jwt_required()
def get_status_cache():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.is_admin:
        caches = Cache.query.filter_by(is_pending=True)
        return jsonify({"results": [cache.serialize() for cache in caches]}), 200
    return jsonify({"error": "Not authorised"}), 400

@api.route('/admin_accept_cache', methods=['PUT'])
@jwt_required()
def change_status_accepted():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.is_admin:
        body_cache_id = request.json.get("id")
        cache = Cache.query.get(body_cache_id)
        cache.is_approved = True
        cache.is_declined = False
        cache.is_pending = False
        db.session.commit()
        return jsonify({"response": "Cache accepted successfully"}), 200
    return jsonify({"error": "Not authorised"}), 400

@api.route('/admin_decline_cache', methods=['PUT'])
@jwt_required()
def change_status_declined():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.is_admin:
        body_cache_id = request.json.get("id")
        cache = Cache.query.get(body_cache_id)
        cache.is_approved = False
        cache.is_declined = True
        cache.is_pending = False
        db.session.commit()
        return jsonify({"response": "Cache rejected successfully"}), 200
    return jsonify({"error": "Not authorised"}), 400

