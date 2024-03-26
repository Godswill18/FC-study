import React from 'react'
import './contactUs.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function ContactUs() {
  return (
    <>
    <Header/>
      <div className='contactUs'>
        <div className='title'>
          <h1>Contact us</h1>
       
        </div>
        <br />
                    <p className='contactus-p'>

                        Reach Out for Inquiries & Consultations
                        Let's Shape Your Future Together
                        Join Our Global Network:
                        Connect with Alumni & Industry Experts
                        Unlock Opportunities Beyond Boundaries
                    </p>
       <div className="box">
        {/*Form */}
        <div className="contact form">
          <h3>Send Message</h3>
          <form action="">
          <div className="formBox">
            <div className="row50">
              <div className="inputBox">
                <span>First Name</span>
                <input type="text" placeholder='First name' />
              </div>
              <div className="inputBox">
                <span>Last Name</span>
                <input type="text" placeholder='Last name' />
              </div>
            </div>
          </div>

            <div className="row50">
              <div className="inputBox">
                <span>Email Address</span>
                <input type="email" placeholder='user@email.com' />
              </div>
              <div className="inputBox">
                <span>Mobile number</span>
                <input type="text" placeholder='+000 1234 5678 90' />
              </div>
            </div>
            
            <div className='inputBox'>
                <span>
                  Services
                </span>
                <select name="services" className='services2'>
                  <option value="0">select services</option>
                  <option value="1">IT Compliance</option>
                  <option value="2">Study Abroad</option>
                  <option value="3">All</option>
                </select>
            </div>

            <div className="row100">
              <div className="inputBox">
                <span>Message</span>
                <textarea name="message" id="" cols="5" rows="5" placeholder='write your message here...'></textarea>
              </div>
            </div>

            <div className='row100'>
              <div className="inputBox">
                <input type="submit" value={'send'} />
              </div>
            </div>
          
        </form>
        </div>
        

        {/*Info Box */}
        <div className="contact info">
        <h3>Contact Info</h3>
          <div className='infoBox'>
            <div>
              <span><PlaceIcon/></span>
              <p>8 Donatus Odum Street, Off Kusenla Road, Ikate Elegushi, Lekki, Lagos, Nigeria.</p>
            </div>
            <div>
              <span><EmailIcon/></span>
             <a href="info@franchrisconsult.com">info@franchrisconsult.com</a>
            </div>
            <div>
              <span><LocalPhoneIcon/></span>
            <a href="tel:+2349065567055">+234 906 556 7055</a>
            </div>

            {/* Social media Links */}
            <ul className='soci'>
              <li><a href="http://www.facebook.com/franchrisconsult"><FacebookIcon/></a></li>
              <li><a href="#"><TwitterIcon/></a></li>
              <li><a href="https://wa.me/message/JKYS2IUUQSNEE1"><WhatsAppIcon/></a></li>
              <li><a href="https://instagram.com/franchrisconsult?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"><InstagramIcon/></a></li>
            </ul>
          </div>
        </div>

        {/*Map */}
        <div className="contact map">
        <iframe
        title="Interactive Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.1544495056464!2d3.4907102278751165!3d6.443396035212581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf42dd4bdd47b%3A0x7384efd0b6050638!2s8%20Donatus-Odum%20St%2C%20Lekki%20Penninsula%20II%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1693087652768!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
        </div>
       </div>
      
    </div>
    <Footer/>
    </>
  
  )
}
