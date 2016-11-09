import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class ButtonCom extends Component {

	static propTypes = {
		actions: PropTypes.object.isRequired ,
		button : PropTypes.object.isRequired, 
		ovn : PropTypes.object.isRequired
	}

	toogleBut = (e) => {
		if (this.props.ovn.sum<this.props.ovn.ovnsum)
		{
			this.props.actions.ToogleBut()
		}
		else 
			this.props.actions.ToogleBut()
	}

	handleSave = (e)  => {
		if (true) {
			this.props.actions.AddSourse(document.getElementById("sel").value, this.props.ovn.ovnsum, document.getElementById("ta").value);
			//this.props.ovn.ovnsum='';
		}
	}

	render()
	{
		var activeBut =this.props.button.activeBut;
		//console.log(this.props)
		


		return (<button className={(activeBut==true) ? styles.buttonGroup__active : styles.buttonGroup__notactive} onClick={this.handleSave} onChange={this.toogleBut}>+ Добавить источник поступления</button>	)


	}
}


