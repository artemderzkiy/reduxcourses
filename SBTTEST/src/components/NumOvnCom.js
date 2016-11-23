import React, {Component,PropTypes} from 'react'
import TextField from './TextField'
import styles from '../css/style.css'

export default class NumOvnCom extends Component {

	static propTypes = {
		actions : PropTypes.object.isRequired,
		ovn : PropTypes.object.isRequired,
		sourses: PropTypes.array.isRequired
	}
	
	handleSetSumOvn = e  => {		
		this.props.actions.setNumOvn(e.target.value)		
	}	

	

	render()
	{
		const {actions, ovn,sourses} = this.props;
		return (	<div >
			<h1>Заполните реквизиты объявления на взнос наличными</h1>
			<div >
			<label>Номер ОВН</label>
			<br/>
			<TextField onKeyUp={this.handleSetSumOvn} onChange={this.handleSetSumOvn}   />
			</div>		
			</div>
			)
		}
	}
