from app.database import db
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Code(db.Model):
    id = db.Column(db.String(100), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)

    author = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    votes = db.Column(db.Integer, default=0)

class User(db.Model): 
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code_id = db.Column(db.Integer, db.ForeignKey('code.id'), nullable=False)
    voter = db.Column(db.String(100), nullable=False)