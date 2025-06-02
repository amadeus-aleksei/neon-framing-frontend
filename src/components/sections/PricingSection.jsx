import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

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

const PricingSection = ({ title, slides }) => {
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

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>{title}</h2>
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
                      flicker={slide.flicker || false}
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