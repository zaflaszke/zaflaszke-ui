import React from "react";
import PropTypes from "prop-types";
import {FlatButton, TextField} from "material-ui";
import SaveIcon from "material-ui/svg-icons/content/save";
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import ClearIcon from 'material-ui/svg-icons/content/clear';
import SearchField from "../common/search-field";
import {getRegions} from "../../selectors/start-selectors";
import {connect} from "react-redux";


const styles = {
    visible: {
        fontSize: "32px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
    },
    inVisible: {display: "none"},
    textFieldStyle: {fontSize: "25px", width: "250px", fontWeight: "bold"},
    errorStyle: {fontSize: "22px", textAlign: "left"},
    iconStyle: {color: "gray", marginTop: "18px"}
};

class AddCityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            region: "",
            cityError: "",
            regionError: ""
        };
    }

    handleCityInput = (event, value) => {
        this.setState({city: value});
    };

    handleRegionInput = (event, value) => {
        this.setState({region: value});
    };

    handleSaveNewCity = () => {
        const {city, region} = this.state;

        if (city === "") {
            this.setState({cityError: "Miasto nie może być puste"});
        } else {
            this.setState({cityError: ""});
        }

        if (region === "") {
            this.setState({regionError: "Wybierz województwo"});
        } else {
            this.setState({regionError: ""});
        }

        if (region !== "" && city !== "") {
            // console.log('Save new city, call action on redux -> service -> persist');
        }
    };

    handleCancelAddNewCity = () => {
        this.setState({city: "", region: "", cityError: "", regionError: ""});
        this.props.cancel();
    };

    handleClearNewCity = () => {
        this.setState({city: ""});
    };

    handleClearNewRegion = () => {
        this.setState({region: ""});
    };


    render() {
        const {open} = this.props;
        const style = open ? styles.visible : styles.inVisible;

        return (
            <div style={style}>
                Dodaj nowe miasto
                <div>
                    <TextField
                        hintText="Nazwa miasta"
                        floatingLabelText="Nazwa miasta"
                        floatingLabelFixed
                        onChange={this.handleCityInput}
                        value={this.state.city}
                        style={styles.textFieldStyle}
                        errorText={this.state.cityError}
                        errorStyle={styles.errorStyle}
                    />
                    <ClearIcon onClick={this.handleClearNewCity} style={{...styles.iconStyle, cursor: "pointer"}}/>
                </div>
                <div>
                    <SearchField hintText={"Nazwa województwa"}
                                 search={this.handleRegionInput}
                                 searchFieldError={this.state.regionError}
                                 clearSearchFieldError={this.handleClearNewRegion}
                                 source={this.props.regions}
                                 loupeIcon={false}
                    />
                </div>
                <div style={{marginTop: "40px"}}>
                    <FlatButton
                        label={"Zapisz"}
                        icon={<SaveIcon/>}
                        onClick={this.handleSaveNewCity}
                    />
                    <FlatButton
                        label={"Anuluj"}
                        icon={<CancelIcon/>}
                        onClick={this.handleCancelAddNewCity}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        regions: getRegions(state),
    };
};


AddCityForm.propTypes = {
    open: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired,
    regions: PropTypes.array
};

export default connect(mapStateToProps)(AddCityForm);