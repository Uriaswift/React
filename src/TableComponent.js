import React, {Component} from "react"

export default class TableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isloaded, items} = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isloaded) {
            return <p> Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.strDrink}
                            <img alt="" width="50" height="50" src={item.strDrinkThumb}/>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}