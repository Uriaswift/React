import React, {Component} from "react"
import './Ccomponent.css';
export default class Ccomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment (){
       this.setState(state =>({
           count: state.count + 1
       }))
    }
    decrement (){
        this.setState(state =>({
            count: state.count - 1
        }))
    }
    reset (){
        this.setState({
            count: 0
        })
    }
    render(){
        return(
            <div className="Ccomponent">
               <div className="Buttons">
                   <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
               </div>
                <div className="CountHeader"><h1>Current: {this.state.count}</h1></div>
            </div>
        )
    }
}
