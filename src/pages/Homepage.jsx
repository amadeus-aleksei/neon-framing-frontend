import { GiSpiderWeb } from "react-icons/gi";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import PricingSection from "../components/sections/PricingSection";
import Services from "../components/sections/ServicesSection";
import { FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { MdAbc } from "react-icons/md";
import AddOnsSection from "../components/sections/AddOnsSection";

const Homepage = () => {
  const servicesCards = [
    {
      title: "Website Design",
      image: <GiSpiderWeb />,
      features: [
        'Stunning, tailored designs',
        'From templates to custom',
        'Engaging User Experience'
      ],
      flicker: false,
    },
    {
      title: "Website Development",
      image: <FaLaptopCode />,
      features: [
        'Robust, secure websites',
        'Simple or multi-user CMS',
        'Fast, reliable performance',
      ],
      flicker: false,
    },
    {
      title: "SEO Optimization",
      image: <MdAbc />,
      features: [
        'Higher search rankings',
        'Basic to advanced strategies',
        'Drive more traffic',
      ],
      flicker: true,
    },
    {
      title: "Ongoing Support",
      image: <FaHandsHelping />,
      features: [
        'Hosting and updates',
        'Unlimited edits, 24/7 support',
        'Keep your site running',
      ],
      flicker: false,
    },
  ];

  const addOnsData = [
    {
      title: "Live Chat Support",
      pricing: { oneTime: "$200", monthly: "$20" },
      finePrint: "Implement live chat for real-time customer support.",
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
      title: "Google Maps API Integration",
      pricing: { oneTime: "$300", monthly: "$25" },
      finePrint: "Embed interactive maps for location-based services."
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
      />{/*
      <Services
        title="What We Offer"
        cards={servicesCards}
      />*/}
      <PricingSection />
      <AddOnsSection
        title="Add-Ons"
        caption="Discover our additional services with detailed fine print. "
        addOnsData={addOnsData}
      />
      <Contact />
    </>
  );
};

export default Homepage;
