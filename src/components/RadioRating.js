import React, {Component} from 'react';
import {reviewFormUpdate} from "./form/review/ReviewManagerAction";
import {connect} from "react-redux";

class RadioRating extends Component {

    constructor(props) {
        super(props);

        const {name, reviewFormUpdate} = props;
        reviewFormUpdate({key: name, value: true});
    }

    radioClicked = (isRecommended) => {
        const {name, reviewFormUpdate} = this.props;
        reviewFormUpdate({key: name, value: isRecommended});
    };

    render() {

        return (
            <div className='small radio-rating'>
                <input type="radio" name="yes" defaultChecked id="r1" onClick={() => this.radioClicked(true)}
                       value="yes"/><label className="mr-4" htmlFor="r1">YES</label>
                <input type="radio" name="yes" onClick={() => this.radioClicked(false)} id="r2" value="no"/><label
                htmlFor="r2">NO</label>
            </div>
        )
    }
}

export default connect(null, {reviewFormUpdate})(RadioRating);
