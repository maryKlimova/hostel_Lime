import {Component, h} from 'preact';
import Router from 'preact-router';
import './style/index.scss'
import { Header } from './components/header';

import { HomePage } from './routes/home';
import { About } from './routes/about';
import { Rooms } from './routes/rooms';
import { Room } from './components/room';
import { Contacts } from './routes/contacts';
import { Footer } from './components/footer';
import { ScrollTopComponent } from './components/scroll-top';

import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      items: [],
      rooms: [
          { id: 1,
          type: 1,
          title: "Classic Room",
          img: img1,
          price:'110$',
          desc: 'This large suite in the courtyard adobe has a Queen-size built-in platform bed and a large large large large large large gelarg'
      },
          {
              id: 2,
              type: 2,
              title: "Budget Room",
              img: img2,
              price: '80$',
              desc: 'This large suite in the courtyard adobe has a Queen-size built-in platform bed and a large large large large large large gelarg'
          },
          ,
          {
              id: 3,
              type: 3,
              title: "Premium Room",
              img: img3,
              price: '280$',
              desc: 'This large suite in the courtyard adobe has a Queen-size built-in platform bed and a large large large large large large gelarg'
          }
      ]
    };

    //this.getItems();
  }

  async getItems(){
    let self = this;
		//let postLink = 'https://minaev.co.ua/wp-json/md/v3/portfolio'
		 let postLink = 'http://hostel.loc/wp-json/mo/v1/rooms';

		fetch(postLink)
			.then(function(response) {
				return response.json();
			})
			.then(function(response) {
                console.log('resp',response)
				self.setState({items: response})
			});
  }

    render() {
    return (
      <div id="app" class="wrap">
        <ScrollTopComponent/>
        <Header />
        <Router>
            <HomePage path="/" rooms={this.state.rooms}/>
            <About path="/about" />
            <Rooms path="/rooms" rooms={this.state.rooms}/>
            <Room path="/rooms/:id" rooms={this.state.rooms}/>
            <Contacts path="/contacts"/>
        </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;