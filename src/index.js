import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Navigation.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ccomponent from "./components/Ccomponent";
import TableComponent from "./components/TableComponent";
import SelectServerComponent from "./components/SelectServerComponent";
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <section className="container">
        <Router classname = "Router">
            <nav className="nav">
                <ul className="ulNav">
                    <li><NavLink style={{ textDecoration: 'none', color: "white" }} exact={true} activeClassName='active' to="/">Main</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: "white" }} exact={true} activeClassName='active' to="/counter">Counter</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: "white" }} exact={true} activeClassName='active' to="/table">Table</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: "white" }} exact={true} activeClassName='active' to="/select">Select</NavLink></li>
                </ul>
            </nav>
            <Route exact path="/" component={App} />
            <Route exact path="/counter" component={Ccomponent} />
            <Route exact path="/table" component={TableComponent} />
            <Route exact path="/select" component={SelectServerComponent} />
        </Router>
    </section>,
    document.getElementById('root')
);
reportWebVitals();
