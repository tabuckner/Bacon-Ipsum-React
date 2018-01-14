import React, { Component } from 'react';

class Paragraphs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange(this.state.value);
    })

  }

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text text-white" id="basic-addon1">Paragraphs</span>
        </div>
        <input type="text" className="form-control" placeholder="Number of Paragraphs"
          aria-label="Username" aria-describedby="basic-addon1"
          value={this.state.value} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}


export default Paragraphs;