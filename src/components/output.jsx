import React, { Component } from 'react';

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <div className="output">
        <div className="card border-info mb-3 text-center">
          <h3 className="card-header">
            ReactJS Bacon Text Generator
        </h3>
          <div className="card-body text-info">
            {this.props.value}
          </div>
        </div>
      </div>
    )
  }
}


export default Output;