import React, { Component } from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';
import List from './ListComponent';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.iconClick = this.iconClick.bind(this);

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

  onSubmit(e) {
    e.preventDefault();
  }

  iconClick() {
    this.setState({
      food: ''
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field >
            <label></label>
            <Input value={this.state.food} size='big' icon={<Icon name='close' link inverted circular onClick={this.iconClick} />} tabIndex={0} onChange={this.handleChange} placeholder='Search term here' />
          </Form.Field>
        </Form>
        <List term={ this.state.food } />
      </div>
    );
  }
}

export default Search;
