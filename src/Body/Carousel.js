import React from 'react';
import Carousel from 'nuka-carousel';

export default class SliderC extends React.Component {
  render() {
    return (
      <Carousel autoplay={true} pauseOnHover={true} wrapAround = {true} autoplayInterval={5000}>
      <img src="./assets/Slider/Slider.jpg" />
        <img src="./assets/Slider/Slider1.jpg" />
        <img src="./assets/Slider/Slider3.jpg" />
        <img src="./assets/Slider/Slider4.jpg" />
        <img src="./assets/Slider/Slider5.jpg" />
        <img src="./assets/Slider/Slider6.jpg" />
        <img src="./assets/Slider/Slider7.jpg" />
        <img src="./assets/Slider/Slider8.jpg" />
        <img src="./assets/Slider/Slider9.jpg" />
        <img src="./assets/Slider/Slider10.jpg" />
      </Carousel>
    );
  }
}