import { Link } from 'react-router-dom';

// Display this page when a user tries to access a page that doesn't exist
function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't seem to exist.</p>
      <Link to="/" className="button">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;