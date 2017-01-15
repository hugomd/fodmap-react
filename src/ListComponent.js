import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';
import data from './data/food.json';

class List extends Component {
  render() {
    let list = [];

    let categories = data.categories;
    let status = data.status;

    data.foods.forEach((item, index) => {
      if (item.name.toLowerCase().includes(this.props.term) || this.props.term === "") {
        list.push(
          <Table.Row positive={ !item.status } negative={ item.status } key={ index } >
            <Table.Cell textAlign='center'>
              { !item.status ? (
                <Icon size='big' name='checkmark' />
              ) : (
                <Icon size='big' name='close' />
              )}
            </Table.Cell>
            <Table.Cell>{ item.name }</Table.Cell>
            <Table.Cell>{ categories[item.category] }</Table.Cell>
            <Table.Cell warning={ item.hasOwnProperty('note') }>{ item.note }</Table.Cell>
          </Table.Row>
        );
      }
    });

    return (
      <Table celled basic='very' collapsable unstackable fluid>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Note</Table.HeaderCell>
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
