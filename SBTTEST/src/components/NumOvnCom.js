import React, {Component} from 'react'
import TextField from './TextField'

export default class NumOvnCom extends Component {


	


	render()
	{
		const {ovnsum} = this.props;


		
		return (	<div>
			<h1>Заполните реквизиты на ввод наличными</h1>
			<label >Номер ОВН</label>
			<TextField  />		
			</div>
			)
	}
}
