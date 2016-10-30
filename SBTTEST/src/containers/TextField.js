import React, {Component} from 'react'
import {connect} from 'react-redux'

class TextField extends Component {
	render()
	{
		return <div>
		
		<input type="Number"  value={this.props.numOvn}/>
		
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(TextField)