import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    return (
      <div className='todo-display'>
        <h2>TODO</h2>
        <div>{this.props.location.state.text}</div>
      </div>
    );
  }
}
