import React, {Component} from 'react';
import './static/App.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import SearchBar from "./components/search-bar/SearchBar";


class App extends Component {

    render() {

        return (
            <div className="App">
                <Navbar bg="secondary" variant="dark">
                    <Navbar.Brand href="#">
                        {'Review'}
                    </Navbar.Brand>
                </Navbar>
                <main>
                    <SearchBar/>
                    <Container className='fill'>
                        <div className='content'>
                            <Row>
                                <Col>
                                    <ButtonToolbar>
                                        <Button className='home-tab'>Find Manager</Button>
                                        <Button className='home-tab'>Rate Manager</Button></ButtonToolbar>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
