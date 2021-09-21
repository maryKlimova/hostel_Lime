import { Component, h } from 'preact';

export class ScrollTopComponent extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}


	render(props, state) {
		return (null);
	}
}