import React, {Component, PropTypes} from 'react'
import TextArea from './TextArea'
import ComboBox from './ComboBox'
import SumCom from './SumCom'
import styles from '../css/style.css'

export default class SourseCom extends Component {
	
	static propTypes = {
		sourse: PropTypes.object.isRequired,
		ovn:  PropTypes.object.isRequired,
		actions :  PropTypes.object.isRequired, 
		DeleteSourse: PropTypes.func.isRequired    
	}

	render() {
		const { sourse,ovn, DeleteSourse } = this.props

		let element = (<div>
			<h1>Укажите источник полступления</h1>
			<div className={styles.SourseGroup}>
			<div>
			<label>Кассовый символ</label>
			<ComboBox/>
			</div>
			<SumCom ovn={ovn} />
			<i className={styles.trash} aria-hidden="true"
                  onClick={() => DeleteSourse(sourse.id)}>  </i>	
			</div>
			<TextArea/>
					
			</div>
			)
	

	return (<li>
        {element}
      </li>
    )
}
}



