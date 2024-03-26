import React from 'react';
import './body.css';
import Card from 'react-bootstrap/Card';

export default function Body() {
  return (
    <section className='main-container'>
        <div className='heading'>
            <h1>About Us</h1>
        </div>
        <div className='containerY'>
            <div className='contentY'>
                <h2>About Franchris Consult</h2>
                <p>
                At Franchris Consult Limited, we are a dynamic and forward-thinking organization based in Nigeria,
                 dedicated to shaping brighter futures through a range of exceptional services.
                  With a focus on IT Solutions, Consultancy, Trainings, and Study Abroad Services, we strive
                   to empower individuals and businesses to thrive in a rapidly evolving global landscape.
                    Our journey began with a vision to bridge the gap between technology, knowledge, and international experiences. Over the years, we have grown into a trusted partner for those seeking innovative solutions, expert guidance, skill enhancement, and transformative educational opportunities. Our commitment to excellence, integrity, and customer-centricity has propelled us to become a cornerstone 
                    of empowerment and growth in the industry.
                </p>
            <div className='list'>
               <h2>Key Services</h2>

               <ul>
               <li>
                    <h4>
                    Consultancy:
                    </h4>
                    Our expert consultancy services are designed to address your unique challenges and seize opportunities
                     for growth. With deep industry insights and strategic guidance, we help you make informed decisions that 
                     lead to sustainable success.
                </li>
                <li>
                <h4>IT Solutions:</h4>
                    Harness the power of cutting-edge technology with our comprehensive IT solutions. 
                    From software development and system integration to cybersecurity and digital transformation, 
                    we provide tailor-made solutions to drive your business forward in the digital age.
                </li>
                <li>
                    <h4>
                    Trainings:
                    </h4>
                    Stay ahead of the curve with our transformative training programs. We offer a diverse range 
                    of courses designed to enhance skills, broaden knowledge, and adapt to the demands of today's competitive landscape.

                </li>
                <li>
                    <h4>
                    Study Abroad Services:
                    </h4>
                    Expand your horizons through our study abroad services. Unlock the world's best educational 
                    experiences with our guidance, ensuring a seamless journey from application to enrollment, and 
                    helping you embark on a life-changing academic adventure.
                </li>
                </ul> 
                    <h4>
                        Our Values
                    </h4>
                <p> At Franchris Consult Limited, we take pride in our unwavering commitment to our core values - Excellence,
                    Integrity, Customer-Centricity, Empowerment, Collaboration. Our dedicated team of experts is driven by the shared goal of making
                    a positive impact on individuals, businesses, and communities.
                    Join us in embracing the future with confidence and seizing opportunities that transcend boundaries. Together, we 
                    create pathways to success and inspire meaningful change.
                </p>
            </div>

            <div className="list-cards">
                <div className="list-card-1">
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="../../../assets/image/img6.png" />
                    <Card.Body>
                        <Card.Title><h3>Excellence:</h3></Card.Title>
                        <Card.Text>
                            We are dedicated to delivering high-quality services and solutions, exceeding expectations and 
                            setting industry standards through continuous
                            improvement and innovation.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>

                <div className='empty'>

                </div>

                <div className='empty'>
                            
                </div>
               
                    <div className="list-card-2">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="../../../assets/image/img20.jpeg" style={{height:'35rem'}} />
                            <Card.Body>
                                <Card.Title><h3>Integrity:</h3></Card.Title>
                                <Card.Text>
                                    We uphold the highest ethical standards in all our interactions, building trust and 
                                    fostering long-term relationships with our clients, 
                                    partners, and stakeholders.
                                </Card.Text>
                             
                            </Card.Body>
                        </Card>
                    </div>
                      

                    <div className="list-card-3">
                        <Card style={{ width: '22rem' }}>
                            <Card.Body>
                                <Card.Title><h3>Customer-Centricity:</h3></Card.Title>
                                <Card.Text>
                                    Our clients are at the heart of everything we do. We actively listen, understand their 
                                    needs, and tailor our services to provide personalized 
                                    and effective solutions.
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div >
                    
                    <div className='empty'>
                            
                    </div>
                    <div className='empty'>
                            
                    </div>

                    <div className="list-card-4">
                            <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="../../../assets/image/img15.jpg" />
                            <Card.Body>
                                <Card.Title><h3>Empowerment:</h3></Card.Title>
                                <Card.Text>
                                    We believe in empowering individuals and businesses through knowledge, skills, and opportunities, 
                                    enabling them to reach their full potential and
                                    achieve success.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                
                        <div className="list-card-5">
                            <Card style={{ width: '22rem' }}>
                                
                                <Card.Body>
                                    <Card.Title><h3> Collaboration:</h3></Card.Title>
                                    <Card.Text>
                                        We value teamwork and collaboration, both internally and externally. By leveraging diverse perspectives 
                                        and expertise, we create
                                        synergies and achieve collective success.
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>
                        </div>
                    

                    <p>
                        These core values form the foundation of Franchris Consult Limited's culture, guiding our actions, 
                        decisions, and interactions to fulfill our vision and mission.
                    </p>

               
            </div>
            
            </div>
            {/*<div className='con-image'>
                <img src="../assets/image/img4.png" alt="" />
            </div>*/}
        </div>

    </section>
  )
}
