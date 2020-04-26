import React from "react";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
} from "@cthit/react-digit-components";
import { todos } from "./api/todos";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { useState } from "react";

const Three = () => {
    const [todoss, setTodos] = useState(todos);

    const toggleTodo = index => {
        let temp = [...todoss];
        temp[index].done = !temp[index].done;
        setTodos(temp);
    };

    return (
        <>
            <DigitText.Heading2 text="Todo List" />
            {todoss.map((e, index) => (
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

export default Three;
