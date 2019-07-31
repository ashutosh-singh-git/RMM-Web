import React, {Component} from "react";
import connect from "react-redux/src/connect/connect";
import {getAllCompaniesAction, getSearchResult} from "./SearchAction";
import ReactSelect from "../ReactSelect";
import {Link, withRouter} from "react-router-dom";

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
        const {managerValue, companyValue} = this.state;
        const {getSearchResult, history} = this.props;
        const ci = companyValue.value;
        const mn = managerValue.label ? managerValue.label : '';
        e.preventDefault();
        history.push(`/search?ci=${ci}&mn=${mn}`);
        getSearchResult(ci, mn);
    };

    componentDidMount() {
        this.props.getAllCompaniesAction();
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
        console.log('manager',value);
        this.setState({
            managerValue: value
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
                                <Link className="navbar-brand" to="/"><span className='logo'>Manager Review</span></Link>
                            </div>
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <ReactSelect options={managerOptions}
                                                     placeholder='Manager'
                                                     value={managerValue}
                                                     handleOnChange={this.updateManagerValue}
                                                     className='text-dark'
                                        />
                                    </div>
                                    <div className='col-5'>
                                        <ReactSelect options={companyOptions}
                                                     placeholder='Company'
                                                     value={companyValue}
                                                     handleOnChange={this.updateCompanyValue}
                                                     className='text-dark'
                                        />
                                    </div>
                                    <div className='col-2 mx-auto'>
                                        <button className='btn h-100 rounded cmn-btn search-btn' type="submit"
                                                onClick={this.onSearchSubmit}>
                                            <span className='btn-txt'>SEARCH</span>
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


export default withRouter(connect(mapStateToProps, {getAllCompaniesAction, getSearchResult})(SearchBar));
