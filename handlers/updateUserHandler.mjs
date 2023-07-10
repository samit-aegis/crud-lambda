import { user } from "./app.mjs";

export const updateUser = async (event) => {
  try {
    const data = event.data;

    // fetching the user details that exist in the database currently
    const userDetails = await user.getUser(data.id);

    // if there is no such user that means the user id is wrong
    if (userDetails.length === 0) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "User not found",
          body: "Enter correct User ID",
        }),
      };
    }

    let name = userDetails[0].name;
    let role = userDetails[0].role;

    if (data.name != undefined) name = data.name;
    if (data.role != undefined) role = data.role;

    await user.updateUser(data.id, name, role);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          id: data.id,
          name: name,
          role: role,
        },
        message: "User details has been updated",
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "User details couldn't be updated",
        body: err,
      }),
    };
  }
};
