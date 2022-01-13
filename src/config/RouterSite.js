import { Route, Switch } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import NotFound from "../pages/404";

const RoutesSite = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default RoutesSite;
