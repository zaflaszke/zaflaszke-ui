import * as React from "react/lib/ReactIsomorphic";
import PropTypes from 'prop-types';
import {AutoComplete} from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ClearIcon from 'material-ui/svg-icons/content/clear';

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
        width: "200px"
    },
    autoCompleteStyle: {
        width: "200px"
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

    handleClearInput = (event) => {
        this.setState({
            searchText: ""
        })
    };

    filter = (searchText, key) => {
        return key.indexOf(searchText) !== -1;
    };

    render() {
        return (
            <div>
                <SearchIcon style={{color: "gray"}}/>
                <AutoComplete
                    hintText={this.props.hintText}
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={cities}
                    filter={(searchText, key) => this.filter(searchText, key)}
                    openOnFocus={true}
                    textFieldStyle={styles.textFieldStyle}
                    menuProps={{menuItemStyle: styles.menuItemStyle}}
                    style={styles.autoCompleteStyle}
                >
                </AutoComplete>
                <ClearIcon onClick={this.handleClearInput} style={{cursor: "pointer", color: "gray"}}/>
            </div>
        )
    }
}

SearchField.propTypes = {
    hintText: PropTypes.string
};

export default SearchField;