import React from 'react';
import './Display.css';
import { connect } from 'react-redux';

/**
 * Display Class Component.
 */
class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <span className="SmallHistory">
          {(this.props.firstNumber && this.props.operation) ? this.props.firstNumber + ' ' + this.props.operation : ''}
        </span>
        <input type="text" value={(this.props.firstNumber && this.props.operation) ? this.props.secondNumber : (this.props.firstNumber != null ? Math.round(this.props.firstNumber * 1000000) / 1000000 : '')} readOnly />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstNumber: state.firstNumber,
  secondNumber: state.secondNumber,
  operation: state.operation
});

export default connect(mapStateToProps)(Display);