import { Component, h } from 'preact';
import style from './style';

export class Btn extends Component {
	constructor(props){
	  super(props);
		this.state =  {}
		this.exFunc = this.exFunc.bind(this)
	}

	exFunc(){}

	render(props, state) {
		return (
			<a class="btn" href={this.props.btnhref}>{this.props.btnlabel}</a>
		);
	}
}