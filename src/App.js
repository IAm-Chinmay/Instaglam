import HomePage from './Main-Pages/Home/HomePage';
import Nav from './Components/NavBar/Nav';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Switch>
      <Route path={'/'}>
    <HomePage/>
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
