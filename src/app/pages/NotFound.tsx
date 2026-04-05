import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <div className="text-9xl" style={{ color: 'var(--learnflow-cta)' }}>
          404
        </div>
        <h1 className="text-4xl" style={{ color: 'var(--learnflow-primary)' }}>
          Page Not Found
        </h1>
        <p className="text-gray-600 text-xl max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center space-x-4 pt-4">
          <Link
            to="/"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--learnflow-cta)' }}
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <Link
            to="/explore"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Explore Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
