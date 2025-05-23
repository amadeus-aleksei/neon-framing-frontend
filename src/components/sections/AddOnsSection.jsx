import React, { useState } from 'react';

const AddOnItem = ({ title, pricing, finePrint }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const formatPricing = (pricing) => {
    if (!pricing) {
      return 'Contact for pricing';
    }
    if (pricing.oneTime && pricing.monthly) {
      return `One-Time: ${pricing.oneTime} or Monthly: ${pricing.monthly}/month (1-year minimum)`;
    } else if (pricing.oneTime) {
      return `One-Time: ${pricing.oneTime}`;
    } else if (pricing.monthly) {
      return `Monthly: ${pricing.monthly}/month`;
    } else {
      return 'Contact for pricing';
    }
  };

  return (
    <div className="add-on-item">
      <div 
        className="add-on-title-wrapper" 
        onClick={toggleOpen} 
        role="button" 
        tabIndex="0" 
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="add-on-details">
          <p className="add-on-pricing">{formatPricing(pricing)}</p>
          <p className="add-on-fine-print">{finePrint}</p>
        </div>
      )}
    </div>
  );
};

const AddOnsSection = ({ title, caption, addOnsData }) => {
  return (
    <section className="add-ons-section">
      <div className="head">
        <h2 className="title">{title}</h2>
        <p className="caption">{caption}</p>
      </div>
      <div className="add-ons-list">
        {addOnsData.map((addOn, index) => (
          <AddOnItem 
            key={index} 
            title={addOn.title} 
            pricing={addOn.pricing} 
            finePrint={addOn.finePrint} 
          />
        ))}
      </div>
    </section>
  );
};

export default AddOnsSection;