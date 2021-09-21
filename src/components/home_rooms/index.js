import { Component, h } from 'preact';
import './style';

import {Parallax} from "../parallax";
import {RoomItem} from "../room-item";
import parallax_img from '../../assets/3.jpg'

export class HomeRooms extends Component {
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
		let {rooms} =this.props
		return (
			<div class="home_rooms_background">
				<div className="home_rooms container">
					<h2 className="section--title">Awesome Offer</h2>
					<p className="section--text home_rooms--text">For anything that brings people together to celebrate an occasion, we create truly memorable experiences that you will cherish forever</p>
					<div class="home_rooms_wrapper">
					{
						rooms.length ? rooms.map( room => {
							return <RoomItem room={room}/>
						}) : null
					}
					</div>
				</div>
			</div>
		);
	}
}