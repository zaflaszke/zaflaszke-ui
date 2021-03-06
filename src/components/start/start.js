import React from "react";
import SearchField from "../common/search-field";
import "../../styles/start.css";
import {FlatButton} from "material-ui";
import ForwardIcon from "material-ui/svg-icons/content/forward";
import {Link} from "react-router";
import {connect} from "react-redux";
import * as actions from "../../actions/start-actions";
import PropTypes from "prop-types";
import {getRegions} from "../../selectors/start-selectors";

const styles = {
    button: {
        marginTop: "50px"
    }
};


const cities = [
    'Warszawa',
    'Wrocław',
    'Zielona Góra',
    'Gdańsk',
    'Kraków',
];

class Start extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "",
            region: "",
            searchFieldCityError: "",
            searchFieldRegionError: ""
        };
    }

    handleSearch = () => {
        const {city, region} = this.state;
        const {setStartSearchCity, setStartSearchRegion} = this.props;

        if (city === "") {
            this.setState({searchFieldCityError: "Wybierz miasto"});
        }

        if (region === "") {
            this.setState({searchFieldRegionError: "Wybierz województwo"});
        }

        setStartSearchCity(city);
        setStartSearchRegion(region);
    };

    handleSetCity = (city) => {
        this.setState({
            city: city,
            searchFieldCityError: ""
        });
    };

    handleSetRegion = (region) => {
        this.setState({
            region: region,
            searchFieldRegionError: ""
        });
    };

    handleClearSearchFieldCityError = () => {
        this.setState({
            searchFieldCityError: "",
            city: "",
        });
    };

    handleClearSearchFieldRegionError = () => {
        this.setState({
            searchFieldRegionError: "",
            region: ""
        });
    };

    areCityAndRegionSelected = () => {
        return this.state.city !== "" && this.state.region !== "";
    };

    render() {
        const {city, region, searchFieldCityError, searchFieldRegionError} = this.state;

        const path = this.areCityAndRegionSelected() ? `/city/${city}/region/${region}` : `/`;

        return (
            <div style={{display: "flex", flexDirection: "column"}}>
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
                    <SearchField hintText="Miasto..."
                                 search={this.handleSetCity}
                                 searchFieldError={searchFieldCityError}
                                 clearSearchFieldError={this.handleClearSearchFieldCityError}
                                 source={cities}
                                 loupeIcon
                    />
                    <SearchField hintText="Województwo"
                                 search={this.handleSetRegion}
                                 searchFieldError={searchFieldRegionError}
                                 clearSearchFieldError={this.handleClearSearchFieldRegionError}
                                 source={this.props.regions}
                                 loupeIcon
                    />
                    <Link to={path}>
                        <FlatButton
                            label="Szukaj"
                            icon={<ForwardIcon color="seagreen"/>}
                            labelPosition="before"
                            style={styles.button}
                            onClick={this.handleSearch}
                        />
                    </Link>
                    <div className="start__footer">
                        Created by E.K & M.K
                    </div>
                </div>
                <div className="start__admin">
                    <Link to={`/admin`}>
                        <FlatButton
                            label="Admin"
                            icon={<ForwardIcon color="seagreen"/>}
                            labelPosition="before"
                            style={styles.button}
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

Start.propTypes = {
    setStartSearchCity: PropTypes.func.isRequired,
    setStartSearchRegion: PropTypes.func.isRequired,
    regions: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        regions: getRegions(state),
    };
};

export default connect(mapStateToProps, actions)(Start);