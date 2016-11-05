import React, {Component} from 'react'
import {connect} from 'react-redux'
import styles from '../css/style.css'

class ButtonCom extends Component {

test() {
	dispatch(toggleBut(activeBut))
} 

	render()
	{
		var activeBut =true;

		return <div>		
		<button className={(activeBut==true) ? styles.buttonGroup__active : styles.buttonGroup__notactive} onClick={this.test.bind(this)}>+ Добавить источник поступления</button>	
		</div>
		
	}
}



const mapDispatchToProps = (dispatch) => {
	return {
		onButClick: (id) => {
			return
			dispatch(toggleTodo(id))
		}
	}
}

export default connect(mapDispatchToProps)(ButtonCom)