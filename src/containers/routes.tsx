import React from "react";
import {Switch, Route, HashRouter}  from "react-router-dom";
import ListBody from "./listBody";
import ColorDetail from "./colorDetail";
export default function Routes() {
    return <>
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={ListBody}/>
            <Route exact={true} path="/detail/:color" component={ColorDetail} />
        </Switch>
    </HashRouter>
    </>
}