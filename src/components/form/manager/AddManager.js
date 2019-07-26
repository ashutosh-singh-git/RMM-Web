import React, {Component} from "react";
import connect from "react-redux/src/connect/connect";
import ReactSelect from "../../ReactSelect";
import Select from "react-select";
import {submitNewManagerAction} from "./AddManagerAction";
import {DESIGNATIONS, GENDERS} from "../../../util/CommonUtil";

class AddManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyOptions: [],
            companyValue: '',
        }
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

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const {companyValue} = this.state;

        console.log(companyValue);
        if (!companyValue) {
            alert('company name is required');
            return;
        }
        let data = {
            city: form.city.value,
            companyName: companyValue.label,
            companyId: companyValue.value !== 1000 ? companyValue.value : '',
            designation: form.designation.value,
            gender: form.gender.value,
            managerName: form.manager.value
        };
        this.props.submitNewManagerAction(data);
    };


    render() {

        const {companyOptions, companyValue} = this.state;

        return (
            <>
                <div className='col-md-10 mx-auto'>
                    <span className='h4 text-muted'>Add Manager</span>
                </div>
                <div className='col-md-10 mx-auto' style={{marginTop: "20px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div className='row form-group'>
                            <label className='col h-100 my-auto text-muted' htmlFor="formManagerName">
                                Manager Name
                            </label>
                            <div className='col-sm-2'>
                                <Select name={'gender'}
                                        options={GENDERS}
                                        defaultValue={GENDERS[0]}
                                        id='formManagerName'
                                />
                            </div>
                            <div className='col-sm-8'>
                                <input className='form-input' type='text' name='manager' required placeholder="Ex. John Doe"/>
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label className='col h-100 my-auto text-muted' htmlFor="formProjectManager">
                                Designation
                            </label>
                            <div className='col-sm-10'>
                                <Select name={'designation'}
                                        options={DESIGNATIONS}
                                        defaultValue={DESIGNATIONS[0]}
                                        id='formProjectManager'
                                />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label className='col-sm-2 h-100 my-auto text-muted' htmlFor="formPlaintextEmail">
                                Company
                            </label>
                            <div className='col-sm-10'>
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
                            <label className='col-sm-2 h-100 my-auto text-muted' htmlFor="formCompanyCity">
                                City
                            </label>
                            <div className='col-sm-10'>
                                <input className='form-input' type='text' name={'city'} id='formCompanyCity' required placeholder="Gurugram"/>
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
    const {search} = state;

    return {
        companies: search.companies
    }
};

export default connect(mapStateToProps, {submitNewManagerAction})(AddManager);
