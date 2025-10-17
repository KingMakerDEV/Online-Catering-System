import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Online Catering</h1>
      <p>Browse our menu and place orders easily!</p>
      <Link to="/menu" className="btn btn-primary">View Menu</Link>
    </div>
  );
};

export default Home;