import {Component, h, createRef} from 'preact';
import style from './style';

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.restartAnimation = this.restartAnimation.bind(this);

        this.slideText = createRef()
    }

    restartAnimation(index) {
        let texts = document.querySelectorAll('.slider_text');

        for (let i = 0; i < texts.length; i++) {
            texts[i].classList.remove('slider_text--animation')
        }
        texts[index].classList.add('slider_text--animation')
    }

    nextSlide = () => {
        let {activeIndex} = this.state;
        let index = this.props.slides.length;

        if (activeIndex === index - 1) {
            this.restartAnimation(0);
            return this.setState({
                activeIndex: 0
            })
        }
        this.restartAnimation(activeIndex + 1);
        this.setState({
            activeIndex: activeIndex + 1,
        })
    }

    prevSlide = () => {
        let {activeIndex} = this.state;
        let index = this.props.slides.length;

        if (activeIndex === 0) {
            this.restartAnimation(index - 1)
            return this.setState({
                activeIndex: index - 1
            })
        }
        this.restartAnimation(activeIndex - 1)
        this.setState({
            activeIndex: activeIndex - 1,
        })
    }


    render(props, state) {
        let {activeIndex} = this.state;
        return (
            <div class="slider_container">
                <div class="slider_arrow arrow_left" onClick={this.prevSlide}></div>
                <ul class="slider_content">
                    {this.props.slides && this.props.slides.map((slide, index) => {
                        return <li class={`slider_item ${activeIndex === index ? 'active' : ''}`}>
                            <div class={`slider_text ${activeIndex === index ? 'slider_text--animation' : ''}`}
                                 ref={this.slideText}>{slide.text}</div>
                            <img class="slider-img" src={slide.img} alt=""/>
                        </li>
                    })}
                </ul>
                <div className="slider_arrow arrow_right" onClick={this.nextSlide}></div>
            </div>
        );
    }
}