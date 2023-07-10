import { connection } from "../app.mjs";

export class User {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  // This function will insert a user
  async addUser(name, role) {
    const id = await this.newId();
    return await connection.query(
      `INSERT INTO USERS (id, name, role) VALUES (?, ?, ?);`,
      [id, name, role]
    );
  }

  // This function will delete a user
  async deleteUser(id) {
    return await connection.query(`DELETE FROM USERS WHERE id = ?;`, [id]);
  }

  // This function will update the user
  async updateUser(id, name, role) {
    return await connection.query(
      `UPDATE USERS SET id = ?, name = ?, role = ? WHERE id = ?`,
      [id, name, role, id]
    );
  }

  // This function fetches the user details
  async getUser(id) {
    const data = await connection.query(`SELECT * FROM USERS WHERE id = ?;`, [
      id,
    ]);

    return data[0];
  }

  // This function fetches the new id for the new user
  async newId() {
    const data = await connection.query("SELECT * FROM USERS");
    const users = data[0];

    return users[users.length - 1].id + 1;
  }
}
