import React, {Component} from 'react';

class LabelRating extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 2
        }
    }

    labelClicked = (index) => {
        const {active} = this.state;

        if(index !== active){
            this.setState({active: index});
        }
    };

    render() {

        const {labels} = this.props;
        const {active} = this.state;

        return (
            <div className='small'>
                {labels.map((v, index) =>
                    <input key={v} type='button'
                           className={`py-1 px-3 rounded-pill mr-2 rate-label ${active === index ? 'label-selected': ''}`}
                           onClick={() => this.labelClicked(index)} value={v}/>)}
            </div>
        )
    }
}

export default LabelRating;
