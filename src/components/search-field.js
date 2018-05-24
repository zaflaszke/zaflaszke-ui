import * as React from "react/lib/ReactIsomorphic";
import {AutoComplete} from 'material-ui';

const cities = [
    'Warszawa',
    'Wrocław',
    'Zielona Góra',
    'Gdańsk',
    'Kraków',
];

class SearchField extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchText: '',
        };
    }

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = () => {
        this.setState({
            searchText: '',
        });
    };

    render() {
        return(
            <div>
                <AutoComplete
                    hintText="Miasto"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={cities}
                    filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                    openOnFocus={true}
                />
            </div>
        )
    }
}

export default SearchField;