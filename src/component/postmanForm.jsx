import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from "react";
import http from "../services/httpServices"
class PostmanForm extends Component {
  state = {
    formData: { Formmethod: "GET", Formurl: "", data: "" },
    APi: ["GET", "POST"],
Data:{}
  };

  async fetchData(data) {
    this.state.Data = await http.getData(data);
    console.log(  this.state.Data);
      // let {data1}=response
      // this.setState({Data:response});
      
  }

  // componentDidMount() {
  //   this.fetchData();
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps !== this.props) this.fetchData();
  // }

  handleChange=(e)=>{
    const {currentTarget:input}=e;
  let s1={...this.state}
s1.formData[input.name]=input.value;
  this.setState(s1)
   }

   handleSumbit=(e)=>{
    e.preventDefault();
    console.log("handel sumbit",this.state.formData);
    console.log("handel Data",this.state.Data);
    this.props.onSumbit( this.state.formData)
    this.fetchData(this.state.formData);
     }


  render() {
    const { Formmethod, Formurl, data } = this.state.formData;
    const { APi,Data } = this.state;
    console.log(Data);
    return (
      <div className="container" style={{marginTop:"30px"}}>

        <div className="row">
          
          <div className="col-12">
            <div className="row">
              <div className="col-2">
                <div className="form-group">
                  <select
                    className="select1 form-control"
                    style={{ background: '#F6F6F6'}}
                    name="Formmethod"
                    value={Formmethod}
                    onChange={this.handleChange}
                  >
                    {/* <option value="GET">GET</option> */}
                    {APi.map((c1) => (
                      <option>{c1}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-7" style={{marginLeft:"-24px"}}>
                <div className="from-group">
                  <input
                    type="text"
                    className="textfield1 form-control"
                    style={{ background: '#F6F6F6'}}
                    id="Formurl"
                    name="Formurl"
                    value={Formurl}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-3" style={{marginLeft:"-24px"}}>
                <button
                  className="button btn btn-sm btn-primary"
                  onClick={this.handleSumbit}
                >
                  sumbit
                </button>
              </div>
           
            
            </div>
               {/* <div className="row" style={{marginTop:"10px"}}>
               <textarea id="data" name="data" value={data} rows="4" cols="50"> </textarea>
               </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default PostmanForm;
