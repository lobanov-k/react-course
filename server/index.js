const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("build"));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build/index.html"));
// });

app.get("/users", (request, response) => {
  const users = fs.readFileSync("users.json");
  return response.send(users);
});

app.post("/users", (req, res) => {
  // SERVER SIDE VALIDATION
  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const newUser = {
    ...req.body,
  };

  data.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify(data));

  return res.send(JSON.stringify(newUser));
});

app.put("/users", (req, res) => {
  // SERVER SIDE VALIDATION
  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const userToUpdate = req.body;

  const newData = data.map((user) =>
    userToUpdate.id === user.id ? userToUpdate : user
  );

  fs.writeFileSync("users.json", JSON.stringify(newData));

  return res.send(JSON.stringify(userToUpdate));
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];

  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const index = data.findIndex((user) => user.id == id);

  if (index !== -1) {
    data.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify(data));
    return res.send({ message: "User was deleted." });
  } else {
    return res.status(400).send(`Not found user with id ${id}`);
  }
});

app.listen(8080, () => {
  console.log("Server started at port :8080");
});
