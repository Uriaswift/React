import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Navigation.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ccomponent from "./Ccomponent";
import TableComponent from "./TableComponent";
import SelectServerComponent from "./SelectServerComponent";
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
