import React, {Component} from "react";
import Select from "react-select";

class ReactSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
            value: {value: 1000, label: ''}
        }
    }

    handleInputChange = (query, {action}) => {
        if (action === "input-change") {
            this.setState({
                value: {value: 1000, label: query},
                openMenu: true
            });
        }

        if (query.length < 1) {
            this.setState({openMenu: false});
        }
    };

    hideMenu = () => {
        this.setState({openMenu: false});
    };

    handleChange = (pro) => {
        this.setState({
            value: pro,
            openMenu: false
        });
    };

    render() {

        const {openMenu, value} = this.state;

        return (
            <Select {...this.props}
                    value={value}
                    onChange={this.handleChange}
                    components={
                        {
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null
                        }
                    }
                    noOptionsMessage={() => null}
                    onInputChange={this.handleInputChange}
                    menuIsOpen={openMenu}
                    onBlur={this.hideMenu}
                    keepCursorAtEnd={true}
            />
        );
    }
}

export default ReactSelect;
