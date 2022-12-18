import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statisctics';
import Notification from './Notification/Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = (event) => {
    const { name } = event.target;
    this.setState({ [name]: this.state[name] + 1 });
  }
  countTotalFeedback = (state) => {
    return Object.values(state).reduce((prev, el) => prev + el, 0);
  }
   countPositiveFeedbackPercentage = (good,total) => {
     const positivePercentage = Math.round((good / total) * 100);
     return (
       isNaN(positivePercentage)
         ? 0
         : positivePercentage
     )
  };
  // formatValue = value => {
  //   return `${Number(value).toFixed(0)}`;
  // };
  

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positive = this.countPositiveFeedbackPercentage(good, total);
    const options = Object.keys(this.state);
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
          {(total === 0)
            ? <Notification message= "There is no feedback"/>
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          } 
      </Section>
      </>
      
    );
  }
}
export default App;
