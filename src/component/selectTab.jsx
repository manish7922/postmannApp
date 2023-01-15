import { Button } from "bootstrap";
import React,{Component} from "react";
import TableForm from "./tableForm";
import CreateJson from "./createJson";
class SelectTab extends Component {
    state={
        view:0,
         paramsData:{},
         setParamsData:{},
         headerData:{},
         setHeaderData:{},
         jsonData:{},
         setJsonData:{}
    }
    handleOuery=()=>{
       let s1={...this.state} 
       s1.view=0;
       this.setState(s1);
    }
    handleheader=()=>{
        let s1={...this.state} 
        s1.view=1;
        this.setState(s1);
     }
     handleBody=()=>{
        let s1={...this.state} 
        s1.view=2;
        this.setState(s1);
     }

    render (){
        const {view,paramsData,setHeaderData,setParamsData,headerData,jsonData,setJsonData}=this.state
        return (
        
          view===0 ?   (
        
                 <div className="conatiner">
                <div className="row" style={{marginTop:"10px"}}>
                  <div className="col-5"> 
               <button className="btn btn-sm " onClick={this.handleOuery}>Query-Params</button>
               <button className="btn btn-sm " onClick={this.handleheader}>Hederas</button>
               <button className="btn btn-sm " onClick={this.handleBody}>body</button>
               </div> 
               <div className="col-7"></div>
               {/* <div className="row border">
         <div className="col-4 border">Key</div>
         <div className="col-4 border">Value</div>
         <div className="col-4 border">Description</div>
        </div> */}
               <div className="row border">
               <TableForm   text={'Query Params'}  data={paramsData}  setData={setParamsData}/>
                </div>
               </div>
               </div>
              
         ) : view===1 ?
         <div className="conatiner">
         <div className="row" style={{marginTop:"10px"}}>
           <div className="col-5"> 
        <button className="btn btn-sm " onClick={this.handleOuery}>Query-Params</button>
        <button className="btn btn-sm " onClick={this.handleheader}>Hederas</button>
        <button className="btn btn-sm " onClick={this.handleBody}>body</button>
        </div> 
        <div className="col-7"></div>
        {/* <div className="row border">
         <div className="col-4 border">Key</div>
         <div className="col-4 border">Value</div>
         <div className="col-4 border">Description</div>
        </div> */}
        <div className="row border">

        <TableForm text={'Headers'} data={headerData} setData={setHeaderData} />
         </div>
        </div>
        </div>: view===2 ?
          <div className="conatiner">
          <div className="row" style={{marginTop:"10px"}}>
            <div className="col-5"> 
         <button className="btn btn-sm " onClick={this.handleOuery}>Query-Params</button>
         <button className="btn btn-sm " onClick={this.handleheader}>Hederas</button>
         <button className="btn btn-sm " onClick={this.handleBody}>body</button>
         </div> 
         <div className="col-7"></div>
         <div className="row">
         <CreateJson text={'json'} data={jsonData} setData={setJsonData} />
         {/* <TableForm /> */}
          </div>
         </div>
         </div>
            :("")

        
        
        )
    }
}

export default SelectTab; 