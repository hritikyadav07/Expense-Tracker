import { Link } from 'react-router-dom';

// Example component with links
const Navigation = () => {
  return (
    <div>
      <Link to="/auth?type=login" className="text-blue-500">
        Go to Login
      </Link>
      <Link to="/auth?type=signup" className="text-blue-500 ml-4">
        Go to Signup
      </Link>
    </div>
  );
};

export default Navigation;
//not used yet