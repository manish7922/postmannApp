// parms:{key:"",Value:"",description:""}

import React, { Component } from "react";
import MyTable from "./InputField";

class TableForm extends Component {
  state = {};

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({ ...prev, [name]: value }));
  };

  render() {
    return (
      <div className="container text-center">
        <div className="row" style={{ margin: "0px" }}>
          <MyTable handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default TableForm;
