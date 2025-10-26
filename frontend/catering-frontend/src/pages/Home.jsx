

// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// const Home = () => {
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

//   const heroSlides = [
//     { id: 1, image: '/1_rotate.png' },
//     { id: 2, image: '/2_rotate.png' },
//     { id: 3, image: '/3_rotate.png' },
//     { id: 4, image: '/4_rotate.png' },
//     { id: 5, image: '/5_rotate.png' },
//   ];

//   const eventCategories = [
//     { id: 1, title: 'House Party', image: '/House Party.webp' },
//     { id: 2, title: 'Birthday', image: '/Birthday.webp' },
//     { id: 3, title: 'Premium', image: '/Premium.webp' },
//     { id: 4, title: 'Office', image: '/Office.webp' },
//     { id: 5, title: 'Anniversary', image: '/Anniversary.webp' },
//     { id: 6, title: 'Pooja', image: '/Pooja.jpeg' },
//     { id: 7, title: 'Wedding', image: '/Wedding.webp' },
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Priya Sharma',
//       role: 'Wedding Planner',
//       content: 'BiteBook made our wedding catering effortless! The food was exceptional and the service was impeccable.',
//       rating: 5
//     },
//     {
//       id: 2,
//       name: 'Rahul Mehta',
//       role: 'Corporate Manager',
//       content: 'Perfect for our office events! Great variety, on-time delivery, and professional staff.',
//       rating: 5
//     },
//     {
//       id: 3,
//       name: 'Anita Reddy',
//       role: 'House Party Host',
//       content: 'The biryani was the star of our housewarming party! Everyone loved it.',
//       rating: 4
//     }
//   ];

//   const processSteps = [
//     {
//       step: 1,
//       title: 'Choose Your Event',
//       description: 'Select from various event types and customize your requirements',
//       icon: '📅'
//     },
//     {
//       step: 2,
//       title: 'Browse Menus',
//       description: 'Explore curated menus from top chefs and catering services',
//       icon: '📋'
//     },
//     {
//       step: 3,
//       title: 'Book & Confirm',
//       description: 'Secure your booking with instant confirmation and updates',
//       icon: '✅'
//     },
//     {
//       step: 4,
//       title: 'Enjoy Your Event',
//       description: 'Relax and enjoy delicious food while we handle everything',
//       icon: '🎉'
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [heroSlides.length]);

//   const renderStars = (rating) => {
//     return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   return (
//     <div className="home-page">
//       {/* HERO SLIDER - CLEAN MODERN DESIGN */}
//       <section className="hero-slider-modern">
//         <div className="modern-banner-container">
//           <div className="modern-banner-frame">
//             <div className="slider-container-modern">
//               <div
//                 className="slides-wrapper-modern"
//                 style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
//               >
//                 {heroSlides.map((slide) => (
//                   <div key={slide.id} className={`slide-modern ${slide.id === currentHeroSlide + 1 ? 'active' : ''}`}>
//                     <div className="image-wrapper-modern">
//                       <img
//                         src={slide.image}
//                         alt={`Banner ${slide.id}`}
//                         className="modern-slide-image"
//                         onError={(e) => {
//                           e.target.src = '/placeholder-food.jpg';
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 className="modern-arrow-btn left"
//                 onClick={() =>
//                   setCurrentHeroSlide((prev) =>
//                     (prev - 1 + heroSlides.length) % heroSlides.length
//                   )
//                 }
//               >
//                 &#8249;
//               </button>
//               <button
//                 className="modern-arrow-btn right"
//                 onClick={() =>
//                   setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
//                 }
//               >
//                 &#8250;
//               </button>
//             </div>
//           </div>

