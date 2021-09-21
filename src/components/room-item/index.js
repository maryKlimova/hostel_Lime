import {Component, h} from 'preact';
import style from './style';

export class RoomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }


    render(props, state) {
        let {room} = this.props;
        return (
            <div class="room_item_wrapper">
                <div class="room_item">
                    <img src={room.img} alt="hostel"/>
                    <div class="room_item_hover">
                        <a className="room_item_btn" href={`/rooms/${room.id}`}>More info</a>
                    </div>
                </div>
                <div class="room_item_content">
                    <h2 class="room_item_content_title">{room.title}</h2>
                    <p class="room_item_content_price">From: <span>{room.price}</span></p>
                    <p class="room_item_content_desc">{room.desc}</p>
                </div>
            </div>
        );
    }
}