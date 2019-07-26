import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {reviewFormUpdate} from "./form/review/ReviewManagerAction";

class TenRating extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: null
        };
        // Removing Default Checked
        // const {name, reviewFormUpdate} = props;
        // reviewFormUpdate({key: name, value: 5});
    }

    labelClicked = (index) => {
        const {active} = this.state;
        const {name, reviewFormUpdate} = this.props;

        if (index + 1 !== active) {
            reviewFormUpdate({key: name, value: index + 1});
            this.setState({active: index + 1});
        }
    };

    render() {

        const {active} = this.state;
        const rows = [];
        for (let i = 0; i < 10; i++) {
            rows.push(
                <span onClick={() => this.labelClicked(i)} key={i}
                      data-title={`${i + 1}/10 Rating`}
                      className={`r-tooltip rounded-pill px-3 mr-1 rate-label ${i < active ? 'label-selected' : ''}`}/>
            );
        }
        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default connect(null, {reviewFormUpdate})(TenRating);
