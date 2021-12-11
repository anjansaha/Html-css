import React, { Component } from "react"

class Massage extends Component{
    constructor(){
        super();
        this.state= {
           massage: "Wellcome",
           bg: "red",
           lm: "Chapo Na Ekhane"
        }
    }
    ChangeMassage(){
        this.setState(
            {
                massage:"Chepe Moja Paicho. Vago ebae!! Chol Vag",
                bg:"yellow",
                lm:"Chapa Hoye Gelo"
            }
        )
    }
    render(){
        return(
            <div style={{backgroundColor: this.state.bg}}>
                <h1>{this.state.massage}</h1>
                <button onClick={()=> this.ChangeMassage()} >{this.state.lm}</button>
            </div>
          );   
    }
}
export default Massage