import React, {Component} from 'react';
import {getManagerSlug, truncateText} from "../../util/CommonUtil";
import {Link} from "react-router-dom";
import PersonReviewsList from "./PersonReveiwsList";
import RateManager from "../form/review/RateManager";

const v = {
    id: 23,
    name: 'Ashutosh Singh',
    designation: 'Project Engineer',
    company: 'Wynk Ltd.',
    location: 'DELHI',
    totalReviews: 34,
    averageRating: 4,
    promotedReview: {
        reviewer: 'Nayak Singh',
        comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
            'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
            ' renders both components to stop this behavior we need to use the exact prop'
    }
}

class ManagerDetails extends Component {

    render() {

        const {match: {params}} = this.props;

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
                                            {v.name}
                                            </span>
                                </div>
                                <div className='card-subtitle small'><span>{v.designation} @ </span>
                                    <span className='floral-color font-weight-bold'>{v.company}</span>
                                </div>
                                <div className='my-1 small text-muted'>{v.location}</div>
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
                                <div className='mt-3'>
                                    <small>{truncateText(v.promotedReview.comments)}</small>
                                </div>
                                <div>
                                    <Link to={isRating ? `${getManagerSlug(v.name)}`: this.props.location.pathname + '/rate'}>
                                        <button className='btn h-100 rounded cmn-btn my-3' type="submit">
                                        <span className='btn-txt'>{isRating ? 'SEE REVIEWS' :'RATE THIS MANAGER'}</span>
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='card result-card '>
                            <div className='card-body rounded shadow-sm'>
                                {isRating ? <RateManager/> : <PersonReviewsList/>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ManagerDetails;
