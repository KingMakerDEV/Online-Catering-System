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
              {item.image && (
                <img
                  src={`data:image/jpeg;base64,${item.image}`}
                  alt={item.name}
                  className="card-img-top"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-success" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;