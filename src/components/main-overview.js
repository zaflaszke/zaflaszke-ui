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
                <div>
                    <span> Welcome to zaflaszke.pl </span>
                </div>
                <div>
                    <SearchField/>
                </div>
            </div>
        )
    }
}

export default MainOverview;