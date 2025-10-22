import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMenus, getMenusByEvent } from '../services/api';
import { CartContext } from '../context/CartContext';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const event = searchParams.get('event');

  useEffect(() => {
    if (event) {
      setMenus([]); // ✅ clear old menus before fetching
      getMenusByEvent(event)
        .then(setMenus)
        .catch((error) => console.error('Error fetching filtered menus:', error));
    } else {
      setMenus([]); // ✅ clear old menus before fetching
      getMenus()
        .then(setMenus)
        .catch((error) => console.error('Error fetching menus:', error));
    }
  }, [event]);

  return (
    <div>
      <h2>Menu</h2>

      {/* Filter dropdown */}
      <select
        value={event || ''}
        onChange={(e) => {
          const val = e.target.value;
          if (val) setSearchParams({ event: val });
          else setSearchParams({});
        }}
      >
        <option value="">All</option>
        <option value="HOUSE_PARTY">House Party</option>
        <option value="BIRTHDAY">Birthday</option>
        <option value="PREMIUM">Premium</option>
        <option value="OFFICE">Office</option>
        <option value="ANNIVERSARY">Anniversary</option>
        <option value="POOJA">Pooja</option>
        <option value="WEDDING">Wedding</option>
      </select>

      <div className="row">
        {menus.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={item.imageUrl} // ✅ use Cloudinary URL directly
                alt={item.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
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
