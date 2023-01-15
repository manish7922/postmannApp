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
  };
  // handleSubmit = async (data) => {
  //   let response = await http.getData(data);
  //   console.log("response", response);
  //   this.setState({ setApi: response.data, statusAPI: response.status });
  // };

  componentDidMount() {
    const fetchData = async () => {
      const request = {
        endPoint: "/todos/1",
        baseURL: "https://jsonplaceholder.typicode.com",
        header: {},
        method: "GET",
        responseType: "json",
        payload: "",
      };
      const res = await getData(request);
      console.log(res.data);

      // const token = await getToken();
      // const res = await getUserData(token.data);
      // console.log(res);
    };
    fetchData();
  }

  render() {
    const { setApi, statusAPI } = this.state;

    return (
      <div className="container bg-light">
        <PostmanForm onSubmit={this.handleSubmit} />
        <SelectTab />
        <Response data={setApi} dataStatus={statusAPI} />
      </div>
    );
  }
}
export default MainComponent;
