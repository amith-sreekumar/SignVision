import sqlite3

conn = sqlite3.connect(
    "signvision.db",
    check_same_thread=False
)

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS translations(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    gesture TEXT,
    translation TEXT       
    )
""")

conn.commit()
