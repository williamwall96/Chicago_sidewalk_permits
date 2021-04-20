# 1. Import 
from flask import Flask, jsonify, Response, render_template
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd


# Database Setup
# connection_string = f"postgresql://postgres:{password}@localhost:5432/chicago_cafe_permits"
connection_string = "sqlite:///chicago_permits.sqlite"
engine = create_engine(connection_string)


# 2. Create an app
app = Flask(__name__)


# 3. Define static routes
@app.route("/")
def index():
    return render_template("index.html")
    

@app.route("/api/test")
def test():
    df = pd.read_sql_query('''
select * from current_permits as c
union
select * from past_permits as p;
''', con=engine)
    # return df.iloc[0:10].to_json(orient="records")
    return Response(df.iloc[0:10].to_json(orient="records"), mimetype='application/json')



# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)