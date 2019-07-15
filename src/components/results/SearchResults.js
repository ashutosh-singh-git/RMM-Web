import React, {Component} from 'react';
import {getManagerSlug, truncateText} from "../../util/CommonUtil";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class SearchResults extends Component {

    render() {
        const {results} = this.props;

        if(!results){
            return null;
        }

        return (
            <>
                <div className='h4 text-muted mt-2'><span>Search Results For - </span>
                    <span className='font-weight-bolder'>Allen</span> || <span
                        className='h6'>Couldn't see the manager </span>
                    <Link to='add'><span className='h6 floral-color'>Add A Manager</span></Link>
                </div>
                <div className='row flex-row'>
                    {results.map(v => (
                            <div className='col-md-4' key={v.id}>
                                <div className='card result-card '>
                                    <div className='card-body rounded shadow-sm'>
                                        <div className='card-title'>
                                            <span className='font-weight-bolder'>
                                            <Link to={getManagerSlug(v.name, v.id)}>{v.name}</Link>
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

const mapStateToProps = (state) => {
    const {search} = state;

    return {
        results: search.results
    }
};

export default connect(mapStateToProps)(SearchResults);
