from flask import Flask
# pip install flask 
app = Flask(__name__)

# https://www.cecyours.org/
# https://www.cecyours.org/about
@app.route("/work")
def task():
    return "Hi There !!"

@app.route("/student")
def task2():
    return "AA code student no che"

app.run(debug=True)