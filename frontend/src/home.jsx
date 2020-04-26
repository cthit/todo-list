import React from "react";
import { DigitText } from "@cthit/react-digit-components";
import { Link } from "react-router-dom";
const Home = () => {
    let levels = [];
    for (var i = 1; i <= 4; i++) {
        levels.push({
            title: `Level ${i}`,
            link: `/level/${i}`,
        });
    }

    return (
        <div>
            <DigitText.Heading5 text="This is a react tutorial" />
            <DigitText.Heading6 text="Each level is a bit harder than the other so that you can learn incrementally" />
            <nav>
                {levels.map(e => (
                    <li key={e.link}>
                        <Link to={e.link}>
                            <DigitText.Text text={e.title} />
                        </Link>
                    </li>
                ))}
            </nav>
        </div>
    );
};

export default Home;
