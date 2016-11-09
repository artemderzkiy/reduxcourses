import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextField extends Component {
	
	static PropTypes = {
		setSumOvn: PropTypes.func.isRequired,
		toogleBut : PropTypes.func.isRequired
	}

	
	
	handleSetSumOvn = e  => {		
		this.props.setSumOvn(e.target.value)

		if (this.props.ovn.sum > this.props.ovn.ovnsum)
		{
			this.props.toogleBut(true)
		}		
		else  
		{
			this.props.toogleBut(false)
		}


	}	



	render()
	{		
		
		console.log(this.props);
		

		return (
			<input className={styles.input__simple} type="Number"  onChange={this.handleSetSumOvn}  value={this.props.ovn.ovnsum}  />			
			)

	}
}
