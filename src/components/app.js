import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui";
import Start from "./start/start";
import {muiTheme} from "../styles/muiTheme";
import {browserHistory, Route, Router} from "react-router";
import MainOverview from "./main-overview/main-overview";
import {connect} from "react-redux";
import {getCurrentSearchCity, getCurrentSearchRegion} from "../selectors/start-selectors";
import PropTypes from "prop-types";
import AdminPanel from "./admin/admin-panel";


export class App extends Component {
    constructor() {
        super();
    }

    render() {
        const {currentSearchCity, currentSearchRegion} = this.props;

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Router history={browserHistory}>
                        <Route exact path="/" component={Start}/>
                        <Route path={`/city/:city/region/:region`} component={MainOverview} city={currentSearchCity}
                               region={currentSearchRegion}/>
                        <Route path={`/admin`} component={AdminPanel}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    currentSearchCity: PropTypes.string,
    currentSearchRegion: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        currentSearchCity: getCurrentSearchCity(state),
        currentSearchRegion: getCurrentSearchRegion(state),
    };
};

export default connect(mapStateToProps)(App);