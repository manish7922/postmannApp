import React, {Component} from "react";

import http from "../services/httpServices"
class Response extends Component{
    state={}

handleForm=(data)=>{
let obj=data;
console.log(data);
let readableobj = '{ \n';
for(let key in obj) {
    readableobj += '\t'
    readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
    if (Object.keys(obj).pop() !== key.toString()) {
        readableobj += ',\n'
    }
}
readableobj += '\n}';
return readableobj;
}
   
 

    render(){
        const {data,dataStatus}=this.props
        console.log(data.userId);
         let responseData=this.handleForm(data)
        return(
        <div className="container">
        <div className="row">
           <div className="row">
            <div className="col-2"><h5>Response</h5></div>
            <div className="col-8"></div>
            <div className="col-2"><h5>Status:{dataStatus}</h5></div>
           </div>
        <textarea id="w3review" name="w3review" rows="4" cols="50"  value={responseData} >
   {/* {this.props.data.map((n)=>n)} */}
        </textarea>
        </div>
        </div>
        )
    }
}

export default Response;