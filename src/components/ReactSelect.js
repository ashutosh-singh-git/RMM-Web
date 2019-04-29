import React, {Component} from "react";
import Select from "react-select";

class ReactSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
        }
    }

    handleInputChange = (query, {action}) => {
        const {handleOnChange} = this.props;
        if (action === "input-change") {
            handleOnChange({value: 1000, label: query});
            this.setState({
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
        const {handleOnChange} = this.props;
        handleOnChange(pro);
        this.setState({
            openMenu: false
        });
    };

    render() {

        const {openMenu} = this.state;


        return (
            <Select {...this.props}
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
            />
        );
    }
}

export default ReactSelect;
