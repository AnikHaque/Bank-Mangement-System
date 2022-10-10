import React from 'react'
import { Banner } from '../banner/Banner'
import './Home.css'
import { Class } from '../class/Class'
import { Count } from '../countup/Count'
import { LiveClass } from '../liveclass/LiveClass'
import { Services } from '../services/Services'
import { Investor } from '../investor/Investor'
import { Awards } from '../awards/Awards'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <br></br>
        <br></br>
        <br></br>
        <Class></Class>
        <br></br>
        <br></br>
        <br></br>
       <Services></Services>
       <br></br>
        <br></br>
        <br></br>
        <Count></Count>
        <br></br>
        <br></br>
        <br></br>
        <LiveClass></LiveClass>
        <br></br>
        <br></br>
        <br></br>
        {/* <Transform></Transform>
        <br></br>
        <br></br>
        <br></br> */}
        <Awards></Awards>
        <br></br>
        <br></br>
        <br></br>
        <Investor></Investor>
        {/* <Supporter></Supporter>   
        <br></br>
        <br></br>
        <br></br> */}
    </div>
  )
}
