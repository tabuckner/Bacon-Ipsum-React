import React, { Component } from 'react';

class Select extends Component {
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
          <label className="input-group-text text-white" htmlFor="data-type">Data-Type</label>
        </div>
        <select id="data-type" className="custom-select" onChange={this.onChange.bind(this)}>
          <option value="html">HTML</option>
          <option value="text">Plain Text</option>
          {/* <option value="json">JSON</option> */}
        </select>
      </div>
    )
  }
}


export default Select;