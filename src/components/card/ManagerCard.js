import React from 'react';
import {Link} from "react-router-dom";
import {getDesignation, getManagerSlug, truncateText} from "../../util/CommonUtil";
import AverageRatingComponent from "../AverageRatingComponent";

const ManagerCard = (props) => {
    const {v, slider} = props;
    return (
        <div className={slider ? 'px-2' : 'col-sm-6 col-lg-4'} key={v.id}>
            <div className='card result-card '>
                <div className='card-body rounded shadow-sm'>
                    <div className='card-title mb-1'>
                                                <span className='font-weight-bolder'>
                                                    <Link
                                                        to={getManagerSlug(v.managerName, v.id)}>{v.managerName}</Link>
                                                </span>
                    </div>
                    <div className='card-subtitle small mb-1'>
                        <span>{getDesignation(v.designation)} @ </span>
                        <span className='floral-color font-weight-bold'>{v.companyName}</span>
                    </div>
                    <div className='small text-muted'>{v.city.toUpperCase()}</div>
                    <div className='row mt-3'>
                        <AverageRatingComponent v={v}/>
                        <div className='col-lg-5 col-6'>
                            <small className='orange-color'>{v.totalReviews} REVIEWS</small>
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
                            <div><i className="fa fa-quote-left" style={{opacity: 0.3}}/></div>
                            <small>No Comments yet</small>
                            <footer className="small text-muted">Be the first one to comment!</footer>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ManagerCard;
