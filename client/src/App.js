import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
//import Main from './components/main';
import Router from './Router';
import {Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className= "App">
      <Header />
        <Row >
          <Col xs="2"><Sidebar /></Col>
          <Col auto><Router /> </Col>
        </Row>
      </div>
    );
  }
}

export default App;
