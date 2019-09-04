import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch, Link} from 'react-router-dom';


const HatsPage = () => (
	<h1>Welcome to Hats Page!!!</h1>
)

function App() {
  return (
    <div>
     <Switch>
     	<Route exact path='/' component={HomePage} />
     	<Route exact path='/hats' component={HatsPage} />
     </Switch>
    </div>
  );
}

export default App;
