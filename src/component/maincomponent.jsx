import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from "react";
import PostmanForm from "./postmanForm";
import SelectTab from "./selectTab";
import Response from "./response";
import { getData, getToken, getUserData } from "../services/httpServices";

class MainComponent extends Component {
  state = {
    formData: "",
    jsonText: "",
    paramData: "",
    headerData: "",
    setApi: {},
    statusAPI: "",
    body: "",
  };
  handleSubmit = async (value) => {
    const { FormUrl, Formmethod } = value;
    const request = {
      url: FormUrl,
      method: Formmethod,
      payload: JSON.parse(this.state.body),
    };

    const res = await getData(request);

    this.setState({ setApi: res.data, statusAPI: res.status });
  };

  handleBody = (e) => {
    const { value } = e.target;

    this.setState({ body: value });
  };

  render() {
    const { setApi, statusAPI } = this.state;
    console.log(this.state.body);
    return (
      <div className="container bg-light">
        <PostmanForm onSubmit={this.handleSubmit} />

        <SelectTab body={this.state.body} handleBodyData={this.handleBody} />
        <Response data={setApi} dataStatus={statusAPI} />
      </div>
    );
  }
}
export default MainComponent;
