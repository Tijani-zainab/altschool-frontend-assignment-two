import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header"> App Component </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
