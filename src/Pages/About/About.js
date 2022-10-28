import './About.scss';
import { Outlet, Link } from 'react-router-dom';
import AboutArrowCard from '../../assets/images/about-arrow-card.jpg';

const About = () => {
    return (
        <div className='about-page'>

            <div className='about-section'>
                <section className='about-contact__card'>
                    <img className='about-contact__image' src={AboutArrowCard} alt='contact' />
                    <p>This is a simple page with a few pages and a few components, this is a simple page with a few pages and a few components</p>
                </section>

                <section className='about-contact__desc'>
                    <p>This is a simple page with a few pages and a few components.</p>
                    <button className='secret-link'><Link className='Link' to='secret'>Secret page</Link></button>
                </section>
            </div>
            
            <Outlet />
        </div>
    );
}

export default About;

//notes: nested component(secret about information) goes into about folder