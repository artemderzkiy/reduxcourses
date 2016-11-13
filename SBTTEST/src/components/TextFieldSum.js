import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextFieldSum extends Component {
	render()
	{		
		return (
			<input className={styles.input__simple} type="Number"  onChange={e => this.props.onChange(e)} onKeyUp={e => this.props.onKeyUp(e)}   />			
			)
		}
	}
