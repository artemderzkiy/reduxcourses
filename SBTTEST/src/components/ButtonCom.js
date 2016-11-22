import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class ButtonCom extends Component {

	static propTypes = {
		actions: PropTypes.object.isRequired ,
		button : PropTypes.object.isRequired, 
		ovn : PropTypes.object.isRequired
	}

	
	handleSave = (e)  => {
		if (document.getElementById("sel").value!=="" && document.getElementById("ta").value!=="" && document.getElementById("ta").value!=="") {
			this.props.actions.AddSourse(document.getElementById("sel").value, document.getElementById("ta").value ,Number(document.getElementById("inp").value));
			document.getElementById("sel").value="";
			document.getElementById("ta").value="";
			document.getElementById("inp").value="";
			this.props.actions.setNumOvn("");
		}
		else 
			alert("Не введены все поля!")
	}
	render()
	{
		var activeBut =this.props.button.activeBut;
		return (<button 
			className={(activeBut==true) ? styles.buttonGroup__active : styles.buttonGroup__notactive} 
			onClick={this.handleSave} >+ 
			Добавить источник поступления
			</button>				
			)
		}
	}


