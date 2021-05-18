import React, {Component} from "react"
import axios from "axios";

export default class SelectServerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('localhost:8081/node/api/reactData')
            .then(res => {
                console.log(res);
                const items = res.items
                this.setState({items});
            })
    }

    render() {
        return (
            this.state.items.map(items =>
                <div>
                    <select>
                        <option>{items.strDrink}</option>
                        <option>{items.strDrinkThumb}}</option>
                        <option>{items.idDrink}</option>
                    </select>
                </div>)
        )
    }
}