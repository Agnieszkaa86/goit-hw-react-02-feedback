import { Component } from "react";

class Counter extends Component {
     state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    
    
    static defaultProps = {
        step: 1,
    };
//  counter = () => this.setState({good: this.state.good +1  })


    render() {
        const { step } = this.props;
        console.log(step)
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button onClick={step}>good</button>
                <button>neutral</button>
                <button>bad</button>
                <h2>Statistics</h2>
                <p>Good:</p>
                <p>Neutral:</p>
                <p>Bad:</p>
                <p>Total:</p>
                <p>Positive feedback:</p>
            </div>
        )
    
    }
}
      
  
   
  



export default Counter;