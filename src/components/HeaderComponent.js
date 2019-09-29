import React, {Component} from "react";
import {Link} from "react-router-dom";
import SearchBar from "./search-bar/SearchBar";

class HeaderComponent extends Component {

    render() {

        return (

            <nav className="nav nav-bar" sticky='top'>
                <div className='container-fluid'>
                    <div className="search-bar">
                        <div className='row justify-content-between'>
                            <div className='col-md-2 col-6'>
                                <Link className="navbar-brand" to="/">
                                    <span className='logo'>ReviewManager</span>
                                </Link>
                            </div>
                            <div className='col-md-8 d-md-flex d-none'>
                                <SearchBar/>
                            </div>
                            <div className='col-md-2 col-6 my-auto'>
                                <span className='float-right'><i className="material-icons">person</i></span>
                            </div>
                        </div>
                        <div className='row d-md-none mt-3'>
                                <SearchBar/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;
