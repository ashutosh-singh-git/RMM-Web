import React, {Component} from 'react';
import {getDesignation, getManagerId, getManagerSlug, isEmpty, truncateText} from "../../util/CommonUtil";
import {Link} from "react-router-dom";
import PersonReviewsList from "./PersonReveiwsList";
import RateManager from "../form/review/RateManager";
import {connect} from "react-redux";
import {fetchManagerReviews} from "../search-bar/SearchAction";
import {reviewFormUpdate} from "../form/review/ReviewManagerAction";
import AverageRatingComponent from "../AverageRatingComponent";

class ManagerDetails extends Component {

    componentDidMount() {
        const {match: {params}, reviewSearch, fetchManagerReviews, reviewFormUpdate} = this.props;
        const managerId = getManagerId(params.name);
        if (isEmpty(reviewSearch) || reviewSearch.id !== managerId) {
            fetchManagerReviews(getManagerId(params.name));
        }
        reviewFormUpdate({key: 'managerId', value: managerId})
    }


    render() {

        const {match: {params}, reviewSearch} = this.props;

        const v = reviewSearch;

        if (isEmpty(v)) {
            return null;
        }

        const isRating = params.function === 'rate';

        return (
            <div className='container fill'>
                <div className='col h4 text-muted mt-2'>
                    <span className='font-weight-bolder'>Manager Details</span>
                </div>
                <div className='row mx-auto'>
                    <div className='col col-md-4' key={v.id}>
                        <div className='card result-card '>
                            <div className='card-body rounded shadow-sm'>
                                <div className='card-title h4 mb-1'>
                                            <span className='font-weight-bolder'>
                                                {v.managerName}
                                            </span>
                                </div>
                                <div className='card-subtitle small mb-1'><span>{getDesignation(v.designation)} @ </span>
                                    <span className='floral-color font-weight-bold'>{v.companyName}</span>
                                </div>
                                <div className='my-1 small text-muted'>{v.city.toUpperCase()}</div>
                                <div className='row mt-3'>
                                    <AverageRatingComponent v={v}/>
                                    <div className='col-lg-5 col-6'>
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
                                        to={isRating ? `${getManagerSlug(v.managerName, v.id)}` : this.props.location.pathname + '/rate'}
                                        className="text-decoration-none"
                                    >
                                        <button className='btn h-100 rounded cmn-btn my-3' type="submit">
                                            <span
                                                className='small'>{isRating ? 'SEE REVIEWS' : 'RATE THIS MANAGER'}</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='card result-card '>
                            <div className='card-body rounded shadow-sm'>
                                {isRating ? <RateManager/> :
                                    <PersonReviewsList list={v.reviews} manager={v.managerName}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
