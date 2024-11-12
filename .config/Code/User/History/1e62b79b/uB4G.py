from flask import Flask
import sqlite3

app = Flask(__name__)


def calculate(list_data):
	int_data_list = [t[0] for t in list_data]
	
	total_upload = 0
	for i in int_data_list:
		total_upload+= i
	return total_upload

@app.route('/')
def index():
	conn = sqlite3.connect('x-ui.db')
	c = conn.cursor()
	c.execute('SELECT down FROM client_traffics')
	result = c.fetchall()
	return calculate(result)

if __name__ == "__main__":
	app.run(debug=True)