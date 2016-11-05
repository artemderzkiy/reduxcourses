import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

export default class TextField extends Component {
	
	
	render()
	{	
		
		return <div>		
		<input className={styles.input__simple} type="Number" />
		</div>
	}
}
