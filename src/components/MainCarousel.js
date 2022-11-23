import React from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../img/poster6.webp'
import img2 from '../img/poster5.jpg'
import img3 from '../img/poster4.jpg'

export default function MainCarousel() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 600 }}
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Movie title here</h3>
          <p>Movie description here. Movie description here. Movie description here. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 600 }}
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Movie title here</h3>
          <p>Movie description here. Movie description here. Movie description here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 600 }}
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Movie title here</h3>
          <p>
          Movie description here. Movie description here. Movie description here.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
