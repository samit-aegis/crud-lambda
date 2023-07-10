import mysql2 from "mysql2";

// used to connect to the database
export const getConnection = () => {
  console.log("CONNECTING TO THE DATABASE...");
  const connection = mysql2
    .createConnection({
      host: "containers-us-west-146.railway.app",
      user: "root",
      password: "OnlrF2AiReeS9LTLi1GI",
      database: "railway",
      port: 7256,
    })
    .promise();
  console.log("CONNECTED TO THE DATABASE!");

  return connection;
};
