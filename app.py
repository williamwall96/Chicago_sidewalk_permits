# 1. Import 
from flask import Flask, jsonify, Response, render_template, url_for
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd
from config import password

# Database Setup

connection_string = "sqlite:///chicago_permits.sqlite"
engine = create_engine(connection_string)


# 2. Create an app
app = Flask(__name__)


# 3. Define static routes
@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/api/permitsPerYear")
def permitsPerYear():
    df = pd.read_sql_query('''
select * from current_permits as c
union
select * from past_permits as p;
''', con=engine)
    data = df
    # return jsonify(data)

# @app.route("/api/test")
# def test():
#     df = pd.read_sql_query('''
# select * from current_permits as c
# union
# select * from past_permits as p;
# ''', con=engine)

    #return df.iloc[0:10].to_json(orient="records")
    return Response(df.to_json(orient="records"), mimetype='application/json')

# @app.route("/api/permitsPerYear")
# def permitsPerYear():
#     df = pd.read_sql_query('''
# select * from current_permits as c
# union
# select * from past_permits as p;
# ''', con=engine)
#     data = df
#     return jsonify(data)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)