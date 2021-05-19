import React, {Component} from "react"
import axios from "axios";
import './SelectServerComponent.css';

export default class SelectServerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('/node/api/reactData')
            .then((respond) => {
                const items = respond.data.items
                /*console.log(items);*/
                this.setState({items});
            })
    }

    render() {
        const {items} = this.state;
        return (
            <div className="SelectServerComponent">
                <select className="Select">
                    {items.map((option, index) =>
                        <option>{option.strDrink}</option>
                    )}
                </select>
            </div>
        )
    }
}

