import React, {Component} from 'react';
import LabelRating from "../../LabelRating";
import {REVIEW_LABEL_TYPES} from "../../../config/CommonConfig";
import TenRating from "../../TenRating";

class RateManager extends Component {

    handleSubmit = () => {
        console.log("handle Submit");
    };

    render(){

        return (
            <div>
                <p className='font-weight-bolder h5 text-muted mb-3'>Rate This Manager</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formManagerName">
                            1. Rate Your Manager
                        </label>
                        <div className='col-md-8'>
                            <TenRating/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formProjectManager">
                            2. Skills
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1}/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formPlaintextEmail">
                            3. Behaviour
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL1}/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formKnowledge">
                            4. Knowledge
                        </label>
                        <div className='col-md-8'>
                            <LabelRating labels={REVIEW_LABEL_TYPES.LABEL2}/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formCompanyCity">
                            5. Knowledge
                        </label>
                        <div className='col-md-8'>
                            <input className='form-input' type='text' name={'city'} id='formCompanyCity' required placeholder="Gurugram"/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formCompanyCity">
                            6. Knowledge
                        </label>
                        <div className='col-md-8'>
                            <input className='form-input' type='text' name={'city'} id='formCompanyCity' required placeholder="Gurugram"/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formCompanyCity">
                            7. Knowledge
                        </label>
                        <div className='col-md-8'>
                            <input className='form-input' type='text' name={'city'} id='formCompanyCity' required placeholder="Gurugram"/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formRecommend">
                            8. Would You Recommend
                        </label>
                        <div className='col-md-8'>
                            <input className='form-input' type='text' name={'city'} id='formRecommend' required placeholder="Gurugram"/>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <label className='col h-100  text-muted' htmlFor="formComments">
                            9. Comments (if any)
                        </label>
                        <div className='col-md-8'>
                            <textarea className='form-input' name={'comments'} id='formComments' required placeholder="Add a Comment..."/>
                        </div>
                    </div>
                    <div className='col'>
                        <button className='btn h-100 rounded cmn-btn add-btn' type="submit">
                            <span className='btn-txt'>SUBMIT</span></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RateManager;
