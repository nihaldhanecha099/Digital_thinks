import React from 'react'
import video from "../../src/Asse/Digital Think.mp4"
import "./WhoAreWe.css"
const WhoAreWe = () => {
  return (
    <div className='container'>
      <div className="video-left ">
        <video src={video}
        autoPlay
        muted
        loop
        playsInline
        >
        </video>
        </div>
        <div className='writen-right'>
            <h3>At Digital Thinking, we are a forward-thinking IT company dedicated to helping businesses thrive in the digital world. Our team of experts offers a wide range of IT services, including web design, digital marketing, SEO, social media strategies, and much more, all aimed at enhancing your online presence and driving growth.</h3>

            <h1>We also empower students and people through tailored IT training, covering everything from digital marketing to development and SEO, ensuring that you stay ahead in an ever-evolving tech landscape.</h1>

            <h3>Whether you’re looking to transform your business or elevate your skills, Digital Thinking provides the tools and knowledge to succeed.</h3>
        </div>
    </div>
  )
}

export default WhoAreWe
