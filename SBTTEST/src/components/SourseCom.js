import React, {Component, PropTypes} from 'react'
import TextArea from './TextArea'
import ComboBox from './ComboBox'
import SumCom from './SumCom'
import styles from '../css/style.css'

export default class SourseCom extends Component {
	
	static propTypes = {
		sourse: PropTypes.object.isRequired,    
		DeleteSourse: PropTypes.func.isRequired    
	}

	render() {
		const { todo, deleteTodo } = this.props

		let element = (<div>
			<h1>Укажите источник полступления</h1>
			<div className={styles.SourseGroup}>
			<div>
			<label>Кассовый символ</label>
			<ComboBox/>
			</div>
			<SumCom />
			</div>
			<TextArea/>
			<button className="destroy"
                  onClick={() => DeleteSourse(sourse.id)} />			
			</div>
			)
	

	return (<li>
        {element}
      </li>
    )
}
}



