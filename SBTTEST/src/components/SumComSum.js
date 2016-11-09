import React, {Component,PropTypes} from 'react'
import TextFieldSum from './TextFieldSum'
import {connect} from 'react-redux'
import styles from '../css/style.css'


export default class SumComSum extends Component {

static propTypes = {		
		actions : PropTypes.object.isRequired,
		ovn : PropTypes.object.isRequired
	}
	//setSum={actions.setSum}

	render() {
	const {actions,ovn} = this.props;
	//console.log(this.props)
		return (<div className={styles.SumGroup}>	
		         <div>	
					<label>Сумма</label>
					<br/>
					<TextFieldSum ovn={ovn}   actions={actions}/>
					</div>
					<label className={styles.label__rubl}>рубль РФ</label>
					</div>
				)	
	}
	
}
