from flask_sqlalchemy import SQLAlchemy
from app.database import db
from app.models import User

db = SQLAlchemy()

def init_db(app):
    db.init_app(app)
    with app.app_context():
        db.create_all()