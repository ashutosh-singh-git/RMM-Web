import React, {Component} from 'react';
import './static/App.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchBar from "./components/search-bar/SearchBar";
import ReviewForm from "./components/form/ReviewForm";


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
                                {/*<Col>*/}
                                    {/*<ButtonToolbar>*/}
                                        {/*<Button className='home-tab'>Find Manager</Button>*/}
                                        {/*<Button className='home-tab'>Rate Manager</Button></ButtonToolbar>*/}
                                {/*</Col>*/}
                            </Row>
                            <ReviewForm/>
                        </div>
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
