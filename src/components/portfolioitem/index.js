import { h, Component } from 'preact';
import style from './style';

export default class PortfolioItem extends Component {
	constructor(props){
	  super(props);
		this.state =  {}
	}

	render(props, state) {
		return (
			<article class="portfolio__item">
				<a class="potrfolio__item__link" href={"/projects/"+this.props.type}>
					<img class="potrfolio__item__prev" alt={this.props.title} src={'http://hostel.loc' + this.props.photo}/>
					<span class="potrfolio__item__title">{this.props.title}</span>
				</a>
			</article>
		);
	}
}