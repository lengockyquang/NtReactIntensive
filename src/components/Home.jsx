import React from 'react'
import NavBar from './NavBar'
import Sponsor from './Sponsor'
import Features from './Features'
import Banner from './Banner'
import BlockText from './BlockText'
import Footer from './Footer'
import TopProductList from './TopProductList'

function Home() {
  return (
    <div className='home-page'>
      <Banner />
      <BlockText text="SHOP BY CATEGORY" />
      <Features />
      <BlockText text="FEATURED FIREARMS" />
      <TopProductList />
      <BlockText text="SPONSORS" />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default Home