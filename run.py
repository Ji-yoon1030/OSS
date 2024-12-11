from app import create_app
from app.database import db


app = create_app()

with app.app_context():
    print("App context activated!")
    db.create_all()
    print("Tables created!")

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")