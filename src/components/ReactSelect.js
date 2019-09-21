import React, {Component} from "react";
import Select from "react-select";

class ReactSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
        }

        this.selectRef = React.createRef();
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

    handleFocus = () => {
        if (this.props.value) {
            this.selectRef.state.inputValue = this.props.value.label;
        }
    };

    handleMenuClose = () => {
        const {handleOnChange, value, noOption} = this.props;
        if(!noOption && value && value.value === 1000) {
            handleOnChange('');
        }
        this.selectRef.blur();
    };

    customStyles = {
        control: base => ({
            ...base,
            '&:hover': {
                cursor: 'pointer'
            }
        })
    };

    render() {

        const {openMenu} = this.state;

        return (
            <Select {...this.props}
                    ref={ref => {
                        this.selectRef = ref;
                    }}
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
                    onMenuClose={this.handleMenuClose}
                    onFocus={this.handleFocus}
                    styles={this.customStyles}
            />
        );
    }
}

export default ReactSelect;
