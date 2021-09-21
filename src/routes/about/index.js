import {Component, h} from 'preact';
import style from './style';
import HeadBackground from '../../components/section-head'

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }

    render(props, state) {
        return (
            <section class=''>
                <HeadBackground title="About Page" classSection="about_head_img"/>
                <div className="container">

                </div>
                <div id="map"></div>
            </section>
        );
    }
}