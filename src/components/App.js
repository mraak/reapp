import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import OrgsListPage from './OrgsListPage'
import CreateOrg from './CreateOrg'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
         <Switch>
           <Route exact path='/' component={OrgsListPage}/>
           <Route exact path='/create' component={CreateOrg}/>
          </Switch>
     </div>
      </div>

    );
  }
}

export default App;
