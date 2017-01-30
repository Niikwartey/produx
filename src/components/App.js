// template Component
import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}


App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
