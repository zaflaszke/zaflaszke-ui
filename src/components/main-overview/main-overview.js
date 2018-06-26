import React from "react";
import PropTypes from "prop-types";
import {FlatButton} from "material-ui";
import {Link} from "react-router";


class MainOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {city, region} = this.props.params;

        return (
            <div>
                <h1>
                    {city} w województwie {region}
                </h1>
                <Link to={`/`}>
                    <FlatButton
                        label="Wróć"
                        labelPosition="before"
                    />
                </Link>
            </div>
        );
    }
}

MainOverview.propTypes = {
    params: PropTypes.shape({
        city: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired
    })
};

export default MainOverview;