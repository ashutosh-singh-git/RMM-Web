import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {

        return (
            <footer className="bg-footer-color">
                <div className="container py-4">
                    <div className="row text-white">
                        <div className="col-lg-8">
                            <h6>Rate My Manager</h6>
                            <p className="small">Write to us at risingofminds@gmail.com<br/>
                                Plot-62, Sector - 23, Gurugram, 110092<br/>
                                +91-8285932260
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <div className="float-left">
                                <h6>Navigation</h6>
                                <p className="small">Home<br/>
                                    Add Manager <br/>
                                    Rate Manager <br/>
                                    Feedback <br/>
                                    Privacy Policy <br/>
                                </p>
                            </div>
                            <div className="float-right">
                                <h6>Follow Us On</h6>
                                <p className="small">
                                    Facebook<br/>
                                    Twitter <br/>
                                    LinkedIn<br/>
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
