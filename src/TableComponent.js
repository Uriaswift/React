import React, {Component} from "react"
import axios from "axios";

export default class TableComponent extends Component {
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
                <ul>
                    { this.state.items.map(items => <li>{items.strDrink}</li>)}
                </ul>
            )
        }
}
