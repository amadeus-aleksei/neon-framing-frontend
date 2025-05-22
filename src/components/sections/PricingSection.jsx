import React, { useState } from 'react';

const PricingCard = ({ title, price, features, additional, highlightColor }) => (
  <div className="pricing-card" style={{ borderTopColor: highlightColor }}>
    <h3>{title}</h3>
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

  const slides = [
    {
      title: 'Lump Sum Plans',
      highlightColor: '#00ff00',
      cards: [
        {
          title: 'Basic Plan',
          price: '$3,500 one-time',
          features: [
            { text: '3-5 pages', included: true },
            { text: 'Template design', included: true },
            { text: 'Starter SEO Boost', included: true },
            { text: 'Easy Content Updates', included: true },
            { text: 'SSL/TLS certificates included', included: true },
            { text: 'Contact form included', included: true },
            { text: 'Blog Content System', included: false },
            { text: 'Custom Design Revisions', included: false },
            { text: 'E-Commerce Integration', included: false },
            { text: 'Custom API Integrationa', included: false },
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum)',
        },
        {
          title: 'Standard Plan',
          price: '$5,000 one-time',
          features: [
            { text: '6-10 pages', included: true },
            { text: 'Semi-custom design', included: true },
            { text: 'Growth SEO Strategy', included: true },
            { text: 'Team Content Management', included: true },
            { text: 'SSL/TLS certificates included', included: true },
            { text: 'Contact form included', included: true },
            { text: 'Blog Content System', included: true },
            { text: 'Custom Design Revisions', included: true },
            { text: 'E-Commerce Integration', included: false },
            { text: 'Custom API Integrationa', included: false },
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum)',
        },
        {
          title: 'Premium Plan',
          price: '$7,000 one-time',
          features: [
            { text: '11-20 pages', included: true },
            { text: 'Fully-custom design', included: true },
            { text: 'Ultimate SEO Tactics', included: true },
            { text: 'Advanced Content Solutions', included: true },
            { text: 'SSL/TLS certificates included', included: true },
            { text: 'Contact form included', included: true },
            { text: 'Blog Content System', included: true },
            { text: 'Custom Design Revisions', included: true },
            { text: 'E-Commerce Integration', included: true },
            { text: 'Custom API Integrationa', included: true },
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). E-commerce sites may require custom pricing.',
        },
      ],
    },
    {
      title: 'Subscription Plans',
      highlightColor: '#A700FF',
      cards: [
        {
          title: 'Basic Plan',
          price: '$150–$500/month',
          features: [
            { text: 'Website Design (Template-Based)', included: true },
            { text: 'Starter SEO Boost', included: true },
            { text: 'Easy Content Updates', included: true },
            { text: 'SSL/TLS certificates included', included: true },
            { text: 'Contact form included', included: true },
            { text: 'Blog Content System', included: false },
            { text: 'Custom Design Revisions', included: false },
            { text: 'E-Commerce Integration', included: false },
          ],
          additional: 'Includes hosting, unlimited edits, 24/7 support, lifetime updates, analytics, Google Business Profile help (12-month minimum)',
        },
        {
          title: 'Standard Plan',
          price: '$600–$1,500/month',
          features: [
            { text: 'Website Design (Custom)', included: true },
            { text: 'Growth SEO Strategy', included: true },
            { text: 'Team Content Management', included: true },
            { text: 'SSL/TLS certificates included', included: true },
            { text: 'Contact form included', included: true },
            { text: 'Blog Content System', included: true },
            { text: 'Custom Design Revisions', included: true },
            { text: 'E-Commerce Integration', included: false },
          ],
          additional: 'Includes hosting, unlimited edits, 24/7 support, lifetime updates, analytics, Google Business Profile help (12-month minimum)',
        },
        {
          title: 'Premium Plan',
          price: '$1,800–$5,000/month',
          features: [
            { text: 'Website Design (Advanced)', included: true },
            { text: 'Ultimate SEO Tactics', included: true },
            { text: 'Advanced Content Solutions', included: true },
            { text: 'SSL/TLS certificates included', included: true },
            { text: 'Contact form included', included: true },
            { text: 'Blog Content System', included: true },
            { text: 'Custom Design Revisions', included: true },
            { text: 'E-Commerce Integration', included: true },
          ],
          additional: 'Includes hosting, unlimited edits, 24/7 support, lifetime updates, analytics, Google Business Profile help (12-month minimum). E-commerce sites may require custom pricing.',
        },
      ],
    },
  ];

  const handlePrev = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Our Pricing Plans</h2>
        <div className="carousel">
          <div
            className="carousel-slides"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <h3>{slide.title}</h3>
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
              </div>
            ))}
          </div>
          <div className="carousel-nav">
            <button onClick={handlePrev} aria-label="Previous slide">
              ←
            </button>
            <div className="carousel-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={handleNext} aria-label="Next slide">
              →
            </button>
          </div>
        </div>
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          For e-commerce websites, we offer custom lump sum and subscription pricing. Please contact us for a quote.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;