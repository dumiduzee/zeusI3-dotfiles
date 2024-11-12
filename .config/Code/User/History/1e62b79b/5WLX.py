from flask import Flask
import sqlite3

app = Flask(__name__)


def calculate(list_data):
	total_upload = None
	for i in list_data:
		total_upload+= int(i)
	return total_upload

@app.route('/')
def index():
	conn = sqlite3.connect('x-ui.db')
	c = conn.cursor()
	c.execute('SELECT down FROM client_traffics')
	result = c.fetchall()
	print(calculate(result))
	return result

if __name__ == "__main__":
	app.run(debug=True)
