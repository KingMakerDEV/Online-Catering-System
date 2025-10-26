import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    <div className="orders-container">
      {/* Internal CSS */}
      <style>{`
        .orders-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }
        .orders-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
          color: #333;
        }
        .order-card {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .order-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .order-header {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #444;
        }
        .order-status {
          font-size: 0.95rem;
          font-weight: 500;
          color: #555;
        }
        .order-items {
          margin-top: 10px;
          padding-left: 20px;
        }
        .order-item {
          font-size: 0.95rem;
          margin-bottom: 5px;
          color: #666;
        }
        .confirm-btn {
          margin-top: 15px;
          background: linear-gradient(45deg, #06d6a0, #1b9aaa);
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .confirm-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
        .no-orders {
          text-align: center;
          font-size: 1.1rem;
          color: #777;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 10px;
        }
      `}</style>

      <h2 className="orders-title">📦 Your Orders</h2>

      {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              Order #{order.id} — Total: ₹{order.total}
            </div>
            <div className="order-status">Status: {order.status}</div>
            <ul className="order-items">
              {order.items?.map((item) => (
                <li key={item.id} className="order-item">
                  {item.menuItem?.name} × {item.quantity}
                </li>
              ))}
            </ul>
            <button
              className="confirm-btn"
              onClick={() => navigate(`/confirm-order/${order.id}`)}
            >
              ✅ Confirm Order
            </button>
          </div>
        ))
      ) : (
        <div className="no-orders">No orders found.</div>
      )}
    </div>
  );
};

export default Orders;
