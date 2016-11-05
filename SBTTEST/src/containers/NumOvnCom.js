import React, {Component} from 'react'
import TextField from './TextField'
import {connect} from 'react-redux'

class NumOvnCom extends Component {


	


	render()
	{
		const {ovnsum} = this.props;


		
		return (	<div>
			<h1>Заполните реквизиты на ввод наличными</h1>
			<label >Номер ОВН</label>
			<TextField onKeyUp={() => onKeyUp(ovnsum)} />		
			</div>
			)
	}
}

function test() {
	console.log("ovnsum")
}

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyUp: (ovnsum) => {
      dispatch(toggleTodo(ovnsum))
    }
  }
}

function mapStateToProps(state) {
	return {
		ovnsum: state.ovnsum
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NumOvnCom)