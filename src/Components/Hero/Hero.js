import './Hero.scss';
// import FadeInAnimation from '../FadeAnimation/FadeAnimation';

const Hero = () => {
    return (
        <div className='hero'>
            <header className='glitch-wrapper'>
                <h1 className='hero__title glitch' data-glitch="Welcome to the cool stuff, Simple Page !">Welcome to the cool stuff, Simple Page !</h1>
            </header>

            <section className='shadow__box'>
                <p className='hero__description'>This is a simple page with a few pages and a few components.</p>
            </section>
            
        </div>
        
    );
}

export default Hero;