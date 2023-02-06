from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

cache_found = db.Table('cache_found',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('cache_id', db.Integer, db.ForeignKey('cache.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    name = db.Column(db.String(255), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    country = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    images = db.Column(db.String(255), nullable=False)
    ig = db.Column(db.String(255))
    fb = db.Column(db.String(255))
    twitter = db.Column(db.String(255))
    active = db.Column(db.Boolean, nullable=False, default=True)
    password_hash = db.Column(db.String(255), nullable=False)
    blogs = db.relationship('Blog', backref='blog_creator')
    caches_found = db.relationship('Cache', secondary=cache_found, backref=db.backref('users_found'))
    caches = db.relationship('Cache', backref='user_creator')

class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    date_of_creation = db.Column(db.Date, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # favorites = db.relationship('Favorite')

class Cache(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    is_approved = db.Column(db.Boolean, nullable=False, default=False)
    description = db.Column(db.Text, nullable=False)
    country = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    postal_code = db.Column(db.String(255), nullable=False)
    coordinates_y = db.Column(db.Float, nullable=False)
    coordinates_x = db.Column(db.Float, nullable=False)
    difficulty = db.Column(db.Float, nullable=False)
    size = db.Column(db.Float, nullable=False)
    qr_url = db.Column(db.String(255), nullable=False) 
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # favorites = db.relationship('Favorite')
    images = db.relationship('Image')

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255), nullable=False)
    cache_id = db.Column(db.Integer, db.ForeignKey('cache.id'), nullable=False)

# class Comment(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(100), nullable=False)
#     text = db.Column(db.Text, nullable=False)
#     url_image = db.Column(db.String(255))
#     cache_id = db.Column(db.Integer, db.ForeignKey('cache.id'), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     cache = db.relationship('Cache', foreign_keys=[cache_id], backref='comments')
#     user = db.relationship('User', foreign_keys=[user_id], backref='comments')

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cache_id = db.Column(db.Integer, db.ForeignKey('cache.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    blog_id = db.Column(db.Integer, db.ForeignKey('blog.id'))
    cache = db.relationship('Cache')
    user = db.relationship('User')
    blog = db.relationship('Blog')
   