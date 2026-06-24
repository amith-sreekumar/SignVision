from flask import Flask, request ,jsonify
from flask_cors import CORS
from database import conn,cursor


app=Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "SignVision Backend Running"

@app.route("/translate",methods=["POST"])
def translate():

    data =request.json

    gesture=data.get("gesture")

    translations ={
        "hello":"Hello",
        "thanks":"Thank You",
        "yes":"Yes",
        "no":"No"
    }

    result = translations.get(gesture.lower(),"Unknown Gesture")

    

    cursor.execute(
        """
        INSERT INTO translations
        (gesture,translation)
        VALUES(?,?)
        """,
        (gesture,result)
    )

    conn.commit()

    return jsonify({
        "translations":result
    })

@app.route("/history")
def history():
    cursor.execute(
        "SELECT * FROM translations"
    )

    rows = cursor.fetchall()

    result =[]

    for row in rows:
        result.append({
            "id":row[0],
            "gesture":row[1],
            "translation":row[2]
        })

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)