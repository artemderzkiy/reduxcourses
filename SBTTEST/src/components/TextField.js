import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextField extends Component {
	render()
	{
		return (
			<input
				id="inp" 
				className={styles.input__simple}
				type="Number" 
				onChange={e => this.props.onChange(e)} 
				value={this.props.myValue}  
				disabled={this.props.disabledVal}/>			
			)
		}
	}
