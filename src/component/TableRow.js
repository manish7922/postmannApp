import React, { Component } from "react";

export default class TableRow extends Component {
  render() {
    const { index, value, description, handleChange } = this.props;

    return (
      <>
        <tr>
          <td>
            <input
              className="form-control"
              name={index}
              onChange={handleChange}
              placeholder="Key"
            />
          </td>
          <td>
            <input
              className="form-control"
              name={value}
              onChange={handleChange}
              placeholder="Value"
            />
          </td>
          <td>
            <input
              className="form-control"
              name={description}
              onChange={handleChange}
              placeholder="Description"
            />
          </td>
        </tr>
      </>
    );
  }
}
