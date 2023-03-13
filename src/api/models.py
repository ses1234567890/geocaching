from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

cache_found = db.Table('cache_found',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('cache_id', db.Integer, db.ForeignKey('cache.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    name = db.Column(db.String(255), nullable=True)
    date_of_birth = db.Column(db.Date, nullable=True)
    country = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(255), nullable=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_image_url = db.Column(db.String(255), nullable=True, unique=True)
    ig = db.Column(db.String(255),nullable=True)
    fb = db.Column(db.String(255),nullable=True)
    twitter = db.Column(db.String(255),nullable=True)
    password = db.Column(db.String(255), nullable=False)
    blogs = db.relationship('Blog', backref='blog_creator')
    caches_found = db.relationship('Cache', secondary=cache_found, backref=db.backref('users_found'))
    caches = db.relationship('Cache', backref='user_creator')
    # commets = db.relationship('Comment', backref='user')

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country": self.country,
            "city": self.city,
            "email": self.email,
            "profile_image_url": self.profile_image_url,
            "caches_found": [x.serialize()for x in self.caches_found],
            "is_admin": self.is_admin,
        }
    def rank(self):
        return {
            "id": self.id,
            "name": self.name,
            "caches": len(self.caches_found)
        }

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
    is_declined = db.Column(db.Boolean, nullable=False, default=False)
    is_pending = db.Column(db.Boolean, nullable=False, default=True)
    description = db.Column(db.Text, nullable=False)
    country = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    postal_code = db.Column(db.String(255), nullable=False)
    coordinates_y = db.Column(db.Float)
    coordinates_x = db.Column(db.Float)
    difficulty = db.Column(db.String(255), nullable=False)
    size = db.Column(db.String(255), nullable=False)
    qr_url = db.Column(db.String(255), nullable=False) 
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # favorites = db.relationship('Favorite')
    images = db.relationship('Image')
    # commets = db.relationship('Comment', backref='cache')
    # images = db.relationship('Image', backref='cache')

    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "postal_code": self.postal_code,
            "coordinates_y": self.coordinates_y,
            "coordinates_x": self.coordinates_x,
            "size": self.size,
            "difficulty": self.difficulty,
            "qr_url": self.qr_url,
            "owner_id": self.owner_id,
        }

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255), nullable=False)
    cache_id = db.Column(db.Integer, db.ForeignKey('cache.id'), nullable=False)
#   user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)



# class Comment(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(100), nullable=False)
#     text = db.Column(db.Text, nullable=False)
#     url_image = db.Column(db.String(255))
#     cache_id = db.Column(db.Integer, db.ForeignKey('cache.id'), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cache_id = db.Column(db.Integer, db.ForeignKey('cache.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    blog_id = db.Column(db.Integer, db.ForeignKey('blog.id'))
    cache = db.relationship('Cache')
    user = db.relationship('User')
    blog = db.relationship('Blog')
   