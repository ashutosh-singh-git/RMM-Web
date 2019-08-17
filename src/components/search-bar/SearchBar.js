import React, {Component} from "react";
import connect from "react-redux/src/connect/connect";
import {getAllCompaniesAction, getSearchResult} from "./SearchAction";
import ReactSelect from "../ReactSelect";
import {withRouter} from "react-router-dom";

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
        console.log(value);
        this.setState({
            companyValue: value.label === '' ? null : value
        })
    };

    updateManagerValue = (value) => {
        this.setState({
            managerValue: value
        })
    };


    render() {

        const {managerOptions, companyOptions, companyValue, managerValue} = this.state;
        return (

            <div className='row w-100 m-0'>
                <div className='col-5 pr-1'>
                    <ReactSelect options={managerOptions}
                                 placeholder='Manager'
                                 value={managerValue}
                                 handleOnChange={this.updateManagerValue}
                                 className='text-dark'
                    />
                </div>
                <div className='col-5 px-1'>
                    <ReactSelect options={companyOptions}
                                 placeholder='Company'
                                 value={companyValue}
                                 handleOnChange={this.updateCompanyValue}
                                 className='text-dark'
                    />
                </div>
                <div className='col-2 mx-auto pl-1'>
                    <button className='h-100 w-100 cmn-btn text-center' type="submit"
                            onClick={this.onSearchSubmit}>
                        <i className="material-icons">search</i>
                        <span className="d-none d-lg-flex">Search</span>
                    </button>
                </div>
            </div>

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
