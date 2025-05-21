import React from 'react';
import { GiSpiderWeb } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { MdAbc } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const ServiceCard = ({ title, image, features }) => (
  <div className="services-card">
    {typeof image === 'string' ? (
      <img src={image} alt={`${title} illustration`} className="services-image" />
    ) : (
      <div className="services-image">{image}</div>
    )}
    <h3>{title}</h3>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const ServicesSection = () => (
  <section className="services-section">
    <div className="container">
      <h2>What We Offer</h2>
      <div className="services-list">
        <ServiceCard
          title="Web Design"
          image={<GiSpiderWeb />}
          features={[
            'Stunning, tailored designs',
            'From templates to custom',
            'Engaging user experience',
          ]}
        />
        <ServiceCard
          title="Web Development"
          image={<FaLaptopCode />}
          features={[
            'Robust, secure websites',
            'Simple or multi-user CMS',
            'Fast, reliable performance',
          ]}
        />
        <ServiceCard
          title="SEO Optimization"
          image={<MdAbc />}
          features={[
            'Higher search rankings',
            'Basic to advanced strategies',
            'Drive more traffic',
          ]}
        />
        <ServiceCard
          title="Ongoing Support"
          image={<FaHandsHelping />}
          features={[
            'Hosting and updates',
            'Unlimited edits, 24/7 support',
            'Keep your site running',
          ]}
        />
      </div>
    </div>
  </section>
);

export default ServicesSection;