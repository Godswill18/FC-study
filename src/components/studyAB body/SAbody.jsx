import React from 'react';
import Card from 'react-bootstrap/Card';
import './saBody.css';

export default function SAbody() {
  return (
    <div>
      <section className='main-container2'>
        <div className='heading2'>
            <h1>Study Abroad Services</h1>
        </div>

        <div className='containerX2'>
          
            <div className='write-left2'>
                <h2>Study Abroad</h2>
                <p>
                Franchris Consult Limited is your gateway to unlocking transformative educational
                 experiences through our comprehensive Study Abroad Services. We understand that pursuing 
                 education in international institutions enriches lives, broadens horizons, and opens doors 
                 to endless opportunities. Our dedicated team is here to guide you every step of the way,
                 making your study abroad journey seamless and rewarding.
                 </p>
               
            </div>
            <div className='con-image2'>
                <img src="../assets/image/study.png" alt="" />
            </div>
            
        </div>

        <div className="write-Right2">

                <div className="write-list2">
                                1. Personalized Consultation:
                                        </div>
            <div className="right-card2">


            {['Dark',
      ].map((variant) => (
        <Card
        bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '20rem' }} className="mb-2">
                <Card.Body>
                <Card.Img variant="top" src="../../../assets/image/img22.gif" />
                    <Card.Text>
                        
                    We begin by understanding your academic aspirations, career goals, and preferences. 
                    Through personalized consultations,
                    we help you select the best-fit universities, courses, 
                    and destinations that align with your ambitions.
                    </Card.Text>
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>

        <div className="write-Right2">
            <div className="write-list2">
                        2. Application Assistance:
                                </div>
            <div className="right-card2">
               
                        {['Dark',
                ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '20rem' }} className="mb-2">
                            <Card.Body>
                            <Card.Img variant="top" src="../../../assets/image/study2.jpg" />
                                <Card.Text>
                                Navigating the application process can be overwhelming. Our experienced advisors
                                 provide expert guidance, assisting you in preparing a compelling application that highlights 
                                 your strengths and aligns with the admission criteria.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                ))}
            </div>
        </div>

        <div className="write-Right2">
            <div className="write-list2">
                    3. Visa and Immigration Support:
                                </div>
            <div className="right-card2">


                    {['Dark',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '20rem' }} className="mb-2">
                        <Card.Body>
                        <Card.Img variant="top" src="../../../assets/image/img23.jpeg" />
                            <Card.Text>
                                
                                Securing a visa and managing immigration requirements is a crucial step. 
                                We provide comprehensive support, ensuring you have the right 
                                documentation and guidance to navigate the visa application process with ease.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

        <div className="write-Right2">
            <div className="write-list2">
                        4. Pre-departure Guidance:
                                    </div>
            <div className="right-card2">
                  
                    {['Dark',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '20rem' }} className="mb-2">
                <Card.Body>
                <Card.Img variant="top" src="../../../assets/image/img8.jpeg" />
                    <Card.Text>
                        Preparing for life in a new country involves various practical aspects. From travel arrangements 
                        to accommodation and cultural orientation, we offer
                        pre-departure guidance to ensure a smooth transition.

                    </Card.Text>
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>

        <div className="wr2">
                <p>
                    At Franchris Consult Limited, we are committed to enriching lives
                    through education. Our Study Abroad Services go beyond logistics; they're about
                    empowering you to pursue academic excellence, personal growth, and cross-cultural understanding. 
                    Join us in embarking on an educational adventure that transcends borders and propels you toward a
                    future filled with global opportunities.
                </p>
        </div>

    </section>
    </div>
  )
}
