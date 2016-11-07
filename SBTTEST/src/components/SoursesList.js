import React, {Component, PropTypes} from 'react'
import SourseCom from './SourseCom'
import styles from '../css/style.css'

export default class SourseList extends Component {
	
	static propTypes = {
		sourses: PropTypes.array.isRequired,
		actions : PropTypes.object.isRequired,
		ovn : PropTypes.object.isRequired
	}
	

	render() {

		const { sourses,ovn,actions} = this.props
		
		

		return  (<ul>
			{sourses.map(sourse =>
				<SourseCom key={sourse.id} sourse={sourse} ovn={ovn} {...actions} />
				)}	
				</ul>
				)
		}
	}