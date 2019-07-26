import React from "react";
import {FEEDBACK_OPTIONS, FEEDBACK_RATING} from "../../config/CommonConfig";
import {formatDate} from "../../util/CommonUtil";

// const data = [
//     {
//         id: 1,
//         name: 'Ashutosh Singh',
//         notHelpful: 2,
//         helpful: 1,
//         postedOn: '11-02-1992',
//         rating: 4,
//         feedback: {
//             Skills: 'Excellent',
//             Behaviour: 'Calm',
//             WillRecommend: 'Yes'
//         },
//         comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
//             'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
//             ' renders both components to stop this behavior we need to use the exact prop'
//     }
// ];

const PersonReviewsList = ({list}) => {
    const data = list;

    console.log(data);
    if (!data || data.length < 1) {
        return null;
    }

    return (

        <>
            <p className='font-weight-bolder h5 text-muted mb-3'>Reviews & Ratings</p>
            {data.map(val => (
                <div key={val.id} className='flex-row my-2'>
                    <div>
                        <span className='small font-weight-bold'>{val.name} </span>
                        <span className='mx-2'>
                                            {
                                                Array.from({length: val.overallRating}, (item, index) => (
                                                    <span className="fa fa-star orange-color" data-rating={index + 1}
                                                          key={index}/>
                                                ))
                                            }
                            {
                                Array.from({length: 5 - val.overallRating}, (item, index) => (
                                    <span className="fa fa-star text-muted"
                                          data-rating={val.overallRating + index + 1} key={index}/>
                                ))
                            }</span>
                        |
                        <span className='small text-muted mx-2'>Posted On - {formatDate(new Date(val.createdAt))}</span>
                        <p className='text-muted small'>{val.comments}</p>
                        <div className='mb-2'>
                            {Object.keys(val.feedback).map(re => {
                                const feedbackKey = FEEDBACK_OPTIONS[re.toUpperCase()];
                                return (
                                    <div className='small' key={re}>
                                        <span className='font-weight-bold text-capitalize'>{feedbackKey}</span> - <span>
                                        <span className='text-muted'>{FEEDBACK_RATING[feedbackKey][val.feedback[re] - 1]}</span></span>
                                    </div>
                                )
                            })}
                            <div className='small'>
                                <span className='font-weight-bold text-capitalize'>Will Recommend</span> - <span><span
                                className='text-muted'>{Boolean(val.isRecommended).toString()}</span></span>
                            </div>
                        </div>
                        <p className='text-muted small row'>
                            <span className='col-md-3'>Was this Helpful?</span>
                            <span className='col-md-2'><button
                                className='btn-transparent fa fa-thumbs-up floral-color'
                                aria-hidden="true"/>
                                {val.helpful} People</span>
                            <span className='col-md-2'><button
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
