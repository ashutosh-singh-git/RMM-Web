import React, {Component} from "react";
import connect from "react-redux/src/connect/connect";
import ReactSelect from "../../ReactSelect";
import Select from "react-select";
import {closeManagerPopUp, submitNewManagerAction} from "./AddManagerAction";
import {DESIGNATIONS, GENDERS} from "../../../config/CommonConfig";
import SuccessPage from "../../SuccessPage";
import {getManagerSlug} from "../../../util/CommonUtil";
import {CITIES} from "../../../config/cities";

class AddManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyOptions: [],
            companyValue: '',
            cityValue: '',
        };

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {companies} = nextProps;
        let companyOptions;
        let changes = {};
        if (companies && companies.length > 0) {
            companyOptions = companies.map(val => {
                return {value: val.id, label: val.name}
            });
            changes = {...prevState, companyOptions: companyOptions};
        }

        return Object.keys(changes).length > 0 ? changes : null;
    }

    updateCompanyValue = (value) => {
        this.setState({
            companyValue: value
        })
    };

    updateCityValue = (value) => {
        this.setState({
            cityValue: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const {companyValue, cityValue, companyOptions} = this.state;

        console.log(companyValue);
        if (!companyValue || !cityValue) {
            alert('company and city are required');
            return;
        }
        console.log('compoa: ', companyOptions, companyValue);
        if (!companyOptions.find(val => val.value === companyValue.value)) {
            if (window.confirm('Do you want to add this new company: ' + companyValue.label)) {
                // Save it!
            } else {
                return;
            }
        }
        if (!CITIES.find(val => val.value === cityValue.value)) {
            alert('please select city from given items');
            return;
        }

        let data = {
            city: cityValue.value,
            companyName: companyValue.label,
            companyId: companyValue.value !== 1000 ? companyValue.value : '',
            designation: form.designation.value,
            gender: form.gender.value,
            managerName: form.manager.value
        };
        this.props.submitNewManagerAction(data);
    };

    render() {

        const {companyOptions, companyValue, cityValue} = this.state;
        const {submitted, submitMsg, addManagerFail, newManager, openPopUp} = this.props;

        if (openPopUp) {
            const message = submitted ?
                `Manager Added Successfully! <a class="text-info font-weight-bold" href="${getManagerSlug(newManager.name, newManager.id)}/rate">Rate Him</a>`
                : submitMsg;
            return <SuccessPage message={message} success={submitted} closePopUp={addManagerFail}/>
        }

        return (
            <>
                <div className='col-md-10 mx-auto'>
                    <span className='h4 text-muted'>Add Manager</span>
                </div>
                <div className='col-md-10 mx-auto' style={{marginTop: "20px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div className='row form-group'>
                            <label className='col-lg-2 col-sm-3 h-100 my-auto text-muted' htmlFor="formManagerName">
                                Manager Name
                            </label>
                            <div className='col-4 col-sm-3 col-lg-2'>
                                <Select name={'gender'}
                                        options={GENDERS}
                                        defaultValue={GENDERS[0]}
                                        id='formManagerName'
                                />
                            </div>
                            <div className='col-8 col-sm-5 col-lg-4'>
                                <input className='form-input w-100' type='text' name='manager' required
                                       placeholder="Ex. John Doe"/>
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label className='col-lg-2 col-sm-3 h-100 my-auto text-muted' htmlFor="formProjectManager">
                                Designation
                            </label>
                            <div className='col-sm-8 col-lg-6'>
                                <Select name={'designation'}
                                        options={DESIGNATIONS}
                                        defaultValue={DESIGNATIONS[0]}
                                        id='formProjectManager'
                                />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label className='col-sm-3 col-lg-2 h-100 my-auto text-muted' htmlFor="formPlaintextEmail">
                                Company
                            </label>
                            <div className='col-sm-8 col-lg-6'>
                                <ReactSelect name={'company'}
                                             required
                                             options={companyOptions}
                                             value={companyValue}
                                             placeholder='Company Name'
                                             id='formPlaintextEmail'
                                             handleOnChange={this.updateCompanyValue}
                                />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label className='col-sm-3 col-lg-2 h-100 my-auto text-muted' htmlFor="formCompanyCity">
                                City
                            </label>
                            <div className='col-sm-8 col-lg-6'>
                                <ReactSelect name={'city'}
                                             required
                                             options={CITIES}
                                             value={cityValue}
                                             placeholder='City'
                                             id='formCompanyCity'
                                             handleOnChange={this.updateCityValue}
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <button className='btn h-100 rounded cmn-btn add-btn' type="submit">
                                <span className='btn-txt'>ADD MANAGER</span></button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const {search, add} = state;

    return {
        companies: search.companies,
        submitted: add.submitted,
        newManager: add.manager,
        submitMsg: add.submitMsg,
        openPopUp: add.openPopUp,
    }
};

export default connect(mapStateToProps, {submitNewManagerAction, addManagerFail: closeManagerPopUp})(AddManager);
