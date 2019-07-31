import React, {Component} from 'react';

class SuccessPage extends Component {

    goBack = () => {
        const {closePopUp} = this.props;
        closePopUp();
    };

    render() {

        const {message, success} = this.props;

        return (
            <div className="modal-dialog  modal-confirm">
                <div className="modal-content">

                    <div className="modal-header justify-content-center">
                        <div className={`icon-box ${success ? 'bg-success' : 'bg-danger'}`}>
                            {success ?
                                <i className="material-icons">&#xE876;</i>
                                :
                                <i className="material-icons">close</i>
                            }
                        </div>
                        <h4 className="modal-title">{success ? `Awesome!` : `Oops!`}</h4>
                    </div>
                    <div className="modal-body">
                        <p className="text-center" dangerouslySetInnerHTML={{ __html: message }}/>
                    </div>
                    <div className="modal-footer align-items-center">
                        <button className={`btn ${success ? 'btn-success' : 'btn-danger'} btn-block`}
                                onClick={this.goBack} data-dismiss="modal">
                            Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default SuccessPage;
