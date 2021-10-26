import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NorthAmerica, {SouthAmerica} from './Continent/NorthAmerica'
import NavCon from './NavCon'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <NavCon />
    
    <Switch>
   
      <Route path= '/NorthAmerica' component= {NorthAmerica}/>
      <Route path= '/SouthAmerica' component= {SouthAmerica}/>
  
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
