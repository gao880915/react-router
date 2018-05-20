import React, { Component } from 'react'
import { Router,Route,browserHistory,IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store/'
import CommonWrapper from '../common/CommonWrapper'
import {View as Index} from '../pages/index/'
import List from '../pages/list/'

export default class App extends Component {
	render(){
		return (
			<Provider store = { store }>
			  <Router history={browserHistory}>
			    <Route path="/" component={CommonWrapper}>
			      <IndexRoute component={Index}></IndexRoute>
			      <Route path="list/(:id)" component={List}></Route>
			    </Route>
			  </Router>
			</Provider>
		)
	} 
	
	beforeEnter(){
		alert(123)
	}
}
