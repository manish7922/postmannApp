import React, { Component } from "react";
import http from "../services/httpServices";
import { getData } from "../services/httpServices";
class CreateJson extends Component {
  state = {
    data: "",
  };

  onValueChange = (e) => {
    const { currentTarget: input } = e;
    // let s1={...this.setState}
    // s1.data[input.name]=input.value;
    // console.log(e.target.value);
    // this.fetchData(e.target.value);
    // getData(jsonText)=e.target.value
    // this.setState({ getData(jsonText):e.target.value})
  };

  // async fetchData(data) {
  //    let response = await http.getData(data);
  //     console.log(  response);
  //   }

  render() {
    let { data } = this.state;
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "10px" }}>
          <textarea rows="4" cols="20" onchange={(e) => this.onValueChange(e)}>
            {" "}
          </textarea>
        </div>
        {/* id="data" name="data" value={data} */}
      </div>
    );
  }
}

export default CreateJson;
