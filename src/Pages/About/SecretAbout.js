import './SecretAbout.scss';
import { useParams, Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

const SecretAbout = () => {

    let { secretId } = useParams();

    return (
        <div className='secret-about-page' >
            <h1>I am single, This is my secret. keep it  between us ! 👀 {secretId}</h1>
            {/* <HashLink className='secret-link' smooth to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}> Back to About </HashLink> */} 
            <Link className='secret-link' to='/about' relative='path'> Back To About </Link>
        </div>
    );
}

export default SecretAbout;