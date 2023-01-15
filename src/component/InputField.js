import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableRow from "./TableRow";

class MyTable extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            handleChange={handleChange}
            index="headerKey1"
            value="headerValue1"
            description="headerDescription1"
          />
          <TableRow
            handleChange={handleChange}
            index="headerKey2"
            value="headerValue2"
            description="headerDescription2"
          />
          <TableRow
            handleChange={handleChange}
            index="headerKey3"
            value="headerValue3"
            description="headerDescription3"
          />
        </tbody>
      </Table>
    );
  }
}

export default MyTable;
