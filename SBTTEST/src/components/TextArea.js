import React, {Component} from 'react'
import styles from '../css/style.css'

export default  class TextArea extends Component {
	render()
	{
		return (	<textarea 
			className={styles.textarea__simple} 
			id="ta" 
			value={this.props.myValueArea} 
			disabled={this.props.disabledVal}/>					
			)
		}
	}
