import React, {Component} from 'react'

export default class ComboBox extends Component {
	render()
	{

		let KasSymbols = ['rubles', 'dollars', 'evros'];

		return( 
			<div>		
		<select id="sel">
		{KasSymbols.map(KasSymbol =>
				<option  key={KasSymbol} value={KasSymbol} >{KasSymbol}</option>
				)}			 
		</select>	
		</div>
		)
	}
}
