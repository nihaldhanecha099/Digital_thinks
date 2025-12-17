import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import Headings from '../Headings/Headings'
import WhoAreWe from '../../Pages/WhoAreWe'
import HowWeHepl from '../../Pages/HowWeHepl'
import GrowStutent from '../../Pages/GrowStutent'
import "./Home.css";
import Different from '../../Pages/Different'
import ContactForm from '../../Pages/ContactForm'
// import Blog from '../../Pages/Blog'
import Blogss from '../Blogss/Blogss'
import WhatsAppButton from '../../WhatsAppButton/WhatsAppButton'

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-section">
        <ImageSlider/>
      </div>

      <div className="home-section">
        <Headings value={"Who We Are"} />
        <WhoAreWe/>
      </div>

      <div className="home-section">
        <Headings value={"How we can help to grow your business"} />
        <HowWeHepl/>
      </div>

      <div className="home-section">
        <Headings value={"How we can help to grow students career"} />
        <GrowStutent/>
      </div>

      <div className="home-section">
        <Headings value={"What Makes Us Different?"} />
        <Different/>
      </div>


      <div className="home-section">
        <Headings value={"Contact"} />
        <ContactForm/>
      </div>

      <div className="home-section">
        <Headings value={"Blog"} />
        {/* <Blog/> */}
        <Blogss/>
      </div>

      <div>
        {/* <WhatsAppButton/> */}
      </div>



      

    </div>
  )
}

export default Home
