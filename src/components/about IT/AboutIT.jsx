import React from 'react';
import Card from 'react-bootstrap/Card';
import './aboutIT.css';

export default function AboutIT() {
  return (
    <div>
      <section className='main-container'>
        <div className='heading'>
            <h1>IT Solutions</h1>
        </div>

        <div className='containerX'>
         
            <div className='write-left'>
                <h2>IT Solutions Services</h2>
                <p>
                    In the ever-evolving digital landscape, Franchris Consult Limited stands as your trusted partner for comprehensive IT 
                    solutions that empower your business to thrive in the modern era. Our IT services are meticulously 
                    crafted to address your unique needs, enhance operational efficiency, and drive sustainable growth.
                </p>
               
            </div>
                        <div className="card-vid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <img src="../../../assets/image/vid4.gif" alt="" />
                        </div>
            
        </div>

        <div className="write-Right">

                <div className="write-list">
                                            Custom Software Development:
                                        </div>
            <div className="right-card">


            {['Dark',
      ].map((variant) => (
        <Card
        bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '20rem' }} className="mb-2">
                <Card.Body>
                <Card.Img variant="top" src="../../../assets/image/img21.jpeg" />
                    <Card.Text>
                        Our team of skilled developers creates tailor-made software solutions that align perfectly with your
                        business processes. From web applications to mobile apps and enterprise solutions, we design and build 
                        software that streamlines operations, enhances user experiences, and drives innovation.
                    </Card.Text>
                </Card.Body>
            </Card>
            ))}
            </div>
        </div> 

        <div className="write-Right">
            <div className="write-list">
                                    Cloud Services:
                                    </div>
            <div className="right-card">
                  
                    {['Dark',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '20rem' }} className="mb-2">
                <Card.Body>
                <Card.Img variant="top" src="../../../assets/image/img17.jpeg" />
                    <Card.Text>
                        Transition to the cloud with confidence through our cloud computing services.
                        Whether it's migrating your existing systems or developing cloud-native applications,
                        we help you harness the scalability, flexibility, and cost-efficiency of cloud technologies.

                    </Card.Text>
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>

       

        <div className="write-Right">
            <div className="write-list">
                            IT Consulting:
                                </div>
            <div className="right-card">
               
                    {['Dark',
            ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '20rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Img variant="top" src="../../../assets/image/img8.jpeg" />
                        <Card.Text>
                            Our seasoned consultants provide strategic insights tailored to your organization's goals.
                            We conduct thorough assessments, offer actionable recommendations, and design roadmaps for IT
                            initiatives that align with your long-term vision.

                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>

        <div className="write-Right">
            <div className="write-list">
                                IT Support and Maintenance:
                                </div>
            <div className="right-card">
                   
                    {['Dark',
            ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '20rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Img variant="top" src="../../../assets/image/img15.jpg" />
                        <Card.Text>
                            Count on us for reliable IT support and maintenance services.
                            We ensure your systems run smoothly, address any issues promptly, 
                            and provide ongoing assistance to keep your technology infrastructure 
                            operating at peak performance.

                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>

        <div className="write-Right">
            <div className="write-list">
                            Data Analytics and Business Intelligence:
                                </div>
            <div className="right-card">
                
                    {['Dark',
            ].map((variant) => (
                    <Card
                    bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '20rem' }} className="mb-2">
                    <Card.Body>
                    <Card.Img variant="top" src="../../../assets/image/img10.jpeg" />
                        <Card.Text>
                           <p>
                           Unlock the power of data-driven decision-making with our data analytics and
                            business intelligence services. We help you gather, analyze, and visualize data 
                            to derive actionable insights that inform your business strategies.
                           </p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
        <div className="wr">
            <p>
                At Franchris Consult Limited, we understand that technology is the backbone of modern businesses. 
                Our IT Solutions Services are designed not only to solve immediate challenges but also to provide a
                solid foundation for your future growth. With a commitment to excellence and a passion for innovation, we 
                empower your business to
                navigate the complexities of the digital age and emerge as a leader in your industry.
            </p>
        
        </div>

    </section>
    </div>
  )
}
