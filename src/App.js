import React, {Component} from 'react';
import './static/app.css';
import ReviewForm from "./components/form/manager/AddManager";
import ManagerDetails from "./components/details/ManagerDetails";
import {Route, Switch} from "react-router-dom";
import SearchResults from "./components/results/SearchResults";
import HeaderComponent from "./components/HeaderComponent";

class App extends Component {

    render() {

        return (
            <div>
                <HeaderComponent/>
                <main>
                    <div className='container fill'>
                        <Switch>
                            <Route path='/add' component={ReviewForm}/>
                            <Route path='/manager/:name/:function?' component={ManagerDetails}/>
                            <Route path='/manager/:name/:function?/rate' component={ManagerDetails}/>
                            <Route path='/search' component={SearchResults}/>
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
