import React from "react";
import {Link} from "react-router";
import {AppBar, Drawer, FlatButton, MenuItem} from "material-ui";
import NavigationIcon from "material-ui/svg-icons/navigation/menu";
import "../../styles/admin.css";
import AddCityForm from "./add-city-form";

const styles = {
    navigationIcon: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginBottom: "8px"
    },
    drawerTitle: {
        fontSize: "25px",
        margin: "10px",
        width: "100%"
    },
    adminTitle: {
        fontSize: "40px",
    }
};

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            addCityFormOpen: false,
        };
    }

    handleOpenMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen});
    };

    handleOpenAddCityForm = () => {
        this.setState({addCityFormOpen: !this.state.addCityFormOpen});
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Admin Panel"
                    iconElementLeft={<NavigationIcon
                        onClick={this.handleOpenMenu}
                    />}
                    iconStyleLeft={styles.navigationIcon}
                />

                <Drawer
                    open={this.state.menuOpen}
                    docked={false}
                    onRequestChange={(open) => this.setState({menuOpen: open})}
                >
                    <span style={styles.drawerTitle}> Wybierz akcje: </span>
                    <MenuItem onClick={this.handleOpenAddCityForm}>Dodaj miasto</MenuItem>
                    <MenuItem>Dodaj kategorie</MenuItem>
                </Drawer>

                <span style={styles.adminTitle}>
                    Witaj w panelu admina - i tutaj bedzie nazwa uzytkownika jak beda granty
                </span>

                <AddCityForm open={this.state.addCityFormOpen} cancel={this.handleOpenAddCityForm}/>
                <div className="admin__button--back">
                    <Link to={`/`}>
                        <FlatButton
                            label="Wróć"
                            labelPosition="before"
                        />
                    </Link>
                </div>

            </div>
        );
    }
}

export default AdminPanel;