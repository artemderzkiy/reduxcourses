import React, {Component,PropTypes} from 'react'
import TextField from './TextField'

export default class NumOvnCom extends Component {

	static propTypes = {
		actions : PropTypes.object.isRequired,
		ovn : PropTypes.object.isRequired,
		sourses: PropTypes.array.isRequired
	}
	


	render()
	{
		const {actions, ovn,sourses} = this.props;
		
		return (	<div>
			<h1>Заполните реквизиты на ввод наличными</h1>
			<label >Номер ОВН</label>
			<br/>
			<TextField setSumOvn={actions.setSumOvn} toogleBut={actions.toogleBut} ovn={ovn} sourses={sourses}/>		
			</div>
			)
	}
}
