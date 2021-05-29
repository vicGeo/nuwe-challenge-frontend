import './App.css';
import Profile from './components/Profile';
import logo from './images/logo_nuwe.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;
