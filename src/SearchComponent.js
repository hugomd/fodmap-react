import React, { Component } from 'react';
import { Menu, Modal, Segment, Button, Input, Icon } from 'semantic-ui-react';
import List from './ListComponent';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.iconClick = this.iconClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      food: '',
      open: false
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

  openModal() {
    this.setState({
      open: true
    });
  }

  closeModal() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
        <Menu attached='top'>
          <Menu.Menu>
            <div className='ui fluid category search item'>
              <div className='ui fluid transparent icon input'>
                <Input className='prompt' value={this.state.food} size='big' tabIndex={0} onChange={this.handleChange} placeholder='Search term here' />
                <i className='close link icon big' onClick={this.iconClick} />
              </div>
            </div>
          </Menu.Menu>
          <Menu.Item position='right' name='help' onClick={this.openModal}>
            <Icon name='help' circular inverted />
          </Menu.Item>
        </Menu>

        <List term={ this.state.food } />

        <Modal size='small' open={this.state.open} onClose={this.closeModal}>
          <Modal.Header>
            About
          </Modal.Header>
          <Modal.Content>
            <p>
              This aims to provide an easy way to search through ingredients to find out whether they are FODMAP-free.<br /><br />
              The app was created, and is maintained by, <a href='http://hu.md/'>Hugo Müller-Downing</a>. It uses data sets created by <a href='https://github.com/melaniehuang/fodmap-web'>Melanie Huang</a> and <a href='https://github.com/timbenniks/FODMAP'>Tim Benniks</a>.<br /><br />
              <a href='https://github.com/hugomd/fodmap-react'><Icon name='github' circular inverted link/></a>
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.closeModal}>Neat!</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Search;
