import React from 'react';
import './Operations.css';
import Button from '../button/Button';
import { store } from '../../index';
import { connect } from 'react-redux';

/**
 * Operations Component.
 */
class Operations extends React.Component {
  iterators = {
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operations: ['clear', '-', '+', 'x', '÷', '=']
  }

  onClickEmitor = (data) => {
    if (data.type === 'number') {
      // Numbers.
      if (this.props.operation == null) {
        store.dispatch({ type: 'updateFirstNumber', payload: data.value });
      }

    } else if (data.type === 'operations') {
      // Operations.

    }
  }

  render() {
    return (
      <div className="Operations">
        {this.iterators.number.map((obj, i) => <Button value={obj} key={i} type='number' clickEmitor={this.onClickEmitor} />)}
        {this.iterators.operations.map((obj, i) => <Button value={obj} key={i} type='operations' clickEmitor={this.onClickEmitor} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstNumber: state.firstNumber,
  secondNumber: state.secondNumber,
  operation: state.operation
});

export default connect(mapStateToProps)(Operations);