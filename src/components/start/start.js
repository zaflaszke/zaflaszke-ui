import React from "react";
import SearchField from "../common/search-field";
import "../../styles/start.css";
import {FlatButton} from "material-ui";
import ForwardIcon from "material-ui/svg-icons/content/forward";
import {Link} from "react-router";

const styles = {
    searchButton: {
        marginTop: "50px"
    }
};

class Start extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
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
                <SearchField hintText="Miasto..."/>
                <Link to="/main">
                    <FlatButton
                        label="Szukaj"
                        icon={<ForwardIcon color="seagreen"/>}
                        labelPosition="before"
                        style={styles.searchButton}
                    />
                </Link>
                <div className="start__footer">
                    Created by E.K & M.K
                </div>
            </div>
        )
    }
}

export default Start;