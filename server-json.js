const cors = require("cors"); // importing cors module for relaxing api security
const express = require("express"); // importing express

const port = 3000; // setting up the port

const app = express(); // setting up express app
app.use(cors()); // using cors
app.use(express.static("public")); // setting

// creating courses array
const courses = [
  { topic: "Math", location: "Hendon", price: 100 },
  { topic: "Math", location: "Colindale", price: 80 },
  { topic: "Math", location: "Brent Cross", price: 90 },
  { topic: "Math", location: "Golders Green", price: 120 },
];

// creating user array
const user = [{ email: "user@email.com", password: "mypassword" }];

// setting up response for get request
app.get("/lessons", function (req, res) {
  res.send(JSON.stringify(courses));
});

// setting up response for get request
app.get("/users", function (req, res) {
  res.send(JSON.stringify(user));
});

// setting up the port
app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
