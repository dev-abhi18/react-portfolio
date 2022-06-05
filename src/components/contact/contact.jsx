import React from 'react'
import './contact.css'
import {BsMessenger} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import   {useRef}  from 'react';
const Contact = () => {
  const form = useRef();  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vekrl2k', 'template_nz3dg7c', form.current, '5cvFbv9ikWzn9DzTm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      {/* <a href='#about' className='scroll_up'>Scroll up</a> */}
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <GrMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>abhivyakt18sharma@gmail.com</h5>
            <a href='mailto:abhivyakt18sharma@gmail.com' target='_blank'>Send A Message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>abhivyakt18sharma</h5>
            <a href='https://m.me/abhivyakt18sharma/' target='_blank'>Send A Message</a>
          </article>
          <article className='contact_option'>
            {/* <GrMail/> */}
            <FaTelegramPlane className='contact_option-icon'/>
            <h4>Telegram</h4>
            <h5>abhivyakt18sharma</h5>
            <a href='https://t.me/Abhivyakt18sharma/' target='_blank'>Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder ='Your Full Name' required/>
          <input type='email' name='email' placeholder ='Your Email' required/>
          <textarea type='text' name='message' rows="7" placeholder ='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
      </section>
  )
}

export default Contact