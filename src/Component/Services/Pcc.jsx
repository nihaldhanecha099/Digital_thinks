import React from 'react'
import "./All.css"
import WhatsAppButton from '../../WhatsAppButton/WhatsAppButton'
const Pcc = () => {
  return (
    <div>
       <div className="section-container">
      <h1>PPC Advertising</h1>
      <p>
        In today’s competitive digital landscape, PPC advertising is essential to drive targeted traffic.
      </p>

      <h2>Our PPC Services</h2>
      <ul>
        <li>Google Ads Management</li>
        <li>Bing Ads Management</li>
        <li>Social Media PPC</li>
      </ul>

      <div className="card">
        <h3>Keyword Research</h3>
        <p>Identify high-value keywords for maximum ROI.</p>
      </div>
    </div>
  <div className='whatsap'>
    <WhatsAppButton/></div>
    </div>
  )
}

export default Pcc
