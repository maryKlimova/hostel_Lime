import { Component, h } from 'preact';
import  './style';
import about_2 from "../../assets/about_2.jpg";
import about_1 from "../../assets/about_1.jpg";

export class HomeAbout extends Component {
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
			<div className="home_about container">
				<div className="home_about_text">
					<h2 className="section--title">Comfort are perfectly combined here</h2>
					<p className="section--text">This charming private 19th century mansion, which originally
						belonged to the family, has been completely renovated with care & passion while respecting the
						spirit of place.
						Divo Hotel surrounded herself by a team of French artisans to create a sophisticated place in a
						refined.</p>
					<p className="section--text">This charming private 19th century mansion, which
						originally belonged to the family, has been completely renovated with care & passion while
						respecting the spirit of place.</p>
					<a className="home_about_text--btn" href="/about">More info</a>
				</div>
				<div className="home_about-photo">
					<div className="about_photo_border">
						<img className="image_about" src={about_2}/>
					</div>
					<div className="about_photo_border">
						<img className="image_about" src={about_1}/>
					</div>
				</div>
			</div>
		);
	}
}