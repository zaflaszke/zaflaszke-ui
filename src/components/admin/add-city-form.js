import React from "react";
import PropTypes from "prop-types";
import {FlatButton, TextField} from "material-ui";
import SaveIcon from "material-ui/svg-icons/content/save";
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import ClearIcon from 'material-ui/svg-icons/content/clear';


const styles = {
    visible: {fontSize: "32px", width: "100%", textAlign: "center"},
    inVisible: {display: "none"},
    textFieldStyle: {fontSize: "25px"}
};

class AddCityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            region: ""
        };
    }

    handleCityInput = (event, value) => {
        this.setState({city: value});
    };

    handleRegionInput = (event, value) => {
        this.setState({region: value});
    };

    handleSaveNewCity = () => {
        console.log('Save new city, call action on redux -> service -> persist');
    };

    handleCancelAddNewCity = () => {
        this.setState({
            city: "",
            region: ""
        });
        this.props.cancel();
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
                />
                {/*<ClearIcon onClick={this.handleClearInput} style={{...styles.iconStyle, cursor: "pointer"}}/>*/}
                <br/>
                <TextField
                    hintText="Nazwa województwa"
                    floatingLabelText="Nazwa województwa"
                    floatingLabelFixed
                    onChange={this.handleRegionInput}
                    value={this.state.region}
                    style={styles.textFieldStyle}
                />
                {/*<ClearIcon onClick={this.handleClearInput} style={{...styles.iconStyle, cursor: "pointer"}}/>*/}
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