import { Component, h } from 'preact';
import  './style';

export class Parallax extends Component {
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
			<div className="parallax">
				<div className={"parallax__layer parallax__layer--background " + this.props.background}>
					<img className="background__image" src={this.props.image}/>
				</div>
				<div className={"parallax__layer parallax__layer--foreground " + this.props.front}>
					{this.props.children}
				</div>
			</div>
		);
	}
}