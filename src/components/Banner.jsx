import React from 'react'
import { Carousel } from 'react-bootstrap'

function Banner() {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item>
          <img src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/assets/39/13/Q3-Pistol-Promo.jpg" />
          <Carousel.Caption>
            <h3>GET UP TO $300 REBATE</h3>
            <p>ON SELECT PISTOLS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/assets/39/13/new-arrivals22.jpg" />
          <Carousel.Caption>
            <h3>NEWE ARRIVALS</h3>
            <p>GEAR UP FOR FALL SEASON</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://marvel-b1-cdn.bc0a.com/f00000000269380/www.beretta.com/assets/39/13/1950x680_a300UltimaPatrol3.jpg" />
          <Carousel.Caption>
            <h3>LADIES TRAINING GEARR</h3>
            <p>
              LEARN MORE
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner