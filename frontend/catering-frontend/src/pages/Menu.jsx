import { useState, useEffect, useContext } from 'react';
import { getMenus } from '../services/api';
import { CartContext } from '../context/CartContext';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getMenus()
      .then((response) => setMenus(response))
      .catch((error) => console.error('Error fetching menus:', error));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <div className="row">
        {menus.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
<img
  src={item.imageUrl}   // ✅ use Cloudinary URL directly
  alt={item.name}
  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
/>

              <div className="card-body">
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
