import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './papes/login/Login';
import Signup from './papes/signup/Signup';
import Home from './papes/home/Home';
import Login2 from './papes/login/Login2';
import Listbooking from './papes/listbooking/Listbooking';



function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/listbooking">
            <Listbooking/>
          </Route>
          <Route path="/login">
            <Login2/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
