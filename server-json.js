const cors = require("cors");

const express = require("express");
const port = 3000;

const app = express();
app.use(cors());
app.use(express.static('public'));
const courses = [
  { topic: "math", location: "hendon", price: 100 },
  { topic: "math", location: "colindale", price: 80 },
  { topic: "math", location: "brent cross", price: 90 },
  { topic: "math", location: "golders green", price: 120 },
];

const user = [ {email: "jomama@email.com", password: "pass"}]
app.get("/lessons", function (req, res) {
    res.send(JSON.stringify(courses));
  });

app.get("/users", function (req, res) {
    res.send(JSON.stringify(user));
  });

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


