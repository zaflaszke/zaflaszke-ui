import React from "react";
import {Link} from "react-router";
import {FlatButton} from "material-ui";
import "../../styles/admin.css";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Admin panel
                <div className="admin__button--back">
                    <Link to={`/`}>
                        <FlatButton
                            label="Wróć"
                            labelPosition="before"
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default AdminPanel;