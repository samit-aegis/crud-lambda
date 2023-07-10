import { user } from "./app.mjs";

export const postUser = async (event) => {
  try {
    const data = event.data;
    await user.addUser(data.name, data.role);

    // Post user
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "User Details entered successfully",
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "User details couldn't be entered",
        body: err,
      }),
    };
  }
};
