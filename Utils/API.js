import axios from "axios";

export default axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
    responseType: "json"
});