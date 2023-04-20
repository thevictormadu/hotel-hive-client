import React from 'react';
import EmailForm from '../email-form/EmailForm';
import contactImg from '../../../assets/Images-landingPage/contactHotel.png';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact-container contact-image-container'>
        <img className='contact_img' id='contactImg' src={contactImg}/> 
        <h5 className='contacth2'>Contact Us</h5>
        <p className='contactP'> Get in Touch with Us - Your Feedback Matters</p>
        <EmailForm/>       
    </div>
  )
}

export default ContactUs
