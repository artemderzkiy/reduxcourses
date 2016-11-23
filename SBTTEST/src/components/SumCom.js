import React, {Component,PropTypes} from 'react'
import TextField from './TextField'
import styles from '../css/style.css'


export default class SumCom extends Component {

static propTypes = {		
		actions : PropTypes.object.isRequired,
		ovn : PropTypes.object.isRequired,
		sourse : PropTypes.object.isRequired
	}
	render() {
	const {actions,ovn,sourse} = this.props;		
	 if (this.props.sourse.id==0)
	{
		return (<div className={styles.SumGroup}>	
		         	<div className={styles.leftside}>	
							<label>Сумма</label>
							<br/>
							<TextField idInp={this.props.idInp}  myValue={ovn.sum}   />
						</div>
						<label className={styles.label__rubl}>рубль РФ</label>
					</div>
				)	
	}
	else 
		{
		return (<div className={styles.SumGroup}>	
		         	<div className={styles.leftside}>	
							<label>Сумма</label>
							<br/>
							<TextField   myValue={this.props.myValueInp}  disabledVal={this.props.disabledVal}/>
						</div>
						<label className={styles.label__rubl}>рубль РФ</label>
					</div>
				)	
	}
	}
	
}
