from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from app.models import Code, Vote
from app.models import db, User

main_bp = Blueprint('main', __name__)

@main_bp.route('/signup', methods=['GET','POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email or password is missing"}), 400

    # 사용자가 이미 존재하는지 확인
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    # 사용자 생성 로직
    hashed_password = generate_password_hash(password, method='sha256')
    user = User(email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "Signup successful", "user": {"email": user.email}}), 201

@main_bp.route('/submit-code', methods=['POST'])
def submit_code():
    data = request.json
    new_code = Code(author=data['author'], content=data['content'])
    db.session.add(new_code)
    db.session.commit()
    return jsonify({"message": "Code submitted successfully", "code": new_code.id}), 201

@main_bp.route('/get-codes', methods=['GET'])
def get_codes():
    codes = Code.query.all()
    result = [{"id": code.id, "author": code.author, "content": code.content, "votes": code.votes} for code in codes]
    return jsonify(result)

@main_bp.route('/vote', methods=['POST'])
def vote():
    data = request.json
    code = Code.query.get(data['code_id'])
    if not code:
        return jsonify({"message": "Code not found"}), 404
    
    if Vote.query.filter_by(code_id=data['code_id'], voter=data['voter']).first():
        return jsonify({"message": "You have already voted for this code"}), 400

    new_vote = Vote(code_id=data['code_id'], voter=data['voter'])
    code.votes += 1
    db.session.add(new_vote)
    db.session.commit()
    return jsonify({"message": "Vote cast successfully", "votes": code.votes}), 200

@main_bp.route('/results', methods=['GET'])
def get_results():
    codes = Code.query.order_by(Code.votes.desc()).all()
    result = [{"id": code.id, "author": code.author, "content": code.content, "votes": code.votes} for code in codes]
    return jsonify(result)

    from flask import Blueprint, jsonify

# 기본 라우트: "/" 요청 처리
@main_bp.route('/')
def home():
    return jsonify({"message": "Welcome to the API!"})