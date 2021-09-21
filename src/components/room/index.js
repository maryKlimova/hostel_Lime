import { Component, h } from 'preact';
import style from './style';

import {RoomItem} from "../room-item";

export class Room extends Component {
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
		let{ id }= this.props.matches;
		let{ rooms }= this.props;

		return (
			<section class={'section_base '}>
				<div class="container">
					<h2 class={'text-center '}>Room</h2>
					{
						rooms.map( room => {
							if (room.id == id) return <RoomItem room={room}/>
						})
					}
				</div>
			</section>
		);
	}
}