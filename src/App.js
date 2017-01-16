import React, { Component } from 'react';
import Search from './SearchComponent';

class App extends Component {
  constructor(props) {
    super(props);
    document.title = "FODMAP Search";
  }
  render() {
    return (
      <div>
          <Search />
      </div>
    );
  }
}

export default App;
