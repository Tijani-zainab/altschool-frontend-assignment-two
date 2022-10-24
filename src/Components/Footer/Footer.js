import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='footer--logo'>Jani</h1>
            <ul className='footer--items'>
                <li><a href='/jani.tijj@gmail.com'>Email</a></li>   
                <li><a href='https://www.linkedin.com/in/tijani-zainab/'>Linkedin</a></li>
            </ul>
        </div>
    );
}

export default Footer;