import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ added for navigation
import { getOrders } from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ added

  useEffect(() => {
    getOrders()
      .then((response) => {
        setOrders(response);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load orders. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2>Your Orders</h2>
      <ul className="list-group">
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id} className="list-group-item">
              Order #{order.id} - Total: ₹{order.total} - Status: {order.status}
              <ul>
                {order.items?.map((item) => (
                  <li key={item.id}>
                    {item.menuItem?.name} × {item.quantity}
                  </li>
                ))}
              </ul>
              {/* ✅ Confirm Order button */}
              <button
                className="btn btn-success mt-2"
                onClick={() => navigate(`/confirm-order/${order.id}`)}
              >
                Confirm Order
              </button>
            </li>
          ))
        ) : (
          <li className="list-group-item">No orders found.</li>
        )}
      </ul>
    </div>
  );
};

export default Orders;
