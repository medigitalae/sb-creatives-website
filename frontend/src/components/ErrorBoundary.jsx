import React from "react";
import { RotateCcw } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div data-testid="error-boundary-fallback" className="min-h-screen bg-warm flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-md w-full bg-cloud/30 border border-cloud rounded-3xl p-10 md:p-12 backdrop-blur-sm">
            <div className="w-16 h-16 bg-cadet/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <RotateCcw className="text-cadet" size={28} />
            </div>
            <h1 className="font-heading font-bold text-3xl text-charcoal mb-3">
              Something went wrong
            </h1>
            <p className="text-graphite text-[15px] mb-8 leading-relaxed">
              We encountered an unexpected error while loading this page. Please try refreshing or check your connection.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal w-full py-4 text-sm font-semibold text-warm transition-all duration-300 hover:bg-cadet hover:-translate-y-1 hover:shadow-lg"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
