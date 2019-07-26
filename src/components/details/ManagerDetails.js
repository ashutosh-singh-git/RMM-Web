import React, {Component} from 'react';
import {getDesignation, getManagerId, getManagerSlug, isEmpty, truncateText} from "../../util/CommonUtil";
import {Link} from "react-router-dom";
import PersonReviewsList from "./PersonReveiwsList";
import RateManager from "../form/review/RateManager";
import {connect} from "react-redux";
import {fetchManagerReviews} from "../search-bar/SearchAction";
import {reviewFormUpdate} from "../form/review/ReviewManagerAction";

class ManagerDetails extends Component {

    componentDidMount() {
        const {match: {params}, reviewSearch, fetchManagerReviews, reviewFormUpdate} = this.props;
        // const v = results.find(r => r.id === getManagerId(params.name));
        if (isEmpty(reviewSearch)) {
            fetchManagerReviews(getManagerId(params.name));
        }
        reviewFormUpdate({key: 'managerId', value: getManagerId(params.name)})
    }

    render() {

        const {match: {params}, reviewSearch} = this.props;

        const v = reviewSearch;

        if (isEmpty(v)) {
            return null;
        }

        const isRating = params.function === 'rate';

        return (
            <>
                <div className='h4 text-muted mt-2'>
                    <span className='font-weight-bolder'>Manager Details</span>
                </div>
                <div className='row flex-row'>
                    <div className='col-md-4' key={v.id}>
                        <div className='card result-card '>
                            <div className='card-body rounded shadow-sm'>
                                <div className='card-title h4'>
                                            <span className='font-weight-bolder'>
                                            {v.managerName}
                                            </span>
                                </div>
                                <div className='card-subtitle small'><span>{getDesignation(v.designation)} @ </span>
                                    <span className='floral-color font-weight-bold'>{v.companyName}</span>
                                </div>
                                <div className='my-1 small text-muted'>{v.city.toUpperCase()}</div>
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        {
                                            Array.from({length: v.averageRating}, (item, index) => (
                                                <span className="fa fa-star orange-color" data-rating={index + 1}
                                                      key={index}/>
                                            ))
                                        }
                                        {
                                            Array.from({length: 5 - v.averageRating}, (item, index) => (
                                                <span className="fa fa-star text-muted"
                                                      data-rating={v.averageRating + index + 1} key={index}/>
                                            ))
                                        }</div>
                                    <div className='col-md-4'>
                                        <small className='orange-color'>{v.totalReviews} RATINGS</small>
                                    </div>
                                </div>
                                {v.totalReviews > 0 && v.reviews.length > 0 && v.reviews[0].comments ?
                                    <div className='mt-3'>
                                        <small>{truncateText(v.reviews[0].comments)}</small>
                                    </div> : null
                                }
                                <div>
                                    <Link
                                        to={isRating ? `${getManagerSlug(v.managerName, v.id)}` : this.props.location.pathname + '/rate'}>
                                        <button className='btn h-100 rounded cmn-btn my-3' type="submit">
                                            <span
                                                className='btn-txt'>{isRating ? 'SEE REVIEWS' : 'RATE THIS MANAGER'}</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='card result-card '>
                            <div className='card-body rounded shadow-sm'>
                                {isRating ? <RateManager/> : <PersonReviewsList list={v.reviews} manager={v.managerName}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const {search} = state;

    return {
        results: search.results,
        reviewSearch: search.reviewSearch,
    }
};

export default connect(mapStateToProps, {fetchManagerReviews, reviewFormUpdate})(ManagerDetails);
