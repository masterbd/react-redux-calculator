import React from 'react';
import './App.css';
import Operations from '../components/operations/Operations';
import Display from '../components/display/Display';
import { connect } from 'react-redux';

/**
 * App Class Component.
 */ 
export default class App extends React.Component {
  // state = {
  //   currentNumber: null,
  //   previousNumber: null,
  //   operation: null
  // }

  // onChangeEmitor = (data) => {
  // if (data.type === 'operations') {
  //   this.setState({
  //     operation: data.value
  //   });

  // } else if (data.type === 'number') {
  //   if (!this.state.operation) {
  //     this.setState({
  //       currentNumber: data.value
  //     });
  //   } else if (!this.state.previousNumber) {
  //     this.setState({
  //       previousNumber: this.state.currentNumber
  //     });
  //     this.setState({
  //       currentNumber: data.value
  //     });
  //   } else {
  //     this.setState({
  //       currentNumber: this.calculate(this.state, data.value)
  //     });
  //     this.setState({
  //       previousNumber: null
  //     });
  //     this.setState({
  //       operation: null
  //     });
  //   }
  // }

  // if (data.type === 'operations') {
  //   if (this.state.currentNumber) {
  //     this.setState({ previousNumber: this.state.currentNumber });
  //     console.warn('CALC', this.state.previousNumber, data.value, this.state.currentNumber);
  //     this.setState({ currentNumber: this.calculate(this.state, data.value) });
  //     this.setState({ previousNumber: null });
  //   } else {
  //     this.setState({ currentNumber: this.calculate(this.state, data.value) });
  //   }
  // } else if (data.type === 'number') {
  //   this.setState({ currentNumber: data.value });
  //   this.setState({ previousNumber: null });
  // }

  // console.warn(data, this.state);
  // }

  /**
   * Calculate the result of current number and previous number.
   */
  // calculate = (numbers, operation) => {
  //   if (operation === '-')
  //     return numbers.previousNumber - numbers.currentNumber;
  //   else if (operation === '+')
  //     return numbers.previousNumber + numbers.currentNumber;
  //   else if (operation === '*')
  //     return numbers.previousNumber * numbers.currentNumber;
  //   else if (operation === '/')
  //     return numbers.previousNumber / numbers.currentNumber;
  //   else if (operation === '=')
  //     return numbers.currentNumber;
  // }

  render() {
    return (
      <div className="App">
        <Display />
        <Operations />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   firstNumber: state.firstNumber,
//   secondNumber: state.secondNumber,
//   operation: state.operation
// });

// export default connect(mapStateToProps)(App);