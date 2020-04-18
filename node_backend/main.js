express = require("express");

app = express();

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

app.listen(8080);
