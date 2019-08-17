import React, {Component} from 'react';
import {getDesignation, getManagerSlug, getUrlParameter, truncateText} from "../../util/CommonUtil";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getSearchResult} from "../search-bar/SearchAction";
import AverageRatingComponent from "../AverageRatingComponent";

class SearchResults extends Component {

    componentDidMount() {
        const {getSearchResult} = this.props;
        const ci = getUrlParameter('ci');
        const mn = getUrlParameter('mn');
        getSearchResult(ci, mn);
        console.log(ci, mn);
    }

    render() {
        const {results} = this.props;
        const mn = getUrlParameter('mn');
        if (!results || results.length < 1) {
            return (
                <div className='h4 text-muted mt-2'><span>No Search Results Found For - </span>
                    <span className='font-weight-bolder'>{getUrlParameter('mn')}</span> ||&nbsp;
                    <Link to='add'><span className='h6 floral-color'>Add A Manager</span></Link>
                </div>
            );
        }

        const company = results[0].companyName;

        return (
            <>
                <div className="col h4 text-muted mt-2"><span>Search Results For - </span>
                    <span className='font-weight-bolder'>{mn ? mn : company ? company : 'Company'}</span> || <span
                        className='h6'>Couldn't see the manager </span>
                    <Link to='add'><span className='h6 floral-color'>Add A Manager</span></Link>
                </div>
                <div className='row mx-auto'>
                    {results.map(v => (
                            <div className='col-sm-6 col-lg-4' key={v.id}>
                                <div className='card result-card '>
                                    <div className='card-body rounded shadow-sm'>
                                        <div className='card-title'>
                                            <span className='font-weight-bolder'>
                                            <Link to={getManagerSlug(v.managerName, v.id)}>{v.managerName}</Link>
                                            </span>
                                        </div>
                                        <div className='card-subtitle small'><span>{getDesignation(v.designation)} @ </span>
                                            <span className='floral-color font-weight-bold'>{v.companyName}</span>
                                        </div>
                                        <div className='h6 text-muted'>{v.city}</div>
                                        <div className='row mt-3'>
                                            <AverageRatingComponent v={v}/>
                                            <div className='col-lg-5 col-6'>
                                                <small className='orange-color'>{v.totalReviews} RATINGS</small>
                                            </div>
                                        </div>
                                        {v.totalReviews > 0 && v.promotedReview && v.promotedReview.comments ?
                                            <div className='mt-3'>
                                                <div><i className="fa fa-quote-left" style={{opacity: 0.3}}/></div>
                                                <small>{truncateText(v.promotedReview.comments)}</small>
                                                <footer
                                                    className="blockquote-footer">{v.promotedReview.reviewer}</footer>
                                            </div>
                                            :
                                            <div className='mt-3'>
                                                <span
                                                    className='text-muted'>{v.totalReviews} reviews for this manager yet</span>
                                                <Link to={`${getManagerSlug(v.managerName, v.id)}/rate`} className="text-decoration-none" >
                                                    <button className='btn h-100 rounded cmn-btn my-3' type="submit">
                                                        <span className='btn-txt small'>{'RATE THIS MANAGER'}</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </>
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
