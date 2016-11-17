import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <li className="list-group-item"
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer',
          color : this.props.completed ? '#f45' : '#333',
        }}>
        {this.props.text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}