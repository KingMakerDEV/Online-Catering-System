import React from 'react';

const styles = {
  card: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(135deg, #fff, #f9f9f9)',
    position: 'relative',
    height: '380px', // Fixed height for consistent cards
    display: 'flex',
    flexDirection: 'column',
  },
  cardHover: {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 12px 25px rgba(0,0,0,0.2)',
  },
  imageWrapper: {
  position: 'relative',
  overflow: 'hidden',
  height: '200px',
  flexShrink: 0,
},
image: {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  backgroundColor: '#fff',
  transition: 'transform 0.4s ease',
},

  content: {
    padding: '15px',
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: '8px 0',
    color: '#333',
    lineHeight: '1.3',
  },
  price: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: '10px',
  },
  quantitySection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#f8f9fa',
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid #e9ecef',
  },
  quantityButton: {
    background: '#ff6b6b',
    border: 'none',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  quantityButtonHover: {
    background: '#e63946',
    transform: 'scale(1.1)',
  },
  quantityInput: {
    width: '40px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '6px',
    padding: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    background: 'white',
  },
  addButton: {
    background: 'linear-gradient(45deg, #ff6b6b, #f06595)',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '13px',
    width: '100%',
    maxWidth: '180px',
  },
  addButtonHover: {
    transform: 'scale(1.05)',
    background: 'linear-gradient(45deg, #f06595, #ff6b6b)',
    boxShadow: '0 4px 12px rgba(240, 101, 149, 0.4)',
  },
  successAnimation: {
    animation: 'bounce 0.6s ease',
  },
};

// Add CSS for bounce animation
const bounceStyle = `
@keyframes bounce {
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
}
`;

const MenuItem = ({ item, addToCart }) => {
  const [hover, setHover] = React.useState(false);
  const [btnHover, setBtnHover] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [qtyBtnHover, setQtyBtnHover] = React.useState({ minus: false, plus: false });
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 99) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => (prev < 99 ? prev + 1 : 99));
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    
    // Show success animation and alert
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 600);
    
    // Show alert message
    alert(`✅ ${quantity} ${item.name} added to cart!`);
    
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <>
      <style>{bounceStyle}</style>
      <div
        style={{ 
          ...styles.card, 
          ...(hover ? styles.cardHover : {}),
          ...(showSuccess ? styles.successAnimation : {})
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={styles.imageWrapper}>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ 
              ...styles.image, 
              ...(hover ? { transform: 'scale(1.1)' } : {}) 
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x180/ff6b6b/white?text=Food+Image';
              e.target.style.objectFit = 'contain';
            }}
          />
        </div>
        
        <div style={styles.content}>
          <div>
            <h3 style={styles.title}>{item.name}</h3>
            <p style={styles.price}>₹{item.price}</p>
          </div>
          
          {/* Quantity Section */}
          <div style={styles.quantitySection}>
            <div style={styles.quantityContainer}>
              <button 
                style={{ 
                  ...styles.quantityButton, 
                  ...(qtyBtnHover.minus ? styles.quantityButtonHover : {}) 
                }}
                onMouseEnter={() => setQtyBtnHover(prev => ({ ...prev, minus: true }))}
                onMouseLeave={() => setQtyBtnHover(prev => ({ ...prev, minus: false }))}
                onClick={decrementQuantity}
                type="button"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max="99"
                style={styles.quantityInput}
              />
              <button 
                style={{ 
                  ...styles.quantityButton, 
                  ...(qtyBtnHover.plus ? styles.quantityButtonHover : {}) 
                }}
                onMouseEnter={() => setQtyBtnHover(prev => ({ ...prev, plus: true }))}
                onMouseLeave={() => setQtyBtnHover(prev => ({ ...prev, plus: false }))}
                onClick={incrementQuantity}
                type="button"
              >
                +
              </button>
            </div>
            
            <button
              style={{ ...styles.addButton, ...(btnHover ? styles.addButtonHover : {}) }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              onClick={handleAddToCart}
            >
              {showSuccess ? '✅ Added!' : 'Add to Cart 🛒'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;