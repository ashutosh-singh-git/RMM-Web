import React, {Component} from 'react';
import {reviewFormUpdate} from "./form/review/ReviewManagerAction";
import {connect} from "react-redux";

class LabelRating extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: null
        };
        //Removing Default Checked
        // const {name, reviewFormUpdate} = props;
        // reviewFormUpdate({key: name, value: 3});
    }

    labelClicked = (index) => {
        const {active} = this.state;
        const {name, reviewFormUpdate} = this.props;

        if(index !== active){
            reviewFormUpdate({key: name, value: index+1});
            this.setState({active: index});
        }
    };

    render() {

        const {labels} = this.props;
        const {active} = this.state;

        return (
            <div className='small'>
                {labels.map((v, index) =>
                    <input key={v} type='button'
                           className={`my-1 py-1 px-3 rounded-pill mr-2 rate-label ${active === index ? 'label-selected': ''}`}
                           onClick={() => this.labelClicked(index)} value={v}/>)}
            </div>
        )
    }
}

export default connect(null,{reviewFormUpdate})(LabelRating);
