import React, { Component } from 'react';
import { Label, Menu, Table, Icon } from 'semantic-ui-react';
import data from './data/fodmap.json';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let list = [];

    data.forEach((item, index) => {
      if (item.food.join(' ').includes(this.props.term) || this.props.term === "") {
        list.push(
          <Table.Row key={ index } >
            <Table.Cell>{ item.food[0] }</Table.Cell>
            <Table.Cell positive={ item.edible.includes('yes') } error={ item.edible.includes('no') }>
              { item.edible.includes('yes') ? (
                <Icon name='checkmark' />
              ) : <Icon name='close' /> }
              { item.edible }
            </Table.Cell>
            <Table.Cell>{ item.category }</Table.Cell>
            <Table.Cell warning={ item.limit !== '-' }>{ item.limit }</Table.Cell>
          </Table.Row>
        );
      }
    });

    return (
      <Table celled striped compact singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Edible</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Limit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { list }
        </Table.Body>
      </Table>
    );
  }
}

export default List;
