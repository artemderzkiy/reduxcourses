import React, {Component} from 'react'
import {connect} from 'react-redux'

class ButtonCom extends Component {
	render()
	{
		return <div>		
		<button>+ Добавить источник поступления</button>	
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(ButtonCom)