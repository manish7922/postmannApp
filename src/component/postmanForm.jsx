import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from "react";
import http from "../services/httpServices";
class PostmanForm extends Component {
  state = {
    formData: { Formmethod: "GET", Formurl: "", data: "" },
    Method: ["GET", "POST"],
    Data: {},
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    s1.formData[input.name] = input.value;
    this.setState(s1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formData);
    this.fetchData(this.state.formData);
  };

  render() {
    const { Formmethod, FormUrl, data } = this.state.formData;
    const { Method, Data } = this.state;
    console.log(Data);
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-2">
                <div className="form-group">
                  <select
                    className="select1 form-control"
                    style={{ background: "#F6F6F6" }}
                    name="Formmethod"
                    value={Formmethod}
                    onChange={this.handleChange}
                  >
                    {/* <option value="GET">GET</option> */}
                    {Method.map((c1) => (
                      <option>{c1}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-7" style={{ marginLeft: "-24px" }}>
                <div className="from-group">
                  <input
                    type="text"
                    className="textfield1 form-control"
                    style={{ background: "#F6F6F6" }}
                    id="FormUrl"
                    name="FormUrl"
                    value={FormUrl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-3" style={{ marginLeft: "-24px" }}>
                <button
                  className="button btn btn-sm btn-primary"
                  onClick={this.handleSubmit}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PostmanForm;
