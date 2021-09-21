import {Component, h} from 'preact';
import { Btn } from '../buttons';
import style from './style'

import {NavMenu} from '../nav-menu'
export class Header extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
        <header class="header">
            <div class="container header_container_main">
                <div class="header_container">
                <div className="header_logo">Lime</div>
                <div class="header_contact">
                    <p class="header_contact_info">Need help? Call us now: <span>(+88) 12 345 6789</span></p>
                </div>
                </div>
                <NavMenu/>
            </div>
        </header>
		);
  }
}