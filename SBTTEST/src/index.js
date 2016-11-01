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

//import normstyles from './css/normalize.min.css'
import styles from './css/style.css'



const store = configureStore()

render(
	<Provider store={store}>
	<div> 	
	<NumOvnCom/>
	<div className={styles.line}/>
	<h1>Введите общую сумму взноса</h1>
	<SumCom/>
	<div className={styles.line}/>
	<SourseCom/>
	<div className={styles.line}/>
	<ButtonCom/>	
	</div>
	</Provider>,
	document.getElementById('root')
	)