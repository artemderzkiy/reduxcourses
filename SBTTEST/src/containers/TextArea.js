import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

class TextArea extends Component {
	render()
	{
		return <div>
		<label>Источник поступления</label>
		<textarea className={styles.textarea__simple} />
		
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(TextArea)