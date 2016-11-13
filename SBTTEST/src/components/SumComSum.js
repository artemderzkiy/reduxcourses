import React, {Component,PropTypes} from 'react'
import TextFieldSum from './TextFieldSum'
import styles from '../css/style.css'


export default class SumComSum extends Component {

static propTypes = {		
		actions : PropTypes.object.isRequired,
		ovn : PropTypes.object.isRequired,
		sourses : PropTypes.array.isRequired,
	}	
	handleSetSum = e  => {		
		this.props.actions.setSum(e.target.value)			
	}

	handleToogle = e => {
		let sumsourse=0;
		for (var sourse of this.props.sourses) {   
			sumsourse+=Number(sourse.sumField);
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

	render() {
	const {actions,ovn,sourses} = this.props;	
		return (<div className={styles.SumGroup}>	
		         <div className={styles.leftside}>	
					<label>Сумма</label>
					<br/>
					<TextFieldSum onChange={this.handleToogle}  onKeyUp={this.handleSetSum}/>
					</div>
					<label className={styles.label__rubl}>рубль РФ</label>
					</div>
				)	
	}
	
}
