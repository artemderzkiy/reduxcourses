import React, {Component,PropTypes} from 'react'
import styles from '../css/style.css'

export default class ButtonCom extends Component {

static propTypes = {
    AddSourse: PropTypes.func.isRequired
  }




handleSave = (kasSymb,
		sourseField,
		sumField)  => {
    if (true) {
      this.props.AddSourse(kasSymb,
		sourseField,
		sumField)
    }
  }

	render()
	{
		var activeBut =true;

		return (<button className={(activeBut==true) ? styles.buttonGroup__active : styles.buttonGroup__notactive} onClick={this.handleSave}>+ Добавить источник поступления</button>	)
		
		
	}
}


