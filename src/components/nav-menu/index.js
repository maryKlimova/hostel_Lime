import { Component, h} from 'preact';
import {Link} from 'preact-router/match';

import style from './style';

export class NavMenu extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			exData: {
				heading: 'Hello World',
				desc: 'Example desc'
			}
		}
		//this.exFunc = this.exFunc.bind(this)
	}
	
	


	render(props, state) {
		return (
			<div class='nav__menu'>
				<Link class='nav__item' activeClassName={"active"} path="/" href="/">Home</Link>
				<Link class='nav__item' activeClassName={"active"} path="/rooms" href="/rooms">Rooms</Link>
				<Link class='nav__item' activeClassName={"active"} path="/about" href="/about">About us</Link>
				<Link class='nav__item' activeClassName={"active"} path="/contacts" href="/contacts">Contacts</Link>
			</div>
		);
	}
}