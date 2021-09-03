import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './pages/Home';
import NewStudent from './pages/NewStudent';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';

function App() {
  const saveNewStudent = (data) => {
    const config = {
      method: 'post',
      url: process.env.REACT_APP_BACKEND_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    };
    axios(config)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
  }
  return (
    <Router>
      <Container style={{ maxWidth: '500px' }}>
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route path="/new">
            <NewStudent saveNewStudent={saveNewStudent} />
          </Route>
          <Route path='/home'>
            <Home />
          </Route >
          <Route path='/'>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
