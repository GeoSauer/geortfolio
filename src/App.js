import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/connect" component={Connect} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
