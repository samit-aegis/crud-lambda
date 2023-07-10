import { user } from "./app.mjs";

export const deleteUser = async (event) => {
  try {
    const data = event.data;

    const userDetails = await user.getUser(data.id);

    if (userDetails[0] === undefined) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "User not found",
        }),
      };
    }

    await user.deleteUser(data.id);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "User has been deleted successfully",
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Error occured",
        body: err,
      }),
    };
  }
};
