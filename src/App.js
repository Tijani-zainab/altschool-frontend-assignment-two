import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { About, Contact, Landing, Users } from './Pages';
import { Footer, Routing } from './Components';

const App = () => {
  return (
    <div className='app'>
     <ErrorBoundary>
      <Landing />
      <About />
      <Contact />
      <Users />
      <Footer />
      <Routing />
    </ErrorBoundary>
    </div>
  );
}

export default App;
