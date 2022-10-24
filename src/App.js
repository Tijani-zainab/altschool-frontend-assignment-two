import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { About, Contact, Landing } from './Pages';
import { Footer } from './Components';

const App = () => {
  return (
    <ErrorBoundary>
      <Landing />
      <About />
      <Contact />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
