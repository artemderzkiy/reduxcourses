import React, {Component,PropTypes} from 'react'
import TextField from './TextField'
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

	

	render() {
		const {actions,ovn,sourses} = this.props;	
		return (<div className={styles.SumGroup}>	
					<div className={styles.leftside}>	
					<label>Сумма</label>
					<br/>
					<TextField idInp={"inp"} onKeyUp={this.handleSetSum}  onChange={this.handleSetSum}/>
					</div>
					<label className={styles.label__rubl}>рубль РФ</label>
			</div>
			)	
	}
	
}
