import React from "react";
import {FEEDBACK_OPTIONS, FEEDBACK_RATING, REVIEW_LABEL_TYPES} from "../../config/CommonConfig";
import {formatDate} from "../../util/CommonUtil";

const PersonReviewsList = ({list, manager}) => {
    const data = list;

    if (!data || data.length < 1) {
        return <p className='text-muted mb-3'>No reviews yet. Be the first one to review {manager}!</p>;
    }

    return (

        <>
            <p className='font-weight-bolder h5 text-muted mb-3'>Reviews & Ratings</p>
            {data.map(val => (
                <div key={val.id} className='flex-row my-2 medium'>
                    <div>
                        <span className=' font-weight-bold'>{val.name} </span>
                        <span className='mx-2'>
                                            {
                                                Array.from({length: Math.floor(val.overallRating / 2)}, (item, index) => (
                                                    <span className="fa fa-star orange-color" data-rating={index + 1}
                                                          key={index}/>
                                                ))
                                            }
                            {
                                Array.from({length: 5 - Math.floor(val.overallRating / 2)}, (item, index) => (
                                    <span className="fa fa-star text-muted"
                                          data-rating={val.overallRating + index + 1} key={index}/>
                                ))
                            }</span>
                        |
                        <span className='small text-muted mx-2'>Posted On - {formatDate(new Date(val.createdAt))}</span>
                        <div className='text-muted small row'>
                            <div className='col-5 col-lg-4'>
                                <i className="material-icons small floral-color">radio_button_checked</i>
                                <span> {val.reviewerExperience} of experience</span>
                            </div>
                            <div className='col-5 col-lg-4'>
                                <i className="material-icons small floral-color">radio_button_checked</i>
                                <span> {REVIEW_LABEL_TYPES.LABEL3[val.reviewerRelation] === 'None' ?
                                    `Didn't work with ${manager}` :
                                    `Worked ${REVIEW_LABEL_TYPES.LABEL3[val.reviewerRelation]} ${manager}`}
                                    </span>
                            </div>
                        </div>
                        <p className='text-muted my-3'>{val.comments}</p>
                        <div className='mb-3'>
                            {Object.keys(val.feedback).map(re => {
                                const feedbackKey = FEEDBACK_OPTIONS[re.toUpperCase()];
                                return (
                                    <div key={re}>
                                        <span className='font-weight-bold text-capitalize'>{feedbackKey}</span> - <span>
                                        <span
                                            className='text-muted'>{FEEDBACK_RATING[feedbackKey][val.feedback[re] - 1]}</span></span>
                                    </div>
                                )
                            })}
                            <div className=''>
                                <span className='font-weight-bold text-capitalize'>Will Recommend</span> - <span><span
                                className='text-muted'>{Boolean(val.isRecommended).toString()}</span></span>
                            </div>
                        </div>
                        <p className='text-muted  row'>
                            <span className='col-md-4 col-lg-3'>Was this Helpful?</span>
                            <span className='col-md-4 col-lg-3'><button
                                className='btn-transparent fa fa-thumbs-up floral-color'
                                aria-hidden="true"/>
                                {val.helpful} People</span>
                            <span className='col-md-4 col-lg-3'><button
                                className='btn-transparent fa fa-thumbs-down floral-color'
                                aria-hidden="true"/>
                                {val.notHelpful} People</span>
                        </p>
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    )
};

export default PersonReviewsList;
