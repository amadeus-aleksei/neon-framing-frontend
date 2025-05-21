import React from 'react';
import Contact from "../components/sections/Contact"; // Reusing the existing Contact component

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      pages: '3-5 pages',
      design: 'Template',
      content: 'Basic',
      seo: 'Basic',
      cms: 'Simple',
      contactForm: 'Included',
      fullCost: '$3500 + $25/month maintenance',
      monthly: '$146/month'
    },
    {
      name: 'Standard',
      pages: '6-10 pages',
      design: 'Semi-custom',
      content: 'Dynamic',
      seo: 'Basic',
      cms: 'Simple',
      contactForm: 'Included',
      fullCost: '$4500 + $25/month maintenance',
      monthly: '$187/month'
    },
    {
      name: 'Premium',
      pages: '11-20 pages',
      design: 'Fully-custom',
      content: 'Interactive',
      seo: 'Advanced',
      cms: 'Multi-user',
      contactForm: 'Included',
      fullCost: '$6000 + $25/month maintenance',
      monthly: '$250/month'
    }
  ];

  const upgrades = [
    { name: 'Semi-custom design', cost: '$500' },
    { name: 'Fully-custom design', cost: '$1500' },
    { name: 'Dynamic content display', cost: '$300' },
    { name: 'Interactive content display', cost: '$800' },
    { name: 'Advanced SEO', cost: '$400' },
    { name: 'CMS', cost: '$2000' },
    { name: 'Additional pages (beyond included)', cost: '$100 per page' },
    { name: 'Image gallery/lightbox', cost: '$150' },
    { name: 'Video integration/optimization', cost: '$100-$500' },
    { name: 'Custom forms', cost: '$100-$200' },
    { name: 'Google Maps API link', cost: '$50' },
    { name: 'Blog/news system', cost: '$400' },
    { name: 'Shopify integration', cost: '$500' },
    { name: 'Sitemap', cost: '$100-$500 (depends on size)' },
    { name: 'Wireframes', cost: '$200-$600 (per complexity)' },
    { name: 'Theme variants (e.g., night/day mode)', cost: '$100-$500' },
    { name: 'Custom 404 "page not found"', cost: '$100-$500' },
    { name: 'Site migration', cost: '$500-$2000' },
    { name: 'Membership system', cost: '$500-$1500' },
    { name: 'Booking system', cost: '$400-$800' }
  ];

  return (
    <>
      <section className="hero">
        <h2>Our Pricing Plans</h2>
        <p>Choose the perfect plan for your website needs</p>
      </section>
      <section className="pricing-section">
        <h2>Pricing Plans</h2>
        <div className="pricing-list">
          {plans.map(plan => (
            <div className="pricing-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.pages}</p>
              <p>{plan.design} design</p>
              <p>{plan.content} content display</p>
              <p>{plan.seo} SEO</p>
              <p>{plan.cms} CMS (SSL included)</p>
              <p>Contact form: {plan.contactForm}</p>
              <p>Full Cost: {plan.fullCost}</p>
              <p>Or {plan.monthly}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="upgrades-section">
        <h2>Upgrades and Add-Ons</h2>
        <ul>
          {upgrades.map(upgrade => (
            <li key={upgrade.name}>{upgrade.name}: {upgrade.cost}</li>
          ))}
        </ul>
      </section>
      <div className="notes">
        <p>We do not provide custom branding, logos, icons, or vector graphics. For such services, please consult with a graphic designer.</p>
        <p>We recommend working with a professional content writer or strategist to ensure your website's messaging is clear and effective.</p>
      </div>
      <Contact />
    </>
  );
};

export default Pricing;