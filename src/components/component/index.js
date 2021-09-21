import { Component, h } from 'preact';
import style from './style';

export class ExampleComponent extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'Example desc'
			}
		}
		this.exFunc = this.exFunc.bind(this)
	}
	
	


	render(props, state) {
		return (
			<section class={'section_base '+style.component}>
				<div class="container">
					<h2 class={'text-center '+style.ex__heading}>{this.state.exData.heading}</h2>
					<p class={'text-center '+style.ex__desc}>{this.state.exData.desc}</p>
					
				</div>
				
			</section>
		);
	}
}