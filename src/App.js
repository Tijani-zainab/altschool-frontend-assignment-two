import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Landing from './Pages/Landing/Landing';

const App = () => {
  return (
    <ErrorBoundary>
      <Landing />
    </ErrorBoundary>
  );
}

export default App;
