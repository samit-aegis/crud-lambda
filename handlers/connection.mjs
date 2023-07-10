import mysql2 from "mysql2";

import { _database, _host, _port, _password, _user } from "./env";

// used to connect to the database
export const getConnection = () => {
  console.log("CONNECTING TO THE DATABASE...");
  const connection = mysql2
    .createConnection({
      host: _host,
      user: _user,
      password: _password,
      database: _database,
      port: _port
    })
    .promise();
  console.log("CONNECTED TO THE DATABASE!");

  return connection;
};
