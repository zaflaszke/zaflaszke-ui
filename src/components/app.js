import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import Start from "./start/start";
import {muiTheme} from "../styles/muiTheme";
import {browserHistory, Route, Router} from "react-router";
import MainOverview from "./main-overview/main-overview";
import {connect} from "react-redux";
import {getCurrentSearchCity} from "../selectors/start-selectors";
import PropTypes from "prop-types";


export class App extends Component {
    constructor() {
        super();
    }

    render() {
        const {currentSearchCity} = this.props;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Router history={browserHistory}>
                        <Route exact path="/" component={Start}/>
                        <Route path={`/city/:city`} component={MainOverview} city={currentSearchCity}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {
    currentSearchCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    return {
        currentSearchCity: getCurrentSearchCity(state)
    }
};

export default connect(mapStateToProps)(App);