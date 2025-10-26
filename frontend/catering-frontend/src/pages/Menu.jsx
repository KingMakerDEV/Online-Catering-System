import { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getMenus, getMenusByEvent } from '../services/api';
import { CartContext } from '../context/CartContext';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const { addToCart, cartItems } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const event = searchParams.get('event');
  const navigate = useNavigate();

  useEffect(() => {
    if (event) {
      setMenus([]);
      getMenusByEvent(event)
        .then(setMenus)
        .catch((error) => console.error('Error fetching filtered menus:', error));
    } else {
      setMenus([]);
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

      {/* Menu grid */}
      <div className="row">
        {menus.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <MenuItem item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>

      {/* Next button */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={() => navigate('/cart')}
          disabled={!cartItems || cartItems.length === 0}
          className="btn btn-lg btn-success"
          style={{
            padding: '14px 40px',
            fontSize: '20px',
            borderRadius: '10px',
            fontWeight: '600',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ➡️ Next
        </button>
      </div>
    </div>
  );
};

export default Menu;
