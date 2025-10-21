import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  
  // Using high-quality food images that will definitely work
  const heroSlides = [
    { 
      id: 1, 
      image: 'public/1_rotate.jpeg'
    },
    { 
      id: 2, 
      image: 'public/2_rotate.jpeg'
    },
    { 
      id: 3, 
      image: 'public/3_rotate.jpeg'
    },
    { 
      id: 4, 
      image: 'public/4_rotate.jpeg'
    },
    { 
      id: 5, 
      image: 'public/5_rotate.jpeg'
    },
  ];

  // Event categories with working images
  const eventCategories = [
    { 
      id: 1, 
      title: 'House Party', 
      image: 'public/House Party.webp'
    },
    { 
      id: 2, 
      title: 'Birthday', 
      image: 'public/Birthday.webp'
    },
    { 
      id: 3, 
      title: 'Premium', 
      image: 'public/Premium.webp'
    },
    { 
      id: 4, 
      title: 'Office', 
      image: 'public/Office.webp'
    },
    { 
      id: 5, 
      title: 'Anniversary', 
      image: 'public/Anniversary.webp'
    },
    { 
      id: 6, 
      title: 'Pooja', 
      image: 'public/Pooja.jpeg'
    },
    { 
      id: 7, 
      title: 'Wedding', 
      image: 'public/Wedding.webp'
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <section className="hero-slider">
  <div className="slider-container">
    <div 
      className="slides-wrapper fade-in-slide"
      style={{
        transform: `translateX(-${currentHeroSlide * 100}%)`,
        width: `${heroSlides.length * 100}%`
      }}
    >
      {heroSlides.map((slide) => (
        <div key={slide.id} className="slide">
          <img 
            src={slide.image}
            alt={`Banner ${slide.id}`}
            className="slide-image-full"
          />
          {/* Overlay Content */}
          
        </div>
      ))}
    </div>

    {/* Arrows */}
    <button 
      className="arrow-btn left" 
      onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
    >
      &#10094;
    </button>
    <button 
      className="arrow-btn right" 
      onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
    >
      &#10095;
    </button>
  </div>

  {/* Indicators */}
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


      {/* Event Categories Section */}
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
                />
                <h3>{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Book Your Catering?</h2>
          <p>Experience the best catering service for all your occasions</p>
          <Link to="/menu" className="modern-btn cta-btn">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;