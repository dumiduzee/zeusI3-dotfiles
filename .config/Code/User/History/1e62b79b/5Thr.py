from flask import Flask
import sqlite3

app = Flask(__name__)


#getting database connection 
def get_database():
	conn = sqlite3.connect('x-ui.db')
	c = conn.cursor()
	return c


#UPLOADED DATA
def uploaded_data():
	cursor = get_database() 
	cursor.execute('SELECT up FROM client_traffics')
	int_data_list = [t[0] for t in cursor.fetchall()]
	total_upload = 0
	for i in int_data_list:
		total_upload+= i
	print (round(total_upload / (1024*1024*1024*1024),2))
	return f" DATA VALUES = {str(round(total_upload / (1024*1024*1024*1024),2))}"
#DOWNLOAD DATA
def downloaded_data(list_data):
	int_data_list = [t[0] for  t in list_data]
	total_download = 0
	for i in int_data_list:
		total_download+=i
	return round(total_download/(1024*1024*1024))




@app.route('/',methods=['GET'])
def index():
	return uploaded_data()



if __name__ == "__main__":
	app.run(debug=True)
