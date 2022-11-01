import './SecretAbout.scss';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const SecretAbout = () => {

    let { secretId } = useParams();

    return (
        <div className='secret-about-page' id='secret'>
            <h1>Secret nested About information in the about page ! {secretId}</h1>
            <HashLink className='secret-link' smooth to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}> Back to About </HashLink>
        </div>
    );
}

export default SecretAbout;