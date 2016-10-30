import React, {Component} from 'react'
import {connect} from 'react-redux'

class TextArea extends Component {
	render()
	{
		return <div>
		
		<textarea />
		
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(TextArea)