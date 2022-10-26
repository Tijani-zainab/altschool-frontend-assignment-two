import './SecretAbout.scss';
import { useParams } from 'react-router-dom';

const SecretAbout = () => {

    let { secretId } = useParams();

    return (
        <div className='secret-about-page'>
            <h1>Secret nested About information in the about page ! {secretId}</h1>
        </div>
    );
}

export default SecretAbout;