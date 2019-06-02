import React from 'react';
import './Operations.css';
import Button from '../button/Button';
import { store } from '../../index';
import { connect } from 'react-redux';

/**
 * Operations Class Component.
 */
class Operations extends React.Component {
  iterators = {
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    operations: ['clear', '-', '÷', 'x', '+', '=']
  }

  _updateStore = (target, value) => {
    switch (target) {
      case 'first':
        value = (this.props.firstNumber && this.props.operation == null && value != null) ? parseFloat(this.props.firstNumber + value) : value;
        store.dispatch({ type: 'updateFirstNumber', payload: value });
        break;
      case 'second':
        value = (this.props.secondNumber && this.props.operation && value != null) ? parseFloat(this.props.secondNumber + value) : value;
        store.dispatch({ type: 'updateSecondNumber', payload: value });
        break;
      case 'operation':
        store.dispatch({ type: 'updateOperation', payload: value });
        break;
      default:
        break;
    }
  }

  _calculate = (a, b, operation) => {
    switch (operation) {
      case '+':
        return Number(a) + Number(b);
      case '-':
        return a - b;
      case 'x':
        return a * b;
      case '÷':
        return a / b;
      default:
        return;
    }
  }

  _onClickEmitor = ({ type, value }) => {
    if (type === 'number') {
      // Numbers.
      if ((this.props.firstNumber == null || this.props.firstNumber === 'Infinity') || this.props.operation == null)
        this._updateStore('first', value);
      else
        this._updateStore('second', value);

    } else if (type === 'operation') {
      // Operations.
      if (value === '=' && this.props.firstNumber != null && this.props.secondNumber != null && this.props.operation != null) {
        this._updateStore('first', this._calculate(this.props.firstNumber, this.props.secondNumber, this.props.operation));
        this._updateStore('second', null);
        this._updateStore('operation', null);
      } else if (value === 'clear') {
        this._updateStore('first', null);
        this._updateStore('second', null);
        this._updateStore('operation', null);
      } else if (this.props.firstNumber != null && this.props.secondNumber == null)
        this._updateStore('operation', value);
      else if (this.props.firstNumber != null && this.props.secondNumber != null && this.props.operation != null) {
        this._updateStore('first', this._calculate(this.props.firstNumber, this.props.secondNumber, this.props.operation));
        this._updateStore('second', null);
        this._updateStore('operation', value);
      }
    }
  }

  _handleKeyboardInput = (e) => {
    if (this.iterators.numbers.includes(parseFloat(e.key)))
      this._onClickEmitor({ type: 'number', value: parseFloat(e.key) });
    else if (this.iterators.operations.includes(e.key))
      this._onClickEmitor({ type: 'operation', value: e.key });
    // Add Extra layers.
    else if (e.key === '*')
      this._onClickEmitor({ type: 'operation', value: 'x' });
    else if (e.key === 'c')
      this._onClickEmitor({ type: 'operation', value: 'clear' });
    else if (e.key === 'Enter')
      this._onClickEmitor({ type: 'operation', value: '=' });
    else if (e.key === '/')
      this._onClickEmitor({ type: 'operation', value: '÷' });
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyboardInput, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyboardInput, false);
  }

  render() {
    return (
      <div className="Operations">
        {this.iterators.numbers.map((obj, i) => <Button value={obj} key={i} type='number' clickEmitor={this._onClickEmitor} />)}
        {this.iterators.operations.map((obj, i) => <Button value={obj} key={i} type='operation' clickEmitor={this._onClickEmitor} />)}
      </div>
    );
  }
}

const _mapStateToProps = state => ({
  firstNumber: state.firstNumber,
  secondNumber: state.secondNumber,
  operation: state.operation
});

export default connect(_mapStateToProps)(Operations);