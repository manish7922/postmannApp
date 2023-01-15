import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PostmanForm from "./postmanForm";
import SelectTab from "./selectTab";
import Response from "./response";
import http from "../services/httpServices"
import ErrorScreen from "./errorScreen";
import {getData} from "../services/httpServices"

class MainComponent extends Component {
  state = {
    formData:"", jsonText:"", paramData:"", headerData:"",
    setApi:{},
    satausApi:""
  };
  handlesumbit= async (data)=>{
let response = await http.getData(data);
 console.log("response",response);
this.setState({setApi:response.data,satausApi:response.status})
  }

  // let response = await http.getData(data);

  render() {
    const {  formData, jsonText, paramData, headerData,setApi,satausApi} = this.state;
    console.log(setApi);

    return (
      <div className="container bg-light">
    
      <PostmanForm  onSumbit={this.handlesumbit} />
      <SelectTab />
   <Response  data={setApi}  dataStatus={satausApi} />
      </div>
    );
  }
}
export default MainComponent;
