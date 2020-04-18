import React, { useState, useEffect } from "react";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
} from "@cthit/react-digit-components";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import Axios from "axios";

const Four = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        Axios.get("/todos")
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
        Axios.put("/todo", temp[index])
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
                <DigitDesign.Card key={e.id} onClick={() => toggleTodo(index)}>
                    <DigitDesign.CardBody>
                        <DigitLayout.Row>
                            {e.done ? (
                                <CheckIcon style={{ color: "green" }} />
                            ) : (
                                <ClearIcon style={{ color: "red" }} />
                            )}
                            <DigitText.Heading6 text={e.title} />
                        </DigitLayout.Row>
                    </DigitDesign.CardBody>
                </DigitDesign.Card>
            ))}
        </>
    );
};

export default Four;
