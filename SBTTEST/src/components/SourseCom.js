import React, {Component, PropTypes} from 'react'
import TextArea from './TextArea'
import ComboBox from './ComboBox'
import SumCom from './SumCom'
import styles from '../css/style.css'

export default class SourseCom extends Component {
	
	static propTypes = {
		sourse: PropTypes.object.isRequired,
		ovn:  PropTypes.object.isRequired,
		actions :  PropTypes.object.isRequired		   
	}

	render() {
		const { sourse,ovn, actions } = this.props

		let element = (<div>
			<h1>Укажите источник полступления</h1>
			<div className={styles.SourseGroup}>
			<div>			
			<ComboBox/>
			</div>
			<SumCom ovn={ovn} actions={actions}/>
			<i className={styles.trash} aria-hidden="true"
                  onClick={() => actions.DeleteSourse(sourse.id)}>Del</i>	
			</div>
			<TextArea/>
			<div className={styles.line}/>		
			</div>
			)
	

	return (<li>
        {element}
      </li>
    )
}
}



