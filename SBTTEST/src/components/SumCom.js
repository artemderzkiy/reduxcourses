import React, {Component} from 'react'
import TextField from './TextField'
import {connect} from 'react-redux'
import styles from '../css/style.css'


export default class SumCom extends Component {
	render() {
	
		return (<div className={styles.SumGroup}>	
		         <div>	
					<label>Сумма</label>
					<TextField/>
					</div>
					<label className={styles.label__rubl}>рубль РФ</label>	
					</div>
				)	
	}
	
}
