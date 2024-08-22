import React, { Component } from 'react';
import Nav from "./components/Nav";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject>
        <Nav data={this.state.contents}></Nav>
        <Content title="HTML" desc="HTML is HyperText Markup Language.."></Content>
      </div>
    );
  }
}
export default App;