import React from "react";
import PropTypes from "prop-types";

class MainOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {city} = this.props.params;

        return(
            <h1>
                {city}
            </h1>
        )
    }
}

MainOverview.propTypes = {
    params: PropTypes.shape({
        city: PropTypes.string.isRequired
    })
};

export default MainOverview;