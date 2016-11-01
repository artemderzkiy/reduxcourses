import React, {Component} from 'react'
import TextArea from './TextArea'
import ComboBox from './ComboBox'
import SumCom from './SumCom'
import styles from '../css/style.css'
import {connect} from 'react-redux'

class SourseCom extends Component {
	defaultProps = function() {
		return { 
			value: ''
		}
	}

	componentDidMount() {
		//...
	}
	//componentWillReceiveProps(nextProps) {
	//	if (this.state.value !== nextProps.value) {

	//	}
	//}

	render() {
		let value, val;
		if (!!this.props.value) {
			value = this.props.value;
			val = value.splice(0,1);	
		}
		
		return  (<div>
			<h1>Укажите источник полступления</h1>
			<div className={styles.SourseGroup}>
			<div>
			<label>Кассовый символ</label>
			<ComboBox/>
			</div>
			<SumCom val={val} />
			</div>
			<TextArea/>			
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		numOvn: state.numOvn
	}
}

export default connect(mapStateToProps)(SourseCom)