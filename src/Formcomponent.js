import React, {Component} from "react"

export default class Formcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input onChange = {this.handleChange}/>
                <h5>Controlled input:</h5>
                <h3>{this.state.input}</h3>
            </div>
        )
    }
}