import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Menubar from './Pages/Menubar/Menubar';
import AddUser from './Pages/AddUser/AddUser';
import DeleteUser from './Pages/DeleteUser/DeleteUser';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddUser />
          </Route>
          <Route exact path="/delete">
            <DeleteUser />
          </Route>
          <Route exact path="/update/:id">
            <UpdateUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
