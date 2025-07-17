const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./users.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      github_id TEXT UNIQUE,
      login TEXT,
      name TEXT,
      avatar_url TEXT,
      html_url TEXT,
      access_token TEXT
    )
  `);
});

function saveUser(user) {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO users (github_id, login, name, avatar_url, html_url, access_token)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(user.id, user.login, user.name, user.avatar_url, user.html_url, user.token);
  stmt.finalize();
}

function getUserByToken(token, callback) {
  db.get("SELECT * FROM users WHERE access_token = ?", [token], callback);
}

module.exports = { saveUser, getUserByToken };