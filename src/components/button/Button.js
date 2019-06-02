import React from 'react';
import './Button.css';

/**
 * Button Component.
 */ 
export default class Button extends React.Component {
  handleClick = () => {
    this.props.clickEmitor({
      type: this.props.type,
      value: this.props.value
    });
  }

  render() {
    return (
      <button className={`${this.props.type} ${this.props.type}${this.props.value}`} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}
