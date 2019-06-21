import React, {Component} from 'react';
import {getManagerSlug, truncateText} from "../../util/CommonUtil";
import {Link} from "react-router-dom";

const data = [
    {
        id: 23,
        name: 'Ashutosh Singh',
        designation: 'Project Engineer',
        company: 'Wynk Ltd.',
        location: 'Delhi',
        totalReviews: 34,
        averageRating: 4,
        promotedReview: {
            reviewer: 'Nayak Singh',
            comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                ' renders both components to stop this behavior we need to use the exact prop'
        }
    },
    {
        id: 22,
        name: 'Behuda Sharma',
        designation: 'CTO',
        company: 'Airtel Ltd.',
        location: 'Hyderabad',
        totalReviews: 3,
        averageRating: 2,
        promotedReview: {
            reviewer: 'Nayak Singh',
            comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                ' renders both components to stop this behavior we need to use the exact prop'
        }
    },
    {
        id: 21,
        name: 'Nalank Singh',
        designation: 'CEO',
        company: 'Aas Pass Ltd.',
        location: 'Gurugram',
        totalReviews: 1,
        averageRating: 5,
        promotedReview: {
            reviewer: 'Nayak Singh',
            comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                ' renders both components to stop this behavior we need to use the exact prop'
        }
    },
    {
        id: 20,
        name: 'Pagal Yadav',
        designation: 'Manager',
        company: 'Champu Champ Technologies.',
        location: 'Gaon',
        totalReviews: 12,
        averageRating: 2,
        promotedReview: {
            reviewer: 'Nayak Singh',
            comments: 'Best teacher ever seen. But still, Home component is also rendered in the screen this happens ' +
                'because of our home path is ’/’ and users path is ‘/users’ slash is same in both paths so that it' +
                ' renders both components to stop this behavior we need to use the exact prop'
        }
    },
]

class SearchResults extends Component {

    render() {
        return (
            <>
                <div className='h4 text-muted mt-2'><span>Search Results For - </span>
                    <span className='font-weight-bolder'>Allen</span> || <span
                        className='h6'>Couldn't see the manager </span>
                    <Link to='add'><span className='h6 floral-color'>Add A Manager</span></Link>
                </div>
                <div className='row flex-row'>
                    {data.map(v => (
                            <div className='col-md-4' key={v.id}>
                                <div className='card result-card '>
                                    <div className='card-body rounded shadow-sm'>
                                        <div className='card-title'>
                                            <span className='font-weight-bolder'>
                                            <Link to={getManagerSlug(v.name)}>{v.name}</Link>
                                            </span>
                                        </div>
                                        <div className='card-subtitle small'><span>{v.designation} @ </span>
                                            <span className='floral-color font-weight-bold'>{v.company}</span>
                                        </div>
                                        <div className='h6 text-muted'>{v.location}</div>
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
                                            <div><i className="fa fa-quote-left" style={{opacity: 0.3}}/></div>
                                            <small>{truncateText(v.promotedReview.comments)}</small>
                                            <footer className="blockquote-footer">{v.promotedReview.reviewer}</footer>
                                        </div>
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

export default SearchResults;
