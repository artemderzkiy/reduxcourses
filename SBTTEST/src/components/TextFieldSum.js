import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class TextFieldSum extends Component {
	
	static PropTypes = {		
		setSum : PropTypes.func.isRequired,
		toogleBut : PropTypes.func.isRequired
	}
		


	handleSetSum = e  => {		
		this.props.actions.setSum(e.target.value)	
		if (this.props.ovn.sum > this.props.ovn.ovnsum)
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
		
		console.log(this.props);
		

		return (
			<input className={styles.input__simple} type="Number"  onKeyUp={this.handleSetSum}   />			
			)

	}
}
