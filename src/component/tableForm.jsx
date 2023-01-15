// parms:{key:"",Value:"",description:""}

import React,{Component} from "react";

class TableForm extends Component {
    state={
        data:{key:"",Value:"",description:""}
    }

    handleChange=(e)=>{
        const { currentTarget: input } = e;
        let s1={...this.state}
         s1.data[input.name]=input.value;
        this.setState(s1)
    }
 
    render(){
        const {key,Value,description}=this.state.data;
        return (
            <div className="container text-center">
                <div className="row" style={{margin:"0px"}}>
                <div className="col-4 text-center">
                    <div className="from-group">
                  <div className="col-12 border text-center">  <h5 className="" style={{padding:"2,8"}}>key</h5></div>
                    <input className="form-control" type="text" id="key" name="key" value={key}  placeholder="key" onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className="col-4" style={{marginLeft:"-22px"}}>
                    <div className="from-group">
                    <div className="col-12 border text-center">  <h5 className="" style={{padding:"2,8"}}>Value</h5></div>
                    <input className="form-control" type="text" id="Value" name="Value" value={Value}    placeholder="Value"  onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className="col-4" style={{marginLeft:"-22px"}}>
                    <div className="from-group">
                 <div className="col-12 border text-center">  <h5 className="" style={{padding:"2,8"}}>description</h5></div>
                    <input className="form-control" type="text" id="description" name="description" value={description}   placeholder="description"   onChange={this.handleChange}   />
                    </div>
                    </div>
                    <div className="col-4" style={{marginTop:"-22px"}}>
                    <div className="from-group">
                    <label></label>
                    <input className="form-control" type="text" id="key" name="key" value={key}   placeholder="key"  onChange={this.handleChange}   />
                    </div>
                    </div>
                    <div className="col-4"  style={{marginLeft:"-22px",marginTop:"-22px"}}>
                    <div className="from-group">
                    <label></label>
                    <input className="form-control" type="text" id="Value" name="Value" value={Value}   placeholder="Value"  onChange={this.handleChange}   />
                    </div>
                    </div>
                    <div className="col-4" style={{marginLeft:"-22px",marginTop:"-22px"}}>
                    <div className="from-group">
                    <label></label>
                    <input className="form-control" type="text" id="description" name="description" value={description}   placeholder="description"  onChange={this.handleChange}  />
                    </div>
                    </div>
                    <div className="col-4" style={{marginTop:"-22px"}}>
                    <div className="from-group">
                    <label></label>
                    <input className="form-control" type="text" id="key" name="key" value={key}   placeholder="key"  onChange={this.handleChange}  />
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="from-group" style={{marginLeft:"-22px",marginTop:"-22px"}}>
                    <label></label>
                    <input className="form-control" type="text" id="Value" name="Value" value={Value}   placeholder="Value"   onChange={this.handleChange}  />
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="from-group" style={{marginLeft:"-22px",marginTop:"-22px"}}>
                    <label></label>
                    <input className="form-control" type="text" id="description" name="description" value={description}  placeholder="description"   onChange={this.handleChange}    />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableForm;
