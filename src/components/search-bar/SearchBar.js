import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import connect from "react-redux/src/connect/connect";
import {getAllCompaniesAction} from "./SearchAction";
import ReactSelect from "../ReactSelect";

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            companyOptions : [],
            managerOptions : [],
            openMenu: false
        }
    }

    onSearchSubmit = (e) => {
        console.log(e);
        e.preventDefault();
    };

    componentDidMount() {
        this.props.getAllCompaniesAction();
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        const {companies} = nextProps;
        let companyOptions;
        let changes = {};
        if(companies && companies.length > 0) {
            companyOptions = companies.map(val => {return {value: val.id, label: val.name}});
            changes = { ...prevState, companyOptions: companyOptions};
        }

        return Object.keys(changes).length > 0 ? changes : null;
    }


    render() {

        const {managerOptions, companyOptions} = this.state;
        return (

            <Navbar className="bg-light justify-content-between" sticky='top'>
                <Container>
                    <div className="search-bar">
                        <Row>
                            <Col>
                                <ReactSelect options={managerOptions}
                                        placeholder='Manager'
                                />
                            </Col>
                            <Col>
                                <ReactSelect options={companyOptions}
                                        placeholder='Company'
                                />
                            </Col>
                            <Col xs={2}>
                                <Button variant='success' type="submit" onClick={this.onSearchSubmit}>Search</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Navbar>
        );
    }

}


const mapStateToProps = (state) => {
    const {search} = state;

    return {
        companies : search.companies
    }
};


export default connect(mapStateToProps, {getAllCompaniesAction})(SearchBar);
