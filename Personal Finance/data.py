from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

class User(db.Model):
    """User."""

    __tablename__="users"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)

    user = db.relationship('User')

    def __repr__(self):
        u = self
        return f"<User {u.id} {u.name}>"


class Company(db.Model):
    """Company."""

    __tablename__ = "companies"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    web_address = db.Column(db.Text, default='www.google.com')
    phone_number = db.Column(db.Text)

    companies = db.relationship('Company')

    def __repr__(self):
        e = self
        return f"<Company {e.id} {e.name} {e.phone_number} {e.web_address}>"


class Data(db.Model):
    """Data"""

    __tablename__ = "data"
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    company = db.Column(db.Text)
    current_balance = db.Column(int,
                                nullable=False,
                                )
    credit_limit = db.Column(int,
                             nullable=False,
                             )
    available_credit = db.Column(int,
                                 nullable=False,
                                 )
    utilization = db.Column(int,
                            nullable=False,
                            )
    due_date = db.Column(db.Text,
                         nullable=False,
                         )
    statement_date = db.Column(db.Text)

    data = db.relationship('Data')

    def __repr__(self):
        return f"<Data {self.company} {self.current_balance} {self.credit_limit} {self.available_credit} {self.utilization} {self.due_date} "
