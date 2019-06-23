import React, {Component} from 'react';

class TenRating extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 5
        }
    }

    labelClicked = (index) => {
        const {active} = this.state;

        if (index + 1 !== active) {
            this.setState({active: index + 1});
        }
    };

    render() {

        const {active} = this.state;
        const rows = [];
        for (let i = 0; i < 10; i++) {
            rows.push(
                <span onClick={() => this.labelClicked(i)} key={i}
                      data-title={`${i+1}/10 Rating`}
                      className={`r-tooltip rounded-pill px-3 mr-1 rate-label ${i < active ? 'label-selected' : ''}`}/>
            );
        }
        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default TenRating;
