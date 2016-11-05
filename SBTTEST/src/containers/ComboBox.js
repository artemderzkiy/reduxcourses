import React, {Component} from 'react'
import {connect} from 'react-redux'

class ComboBox extends Component {
	render()
	{
		return <div>		
		<select>
		 options={[
        ['office', 'Office'],
        ['private_home', 'Private Home'],
        ['residential', 'Residential'],
        ['retail', 'Retail'],
        ['restaurant', 'Restaurant'],
        ['school', 'School'],
        ['townhouse', 'Townhouse'],
        ['warehouse', 'Warehouse'],
        ['other', 'Other']
      ]}
		</select>	
		</div>
		
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(ComboBox)