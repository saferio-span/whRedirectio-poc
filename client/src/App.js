import React, { useEffect } from 'react'
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from "./Components/List";
import FlagBasedWH from './Components/FlagBasedWH';
import NormalWhpage from './Components/NormalWhpage';

function App() {

  useEffect(()=>{
    localStorage.setItem('sendToList',false)
  },[])
  return (
    <div className="App">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </head>
      <body>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list">
              <List />
            </Route>
            <Route exact path="/flagBasedWh">
              <FlagBasedWH />
            </Route>
            <Route exact path="/wh">
              <NormalWhpage />
            </Route>
          </Switch>
        </Router>
      </body>
      <>
        <script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
        <script  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous" />
        <script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous" />
      </>
    </div>
  );
}

export default App;
