import React, { useState, useEffect } from "react";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
} from "@cthit/react-digit-components";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import Axios from "axios";
import PropTypes from "prop-types";

const Todo = (todo, onClick) => {
    return (
        <DigitDesign.Card key={todo.id} onClick={onClick}>
            <DigitDesign.CardBody>
                <DigitLayout.Row>
                    {todo.done ? (
                        <CheckIcon style={{ color: "green" }} />
                    ) : (
                        <ClearIcon style={{ color: "red" }} />
                    )}
                    <DigitText.Heading6 text={todo.title} />
                </DigitLayout.Row>
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.int.isRequired,
        done: PropTypes.bool.isRequired,
        title: PropTypes.title.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
};

const Five = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        Axios.get("/api/todos")
            .then(res => setTodos(res.data))
            .catch(err => {
                console.log("Could not fetch todos");
                console.log(err);
            });
    }, []);

    const toggleTodo = index => {
        let temp = [...todos];
        temp[index].done = !temp[index].done;
        setTodos(temp);
        Axios.put("/api/todo", temp[index])
            .then(() => console.log("Updated todo"))
            .catch(err => {
                console.log("Failed to update todo");
                console.log(err);
            });
    };

    return (
        <>
            <DigitText.Heading2 text="Todo List" />
            {todos.map((e, index) => (
                <Todo todo={e} onClick={() => toggleTodo(index)} />
            ))}
        </>
    );
};

export default Five;
