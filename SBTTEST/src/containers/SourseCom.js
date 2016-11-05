import React, {Component} from 'react'
import TextArea from './TextArea'
import ComboBox from './ComboBox'
import SumCom from './SumCom'
import styles from '../css/style.css'
import {connect} from 'react-redux'

class SourseCom extends Component {
	


	

	render() {
	
		//let numOvn= this.props.numOvn;

		return  (<div>
			<h1>Укажите источник полступления</h1>
			<div className={styles.SourseGroup}>
			<div>
			<label>Кассовый символ</label>
			<ComboBox/>
			</div>
			<SumCom />
			</div>
			<TextArea/>			
			</div>
			)
	}
}

// function onChange(e) {
//   this.props.dispatch(updateName(e.target.value));
// }

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(SourseCom)