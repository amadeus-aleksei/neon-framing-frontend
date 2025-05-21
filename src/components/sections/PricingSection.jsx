import React, { useState } from 'react';

const PricingCard = ({ title, price, features, additional, highlightColor }) => (
  <div className="pricing-card" style={{ borderTopColor: highlightColor }}>
    <h3>{title}</h3>
    <p>{price}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
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
            '3–5 pages',
            'Template design',
            'Basic content display',
            'Basic SEO',
            'Simple CMS',
            'SSL security included',
            'Contact form included',
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum)',
        },
        {
          title: 'Standard Plan',
          price: '$4,500 one-time',
          features: [
            '6–10 pages',
            'Semi-custom design',
            'Dynamic content display',
            'Basic SEO',
            'Simple CMS',
            'SSL security included',
            'Contact form included',
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum)',
        },
        {
          title: 'Premium Plan',
          price: '$6,000 one-time',
          features: [
            '11–20 pages',
            'Fully-custom design',
            'Interactive content display',
            'Advanced SEO',
            'Multi-user CMS',
            'SSL security included',
            'Contact form included',
          ],
          additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum)',
        },
      ],
    },
    {
      title: 'Subscription Plans',
      highlightColor: '#A700FF',
      cards: [
        {
          title: 'Basic Plan',
          price: '$146/month',
          features: [
            '3–5 pages',
            'Template design',
            'Basic content display',
            'Basic SEO',
            'Simple CMS',
            'SSL security included',
            'Contact form included',
          ],
          additional: 'Includes hosting, unlimited edits, 24/7 support, lifetime updates, analytics, Google business profile help (6-month minimum)',
        },
        {
          title: 'Standard Plan',
          price: '$187/month',
          features: [
            '6–10 pages',
            'Semi-custom design',
            'Dynamic content display',
            'Basic SEO',
            'Simple CMS',
            'SSL security included',
            'Contact form included',
          ],
          additional: 'Includes hosting, unlimited edits, 24/7 support, lifetime updates, analytics, Google business profile help (6-month minimum)',
        },
        {
          title: 'Premium Plan',
          price: '$250/month',
          features: [
            '11–20 pages',
            'Fully-custom design',
            'Interactive content display',
            'Advanced SEO',
            'Multi-user CMS',
            'SSL security included',
            'Contact form included',
          ],
          additional: 'Includes hosting, unlimited edits, 24/7 support, lifetime updates, analytics, Google business profile help (6-month minimum)',
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
              &larr;
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
              &rarr;
            </button>
          </div>
        </div>
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          For e-commerce websites, we offer custom lump sum pricing. Please contact us for a quote.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;