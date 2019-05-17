import React, {Component} from "react";
import connect from "react-redux/src/connect/connect";
import ReactSelect from "../ReactSelect";
import Select from "react-select";
import {submitNewManagerAction} from "./ReviewAction";

const genderOptions = [
    {value: 0, label: 'Mr'},
    {value: 1, label: 'Miss'},
];

const desOptions = [
    {value: 0, label: 'Project Manager'},
    {value: 1, label: 'Technical Lead'},
    {value: 2, label: 'Other'},
];

class ReviewForm extends Component {

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

        if(!companyValue){
            alert('company name is required');
            return;
        }
        let data = {
            city: form.city.value,
            companyName: companyValue.label,
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
                <div className='col'>
                    <h3>Add Manager</h3>
                </div>
                <div className='col-md-10' style={{marginTop: "20px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div className='row form-group'>
                            <label className='col' htmlFor="formManagerName">
                                Manager Name
                            </label>
                            <div className='col-sm-2'>
                                <Select name={'gender'}
                                        options={genderOptions}
                                        defaultValue={genderOptions[0]}
                                        id='formManagerName'
                                />
                            </div>
                            <div className='col-sm-8'>
                                <input type='text' name='manager' required placeholder="Ex. John Doe"/>
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label  className='col custom-control-label' htmlFor="formProjectManager">
                                Designation
                            </label>
                            <div className='col-sm-10'>
                                <Select name={'designation'}
                                        options={desOptions}
                                        defaultValue={desOptions[0]}
                                        id='formProjectManager'
                                />
                            </div>
                        </div>
                        <div className='row form-group'>
                            <label className='col-sm-2 custom-control-label' htmlFor="formPlaintextEmail">
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
                            <label className='col-sm-2 custom-control-label' htmlFor="formCompanyCity">
                                City
                            </label>
                            <div className='col-sm-10'>
                                <input type='text' name={'city'} id='formCompanyCity' required placeholder="Gurugram"/>
                            </div>
                        </div>
                        <button type="submit" style={{float: "right"}}>Submit</button>
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

export default connect(mapStateToProps, {submitNewManagerAction})(ReviewForm);
