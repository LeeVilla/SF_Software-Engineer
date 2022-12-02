from data import Company, Data, db
from app import app

# Create all tables
db.drop_all()
db.create_all()


c1 = Company(name="Capital One", web_address="", phone_number="")
c2 = Company(name="Best Buy Citi", web_address="", phone_number="")
c3 = Company(name="American Express Delta", web_address="", phone_number="")
c4 = Company(name="Care Credit", web_address="", phone_number="")
c5 = Company(name="Prosper", web_address="", phone_number="")

db.session.add_all([c1, c2, c3, c4, c5])

db.session.commit()
