from flask import Flask
from app.database import db  # database.py에서 db 임포트
from app.routes import main_bp
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)  # 데이터베이스 초기화

    # CORS(app, resources={r"/*": {"origins": "*"}})

    with app.app_context():
        db.create_all()  # 테이블 생성
        
    app.register_blueprint(main_bp)

    return app
  