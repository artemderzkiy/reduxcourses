import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

class TextField extends Component {
	
	
	render()
	{	
		const {
			type,
			firstNum
		} = this.props
		
			return <div>		
				<input className={styles.input__simple} type="Number" value={firstNum} onKeyDown={console.log("hello")} placeholder="raz"/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(TextField)