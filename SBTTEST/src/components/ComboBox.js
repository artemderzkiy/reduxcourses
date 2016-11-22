import React, {Component} from 'react'
import styles from '../css/style.css'

export default class ComboBox extends Component {
	render()
	{

		let KasSymbols = ['rubles', 'dollars', 'evros'];
		return( 			
			<select
			id="sel" 
			value={this.props.myValueCheck}
			disabled={this.props.disabledVal}>
			{KasSymbols.map(KasSymbol =>
				<option  key={KasSymbol} value={KasSymbol} >{KasSymbol}</option>
				)}			 
				</select>					
				)
			}
		}
