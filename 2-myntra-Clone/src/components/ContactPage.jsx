import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
const ContactPage = () => {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const text = useRef();
   
    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs
        .sendForm('service_ndflz2w', 'template_23d4uaa', form.current, {
          publicKey: 'bCWfPnt0TaMhM6h29',
        })
        .then(
          () => {
           console.log("Sucess")
          },
          (error) => {
            alert(error.text)
          },
        );
      }

  return (
      <>

      <div className="MainContainer">

      <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>


      <form ref={form} onSubmit={sendEmail} action="#" method="post" className="contact-form">
            <label htmlFor="name">Name</label>
            <input ref={name} type="text" id="name" name="from_name" required/>

            <label htmlFor="email">Email</label>
            <input ref={email} type="email" id="email" name="user_email" required/>

            <label htmlFor="message">Message</label>
            <textarea ref={text} id="message"  name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
        </form>

      </div>

      <div>
     
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.29640100544188!2d78.01473258121179!3d30.301393800261284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a2beda3a92f%3A0xcd0883423ab2e366!2s475!5e0!3m2!1sen!2sin!4v1722254119474!5m2!1sen!2sin" width="600" height="600" style={{border:"0px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      </div>
      </>
  )
}

export default ContactPage
