import { Route, Switch } from "react-router-dom";
import React from "react";
import Accounts from "../pages/Accounts";
import Home from "../pages/Home";

const RoutesSite = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/accounts" component={Accounts} />
        </Switch>
    );
};

export default RoutesSite;
