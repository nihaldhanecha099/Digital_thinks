import React from 'react'

const WhatsAppButton = () => {
    const phoneNumber=9575417700
    const  message = "Hello, I want to know more about your services";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div>
      <button
      onClick={() => window.open(url, "_blank")}
      style={{
        backgroundColor: "#25D366",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Contact via WhatsApp
    </button>
    </div>
  )
}

export default WhatsAppButton
