import React from "react";
import SearchField from "./search-field";
import "../styles/main-overview.css";

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
                <SearchField/>
            </div>
        )
    }
}

export default MainOverview;