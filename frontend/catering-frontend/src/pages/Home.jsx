import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    { id: 1, image: '/1_rotate.png' },
    { id: 2, image: '/2_rotate.png' },
    { id: 3, image: '/3_rotate.png' },
    { id: 4, image: '/4_rotate.png' },
    { id: 5, image: '/5_rotate.png' },
  ];

  const eventCategories = [
    { id: 1, title: 'House Party', image: '/House Party.webp' },
    { id: 2, title: 'Birthday', image: '/Birthday.webp' },
    { id: 3, title: 'Premium', image: '/Premium.webp' },
    { id: 4, title: 'Office', image: '/Office.webp' },
    { id: 5, title: 'Anniversary', image: '/Anniversary.webp' },
    { id: 6, title: 'Pooja', image: '/Pooja.jpeg' },
    { id: 7, title: 'Wedding', image: '/Wedding.webp' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="home-page">
      {/* HERO SLIDER - CLEAN MODERN DESIGN */}
      <section className="hero-slider-modern">
        <div className="modern-banner-container">
          <div className="modern-banner-frame">
            <div className="slider-container-modern">
              <div
                className="slides-wrapper-modern"
                style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div key={slide.id} className={`slide-modern ${slide.id === currentHeroSlide + 1 ? 'active' : ''}`}>
                    <div className="image-wrapper-modern">
                      <img
                        src={slide.image}
                        alt={`Banner ${slide.id}`}
                        className="modern-slide-image"
                        onError={(e) => {
                          e.target.src = '/placeholder-food.jpg'; // Fallback image
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="modern-arrow-btn left"
                onClick={() =>
                  setCurrentHeroSlide((prev) =>
                    (prev - 1 + heroSlides.length) % heroSlides.length
                  )
                }
              >
                &#8249;
              </button>
              <button
                className="modern-arrow-btn right"
                onClick={() =>
                  setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
                }
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="modern-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`modern-indicator ${index === currentHeroSlide ? 'active' : ''}`}
                onClick={() => setCurrentHeroSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EVENT CATEGORIES */}
      <section className="event-categories">
        <div className="container">
          <h2 className="section-title">Every Occasion</h2>
          <div className="events-grid">
            {eventCategories.map((event) => (
              <div key={event.id} className="event-card">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="event-img"
                  onError={(e) => {
                    e.target.src = '/placeholder-event.jpg'; // Fallback image
                  }}
                />
                <h3>{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Book Your Catering?</h2>
          <p>Experience the best catering service for all your occasions</p>
          <Link to="/menu" className="cta-btn">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;