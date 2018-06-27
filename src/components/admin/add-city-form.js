import React from "react";
import PropTypes from "prop-types";
import {FlatButton, TextField} from "material-ui";
import SaveIcon from "material-ui/svg-icons/content/save";
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import ClearIcon from 'material-ui/svg-icons/content/clear';


const styles = {
    visible: {fontSize: "32px", width: "100%", textAlign: "center"},
    inVisible: {display: "none"},
    textFieldStyle: {fontSize: "25px"},
    errorStyle: {fontSize: "22px", textAlign: "left"}
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
            console.log('Save new city, call action on redux -> service -> persist');
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
                Dodaj nowe miasto <br/>
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
                <br/>
                <TextField
                    hintText="Nazwa województwa"
                    floatingLabelText="Nazwa województwa"
                    floatingLabelFixed
                    onChange={this.handleRegionInput}
                    value={this.state.region}
                    style={styles.textFieldStyle}
                    errorText={this.state.regionError}
                    errorStyle={styles.errorStyle}
                />
                <ClearIcon onClick={this.handleClearNewRegion} style={{...styles.iconStyle, cursor: "pointer"}}/>
                <br/>
                <br/>
                <br/>
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
        );
    }
}

AddCityForm.propTypes = {
    open: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired
};

export default AddCityForm;