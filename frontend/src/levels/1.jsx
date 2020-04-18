import React from "react";

const todos = [
    {
        id: 1,
        title: "Create a component",
        done: true,
    },
    {
        id: 2,
        title: "Create dummy data",
        done: true,
    },
    {
        id: 3,
        title: "Show dummy data",
        done: true,
    },
    {
        id: 4,
        title: "Allow user to change dummy data",
        done: false,
    },
];

const One = () => (
    <div>
        <h2>Todo list</h2>
        <ol>
            {todos.map(e => (
                <li key={e.id} style={{ color: e.done ? "green" : "red" }}>
                    {e.title}
                </li>
            ))}
        </ol>
    </div>
);

export default One;
