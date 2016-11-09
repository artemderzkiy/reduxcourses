import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextField extends Component {
	
	static PropTypes = {
		setSumOvn: PropTypes.func.isRequired,
		toogleBut : PropTypes.func.isRequired
	}	
	
	handleSetSumOvn = e  => {		
		this.props.setSumOvn(e.target.value)
		let sumsourse=0;
		for (var sourse of this.props.sourses) {   
			sumsourse+=sourse.sourseField;
			console.log(sumsourse)
		}
		if (this.props.ovn.sum > sumsourse)
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
		return (
			<input className={styles.input__simple} type="Number"  onChange={this.handleSetSumOvn}  value={this.props.ovn.ovnsum}  />			
			)

		}
	}
