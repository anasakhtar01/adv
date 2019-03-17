import React, { Component } from 'react'

export default class CompanyGrid extends Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Company Grid</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
