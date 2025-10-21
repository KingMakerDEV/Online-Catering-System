import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    { id: 1, image: '/1_rotate.jpeg' },
    { id: 2, image: '/2_rotate.jpeg' },
    { id: 3, image: '/3_rotate.jpeg' },
    { id: 4, image: '/4_rotate.jpeg' },
    { id: 5, image: '/5_rotate.jpeg' },
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
      {/* HERO SLIDER */}
      <section className="hero-slider">
        <div className="slider-container">
          <div
            className="slides-wrapper"
            style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <div key={slide.id} className="slide fade-in-slide">
                <img
                  src={slide.image}
                  alt={`Banner ${slide.id}`}
                  className="slide-image-full"
                />
              </div>
            ))}
          </div>

          <button
            className="arrow-btn left"
            onClick={() =>
              setCurrentHeroSlide((prev) =>
                (prev - 1 + heroSlides.length) % heroSlides.length
              )
            }
          >
            &#10094;
          </button>
          <button
            className="arrow-btn right"
            onClick={() =>
              setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
            }
          >
            &#10095;
          </button>
        </div>

        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentHeroSlide ? 'active' : ''}`}
              onClick={() => setCurrentHeroSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* EVENT CATEGORIES */}
      <section className="event-categories">
        <div className="container">
          <h2 className="section-title">Every Occasion</h2>
          <div className="events-grid">
            {eventCategories.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} className="event-img" />
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
