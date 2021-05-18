import logo from './logo.png';
import './App.css';
//import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";
//import Afcomponent from "./Afcomponent";
import Formcomponent from "./Formcomponent";
import TableComponent from "./TableComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*<Fcomponent name="Andrey"/>*/}
          <Ccomponent/>
          <Formcomponent/>
          <TableComponent/>
          {/*<Afcomponent/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Очень жарко!
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
