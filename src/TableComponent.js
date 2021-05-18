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
            this.state.items.map(items =>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Drink</th>
                            <th>Photo</th>
                            <th>Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            items.map((items) =>
                                <tr key={items.id}>
                                    <td>{items.strDrink}</td>
                                    <td>{items.strDrinkThumb}</td>
                                    <td>{items.idDrink}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>)
        )
    }
}
