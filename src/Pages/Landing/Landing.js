import './Landing.scss';
import { GlobalNav, Hero } from '../../Components';

const Landing = () => {
    return (
        <div className='landing-page'>
            <GlobalNav />
            <Hero />
        </div>
    );
}

export default Landing;