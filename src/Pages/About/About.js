// import { lazy } from 'react';
import './About.scss';
import { HashLink } from 'react-router-hash-link';
import { Outlet, Link } from 'react-router-dom';
import AboutArrowCard from '../../assets/images/about-arrow-card.jpg';
import { SecretAbout } from '../../Pages';
// let SecretAbout = lazy(() => import('./SecretAbout'));


const About = () => {  

    return (
        <div className='about-page' id='about'>

            <div className='about-section'>
                <section className='about-contact__card'>
                    <img className='about-contact__image' src={AboutArrowCard} alt='contact' />
                    <p>This is a simple page with a few pages and a few components, this is a simple page with a few pages and a few components</p>
                </section>

                <section className='about-contact__desc'>
                    <p>This is a simple page with a few pages and a few components.</p>
                    {/* <HashLink className='secret-link' smooth to="#secret" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}> Secret page </HashLink> */}
                    <Link className='secret-link' to='/about/secret' relative='path'> Secret page </Link>
                </section>
                

                {/* <SecretAbout isSecret /> */}
            </div>
            
            <Outlet />
        </div>
    );
    
}

export default About;

//notes: nested component(secret about information) goes into about folder