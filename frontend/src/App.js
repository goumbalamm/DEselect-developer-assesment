// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home';
import NewStudent from './pages/NewStudent';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route path="/new">
            <NewStudent />
          </Route>
          <Route path={['/', '/home']}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
