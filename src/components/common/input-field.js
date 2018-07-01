import React from "react";
import {TextField} from "material-ui";
import ClearIcon from 'material-ui/svg-icons/content/clear';

const styles = {
    textFieldStyle: {fontSize: "25px", width: "250px", fontWeight: "bold"},
    errorStyle: {fontSize: "15px", textAlign: "left"},
    iconStyle: {color: "gray", marginTop: "42px"}
};

class InputField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <TextField
                        hintText={this.props.hintText}
                        floatingLabelText={this.props.floatingLabelText}
                        floatingLabelFixed
                        onChange={this.props.onChange}
                        value={this.props.input}
                        style={styles.textFieldStyle}
                        errorText={this.props.errorText}
                        errorStyle={styles.errorStyle}
                    />
                </div>
                <div>
                    <ClearIcon onClick={this.props.onClear} style={{...styles.iconStyle, cursor: "pointer"}}/>
                </div>
            </div>
        );
    }
}

export default InputField;
