import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return (
        <button type="button" className="btn btn-default">
        {name}
        </button>
      ) 
    }

    return (
      <button type="button" className="btn btn-default" onClick={e => {
        this.props.onFilterChange(filter)
      }}>
        {name}
      </button>
    )
  }

  render() {
    return (
      <p> 
        <span className="glyphicon glyphicon-hand-right"></span>
        {' '}
        {this.renderFilter('SHOW_ALL', '所有事项')}
        {' '}
        {this.renderFilter('SHOW_COMPLETED', '已完成事项')}
        {' '}
        {this.renderFilter('SHOW_ACTIVE', '未完成事项')}
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}