/*
    页面的主入口

    router

    store

    base.css

 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory,browserHistory } from 'react-router';

import App from "./pages/app";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

class Main extends React.Component{    //es6
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById("root"));




