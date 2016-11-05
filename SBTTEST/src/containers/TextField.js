import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

class TextField extends Component {
	
	
	render()
	{	
		
		return <div>		
		<input className={styles.input__simple} type="Number"  onClick={console.log("hello")} />
		</div>
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(TextField)