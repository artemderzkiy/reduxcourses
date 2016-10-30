import React, {Component} from 'react'
import {connect} from 'react-redux'

class ComboBox extends Component {
	render()
	{
		return <div>		
		<select></select>	
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(ComboBox)