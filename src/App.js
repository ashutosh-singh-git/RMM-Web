import React, {Component} from 'react';
import './static/app.css';
import ReviewForm from "./components/form/manager/AddManager";
import ManagerDetails from "./components/details/ManagerDetails";
import {Route, Switch} from "react-router-dom";
import SearchResults from "./components/results/SearchResults";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./components/home/HomePage";
import FooterComponent from "./components/footer/FooterComponent";

class App extends Component {

    render() {

        return (
            <div>
                <HeaderComponent/>
                <main>
                    <Switch>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/add' component={ReviewForm}/>
                        <Route path='/manager/:name/:function?' component={ManagerDetails}/>
                        <Route path='/manager/:name/:function?/rate' component={ManagerDetails}/>
                        <Route path='/search' component={SearchResults}/>
                    </Switch>
                </main>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
