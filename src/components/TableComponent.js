import React, {Component} from "react"
import axios from "axios";
import '../css/TableComponent.css';

export default class TableComponent extends Component {
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
            <div className="TableComponent">
                <table className="DrinksTable">
                    <thead>
                    <tr>
                        {/*<th>#</th>*/}
                        <th>Drink</th>
                        <th>Photo</th>
                        <th>Number</th>

                    </tr>
                    </thead>
                    <tbody>
                    {items.map((row, index) =>
                        <tr>
                            {/*<td>{index}</td>*/}
                            <td>{row.strDrink}</td>
                            <td><img alt='' width="80" src={row.strDrinkThumb}/></td>
                            <td>{row.idDrink}</td>

                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}