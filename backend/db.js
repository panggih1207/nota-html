import sqlite3 from "sqlite3"

const db = new sqlite3.Database("./nota.db")

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS nota (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT,
      qty INTEGER,
      harga INTEGER,
      jumlah INTEGER
    )
  `)
})

export default db

