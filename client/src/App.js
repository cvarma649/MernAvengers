import React,{ Fragment, useState} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import OpeningPage from './Components/OpeningPage/OpeningPage';
import NewConnection from './Components/NewConnection/NewConnection';
import Connection from './Components/Connection/Connection';
import Collections from './Components/Collections/Collections';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ImportDB from './Components/ImportDB/ImportDB';
import HeadString from './Components/ImportDB/Headers&Strings/HeadString';


function App() {
  const [connected,setConnected]=useState(false);
  const setConn=(boolean)=>setConnected(boolean);

 return(
   <Fragment>
     <Router>
       <NavBar/>
       <Switch>
          <Route exact path="/importDB/dataConfig" render={props=><HeadString {...props}/>}/>
       <Route exact path="/importDB" render={props=><ImportDB {...props}/>}/>
         <Route exact path="/collections" render={props=><Collections {...props}/>}/>
       <Route exact path="/connection/" render={props=> <Connection {...props}/>}/>
        <Route exact path="/newConnection" render={props=> !connected ? <NewConnection {...props} setConn={setConn}/>:<Redirect to="/connection"/>}/>
        <Route exact path="/" render={props=><OpeningPage {...props}/>}/>
        
      </Switch>
   </Router>
   </Fragment>
 )
//  <div>
//  <NavBar/>
// </div>
}

export default App;
