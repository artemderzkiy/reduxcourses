import React, {Component} from 'react'
import TextField from './TextField'
import {connect} from 'react-redux'

class SumCom extends Component {
	render()
	{
		return <div>		
		<label>Сумма</label>
		<TextField/>
			<label>рубль РФ</label>	
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(SumCom)