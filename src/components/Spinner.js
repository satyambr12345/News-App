import React, { Component } from 'react'
import loading from '../Loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center mb-4">
        <img src={loading} alt="Loading"/>
      </div>
    )
  }
}

export default Spinner
