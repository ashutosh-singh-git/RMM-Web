import React, {Component} from 'react';
import LabelRating from "../../LabelRating";
import {EXPERIENCE, REVIEW_LABEL_TYPES} from "../../../config/CommonConfig";
import TenRating from "../../TenRating";
import RadioRating from "../../RadioRating";
import {connect} from "react-redux";
import {reviewFormUpdate, submitNewReviewAction} from "./ReviewManagerAction";
import {GoogleReCaptcha} from 'react-google-recaptcha-v3';
import Select from "react-select";

class RateManager extends Component {

    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {rMap, submitNewReviewAction} = this.props;
        submitNewReviewAction(rMap);
    };

    handleComments = (e) => {
        const {reviewFormUpdate} = this.props;
        reviewFormUpdate({key: 'comments', value: e.currentTarget.value});
    };

    verifyCallback = (e) => {
        //TODO: VerifyReCaptcha token
        this.buttonRef.current.disabled = false;
    };

    render() {

        return (
            <div>
                <p className='font-weight-bolder h5 text-muted mb-3'>Rate This Manager</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formManagerName">
                            Rate Your Manager
                        </label>
                        <div className='col-md-8'>
                            <TenRating name={'overall'}/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formProjectManager">
                            Skills
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='skills'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formPlaintextEmail">
                            Behaviour
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='behaviour'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formKnowledge">
                            Knowledge
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='knowledge'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formCompanyCity">
                            Transparency
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='transparency'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formCompanyCity">
                            Effective Communication
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='communication'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formCompanyCity">
                            Leadership Skills
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='leadership'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formRecommend">
                            Would You Recommend
                        </label>
                        <div className='col-md-8'>
                            <RadioRating name='recommend'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formComments">
                            Comments (if any)
                        </label>
                        <div className='col-md-8'>
                            <textarea className='form-input form-control' onChange={this.handleComments}
                                      name={'comments'} rows={3} id='formComments'
                                      placeholder="Add a Comment..."/>
                        </div>
                    </div>
                    <GoogleReCaptcha onVerify={this.verifyCallback}/>
                    <p className='font-weight-bolder h5 text-muted mt-4 mb-3'>Tell Us Something About You</p>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formExperience">
                            Industry Experience
                        </label>
                        <div className='col-md-8'>
                            <Select name={'experience'}
                                    className={'w-25'}
                                    options={EXPERIENCE}
                                    autoSize={true}
                                    required
                                    id='formExperience'
                            />
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formRelation">
                            Working Relation
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL3} name='relation'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted font-weight-bolder' htmlFor="formName">
                            Visible Name
                        </label>
                        <div className='col-md-8'>
                            <input className='form-input' type={'text'} placeholder={'Anonymous'} name='name'/>
                        </div>
                    </div>
                    <div className='col my-4'>
                        <button className='btn h-100 rounded cmn-btn add-btn' disabled ref={this.buttonRef}
                                type="submit">
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
