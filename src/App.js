import React, {Component} from 'react';
import './static/app.css';
import SearchBar from "./components/search-bar/SearchBar";
import ReviewForm from "./components/form/ReviewForm";
import SearchResults from "./components/results/SearchResults";
import {Route, Switch} from "react-router-dom";


class App extends Component {

    render() {

        return (
            <div className="app">
                <SearchBar/>
                <main>
                    <div className='container fill'>
                        <Switch>
                            <Route path='/add' component={ReviewForm}/>
                            <Route path='/results' component={SearchResults}/>
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