//           <div className="modern-indicators">
//             {heroSlides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`modern-indicator ${index === currentHeroSlide ? 'active' : ''}`}
//                 onClick={() => setCurrentHeroSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EVENT CATEGORIES */}
//       <section className="event-categories">
//         <div className="container">
//           <h2 className="section-title">Every Occasion</h2>
//           <p className="section-subtitle">From intimate gatherings to grand celebrations, we've got you covered</p>
//           <div className="events-grid">
//             {eventCategories.map((event) => (
//               <div key={event.id} className="event-card">
//                 <img 
//                   src={event.image} 
//                   alt={event.title} 
//                   className="event-img"
//                   onError={(e) => {
//                     e.target.src = '/placeholder-event.jpg';
//                   }}
//                 />
//                 <h3>{event.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS SECTION */}
//       <section className="process-section">
//         <div className="container">
//           <h2 className="section-title">How It Works</h2>
//           <div className="process-steps">
//             {processSteps.map((step) => (
//               <div key={step.step} className="process-step">
//                 <div className="step-icon">{step.icon}</div>
//                 <div className="step-number">Step {step.step}</div>
//                 <h3>{step.title}</h3>
//                 <p>{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS SECTION */}
//       <section className="testimonials-section">
//         <div className="container">
//           <h2 className="section-title">What Our Customers Say</h2>
//           <div className="testimonials-grid">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.id} className="testimonial-card">
//                 <div className="testimonial-content">
//                   <p>"{testimonial.content}"</p>
//                 </div>
//                 <div className="testimonial-rating">
//                   {renderStars(testimonial.rating)}
//                 </div>
//                 <div className="testimonial-author">
//                   <h4>{testimonial.name}</h4>
//                   <span>{testimonial.role}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="cta">
//         <div className="container">
//           <h2>Ready to Book Your Catering?</h2>
//           <p>Join thousands of satisfied customers who trust BiteBook for their special occasions</p>
//           <div className="cta-buttons">
//             <Link to="/menu" className="cta-btn primary">
//               Explore Menus
//             </Link>
//             <Link to="/register" className="cta-btn secondary">
//               Get Started Free
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    { id: 1, image: '/1_rotate.png' },
    { id: 2, image: '/2_rotate.png' },
    { id: 3, image: '/3_rotate.png' },
    { id: 4, image: '/4_rotate.png' },
    { id: 5, image: '/5_rotate.png' },
  ];

  // ✅ Added enum values for filtering
  const eventCategories = [
    { id: 1, title: 'House Party', image: '/House Party.webp', value: 'HOUSE_PARTY' },
    { id: 2, title: 'Birthday', image: '/Birthday.webp', value: 'BIRTHDAY' },
    { id: 3, title: 'Premium', image: '/Premium.webp', value: 'PREMIUM' },
    { id: 4, title: 'Office', image: '/Office.webp', value: 'OFFICE' },
    { id: 5, title: 'Anniversary', image: '/Anniversary.webp', value: 'ANNIVERSARY' },
    { id: 6, title: 'Pooja', image: '/Pooja.jpeg', value: 'POOJA' },
    { id: 7, title: 'Wedding', image: '/Wedding.webp', value: 'WEDDING' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Wedding Planner',
      content: 'BiteBook made our wedding catering effortless! The food was exceptional and the service was impeccable.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rahul Mehta',
      role: 'Corporate Manager',
      content: 'Perfect for our office events! Great variety, on-time delivery, and professional staff.',
      rating: 5
    },
    {
      id: 3,
      name: 'Anita Reddy',
      role: 'House Party Host',
      content: 'The biryani was the star of our housewarming party! Everyone loved it.',
      rating: 4
    }
  ];

  const processSteps = [
    { step: 1, title: 'Choose Your Event', description: 'Select from various event types and customize your requirements', icon: '📅' },
    { step: 2, title: 'Browse Menus', description: 'Explore curated menus from top chefs and catering services', icon: '📋' },
    { step: 3, title: 'Book & Confirm', description: 'Secure your booking with instant confirmation and updates', icon: '✅' },
    { step: 4, title: 'Enjoy Your Event', description: 'Relax and enjoy delicious food while we handle everything', icon: '🎉' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="home-page">
      {/* HERO SLIDER */}
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
                        onError={(e) => { e.target.src = '/placeholder-food.jpg'; }}
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
          <p className="section-subtitle">From intimate gatherings to grand celebrations, we've got you covered</p>
          <div className="events-grid">
            {eventCategories.map((event) => (
              <div 
                key={event.id} 
                className="event-card"
                onClick={() => navigate(`/menu?event=${event.value}`)} // ✅ navigate with enum value
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="event-img"
                  onError={(e) => { e.target.src = '/placeholder-event.jpg'; }}
                />
                <h3>{event.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.step} className="process-step">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">Step {step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Book Your Catering?</h2>
          <p>Join thousands of satisfied customers who trust BiteBook for their special occasions</p>
          <div className="cta-buttons">
            <Link to="/menu" className="cta-btn primary">
              Explore Menus
            </Link>
            <Link to="/register" className="cta-btn secondary">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
