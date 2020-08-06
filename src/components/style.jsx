import React, {Component} from "react";

class Style extends Component{
    constructor() {
        super()
        this.state = {
            answer: "yes"
        }
    }
    render(){
        const Decor = {
            color: "#1A5276"
        };
        return(
            <h1 style = {Decor}>Car report {this.state.answer}</h1>
        )
    }
}

export default Style;