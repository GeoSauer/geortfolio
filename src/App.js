import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/connect" component={Connect} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  );
}

export default App;
