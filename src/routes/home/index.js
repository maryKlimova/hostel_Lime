import { h, Component } from 'preact';

import about_1 from '../../assets/about_1.jpg'
import about_2 from '../../assets/about_2.jpg'

import style from './style';
import {Slider} from "../../components/slider";
import {BookingPanel} from "../../components/booking-panel";
import {HomeAbout} from "../../components/home_about";
import {HomeRooms} from "../../components/home_rooms";

export class HomePage extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			slides: [
				{
					img: 'https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4',
					text: 'Some info'
				},

				{
					img: 'https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg',
					text: 'Awesome hostel'
				},
				{
					img: 'https://www.hestiahotels.com/europa/wp-content/uploads/sites/10/2018/08/Hestia_Hotel_Europa_Tallinn_room.jpg',
					text: "Cool service and comfortable kitchen"
				}]

		}
	}
	
	


	render(props, state) {
		let {rooms} = this.props
		return <section class="home_section ">
			<Slider slides={this.state.slides} />
			<BookingPanel/>
			<main class="main_container">
				<HomeAbout/>
				<HomeRooms rooms={rooms}/>
			</main>
		</section>

	}
}