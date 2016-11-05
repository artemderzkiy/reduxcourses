import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

export default  class TextArea extends Component {
	render()
	{
		return <div>
		<label>Источник поступления</label>
		<textarea className={styles.textarea__simple} />
		
		</div>
		
	}
}
