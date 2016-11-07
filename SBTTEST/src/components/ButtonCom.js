import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class ButtonCom extends Component {

	static propTypes = {
		AddSourse: PropTypes.func.isRequired ,
		 button : PropTypes.object.isRequired
	}




	handleSave = (e)  => {
		if (true) {
			this.props.AddSourse(document.getElementById("sel").value, document.getElementById("ta").value)
		}
	}

	render()
	{
		var activeBut =this.props.button.activeBut;
		


		return (<button className={(activeBut==true) ? styles.buttonGroup__active : styles.buttonGroup__notactive} onClick={this.handleSave}>+ Добавить источник поступления</button>	)
		
		
	}
}


