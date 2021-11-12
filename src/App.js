import React from 'react'
import NavBar from './Components/NavBar'
import SideNavBar from './Components/SideNavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UsersList from './Components/Users/UsersList'
import AddUser from './Components/Users/AddUser'
import UserData from './Components/Users/UserData'
import EditUser from './Components/Users/EditUser'
import Dashboard from './Components/Dashboard';

export default function App() {
  return (
    <Router>
    <div id="wrapper">
      <SideNavBar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <NavBar/>
        <Switch>
        <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/home">
          <Dashboard/>
            </Route>
          <Route exact path="/user">
            <UsersList/>
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/user/:id">
            <UserData/>
          </Route>
          <Route exact path="/edituser/:id">
            <EditUser/>
          </Route>
        </Switch>
      </div>
      </div>
    </div>
    </Router>
  )
}
