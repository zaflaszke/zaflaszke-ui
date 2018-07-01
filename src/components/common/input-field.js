import React from "react";
import {TextField} from "material-ui";
import ClearIcon from 'material-ui/svg-icons/content/clear';
import PropTypes from 'prop-types';


const styles = {
    textFieldStyle: {fontSize: "25px", width: "250px", fontWeight: "bold"},
    errorStyle: {fontSize: "15px", textAlign: "left"},
    iconStyle: {color: "gray", marginTop: "42px"}
};

const InputField = (props) => {
    const {hintText, floatingLabelText, onChange, input, errorText, onClear} = props;

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <TextField
                    hintText={hintText}
                    floatingLabelText={floatingLabelText}
                    floatingLabelFixed
                    onChange={onChange}
                    value={input}
                    style={styles.textFieldStyle}
                    errorText={errorText}
                    errorStyle={styles.errorStyle}
                />
            </div>
            <div>
                <ClearIcon onClick={onClear} style={{...styles.iconStyle, cursor: "pointer"}}/>
            </div>
        </div>
    );

};

InputField.propTypes = {
    hintText: PropTypes.string.isRequired,
    floatingLabelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    errorText: PropTypes.string.isRequired,
    onClear: PropTypes.func.isRequired
};

export default InputField;
