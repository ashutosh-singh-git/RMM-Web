import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {SHARABLE_CONTENT} from "../../config/CommonConfig";
import {getCurrentUrl} from "../../util/CommonUtil";

class FooterComponent extends Component {
    render() {

        return (
            <footer className="bg-footer-color">
                <div className="container py-4">
                    <div className="row text-white">
                        <div className="col-lg-8">
                            <h6>Rate My Manager</h6>
                            <p className="">Write to us at risingofminds@gmail.com<br/>
                                Phone : +91-8285932260<br/>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className="float-left">
                                <h6>Navigation</h6>
                                <p className="">
                                    <Link to="/">Home</Link><br/>
                                    <Link to="/add">Add Manager</Link><br/>
                                    <a target="blank" href={"https://docs.google.com/forms/d/1ol15p1pkaXPOr4B3IPONE4AqY9nprTYXdFhkcTfRUeg/prefill"}>Feedback </a><br/>
                                    <Link to={"/policy"}>Privacy Policy</Link><br/>
                                </p>
                            </div>
                            <div className="float-right">
                                <h6>Share On</h6>
                                <p className="">
                                    <a target="_blank" href={`${SHARABLE_CONTENT.FB_LINK}?u=${getCurrentUrl()}`}>Facebook</a><br/>
                                    <a target="_blank" href={`${
                                        SHARABLE_CONTENT.TWITTER_LINK
                                        }?url=${getCurrentUrl()}&text=Review Your Manager&hashtags=ReviewTheManger`}>Twitter</a><br/>
                                    <a target="_blank" href={`${SHARABLE_CONTENT.LINKEDIN_LINK}&url=${getCurrentUrl()
                                    }&title=Review Your Manager&summary=Find and give reviews to your manager!`}>LinkedIn</a><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent
