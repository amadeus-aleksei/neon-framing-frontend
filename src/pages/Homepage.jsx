import React from 'react';
import { GiSpiderWeb } from "react-icons/gi";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import PricingSection from "../components/sections/PricingSection";
import Services from "../components/sections/ServicesSection";
import { FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { MdAbc } from "react-icons/md";
import AddOnsSection from "../components/sections/AddOnsSection";
import AnimationShowcase from "../components/sections/AnimationShowcase";

const Homepage = () => {
  const addOnsData = [
    {
      title: "Google Maps API Integration",
      pricing: { oneTime: "$300", monthly: "$25" },
      finePrint: "Embed interactive maps for location-based services.",
      demoRoute: "/services/google-maps"
    },
    {
      title: "Live Chat Support",
      pricing: { oneTime: "$200", monthly: "$20" },
      finePrint: "Implement live chat for real-time customer support.",
      demoRoute: "/services/form-demo"
    },
    {
      title: "Custom Forms",
      pricing: { oneTime: "$400/form", monthly: "$35/form" },
      finePrint: "Create advanced forms with conditional logic and integrations."
    },
    {
      title: "Blog System",
      pricing: { oneTime: "$500", monthly: "$50" },
      finePrint: "Integrate a blog for content creation. Includes setup and maintenance."
    },
    {
      title: "E-commerce Integration",
      pricing: { oneTime: "$1500", monthly: "$140" },
      finePrint: "Add online store functionality with payments and product listings. Custom pricing for complex setups."
    },
    {
      title: "Booking System",
      pricing: { oneTime: "$400", monthly: "$40" },
      finePrint: "Integrate a booking system for appointments, including calendar sync and notifications. Monthly fee includes software subscription and support."
    },
    {
      title: "Multilingual Support",
      pricing: { oneTime: "$300/language", monthly: "$25/language" },
      finePrint: "Add multiple language options for global reach."
    },
    {
      title: "Event Calendar Integration",
      pricing: { oneTime: "$300", monthly: "$25" },
      finePrint: "Add an event calendar to your website, including updates and support."
    },
    {
      title: "Custom API Integrations",
      pricing: { oneTime: "$500+", monthly: "$50+" },
      finePrint: "Connect to third-party services or custom applications via APIs."
    },
  ];

  const pricingSlides = [
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
      flicker: true,
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
    <>
      <Hero 
        title={
          <>
            Bring Your <span className="flicker">Business</span> Online
          </>
        }
        description="We manage your entire digital presence—website, hosting, analytics, updates, and more—so you can focus on growing your business."
        button1="Get Started"
      />
      <PricingSection
        title="Our Pricing"
        slides={pricingSlides}
      />
      <AddOnsSection
        title="Add-Ons"
        caption="Discover our additional services with detailed fine print."
        addOnsData={addOnsData}
      />
      <Contact />
    </>
  );
};

export default Homepage;