import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(231, 76, 60, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const timelineItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(231, 76, 60, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(52, 73, 94, 0.05) 0%, transparent 50%)",
          zIndex: -1,
        }}
      />

      {/* Hero Section - Full-width background for About, Mission, Vision */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: "url('public/back2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
        
        {/* Content Wrapper */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "2rem 1rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* About BiteBook Card - Top Left */}
            <motion.div
              variants={itemVariants}
              whileHover={cardHover}
              style={{
                backgroundColor: "#ffffff",
                color: "#333",
                padding: "3rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                border: "1px solid rgba(231, 76, 60, 0.1)",
                textAlign: "center",
                transition: "all 0.4s ease",
              }}
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                }}
              >
                About BiteBook
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  fontWeight: "300",
                  marginBottom: "2rem",
                  maxWidth: "100%",
                }}
              >
                Your premier online platform for effortless catering bookings. From intimate gatherings to grand events, we bring exquisite bites to your table, ensuring every moment is savored with unmatched convenience and flavor.
              </motion.p>
              <motion.div
                style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}
              >
                <motion.a
                  href="/menu"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#e74c3c",
                    color: "#ffffff",
                    padding: "0.8rem 2rem",
                    textDecoration: "none", 
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  Explore Menus
                </motion.a>
                <motion.a
                  href="/register"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-block",
                    background: "transparent",
                    color: "#e74c3c",
                    border: "2px solid #e74c3c",
                    padding: "0.8rem 2rem",
                    textDecoration: "none",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Get Started Free
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column: Mission and Vision stacked */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {/* Mission Card */}
              <motion.div
                variants={itemVariants}
                whileHover={cardHover}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "2rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(231, 76, 60, 0.1)",
                  transition: "all 0.4s ease",
                }}
              >
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: "#2c3e50",
                    fontWeight: "600",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  Our Mission
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: "-0.5rem",
                      left: "50%",
                      width: "50px",
                      height: "3px",
                      backgroundColor: "#e74c3c",
                      borderRadius: "2px",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#555",
                    textAlign: "center",
                  }}
                >
                  To connect passionate chefs and caterers with hosts worldwide, revolutionizing the catering industry through innovative, user-friendly technology that delivers exceptional culinary experiences tailored to every occasion.
                </motion.p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={itemVariants}
                whileHover={cardHover}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "2rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(231, 76, 60, 0.1)",
                  transition: "all 0.4s ease",
                }}
              >
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: "#2c3e50",
                    fontWeight: "600",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  Our Vision
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: "-0.5rem",
                      left: "50%",
                      width: "50px",
                      height: "3px",
                      backgroundColor: "#e74c3c",
                      borderRadius: "2px",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    color: "#555",
                    textAlign: "center",
                  }}
                >
                  A world where every event is elevated by unforgettable flavors, seamless service, and sustainable practices, making extraordinary dining accessible and effortless for all.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      {/* Video Section with Stats on Right Side */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          backgroundColor: "#f8f9fa",
          padding: "4rem 1rem",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "#2c3e50",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Our Story in Motion
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#666",
              marginBottom: "3rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            Watch how BiteBook turns event chaos into flavor magic – straight from our team.
          </motion.p>

          {/* Video and Stats Grid */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Video on Left Side */}
            <motion.div
              variants={itemVariants}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <video
                src="/catering_1.mp4"
                
                loop
                playsInline
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                poster="/public/thumbnail.png"
              >
                Your browser doesn't support video. <a href="/catering_1.mp4">Download it here</a>.
              </video>
            </motion.div>

            {/* Stats Cards on Right Side */}
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              {[
                { num: "10K+", label: "Happy Customers" },
                { num: "500+", label: "Events Catered" },
                { num: "50+", label: "Top Chefs" },
                { num: "99%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  style={{
                    padding: "2rem 1rem",
                    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    borderRadius: "16px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <motion.h3
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "0.5rem",
                      color: "#e74c3c",
                      fontWeight: "bold",
                    }}
                  >
                    {stat.num}
                  </motion.h3>
                  <motion.p
                    style={{
                      fontSize: "1rem",
                      color: "#666",
                      fontWeight: "500",
                    }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Company Overview - Enhanced with bullets */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          maxWidth: "1200px",
          margin: "4rem auto",
          padding: "2rem 1rem",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={cardHover}
            style={{
              backgroundColor: "#ffffff",
              padding: "3rem",
              borderRadius: "20px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              border: "1px solid rgba(231, 76, 60, 0.1)",
              transition: "all 0.4s ease",
            }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: "2.5rem",
                marginBottom: "2rem",
                color: "#2c3e50",
                fontWeight: "600",
                position: "relative",
              }}
            >
              Who We Are
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-0.5rem",
                  left: 0,
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#e74c3c",
                  borderRadius: "2px",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.h2>
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#555",
                  marginBottom: "1.5rem",
                }}
              >
                Founded in 2023, BiteBook revolutionizes the catering industry by connecting passionate chefs and caterers with hosts seeking unforgettable culinary experiences. Our user-friendly platform simplifies the booking process, offering a curated selection of menus tailored to diverse tastes and occasions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                With a commitment to quality, sustainability, and exceptional service, we ensure that every event is a success. Whether it's a corporate luncheon, wedding feast, or casual brunch, BiteBook delivers convenience without compromising on flavor.
              </motion.p>
              {/* Added bullet points for more content */}
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  color: "#666",
                  paddingLeft: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                <motion.li style={{ marginBottom: "0.5rem" }}>Over 500 successful events catered worldwide</motion.li>
                <motion.li style={{ marginBottom: "0.5rem" }}>Partnerships with 50+ award-winning chefs</motion.li>
                <motion.li>Real-time booking with instant confirmations</motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          
          {/* Right Side with Image and Social Media Links */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={cardHover}
              style={{
                backgroundColor: "#ffffff",
                padding: "1.5rem",
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                border: "1px solid rgba(231, 76, 60, 0.1)",
                overflow: "hidden",
                transition: "all 0.4s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.img
                initial={{ scale: 0.95, rotate: -3 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                src="/public/about2.webp"
                alt="Catering Event"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                  transition: "all 0.4s ease",
                }}
              />
            </motion.div>

            {/* Social Media Links Section */}
            <motion.div
              variants={itemVariants}
              whileHover={cardHover}
              style={{
                backgroundColor: "#ffffff",
                padding: "2rem",
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                border: "1px solid rgba(231, 76, 60, 0.1)",
                transition: "all 0.4s ease",
                textAlign: "center",
              }}
            >
              <motion.h3
                variants={itemVariants}
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "#2c3e50",
                  fontWeight: "600",
                }}
              >
                Follow Our Culinary Journey
              </motion.h3>
              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "1.5rem",
                }}
              >
                Stay connected for delicious updates, chef spotlights, and exclusive offers
              </motion.p>
              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { 
                    icon: faInstagram, 
                    name: "Instagram", 
                    url: "https://instagram.com/bitebook",
                    color: "#E4405F"
                  },
                  { 
                    icon: faFacebook, 
                    name: "Facebook", 
                    url: "https://facebook.com/bitebook",
                    color: "#1877F2"
                  },
                  { 
                    icon: faTwitter, 
                    name: "Twitter", 
                    url: "https://twitter.com/bitebook",
                    color: "#1DA1F2"
                  },
                  { 
                    icon: faLinkedin, 
                    name: "LinkedIn", 
                    url: "https://linkedin.com/company/bitebook",
                    color: "#0A66C2"
                  },
                  { 
                    icon: faPinterest, 
                    name: "Pinterest", 
                    url: "https://pinterest.com/bitebook",
                    color: "#BD081C"
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#333",
                      padding: "1rem",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    }}
                  >
                    <motion.div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "0.5rem",
                        background: `linear-gradient(135deg, ${social.color} 0%, ${social.color}99 100%)`,
                        boxShadow: `0 4px 15px ${social.color}40`,
                      }}
                      whileHover={{
                        boxShadow: `0 6px 20px ${social.color}60`,
                      }}
                    >
                      <FontAwesomeIcon 
                        icon={social.icon} 
                        style={{ 
                          fontSize: "1.5rem", 
                          color: "#ffffff" 
                        }} 
                      />
                    </motion.div>
                    <motion.span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        color: "#2c3e50",
                      }}
                    >
                      {social.name}
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Additional Social Media Stats */}
              <motion.div
                variants={itemVariants}
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "linear-gradient(135deg, #fff5f5 0%, #ffecec 100%)",
                  borderRadius: "10px",
                  border: "1px solid rgba(231, 76, 60, 0.1)",
                }}
              >
                <motion.p
                  style={{
                    fontSize: "0.9rem",
                    color: "#e74c3c",
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  🎉 Join 10K+ food lovers in our community!
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Journey Timeline - New section for more content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          padding: "6rem 1rem",
          position: "relative",
        }}
      >
        <motion.div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
          variants={itemVariants}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "2.8rem",
              marginBottom: "3rem",
              color: "#2c3e50",
              fontWeight: "600",
            }}
          >
            Our Journey
          </motion.h2>
          <motion.div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3rem",
            }}
            variants={containerVariants}
          >
            {/* Timeline line */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                width: "4px",
                height: "100%",
                background: "linear-gradient(to bottom, #e74c3c, #c0392b)",
                transform: "translateX(-50%)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {[
              { year: "2023", title: "Launch", desc: "BiteBook founded with a vision to simplify catering bookings for all." },
              { year: "2024", title: "Growth", desc: "Expanded to 50+ chefs and catered 300+ events across major cities." },
              { year: "2025", title: "Innovation", desc: "Introduced AI-powered menu recommendations and sustainable sourcing." },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                variants={timelineItemVariants}
                style={{
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1fr auto 1fr" : "1fr auto 1fr",
                  gap: "2rem",
                  width: "100%",
                  alignItems: "center",
                  padding: index === 1 ? "3rem 0" : "0",
                }}
                custom={index}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div
                  style={{
                    textAlign: index % 2 === 0 ? "right" : "left",
                    padding: "1rem",
                  }}
                >
                  <motion.h3 style={{ color: "#e74c3c", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                    {milestone.title}
                  </motion.h3>
                  <motion.p style={{ color: "#666", fontSize: "1rem" }}>{milestone.desc}</motion.p>
                </motion.div>
                <motion.div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e74c3c",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    boxShadow: "0 4px 12px rgba(231, 76, 60, 0.3)",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {milestone.year}
                </motion.div>
                <div /> {/* Spacer */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us - Enhanced values with icons */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          padding: "6rem 1rem",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "2.8rem",
              marginBottom: "1rem",
              color: "#2c3e50",
              fontWeight: "600",
            }}
          >
            Why Choose BiteBook?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "4rem",
              color: "#666",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Discover what sets us apart in the world of catering. Our platform isn't just about food—it's about creating memorable experiences with every bite.
          </motion.p>
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              { icon: "🍽️", title: "Quality Ingredients", desc: "Sourced from top local providers for fresh, flavorful results. Every dish is crafted with premium, seasonal ingredients." },
              { icon: "⚡", title: "Seamless Convenience", desc: "Book in minutes with real-time availability, easy customization, and 24/7 support. No more endless calls or emails." },
              { icon: "🌿", title: "Sustainable Practices", desc: "Eco-friendly packaging, carbon-neutral deliveries, and partnerships with green farms for a greener tomorrow." },
              { icon: "⭐", title: "Personalized Service", desc: "Tailored menus based on your preferences, dietary needs, and event theme. Your vision, our expertise." },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardHover}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "2.5rem 2rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  borderLeft: "4px solid #e74c3c",
                  textAlign: "left",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {value.icon}
                </motion.div>
                <motion.h3
                  initial={{ color: "#e74c3c" }}
                  whileHover={{ color: "#c0392b" }}
                  style={{
                    fontSize: "1.6rem",
                    marginBottom: "1rem",
                    color: "#e74c3c",
                    fontWeight: "600",
                  }}
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    color: "#666",
                  }}
                >
                  {value.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          backgroundColor: "#1a1a1a",
          color: "#bdc3c7",
          textAlign: "center",
          padding: "3rem 1rem",
          borderTop: "1px solid #34495e",
        }}
      >
        <motion.p
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
          }}
        >
          &copy; 2025 BiteBook. All rights reserved. |{" "}
          <a href="/privacy" style={{ color: "#bdc3c7", textDecoration: "none" }}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" style={{ color: "#bdc3c7", textDecoration: "none" }}>
            Terms of Service
          </a>
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default AboutUs;