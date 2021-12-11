import React, { Component } from "react";


class Counts extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    UpdateCount(){
       /* this.setState({
            count: this.state.count +1
        }, ()=>{
            console.log("count State", this.state.count)
        }
        )
        console.log(this.state.count)*/
        this.setState((perValue, props)=>({
            count: perValue.count + 1
        }))
        
    }
    CountFive(){
        this.UpdateCount();
        this.UpdateCount();
        this.UpdateCount();
        this.UpdateCount();
        this.UpdateCount();
    }
    render(){
        return(
            <div>
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=>this.CountFive()}>count</button>
            </div>
        );
    }

}
export default Counts