import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Search from './SearchComponent';

class App extends Component {
  constructor(props) {
    super(props);
    document.title = "FODMAP Search";
  }
  render() {
    return (
      <div>
        <Container>
          <Search />
        </Container>
      </div>
    );
  }
}

export default App;
