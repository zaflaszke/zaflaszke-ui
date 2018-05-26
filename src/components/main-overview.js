import React from "react";
import SearchField from "./search-field";
import "../styles/main-overview.css";
import {FlatButton} from "material-ui";
import ForwardIcon from "material-ui/svg-icons/content/forward";

const styles = {
    searchButton: {
        marginTop: "50px"
    }
};

class MainOverview extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-overview">
                <div style={{display: "flex"}}>
                    <div className="main-overview__title">
                        Zaflaszkę.pl
                    </div>
                    <img src={require("../images/bottle.svg")} className="main-overview__image"/>
                </div>
                <div className="main-overview__subtitle">
                    Mała przysługa, za dużą przyjemność!
                </div>
                <SearchField hintText="Miasto..."/>
                <FlatButton
                    label="Szukaj"
                    icon={<ForwardIcon color="seagreen"/>}
                    labelPosition="before"
                    style={styles.searchButton}
                />
            </div>
        )
    }
}

export default MainOverview;