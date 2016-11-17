import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <div  className="input-group">
        <input type='text' ref='input' className="form-control" placeholder="输入事项"/>
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
            添加事项
          </button>
        </span>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    if(text){
      this.props.onAddClick(text)
      node.value = ''
    }
    return   
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}