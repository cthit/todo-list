const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());

var count = 1;
var todos = [
    {
        id: 0,
        title: "Hello",
        done: false,
    },
];

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.post("/api/todos", (req, res) => {
    var todo = {};
    todo.title = req.body.title;
    todo.done = req.body.done;
    todo.id = count++;
    todos.push(todo);

    res.status(201).end();
});

app.delete("/api/todo/:id", (req, res) => {
    if (!todos.find(e => e.id == req.params.id)) {
        res.status(404).end();
        return;
    }

    todos = todos.filter(e => e.id != req.params.id);
    res.status(204).end();
});

app.put("/api/todo", (req, res) => {
    var todo = todos.find(e => e.id == req.body.id);
    if (!todo) {
        res.status(404).end();
        return;
    }

    todo.done = req.body.done;
    todo.title = req.body.title;
    res.status(204).end();
});

app.listen(8080);
