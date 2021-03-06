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
		const { sourse,ovn, actions } = this.props;		
		let element;				
		if (sourse.id!=0)
		{
			element = (<div>
				<h1>Укажите источник поступления</h1>
				<div className={styles.SourseGroupTrash}>
				<div className={styles.SourseGroup}>
				<div>
				<label>Кассовый символ</label>
				<br/>								
				<ComboBox myValueCheck={sourse.kasSymb} disabledVal={true} />	
				</div>				
				<SumCom  ovn={ovn} actions={actions} sourse={sourse} myValueInp={sourse.sumField} disabledVal={true}/>
				</div>
				<button className={styles.button_trash}>
				<span className="glyphicon glyphicon-trash" aria-hidden="true"
				onClick={() => actions.DeleteSourse(sourse.id)}>
				</span>
				</button>
				</div>	
				<label>Источник поступления</label>			
				<TextArea myValueArea={sourse.sourseField} disabledVal={true}/>
				<div className={styles.line}/>		
				</div>
				)
			}
			else 
			{
				element = (<div>
				<h1>Укажите источник полступления</h1>
				<div className={styles.SourseGroup}>
				<div>
				<label>Кассовый символ</label>
				<br/>				
				<ComboBox/>

				</div>
				<SumCom idInp={sourse.id}  ovn={ovn} actions={actions} sourse={sourse}/>
				</div>
				<label>Источник поступления</label>
				<TextArea />
				<div className={styles.line}/>		
				</div>
				)
			}

			return (<li>
			{element}
			</li>
			)
		}
	}



