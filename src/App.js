import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import DataProfile from './screens/DataProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={DataProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
