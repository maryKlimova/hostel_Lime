import { Component, h } from 'preact';
import style from './style';

export class Footer extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'Example desc'
			}
		}

	}
	
	


	render(props, state) {
		return (
			<section class="footer">

				<div>footer</div>
			</section>
		);
	}
}