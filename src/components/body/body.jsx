import Heading from "../heading/Heading"
import './body.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";




export default function body() {
   
  return (
    <>
    <div className='bodyContainer'>

     <div className='carousel-container'>
       
       <div className="carousel-slide">
            <Carousel>
            <Carousel.Item interval={4000}>
                <img src="../../../assets/image/study5.jpg" className="cm" alt="" />
                <Carousel.Caption>
                <h3>Study Abroad</h3>
                <p>Study Abroad with FranChris Consult.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img src="../../../assets/image/img17.jpeg" className="cm" alt="" />
                <Carousel.Caption>
                <h3>IT Support</h3>
                <p>Let's Build your project.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    </div>

   
        <div className='row2'>
                <Heading subtitle='Welcome to Franchris consult' title='Our Services' />

                <div className="dec">

                   <div className="first-card">
                        <div className="lists-card-1">
                        <Card style={{ width: '21rem' }}>
                        <Card.Img variant="top" src="../../../assets/image/vid2.gif" />
                            <Card.Body>
                                <Card.Title><h3>Excellence:</h3></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li> Cutting-edge IT Solutions</li>
                                        <li>Expert Consultancy & Guidance</li>
                                        <li>Transformative Skill Trainings</li>
                                        <li>Seamless Study Abroad Services</li>
                                        
                                    </ul>
                                   
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        </div>

                        
                    
                            <div className="lists-card-2">
                                <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" src="../../../assets/image/vid5.gif" />
                                    <Card.Body>
                                        <Card.Title><h3>Why Choose Us?</h3></Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Extensive Industry Experience</li>
                                                <li> Dedicated Team of Experts</li>
                                                <li>Customized Solutions & Support</li>
                                            </ul>
                                        
                                        </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            </div>

                        <div className="lists-card-3">
                            <Card style={{ width: '21rem' }}>
                                <Card.Body>
                                    <Card.Title><h3>IT Solutions</h3></Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Software Development & Integration</li>
                                            <li>Cybersecurity Solutions</li>
                                            <li>Cloud Services & Digital Transformation</li>
                                        </ul>
                                       
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>
                        </div >

                        <div className="lists-card-5">
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img variant="top" src="../../../assets/image/img9.jpeg" />
                                    <Card.Body>
                                        <Card.Title><h3> Trainings</h3></Card.Title>
                                        <Card.Text>
                                           <ul>
                                            <li>Skill Enhancement Programs</li>
                                               <li> Stay Ahead in Evolving Industries</li>
                                               <li> Professional Development Opportunities</li>
                                           </ul>
                                        </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            </div>


                   </div>
                        
                    <div className="second-card">
                    <div className="lists-card-6">
                            <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src="../../../assets/image/study.png" />
                                <Card.Body>
                                    <Card.Title><h3>Study Abroad Services</h3></Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Personalized University & Course Selection</li>
                                               <li> Application & Visa Support</li>
                                              <li>  Smooth Transition & Cultural Integration</li>
                                        </ul>
                                       
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>
                        </div >

                        <div className="lists-card-8">
                                <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" src="../../../assets/image/img12.jpeg" />
                                    <Card.Body>
                                        <Card.Title><h3> Why Study Abroad with Us?</h3></Card.Title>
                                        <Card.Text>
                                           <ul>
                                                <li>Extensive Partner University Network</li>
                                                <li>  Experienced Advisors for Guidance</li>
                                                <li> Holistic Support from Application to Graduation</li>
                                           </ul>
                                        </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                            </div>
                    
                        <div className="lists-card-4">
                                <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" src="../../../assets/image/img8.jpeg" />
                                <Card.Body>
                                    <Card.Title><h3>Consultancy</h3></Card.Title>
                                    <Card.Text>
                                       <ul>
                                        <li>Strategic Business Insights</li>
                                           <li> Industry-specific Expertise</li>
                                           <li> Informed Decision-making</li>
                                       </ul>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    
                            

                            <div className="lists-card-7">
                                <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top" src="../../../assets/image/img2.jpeg" />
                                <Card.Body>
                                    <Card.Title><h3>Our Mission</h3></Card.Title>
                                    <Card.Text>
                                       <ul>
                                        <li>Empower Businesses & Individuals</li>
                                          <li>Transform Lives through Education & Technology</li>
                                       </ul>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                      

                    </div>

                 
                        
                </div>
                <Link to={'/about'}>
                <button>Learn More About Us</button>
                </Link>
                
        </div>
     
    </div>
    </>
   
  )
}
