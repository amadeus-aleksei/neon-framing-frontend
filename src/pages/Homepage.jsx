import { GiSpiderWeb } from "react-icons/gi";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import PricingSection from "../components/sections/PricingSection";
import Services from "../components/sections/ServicesSection";
import { FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { MdAbc } from "react-icons/md";

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
      <Services
        title="What We Offer"
        cards={servicesCards}
      />
      <PricingSection />
      <Contact />
    </>
  );
};

export default Homepage;