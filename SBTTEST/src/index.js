import React from 'react'
import { render } from 'react-dom'
import {Provider}  from 'react-redux'
import MainApp  from './containers/MainApp'
import configureStore from './store/configureStore'
import {toogleBut} from './actions/sourseActions'
//import normstyles from './css/normalize.min.css'




const store = configureStore();

// Log the initial state
//console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// Dispatch some actions
//store.dispatch(setSum(50))
//store.dispatch(setSumOvn(500));
//store.dispatch(toogleBut());
// Stop listening to state updates
//unsubscribe()

render(
	<Provider store={store}>
	<MainApp/>	
	</Provider>,
	document.getElementById('root')
	)