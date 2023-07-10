import { user } from "./app.mjs";

export const getUser = async (event) => {
  try {
    const data = event.data;

    const userDetails = await user.getUser(data.id);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userDetails.length > 0 ? "User found" : "User Not found",
        user: userDetails,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "appliation/json",
      },
      body: JSON.stringify({
        message: "Error occurred",
        body: err,
      }),
    };
  }
};
