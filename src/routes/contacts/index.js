import {Component, h} from 'preact';
import style from './style';

import HeadBackground from '../../components/section-head'

export class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }


    render(props, state) {
        return (
            <section class='contacts_section'>
                <HeadBackground title="Contact us" classSection="contacts_head_img"/>
                <div className="container"></div>

            </section>
        );
    }
}