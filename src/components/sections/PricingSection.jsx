import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const PricingCard = ({ title, price, features, additional, highlightColor, flicker = false }) => (
  <div className="pricing-card" style={{ borderTopColor: highlightColor }}>
    <h3 className={flicker ? 'flicker' : ''}>{title}</h3>
    <p>{price}</p>
    <ul>
      {features.map((feature, index) => (
        <li
          key={index}
          className={feature.included ? 'feature-included' : 'feature-excluded'}
        >
          {feature.text}
        </li>
      ))}
    </ul>
    <p>{additional}</p>
    <button className="btn" style={{ backgroundColor: highlightColor, boxShadow: `0 0 10px ${highlightColor}` }}>
      Choose Plan
    </button>
  </div>
);

const PricingSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setShowIndicator(false);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setShowIndicator(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const slides = [
    {
      title: 'One-Time Charge',
      highlightColor: '#00ff00',
      cards: [
        {
          title: 'Basic',
          price: '$2500 one-time',
          features: [
            { text: '5 pages', included: true },
            { text: 'Template design', included: true },
            { text: 'Starter SEO Boost', included: true },
            { text: 'Easy Content Updates', included: true },
            { text: 'SSL/TLS Encryption', included: true },
            { text: 'Google Business Profile and Analytics Setup', included: true },
            { text: 'Standard Contact Form', included: true },
            { text: 'Custom Domain Email Setup', included: false },
            { text: 'Google Business Profile Optimization', included: false },
            { text: 'Local SEO Optimization', included: false },
            { text: 'Google Business Profile Management', included: false },
            { text: 'Custom Website Animations', included: false },
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
        },
        {
          title: 'Standard',
          price: '$4500 one-time',
          features: [
            { text: '10 pages', included: true },
            { text: 'Semi-custom Design', included: true },
            { text: 'Growth SEO Strategy', included: true },
            { text: "Team Content Management", included: true },
            { text: 'SSL/TLS Encryption', included: true },
            { text: 'Google Business Profile and Analytics Setup', included: true },
            { text: 'Standard Contact Form', included: true },
            { text: 'Custom Domain Email Setup', included: true },
            { text: 'Google Business Profile Optimization', included: true },
            { text: 'Local SEO Optimization', included: true },
            { text: 'Google Business Profile Management', included: false },
            { text: 'Custom Website Animations', included: false },
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
        },
        {
          title: 'Premium',
          price: '$6500 one-time',
          features: [
            { text: '15 pages', included: true },
            { text: 'Fully Custom Design', included: true },
            { text: 'Ultimate SEO Tactics', included: true },
            { text: 'Advanced Content Solutions', included: true },
            { text: 'SSL/TLS Encryption', included: true },
            { text: 'Google Business Profile and Analytics Setup', included: true },
            { text: 'Standard Contact Form', included: true },
            { text: 'Custom Domain Email Setup', included: true },
            { text: 'Google Business Profile Optimization', included: true },
            { text: 'Local SEO Optimization', included: true },
            { text: 'Google Business Profile Management', included: true },
            { text: 'Custom Website Animations', included: true },
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
        },
      ],
    },
    {
      title: <span className="purple-glow purple-flicker">Subscription Plans</span>,
      highlightColor: '#A700FF',
      cards: [
        {
          title: 'Basic',
          price: '$110/month',
          features: [
            { text: '5 pages', included: true },
            { text: 'Template design', included: true },
            { text: 'Starter SEO Boost', included: true },
            { text: 'Easy Content Updates', included: true },
            { text: 'SSL/TLS Encryption', included: true },
            { text: 'Google Business Profile and Analytics Setup', included: true },
            { text: 'Standard Contact Form', included: true },
            { text: 'Custom Domain Email Setup', included: false },
            { text: 'Google Business Profile Optimization', included: false },
            { text: 'Local SEO Optimization', included: false },
            { text: 'Google Business Profile Management', included: false },
            { text: 'Custom Website Animations', included: false },
          ],
          additional: 'Hosting & Maintenance included during 2-year minimum contract. After 2 years: Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
        },
        {
          title: 'Standard',
          price: '$195/month',
          features: [
            { text: '10 pages', included: true },
            { text: 'Semi-custom Design', included: true },
            { text: 'Growth SEO Strategy', included: true },
            { text: 'Team Content Management', included: true },
            { text: 'SSL/TLS Encryption', included: true },
            { text: 'Google Business Profile and Analytics Setup', included: true },
            { text: 'Standard Contact Form', included: true },
            { text: 'Custom Domain Email Setup', included: true },
            { text: 'Google Business Profile Optimization', included: true },
            { text: 'Local SEO Optimization', included: true },
            { text: 'Google Business Profile Management', included: false },
            { text: 'Custom Website Animations', included: false },
          ],
          additional: 'Hosting & Maintenance included during 2-year minimum contract. After 2 years: Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
        },
        {
          title: 'Premium',
          price: '$285/month',
          features: [
            { text: '15 pages', included: true },
            { text: 'Fully Custom Design', included: true },
            { text: 'Ultimate SEO Tactics', included: true },
            { text: 'Advanced Content Solutions', included: true },
            { text: 'SSL/TLS Encryption', included: true },
            { text: 'Google Business Profile and Analytics Setup', included: true },
            { text: 'Standard Contact Form', included: true },
            { text: 'Custom Domain Email Setup', included: true },
            { text: 'Google Business Profile Optimization', included: true },
            { text: 'Local SEO Optimization', included: true },
            { text: 'Google Business Profile Management', included: true },
            { text: 'Custom Website Animations', included: true },
          ],
          additional: 'Hosting & Maintenance included during 2-year minimum contract. After 2 years: Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
        },
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Our Pricing</h2>
        <div className="carousel">
          <div
            className="carousel-slides"
            {...handlers}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                {/* Top Navigation */}
                <div className="carousel-nav">
                  <button onClick={handlePrev} aria-label="Previous slide">
                    ←
                  </button>
                  <div className="carousel-dots">
                    {slides.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`dot ${dotIndex === activeSlide ? 'active' : ''}`}
                        onClick={() => setActiveSlide(dotIndex)}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                  <button onClick={handleNext} aria-label="Next slide">
                    →
                  </button>
                </div>

                {/* Slide Title */}
                <h3 className="flicker">{slide.title}</h3>

                {/* Pricing Cards */}
                <div className="pricing-list">
                  {slide.cards.map((card, cardIndex) => (
                    <PricingCard
                      key={cardIndex}
                      title={card.title}
                      price={card.price}
                      features={card.features}
                      additional={card.additional}
                      highlightColor={slide.highlightColor}
                    />
                  ))}
                </div>

                {/* Bottom Navigation */}
                <div className="carousel-nav">
                  <button onClick={handlePrev} aria-label="Previous slide">
                    ←
                  </button>
                  <div className="carousel-dots">
                    {slides.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`dot ${dotIndex === activeSlide ? 'active' : ''}`}
                        onClick={() => setActiveSlide(dotIndex)}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                  <button onClick={handleNext} aria-label="Next slide">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;