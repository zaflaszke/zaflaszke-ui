import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import Start from "./start/start";
import {muiTheme} from "../styles/muiTheme";
import {browserHistory, Route, Router} from "react-router";
import MainOverview from "./main-overview/main-overview";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Router history={browserHistory}>
                        <Route exact path="/" component={Start}/>
                        <Route path="/main" component={MainOverview}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}