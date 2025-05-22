import React from 'react';
import { GiSpiderWeb } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { MdAbc } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const ServiceCard = ({ title, image, features, flicker = false }) => (
  <div className="services-card">
    {typeof image === 'string' ? (
      <img src={image} alt={`${title} illustration`} className="services-image" />
    ) : (
      <div className="services-image">{image}</div>
    )}
    <h3 className={flicker ? 'flicker' : ''}>{title}</h3>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const ServicesSection = ({ title, cards }) => (
  <section className="services-section">
    <div className="container">
      <h2>{title}</h2>
      <div className="services-list">
        {cards.map((card, index) => (
          <ServiceCard 
            key={index}
            title={card.title}
            image={card.image}
            features={card.features}
            flicker={card.flicker || false}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;