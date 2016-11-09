import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextField extends Component {
	
	static PropTypes = {
		setSumOvn: PropTypes.func.isRequired,
		setSum : PropTypes.func.isRequired
	}

	
	
	handleSetSumOvn = e  => {		
		this.props.setSumOvn(e.target.value)		
	}


	handleSetSum = e  => {		
		this.props.actions.setSum(e.target.value)		
	}


	



	render()
	{		
		
		console.log(this.props);
		

		return (
			<input className={styles.input__simple} type="Number"  onChange={this.handleSetSumOvn}  onKeyUp={this.handleSetSum} value={this.props.ovn.ovnsum}  />			
			)

	}
}
