import React, {Component} from 'react'
import TextField from './TextField'
import {connect} from 'react-redux'

class NumOvnCom extends Component {
	render()
	{
		return <div>
		<h1>Заполните реквизиты на ввод наличными</h1>
		<label>Номер ОВН</label>
		<TextField/>		
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(NumOvnCom)