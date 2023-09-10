const path = require('path');

const db = require(path.join(__dirname, '../', 'util', 'database'));

module.exports = class usersClass {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  addUser() {
    return db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [this.name, this.email]
    );
  }
  
  static fetchAllUsers() {
    return db.execute('SELECT * FROM users');
  }
  
  static findUserById(id) {
    return db.execute(
      'SELECT * FROM users WHERE id = ?',
      [id])
  }

  static updatedUser(id, name, email) {
    return db.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id])
  }

  static deleteUser(id) {
    return db.execute(
      'DELETE FROM users WHERE id = ?',
      [id]);
  }
};