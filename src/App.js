import React, { Component } from 'react';
import './App.css';
import LogoTrans from './LogoTrans.png';
import Output from './components/output';
import Select from './components/controls/select';
import Paragraphs from './components/controls/paragraphs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      format: 'html',
      text: ''
    }
  }

  componentWillMount() {
    this.getText();
  }

  getText() {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paras + '&format=' + this.state.format)
      .then(res => {
        console.log(res);
        this.setState({ text: res.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  changeType(type) {
    this.setState({ format: type }, this.getText);
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getText);
  }

  render() {
    return (
      <div classname="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
          <a className="navbar-brand " href="#">
            <img className="d-inline-block align-top" src={LogoTrans} width="30" />
            &nbsp;Taylor Buckner
          </a>
        </nav>


        <div id="main" className="container">
          <div className="row">
            <div className="col-sm">
              <Paragraphs value={this.state.paras} onChange={this.changeParas.bind(this)} />
            </div>
            <div className="col-sm">
              <Select value={this.state.format} onChange={this.changeType.bind(this)} />
            </div>
            <div className="row">
              <Output value={this.state.text} />
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
