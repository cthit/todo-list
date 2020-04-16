import React from "react";
import { DigitProviders } from "@cthit/react-digit-components";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";

const Home = () => <div>Home</div>

const App = () => (
    <DigitProviders>
        <BrowserRouter>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </BrowserRouter>
    </DigitProviders>
);

export default App;
