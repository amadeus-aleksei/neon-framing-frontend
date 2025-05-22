import { GiSpiderWeb } from "react-icons/gi"
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import PricingSection from "../components/sections/PricingSection"
import Services from "../components/sections/ServicesSection"
import { FaHandsHelping, FaLaptopCode } from "react-icons/fa"
import { MdAbc } from "react-icons/md"

const Homepage = () => {
  const servicesCards = [
    {
      title: "uh",
      image:<GiSpiderWeb />,
      features:[
        'Stunning, tailored designs',
        'From templates to custom',
        'Engaging user experience',
      ]
    },
    {
      title: "Web Development",
      image: <FaLaptopCode />,
      features: [
        'Robust, secure websites',
        'Simple or multi-user CMS',
        'Fast, reliable performance',
      ],
    },
    {
      title: "SEO Optimization",
      image: <MdAbc />,
      features: [
        'Higher search rankings',
        'Basic to advanced strategies',
        'Drive more traffic',
      ],
    },
    {
      title: "Ongoing Support",
      image: <FaHandsHelping />,
      features: [
        'Hosting and updates',
        'Unlimited edits, 24/7 support',
        'Keep your site running',
      ],
    },
  ]
  
  return (
    <>
      <Hero 
        title="Bring Your Digital Vision to Life"
        description="Craft stunning, user-focused websites that engage, convert, and grow your brand"
        button1="Get Started"
      />
      <Services
        title="What We Offer"
        cards={servicesCards}
      />
      <PricingSection />
      <Contact />

    </>
  )
}
	
export default Homepage