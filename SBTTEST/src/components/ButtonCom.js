import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class ButtonCom extends Component {

	static propTypes = {
		actions: PropTypes.object.isRequired ,
		button : PropTypes.object.isRequired, 
		ovn : PropTypes.object.isRequired
	}

	

	handleSave = (e)  => {
		if (true) {
			this.props.actions.AddSourse(document.getElementById("sel").value, this.props.ovn.ovnsum, document.getElementById("ta").value);
					}
	}

	render()
	{
		var activeBut =this.props.button.activeBut;

		return (<button className={(activeBut==true) ? styles.buttonGroup__active : styles.buttonGroup__notactive} onClick={this.handleSave} onChange={this.toogleBut}>+ Добавить источник поступления</button>	)


	}
}


