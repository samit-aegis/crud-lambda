import { postUser } from "./postUserHandler.mjs";
import { deleteUser } from "./deleteUserHandler.mjs";
import { getUser } from "./getUserHandler.mjs";
import { updateUser } from "./updateUserHandler.mjs";
import { getConnection } from "./connection.mjs";
import { User } from "./models/user.mjs";

// getting the connection to the mysql database hosted in railwaydb
export const connection = getConnection();

// initializing a user object
export const user = new User(0, "", "");

// init function
export const apiInit = async (event, context) => {
  const route = `${event.path} ${event.httpMethod}`; // for example = "/create-table GET"

  switch (route) {
    case "/insert-user POST":
      return postUser(event);
    case "/get-user GET":
      return getUser(event);
    case "/update-user PATCH":
      return updateUser(event);
    case "/delete-user DELETE":
      return deleteUser(event);
    default:
      return {
        statusCode: 404,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Route Not Found",
          body: "Enter a correct route path",
        }),
      };
  }
};
