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
        <input type="text" value={this.props.show != null ? this.props.show : ''} readOnly />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.firstNumber
});

export default connect(mapStateToProps)(Display);