import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App runtime error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem', fontFamily: 'monospace', background: '#FAFAF8', minHeight: '100vh', color: '#111111' }}>
          <h2 style={{ color: '#E53E3E', marginBottom: '1rem' }}>VERHOST UI Diagnostic Error</h2>
          <pre style={{ background: '#FFFFFF', border: '1px solid #E6E6E2', padding: '1.5rem', borderRadius: '8px', overflow: 'auto' }}>
            {this.state.error?.toString()}
            {'\n'}
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: '#111111', color: '#FFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
