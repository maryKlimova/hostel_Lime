import { Component, h } from 'preact';
import style from './style';

import {RoomItem} from "../../components/room-item";
import HeadBackground from "../../components/section-head"
export class Rooms extends Component {
	constructor(props){
	  super(props);
		this.state =  {

		}

	}


	


	render(props, state) {
		let {rooms} = this.props;
		return (
			<section class="rooms_section">
				<HeadBackground title="Archive rooms" classSection="rooms_head_slide"/>
				<div class="container">
					<div className='rooms_wrapper'>
						{
							rooms.map(room => {
								return <RoomItem room={room}/>
							})
						}
					</div>
				</div>
				
			</section>
		);
	}
}