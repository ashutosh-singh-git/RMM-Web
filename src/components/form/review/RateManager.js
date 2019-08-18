import React, {Component} from 'react';
import LabelRating from "../../LabelRating";
import {EXPERIENCE, REVIEW_LABEL_TYPES} from "../../../config/CommonConfig";
import TenRating from "../../TenRating";
import RadioRating from "../../RadioRating";
import {connect} from "react-redux";
import {closePopUp, reviewFormUpdate, submitNewReviewAction} from "./ReviewManagerAction";
import {GoogleReCaptcha} from 'react-google-recaptcha-v3';
import Select from "react-select";
import {createFingerPrint, verifyRMap} from "../../../util/CommonUtil";
import {withRouter} from "react-router-dom";
import SuccessPage from "../../SuccessPage";

class RateManager extends Component {

    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();

        this.fingerprint = null;
        this.state = {
            errorText: null
        }
    }

    async componentDidMount() {
        this.fingerprint = await createFingerPrint();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {rMap, submitNewReviewAction} = this.props;
        if (verifyRMap(rMap)) {
            submitNewReviewAction(rMap);
        } else {
            this.setState({errorText: 'Please fill all the required fields'})
        }
    };

    handleComments = (e) => {
        const {reviewFormUpdate} = this.props;
        reviewFormUpdate({key: 'comments', value: e.currentTarget.value});
    };

    handleNameChange = (e) => {
        const {reviewFormUpdate} = this.props;
        reviewFormUpdate({key: 'name', value: e.currentTarget.value});
    };

    verifyCallback = (e) => {
        //TODO: VerifyReCaptcha token
        if(this.buttonRef.current){
            this.buttonRef.current.disabled = false;
        }
    };

    handleExperienceChange = (event) => {
        const {reviewFormUpdate} = this.props;
        reviewFormUpdate({key: 'reviewerExperience', value: event.label});
        reviewFormUpdate({key: 'fingerprint', value: this.fingerprint});
    };

    render() {

        const {errorText} = this.state;
        const {submitSuccess, submitMsg, openPopUp, closePopUp} = this.props;

        if(openPopUp) {
            return (
                <SuccessPage message={submitMsg} success={submitSuccess} closePopUp={closePopUp}/>
            )
        }

        return (
            <div>
                <p className='font-weight-bolder h5 text-muted mb-3'>Rate This Manager</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formManagerName">
                            Rate Your Manager<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <TenRating name={'overallRating'}/>
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formProjectManager">
                            Skills<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='skills'/>
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formPlaintextEmail">
                            Behaviour<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='behaviour'/>
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formKnowledge">
                            Knowledge<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='knowledge'/>
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formCompanyCity">
                            Transparency<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='transparency'/>
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formCompanyCity">
                            Effective Communication<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2} name='communication'/>
                        </div>
                    </div>
                    <div className='row form-group  my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formCompanyCity">
                            Leadership Skills<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1} name='leadership'/>
                        </div>
                    </div>
                    <div className='row form-group my-3'>
                        <label className='col h-100 text-muted font-weight-bolder' htmlFor="formRecommend">
                            Would You Recommend<span className='orange-color'>*</span>
                        </label>
                        <div className='col col-lg-8'>
                            <RadioRating name='isRecommended'/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100 text-muted font-weight-bolder' htmlFor="formComments">
                            Comments (if any)
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <textarea className='form-input form-control' onChange={this.handleComments}
                                      name={'comments'} rows={3} id='formComments'
                                      placeholder="Add a Comment..."/>
                        </div>
                    </div>
                    <GoogleReCaptcha onVerify={this.verifyCallback}/>
                    <p className='font-weight-bolder h5 text-muted mt-4 mb-3'>Tell Us Something About You</p>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formExperience">
                            Industry Experience<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <Select name={'reviewerExperience'}
                                    className={'w-50'}
                                    options={EXPERIENCE}
                                    autoSize={true}
                                    required
                                    id='formExperience'
                                    onChange={this.handleExperienceChange}
                                    isSearchable={ false }
                            />
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formRelation">
                            Working Relation<span className='orange-color'>*</span>
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL3} name='reviewerRelation'/>
                        </div>
                    </div>
                    <div className='row form-group my-4'>
                        <label className='col h-100 my-auto text-muted font-weight-bolder' htmlFor="formName">
                            Visible Name
                        </label>
                        <div className='col-lg-8 my-auto'>
                            <input className='form-input' type={'text'} onChange={this.handleNameChange} placeholder={'Anonymous'} name='name'/>
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col'>
                            {errorText ? <span className='text-danger small'>* {errorText}</span> : null}
                            <button className='btn rounded cmn-btn add-btn' disabled ref={this.buttonRef}
                                    type="submit">
                                <span className='small'>SUBMIT</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {review} = state;

    return {
        rMap: review.rMap,
        submitSuccess: review.submitSuccess,
        submittedReviewId: review.submittedReviewId,
        submitMsg: review.submitMsg,
        openPopUp: review.openPopUp
    }
};

export default withRouter(connect(mapStateToProps, {reviewFormUpdate, submitNewReviewAction, closePopUp})(RateManager));
