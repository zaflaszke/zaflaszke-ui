import * as React from "react/lib/ReactIsomorphic";
import {AutoComplete} from 'material-ui';

const cities = [
    'Warszawa',
    'Wrocław',
    'Zielona Góra',
    'Gdańsk',
    'Kraków',
];

const styles = {
    textFieldStyle: {
        fontSize: "25px",
        fontWeight: "bold",
    },
    menuItemStyle: {
        fontSize: '25px'
    }
};

class SearchField extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchText: '',
        };
    }

    handleUpdateInput = (searchText, index) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    filter = (searchText, key) => {
        return key.indexOf(searchText) !== -1;
    };

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Miasto"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={cities}
                    filter={(searchText, key) => this.filter(searchText, key)}
                    openOnFocus={true}
                    textFieldStyle={styles.textFieldStyle}
                    menuProps={{menuItemStyle: styles.menuItemStyle}}
                />
            </div>
        )
    }
}

export default SearchField;