import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormLabel from "react-bootstrap/es/FormLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import connect from "react-redux/src/connect/connect";
import ReactSelect from "../ReactSelect";
import Select from "react-select";
import Form from "react-bootstrap/Form";
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
                <Col>
                    <h3>Add Manager</h3>
                </Col>
                <Col md={10} style={{marginTop: "20px"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup as={Row} controlId="formManagerName">
                            <FormLabel column>
                                Manager Name
                            </FormLabel>
                            <Col sm="2">
                                <Select name={'gender'}
                                        options={genderOptions}
                                        defaultValue={genderOptions[0]}
                                />
                            </Col>
                            <Col sm="8">
                                <FormControl name='manager' required placeholder="Ex. John Doe"/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId="formProjectManager">
                            <FormLabel column>
                                Designation
                            </FormLabel>
                            <Col sm="10">
                                <Select name={'designation'}
                                        options={desOptions}
                                        defaultValue={desOptions[0]}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId="formPlaintextEmail">
                            <FormLabel column sm={2}>
                                Company
                            </FormLabel>
                            <Col sm="10">
                                <ReactSelect name={'company'}
                                             required
                                             options={companyOptions}
                                             value={companyValue}
                                             placeholder='Company Name'
                                             handleOnChange={this.updateCompanyValue}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId="formCompanyCity">
                            <FormLabel column sm={2}>
                                City
                            </FormLabel>
                            <Col sm="10">
                                <FormControl name={'city'} required placeholder="Gurugram"/>
                            </Col>
                        </FormGroup>
                        <Button type="submit" style={{float: "right"}}>Submit</Button>
                    </Form>
                </Col>
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
