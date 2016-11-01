import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

class ButtonCom extends Component {
	render()
	{
		return <div>		
		<button className={styles.buttonGroup}>+ Добавить источник поступления</button>	
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(ButtonCom)