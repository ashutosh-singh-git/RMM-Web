import React, {Component} from 'react';

class AverageRatingComponent extends Component {

    render() {
        const {v} = this.props;

        return (
            <div className='col-lg-5 col-6'>
                {
                    Array.from({length: Math.ceil(v.averageRating/2)}, (item, index) => (
                        <span className="fa fa-star orange-color"
                              data-rating={index + 1}
                              key={index}/>
                    ))
                }
                {
                    Array.from({length: 5 - v.averageRating/2}, (item, index) => (
                        <span className="fa fa-star text-muted"
                              data-rating={v.averageRating + index + 1}
                              key={index}/>
                    ))
                }
            </div>
        )
    }
}

export default AverageRatingComponent;
