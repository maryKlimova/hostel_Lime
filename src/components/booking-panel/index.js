import { Component, h } from 'preact';
//import DatePicker from 'react-date-picker';
import DatePicker from "react-datepicker";


import style from './style';
//import 'react-date-picker/dist/DatePicker.css';
//import 'react-calendar/dist/Calendar.css';

import "react-datepicker/dist/react-datepicker.css";


export class BookingPanel extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			startDate: new Date(),
			endDate: new Date()
		}
		this.setStartDate = this.setStartDate.bind(this)
		this.setEndDate = this.setEndDate.bind(this)
	}


	setStartDate(date) {
		console.log(date)
		this.setState({startDate: date})
	}

	setEndDate(date) {
		this.setState({endDate: date})
	}

	render(props, state) {
		return (
			<section class="booking_panel_container">
				<div class="booking_panel_date">
					<p>Check-in</p>
					<DatePicker
						className="calendar_input"
						selected={this.state.startDate}
						selectsStart
						startDate={this.state.startDate}
						onChange={date => this.setStartDate(date)} />
				</div>
				<div className="booking_panel_date">
					<p>Check-out</p>
					<DatePicker
						className="calendar_input"
						selected={this.state.endDate}
						startDate={this.state.startDate}
						minDate={this.state.startDate}
						endDate={this.state.endDate}
						selectsEnd
						onChange={date => this.setEndDate(date)} />
				</div>
				<div className="booking_panel_guests">
					<p>Guests</p>
				</div>

				<div class="calendar_submit">Check availability</div>
			</section>
		);
	}
}