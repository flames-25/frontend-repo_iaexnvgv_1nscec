import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You could log to a monitoring service here
    // console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
