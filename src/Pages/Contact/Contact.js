import './Contact.scss';
import { HashLink } from 'react-router-hash-link';

const Contact = () => {
    return (
        <div className='contact-page' id='contact'>
            <div className='contact-box'>
                <h3>Contact</h3>
                <p> Get our information and reach out to us here, with our line !</p>

                <section className='contact-info'>
                    <h3>Our Information</h3>
                    <p>Phone: 555-555-5555</p>
                    <p>Email: jani.tijj@gmail.com </p>
                    <p>Address: 1234 Main St. New York, NY 10001</p>
                </section>
                
            </div>

            <HashLink className='hashlink-link contact-link' to='/#home' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Back to Top</HashLink>

        </div>
    );
}

export default Contact;