import { h, Component } from 'preact';
import style from './style';

export class Projects extends Component {
	constructor(props){
	  super(props);
		this.state =  {
			post: {}
		}
		//this.exFunc = this.exFunc.bind(this)
		this.getSinglePost()
	}
	

	getSinglePost(){
		let url = 'https://minaev.co.ua/wp-json/wp/v2/posts?slug='+this.props.slug
		fetch(url)
			.then(function(response) {
				return response.json();
		})
		.then(function(response) {
			console.log(response)
			this.setState({post: response[0]})
		}.bind(this));
	}
	


	render(props, state) {
		if(Object.keys(this.state.post).length != 0){
			return (
				<section class={'section_base '+style.component}>
					<div class="container">
						<h1>{this.state.post.title.rendered}</h1>
						<div dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}} />
					</div>
					
				</section>
			);
		}

	}
}