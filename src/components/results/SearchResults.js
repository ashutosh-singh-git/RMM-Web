import React, {Component} from 'react';
import {getUrlParameter} from "../../util/CommonUtil";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getSearchResult} from "../search-bar/SearchAction";
import ManagerCard from "../card/ManagerCard";

class SearchResults extends Component {

    componentDidMount() {
        const {getSearchResult} = this.props;
        const ci = getUrlParameter('ci');
        const mn = getUrlParameter('mn');
        getSearchResult(ci, mn);
    }

    render() {
        const {results} = this.props;
        const mn = getUrlParameter('mn');
        if (!results || results.length < 1) {
            return (
                <div className='container'>
                    <div className='col h4 text-muted mt-2'><span>No Search Results Found For - </span>
                        <span className='font-weight-bolder'>{getUrlParameter('mn')}</span> ||&nbsp;
                        <Link to='add'><span className='h6 floral-color'>Add A Manager</span></Link>
                    </div>
                </div>
            );
        }

        const company = results[0].companyName;

        return (
            <div className='container'>
                <div className="col h4 text-muted mt-2"><span>Search Results For - </span>
                    <span className='font-weight-bolder'>{mn ? mn : company ? company : 'Company'}</span> || <span
                        className='h6'>Couldn't see the manager </span>
                    <Link to='add'><span className='h6 floral-color'>Add A Manager</span></Link>
                </div>
                <div className='row mx-auto'>
                    {results.map(v => <ManagerCard v={v} key={v.id}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {search} = state;

    return {
        results: search.results
    }
};

export default connect(mapStateToProps, {getSearchResult})(SearchResults);
