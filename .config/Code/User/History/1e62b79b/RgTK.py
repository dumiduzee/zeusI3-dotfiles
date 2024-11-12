from flask import Flask
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
	conn = sqlite3.connect('x-ui.db')
	c = conn.cursor()
	# c.execute('SELECT * FROM clients')
	# result = c.fetchall()
	return conn

if __name__ == "__main__":
	app.run(debug=True)
