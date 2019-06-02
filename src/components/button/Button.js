import React from 'react';
import './Button.css';

/**
 * Button Stateless Component.
 */
const Button = props => {
  const handleClick = () => {
    props.clickEmitor({
      type: props.type,
      value: props.value
    });
  }

  return (
    <button className={`${props.type} ${props.type}${(props.value === '+') ? 'plus' : (props.value === '=') ? 'equal' : props.value}`} onClick={handleClick}>{props.value}</button>
  );
}

export default Button;