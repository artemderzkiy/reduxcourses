import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextFieldSum extends Component {
	
	static PropTypes = {		
		setSum : PropTypes.func.isRequired,
		toogleBut : PropTypes.func.isRequired
	}	


	handleSetSum = e  => {		
		this.props.actions.setSum(e.target.value)	
		let sumsourse=0;
		for (var sourse of this.props.sourses) {   
			sumsourse+=sourse.sourseField;
			console.log(sumsourse)
		}
		if (this.props.ovn.sum > sumsourse)
		{
			this.props.actions.toogleBut(true)
		}		
		else  
		{
			this.props.actions.toogleBut(false)
		}
		
	}

	render()
	{				

		return (
			<input className={styles.input__simple} type="Number"  onKeyUp={this.handleSetSum}   />			
			)
		}
	}
