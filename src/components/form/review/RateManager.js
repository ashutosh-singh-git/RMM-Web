import React, {Component} from 'react';
import LabelRating from "../../LabelRating";
import {REVIEW_LABEL_TYPES} from "../../../config/CommonConfig";
import TenRating from "../../TenRating";
import RadioRating from "../../RadioRating";
import {connect} from "react-redux";
import {reviewFormUpdate, submitNewReviewAction} from "./ReviewManagerAction";

class RateManager extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const {rMap, submitNewReviewAction} = this.props;
        submitNewReviewAction(rMap);
    };

    handleComments = (e) => {
        const {reviewFormUpdate} = this.props;
        reviewFormUpdate({key: 'comments', value: e.currentTarget.value});
    };

    render() {

        return (
            <div>
                <p className='font-weight-bolder h5 text-muted mb-3'>Rate This Manager</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formManagerName">
                            1. Rate Your Manager
                        </label>
                        <div className='col-md-8'>
                            <TenRating name={'overall'}/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formProjectManager">
                            2. Skills
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='skills'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formPlaintextEmail">
                            3. Behaviour
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='behaviour'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formKnowledge">
                            4. Knowledge
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='knowledge'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formCompanyCity">
                            5. Transparency
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='transparency'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formCompanyCity">
                            6. Micro Managing
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='micro-managing'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formCompanyCity">
                            7. Leadership Skills
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='leadership'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formRecommend">
                            8. Would You Recommend
                        </label>
                        <div className='col-md-8'>
                            <RadioRating name='recommend'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formComments">
                            9. Comments (if any)
                        </label>
                        <div className='col-md-8'>
                            <textarea className='form-input form-control' onChange={this.handleComments} name={'comments'} rows={3} id='formComments'
                                      placeholder="Add a Comment..."/>
                        </div>
                    </div>
                    <div className='col'>
                        <button className='btn h-100 rounded cmn-btn add-btn' type="submit">
                            <span className='btn-txt'>SUBMIT</span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {review} = state;

    return {
        rMap: review.rMap
    }
};

export default connect(mapStateToProps, {reviewFormUpdate, submitNewReviewAction})(RateManager);
