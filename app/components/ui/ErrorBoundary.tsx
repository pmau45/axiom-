'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Errors are handled silently in production
    // In development, React DevTools will show the error
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div
          className="min-h-screen flex items-center justify-center bg-[#0B0C10] text-[#C5C6C7] p-8 text-center"
          role="alert"
        >
          <div>
            <h2 className="font-oswald text-3xl uppercase tracking-widest text-[#FF5E00] mb-4">
              Something Went Wrong
            </h2>
            <p className="text-[#C5C6C7] mb-8 max-w-md mx-auto">
              We&apos;re sorry for the inconvenience. Please refresh the page or call us directly.
            </p>
            <a
              href="tel:9044587561"
              className="font-oswald uppercase tracking-widest text-[#FF5E00] border border-[#FF5E00] px-6 py-3 hover:bg-[#FF5E00] hover:text-[#050505] transition-colors inline-block"
              aria-label="Call Axiom Canine at (904) 458-7561"
            >
              (904) 458-7561
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
