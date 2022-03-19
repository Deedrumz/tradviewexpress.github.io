import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import Footer from './Footer'
import Buy from './Buy';
import Sell from './Sell';
import Instant from './Instant';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome';
import Individual from './Individual';
import Business from './Business';
import Login from './Login';
import Verify from './Verify';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>
        <Switch>

          <Route exact path='/'>
              <Home/>
          </Route>

          <Route path='/Welcome'>
              <Welcome/>
          </Route>
          <Route path='/Verify'>
              <Verify/>
          </Route>

          <Route path='/Individual'>
            <Individual />
          </Route>

          <Route path='/Business'>
              <Business/>
          </Route>

          <Route path='/Instant'>
              <Instant/>
          </Route>

          <Route path='/Buy'>
              <Buy/>
          </Route>

          <Route path='/Sell'>
              <Sell/>
          </Route>

          <Route path='/Login'>
              <Login/>
          </Route>



        </Switch>
        <Footer/>
      </Router>











    </div>
  );
}

export default App;
