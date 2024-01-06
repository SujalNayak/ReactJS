import axios from "axios";
import React from "react";

export const PostApiDemo = () => {
  const addUser = () => {
    const user = {
      name: "honey",
      email: "honey@gmail.com",
      age: 20,
      password: "honey@123",
    };

    axios
      .post("http://localhost:3001/user/user", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("user added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("user not added");
      });
  };

  return (
    <div>
      <h1>POST API DEMO</h1>
      <button onClick={() => addUser()}>Add User</button>
    </div>
  );
};

