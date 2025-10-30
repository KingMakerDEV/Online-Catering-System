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

  const selectStyle = {
    background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
    border: '2px solid #ff6b6b',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#333',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(255, 107, 107, 0.15)',
    transition: 'all 0.3s ease',
    minWidth: '200px',
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEgTDYgNiBMMTMgMSIgc3Ryb2tlPSIjZmY2YjZiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '12px',
  };

  const selectHoverStyle = {
    ...selectStyle,
    borderColor: '#e63946',
    boxShadow: '0 6px 16px rgba(255, 107, 107, 0.25)',
    transform: 'translateY(-1px)',
  };

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
        style={selectStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, selectHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, selectStyle)}
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