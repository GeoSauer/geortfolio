import { Route, Switch } from 'react-router-dom';
import './About.css';
import Home from '../Home/Home';

export default function About() {
  return (
    <div>
      About
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/projects" component={Home} />
        <Route exact path="/connect" component={Home} />
        <Route exact path="/connect" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}
