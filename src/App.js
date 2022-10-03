import HomePage from "./Main-Pages/Home/HomePage";
import Nav from "./Components/NavBar/Nav";
import AddPostMain from "./Main-Pages/AddPost/AddPostMain";
import ProfilePage from "./Components/ProfileP1/Profilep1";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path={"/profile"}>
            <ProfilePage/>
          </Route>
        <Route path={"/post"}>
            <AddPostMain/>
          </Route>
          <Route path={"/"}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
