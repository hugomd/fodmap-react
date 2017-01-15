import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import List from './ListComponent';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      food: ''
    };
  }

  handleChange(e, { value }) {
    e.preventDefault();
    this.setState({
      food: value.toLowerCase()
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label></label>
            <Input tabIndex={0} onChange={this.handleChange} placeholder='Search term here' />
          </Form.Field>
        </Form>
        <List term={ this.state.food } />
      </div>
    );
  }
}

export default Search;
