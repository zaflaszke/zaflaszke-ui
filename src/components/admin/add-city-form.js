import React from "react";
import PropTypes from "prop-types";
import {FlatButton, TextField} from "material-ui";
import SaveIcon from "material-ui/svg-icons/content/save";
import CancelIcon from "material-ui/svg-icons/navigation/cancel";


const styles = {
    visible: {fontSize: "25px", width: "100%", textAlign: "center"},
    inVisible: {display: "none", fontSize: "25px", width: "100%", textAlign: "center"}
};

class AddCityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            region: ""
        }
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
                Add new city <br/>
                <TextField
                    hintText="Nazwa miasta"
                    floatingLabelText="Nazwa miasta"
                    floatingLabelFixed={true}
                    onChange={this.handleCityInput}
                    value={this.state.city}
                />
                <br/>
                <TextField
                    hintText="Nazwa województwa"
                    floatingLabelText="Nazwa województwa"
                    floatingLabelFixed={true}
                    onChange={this.handleRegionInput}
                    value={this.state.region}
                />
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
        )
    }
}

AddCityForm.propTypes = {
    open: PropTypes.bool.isRequired,
    cancel: PropTypes.func.isRequired
};

export default AddCityForm;