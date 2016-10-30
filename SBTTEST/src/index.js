import React from 'react'
import { render } from 'react-dom'
import {Provider}  from 'react-redux'
import TextField from './containers/TextField'
import TextArea from './containers/TextArea'
import ButtonCom from './containers/ButtonCom'
import ComboBox from './containers/ComboBox'
import NumOvnCom from './containers/NumOvnCom'
import SumCom from './containers/SumCom'
import SourseCom  from './containers/SourseCom'
import configureStore from './store/configureStore'

const store = configureStore()

render(
	<Provider store={store}>
	<div> 	
	<NumOvnCom/>
	<h1>Введите общую сумму взноса</h1>
	<SumCom/>
	<SourseCom/>
	<ButtonCom/>	
	</div>
	</Provider>,
	document.getElementById('root')
	)