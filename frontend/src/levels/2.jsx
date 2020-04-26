import React from "react";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
} from "@cthit/react-digit-components";
import { todos } from "./api/todos";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const Two = () => (
    <>
        <DigitText.Heading2 text="Todo List" />
        {todos.map(e => (
            <DigitDesign.Card key={e.id}>
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

export default Two;
