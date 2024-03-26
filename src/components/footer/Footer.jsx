import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link, NavLink} from "react-router-dom";

export default function Footer(){
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Our Partners</h1>
          </div>
          <div className='right-row'>
           <img src="../../../assets/logo/logo2.png" alt="" />
          </div>
          <div className="right-row2">
            <Link to={'https://techbunk.io'} target="toblank">
            <img src="../../../assets/logo/logo6.jpg" alt="" />
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box'>
            <div className="fc">
            <img src="../../../assets/logo/logo.png" alt=""  />
            </div>
            
            <span>Transforming Futures, One Step at a Time</span>
            <div className="badge">
            <img src="../../../assets/logo/logo5.jpg" alt="" />
     
            </div>
             
              <div className='box last'>
            
              <ul>
              <li>
                <PlaceIcon/>
                8 Donatus Odum Street, Off Kusenla Road, Ikate Elegushi, Lekki, Lagos, Nigeria
              </li>
              <li>
                <LocalPhoneIcon/>
                +234 906 556 7055
              </li>
              <li>
                
               <EmailIcon/>info@franchrisconsult.com
              </li>
            </ul>
            </div>
            </div>
        </div>
        <div className="socials">
                
              <NavLink to={'http://www.facebook.com/franchrisconsult'} target="toblank">
              <li><FacebookIcon/></li>
              </NavLink>
              <NavLink to={'#'}>
              <li><TwitterIcon/></li>
              </NavLink>

              <Link to={"https://wa.me/message/JKYS2IUUQSNEE1"} target="toblank">
              <li><WhatsAppIcon/></li>
              </Link>
              
              <NavLink to={'https://instagram.com/franchrisconsult?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'} target="toblank">
              <li><InstagramIcon/></li>
              </NavLink>
              
            
          </div>
      </footer>
      <div className='legal'>
      
        <p>&copy; {currentYear} Franchris Consult. All rights reserved.</p>
        
      </div>
    </>
  )
}

