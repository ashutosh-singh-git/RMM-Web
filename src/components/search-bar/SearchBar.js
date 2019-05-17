import React, {Component} from "react";
import connect from "react-redux/src/connect/connect";
import {getAllCompaniesAction} from "./SearchAction";
import ReactSelect from "../ReactSelect";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyOptions: [],
            managerOptions: [],
            companyValue: '',
            managerValue: ''
        }
    }

    onSearchSubmit = (e) => {
        console.log(e);
        e.preventDefault();
    };

    componentDidMount() {
        // this.props.getAllCompaniesAction();
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        const {companies} = nextProps;
        let companyOptions;
        let changes = {};
        if (companies && companies.length > 0) {
            companyOptions = companies.map(val => {
                return {value: val.id, label: val.name}
            });
            changes = {...prevState, companyOptions: companyOptions};
        }

        return Object.keys(changes).length > 0 ? changes : null;
    }

    updateCompanyValue = (value) => {
        this.setState({
            companyValue: value
        })
    };

    updateManagerValue = (value) => {
        this.setState({
            mangerValue: value
        })
    };


    render() {

        const {managerOptions, companyOptions, companyValue, managerValue} = this.state;
        return (

            <nav className="nav nav-bar" sticky='top'>
                <div className='container-fluid'>
                    <div className="search-bar">
                        <div className='row'>
                            <div className='col-2'>
                                <a className="navbar-brand" href="/"><span className='logo'>Manager Review</span></a>
                            </div>
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <ReactSelect options={managerOptions}
                                                     placeholder='Manager'
                                                     value={managerValue}
                                                     handleOnChange={this.updateManagerValue}
                                        />
                                    </div>
                                    <div className='col-5'>
                                        <ReactSelect options={companyOptions}
                                                     placeholder='Company'
                                                     value={companyValue}
                                                     handleOnChange={this.updateCompanyValue}
                                        />
                                    </div>
                                    <div className='col-2 mx-auto'>
                                        <button className='btn h-100 rounded search-btn' type="submit"
                                                onClick={this.onSearchSubmit}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2 my-auto'>
                                <span className='float-right'>Login | Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}


const mapStateToProps = (state) => {
    const {search} = state;

    return {
        companies: search.companies
    }
};


export default connect(mapStateToProps, {getAllCompaniesAction})(SearchBar);
