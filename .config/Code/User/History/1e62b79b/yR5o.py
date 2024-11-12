from flask import Flask
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
	conn = sqlite3.connect('x-ui.db')
	c = conn.cursor()
	c.execute('SELECT * FROM client_traffics')
	result = c.fetchall()
	print(result)
	print(type(result))
	return "conn"

if __name__ == "__main__":
	app.run(debug=True)
