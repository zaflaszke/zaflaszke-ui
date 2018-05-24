import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import MainOverview from "./main-overview";

export class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <MainOverview/>
                </div>
            </MuiThemeProvider>
        )
    }
}