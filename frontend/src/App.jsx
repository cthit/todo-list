import React from "react";
import { DigitProviders } from "@cthit/react-digit-components";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import { One, Two, Three, Four } from "./levels";

const Home = () => <div>Home</div>;

const App = () => (
    <DigitProviders>
        <BrowserRouter>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/level/1" component={One} />
                    <Route exact path="/level/2" component={Two} />
                    <Route exact path="/level/3" component={Three} />
                    <Route exact path="/level/4" component={Four} />
                </Switch>
            </BrowserRouter>
        </BrowserRouter>
    </DigitProviders>
);

export default App;
