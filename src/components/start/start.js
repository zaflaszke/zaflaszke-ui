import React from "react";
import SearchField from "../common/search-field";
import "../../styles/start.css";
import {FlatButton} from "material-ui";
import ForwardIcon from "material-ui/svg-icons/content/forward";
import {Link} from "react-router";
import {connect} from "react-redux";
import * as actions from "../../actions/start-actions";
import PropTypes from "prop-types";

const styles = {
    searchButton: {
        marginTop: "50px"
    }
};

class Start extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "",
            searchFieldError: ""
        }
    }

    handleSearch = () => {
        const {city} = this.state;
        const {setStartSearchCity} = this.props;

        if (city === "") {
            this.setState({searchFieldError: "Wybierz miasto"})
        }

        setStartSearchCity(city);
    };

    handleSetCity = (city) => {
        this.setState({
            city: city
        })
    };

    _isCitySelected = () => {
        return this.state.city !== "";
    };

    render() {
        const {city, searchFieldError} = this.state;

        const path = this._isCitySelected() ? `/city/${city}` : `/`;

        return (
            <div className="start">
                <div style={{display: "flex"}}>
                    <div className="start__title">
                        Zaflaszkę.pl
                    </div>
                    <img src={require("../../images/bottle.svg")} className="start__image"/>
                </div>
                <div className="start__subtitle">
                    Mała przysługa, za dużą przyjemność!
                </div>
                <SearchField hintText="Miasto..." search={this.handleSetCity} searchFieldError={searchFieldError}/>
                <Link to={path}>
                    <FlatButton
                        label="Szukaj"
                        icon={<ForwardIcon color="seagreen"/>}
                        labelPosition="before"
                        style={styles.searchButton}
                        onClick={this.handleSearch}
                    />
                </Link>
                <div className="start__footer">
                    Created by E.K & M.K
                </div>
            </div>
        )
    }
}

Start.propTypes = {
    setStartSearchCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, actions)(Start);