import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/register');
    }, 20000); // Redirect after 5 seconds

    // Cleanup function to clear the timeout in case the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-4">Welcome to Employee Management System</h1>
      <p className="lead mb-4">Manage your employees efficiently with our system.</p>
      <button className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>Visit Us</button>
    </div>
  );
}

export default Home;
