import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import MainOverview from "./main-overview";
import {muiTheme} from "../styles/muiTheme";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <MainOverview/>
                </div>
            </MuiThemeProvider>
        )
    }
}