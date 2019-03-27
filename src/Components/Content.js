import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Dashboard from './Dashboard.js'
import Orders from '../Pages/OrdersPage/Orders.js'
import Numbers from '../Pages/NumbersPage/Numbers.js'
import NumberGroups from '../Pages/NumbersPage/NumberGroups.js'
//import Applications from './Applications.js'

const Content = () =>{
  return(
    <Switch>
      <Route exact path='/numbers' component={Numbers}/>
      <Route exact path='/orders' component={Orders}/>
      <Route exact path='/numbergroups' component={NumberGroups}/>
    </Switch>
  )
}

export default Content
