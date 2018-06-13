import React from "react";
import PropTypes from "prop-types";


class AddCityForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {open} = this.props;
        const visibility = open ? "visible" : "hidden";

        return (
            <div style={{visibility: `${visibility}`}}>
                Add new city
            </div>
        )
    }
}

AddCityForm.propTypes = {
    open: PropTypes.bool.isRequired
};

export default AddCityForm;