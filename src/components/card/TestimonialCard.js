import React from 'react';
import {truncateText} from "../../util/CommonUtil";

const TestimonialCard = (props) => {
    const {data} = props;
    return (
        <div className='px-2' key={data.id}>
            <div className='card result-card testimonial-card'>
                <div className='card-body'>
                    <small>{truncateText(data.comments)}</small>
                    <div className='card-title mt-2 small'>
                        <span className='font-weight-bolder'>
                            {data.name}
                            </span> - {data.companyName}
                    </div>
                    <div className='card-subtitle small mb-1'>
                        <span> {data.designation} </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TestimonialCard;
