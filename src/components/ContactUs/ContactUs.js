import React from 'react'
import './ContactUs.css';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ContactUs() {

    return (
        <div className='ContactUs'>
            <h1>Контактирај не</h1>
            <div className='contact-info-container'>
                <div className='contact-info' >
                    <div>
                        <FontAwesomeIcon icon='phone-alt' />
                        +389 70 384728
                    </div>
                    <div>
                        <FontAwesomeIcon icon='envelope' />
                        contact@brainster.co
                    </div>
                    <div>
                        <FontAwesomeIcon icon='map-marker-alt' size='lg' />
                        Kosturski Heroi 28, Skopje 1000
                </div>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/school/brainster-co/">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/BrainsterCo">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/brainster.co">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs