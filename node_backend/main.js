const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());

var count = 0;
const todos = [
    {
        id: 0,
        title: "Hello",
        done: false,
    },
];

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res) => {
    var todo = {};
    todo.title = req.body.title;
    todo.done = req.body.done;
    todo.id = count++;
    todos.push(todo);

    res.status(201).end();
});

app.listen(8080);
