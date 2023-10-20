import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import banners from '../data/banner.json';
import Loading from './Loading';

function Banner() {
  const [loading, setLoading] = useState(true);
  const [bannerItems, setBanners] = useState([]);

  useEffect(()=>{
    setTimeout(()=> {
      setBanners(banners.data);
      setLoading(false);
    }, 500);
  },[])

  if(loading)
  {
    return <Loading loading={loading} />
  }

  return (
    <div className='banner'>
      <Carousel>
        {
          _.map(bannerItems, (item, index)=>{
            return <Carousel.Item key={"banner-"+index} >
                <img src={item.img} />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.subTitle}</p>
                </Carousel.Caption>
              </Carousel.Item>
          })
        }
      </Carousel>
    </div>
  )
}

export default Banner