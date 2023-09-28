const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from my personal Smarty Pant!!! with auto restart");
});

const users = [
    { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01788888888" },
    { id: 2, name: "Sabnoor", email: "sabnoor@gmail.com", phone: "01788888888" },
    { id: 3, name: "Suchorita", email: "suchorita@gmail.com", phone: "01788888888" },
    { id: 4, name: "Suchonda", email: "suchonda@gmail.com", phone: "01788888888" },
    { id: 5, name: "Srabonti", email: "srabonti@gmail.com", phone: "01788888888" },
    { id: 6, name: "Sabila", email: "sabila@gmail.com", phone: "01788888888" },
    { id: 7, name: "Sohana", email: "sohana@gmail.com", phone: "01788888888" },
]

app.get("/users", (req, res) => {
    // filter by query parameter
    console.log("query", req.query);
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
    // res.send(users);
});

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id)
    res.send(user);

    // res.send("finding user");
});

app.post("/user", (req, res) => {
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    res.send(user);
});

app.get("/fruits", (req, res) => {
    res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
    res.send("sour sour fazle flavor");
});

app.listen(port, () => {
    console.log("Listening to port", port);
});
