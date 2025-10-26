import React from 'react';

const styles = {
  card: {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #fff, #f9f9f9)',
  },
  cardHover: {
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 12px 25px rgba(0,0,0,0.2)',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: '-100%',
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    transition: 'bottom 0.4s ease',
  },
  overlayVisible: {
    bottom: 0,
  },
  button: {
    background: 'linear-gradient(45deg, #ff6b6b, #f06595)',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '30px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background 0.3s ease',
  },
  buttonHover: {
    transform: 'scale(1.1)',
    background: 'linear-gradient(45deg, #f06595, #ff6b6b)',
  },
  content: {
    padding: '15px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '8px 0',
    color: '#333',
  },
  price: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
};

const MenuItem = ({ item, addToCart }) => {
  const [hover, setHover] = React.useState(false);
  const [btnHover, setBtnHover] = React.useState(false);

  return (
    <div
      style={{ ...styles.card, ...(hover ? styles.cardHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={styles.imageWrapper}>
        <img
          src={item.imageUrl}
          alt={item.name}
          style={{ ...styles.image, ...(hover ? { transform: 'scale(1.1)' } : {}) }}
          onError={(e) => (e.target.src = '/placeholder-food.jpg')}
        />
        <div style={{ ...styles.overlay, ...(hover ? styles.overlayVisible : {}) }}>
          <button
            style={{ ...styles.button, ...(btnHover ? styles.buttonHover : {}) }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            onClick={() => addToCart(item)}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{item.name}</h3>
        <p style={styles.price}>₹{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
