import React, {Component} from 'react'
import TextArea from './TextArea'
import ComboBox from './ComboBox'
import SumCom from './SumCom'

import {connect} from 'react-redux'

class SourseCom extends Component {
	render()
	{
		return <div>
		<h1>Укажите источник полступления</h1>
		<label>Кассовый символ</label>
		<ComboBox/>
		<SumCom/>
		<TextArea/>			
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(SourseCom)