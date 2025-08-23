// // // // import React from 'react';
// // // // import { GiSpiderWeb } from "react-icons/gi";
// // // // import Contact from "../components/sections/Contact";
// // // // import Hero from "../components/sections/Hero";
// // // // import PricingSection from "../components/sections/PricingSection";
// // // // import Services from "../components/sections/ServicesSection";
// // // // import { FaHandsHelping, FaLaptopCode } from "react-icons/fa";
// // // // import { MdAbc } from "react-icons/md";
// // // // import AddOnsSection from "../components/sections/AddOnsSection";
// // // // import AnimationShowcase from "../components/sections/AnimationShowcase";

// // // // const Home = () => {
// // // //   const addOnsData = [
// // // //     {
// // // //       title: "Google Maps API Integration",
// // // //       pricing: { oneTime: "$300", monthly: "$25" },
// // // //       finePrint: "Embed interactive maps for location-based services.",
// // // //       demoRoute: "/services/google-maps"
// // // //     },
// // // //     {
// // // //       title: "Custom Forms",
// // // //       pricing: { oneTime: "$400/form", monthly: "$35/form" },
// // // //       finePrint: "Create advanced forms with conditional logic and integrations.",
// // // //       demoRoute: "/services/form-demo"
// // // //     },
// // // //     {
// // // //       title: "Live Chat Support",
// // // //       pricing: { oneTime: "$200", monthly: "$20" },
// // // //       finePrint: "Implement live chat for real-time customer support.",
// // // //     },
// // // //     {
// // // //       title: "Blog System",
// // // //       pricing: { oneTime: "$500", monthly: "$50" },
// // // //       finePrint: "Integrate a blog for content creation. Includes setup and maintenance."
// // // //     },
// // // //     {
// // // //       title: "E-commerce Integration",
// // // //       pricing: { oneTime: "$1500", monthly: "$140" },
// // // //       finePrint: "Add online store functionality with payments and product listings. Custom pricing for complex setups."
// // // //     },
// // // //     {
// // // //       title: "Booking System",
// // // //       pricing: { oneTime: "$400", monthly: "$40" },
// // // //       finePrint: "Integrate a booking system for appointments, including calendar sync and notifications. Monthly fee includes software subscription and support."
// // // //     },
// // // //     {
// // // //       title: "Multilingual Support",
// // // //       pricing: { oneTime: "$300/language", monthly: "$25/language" },
// // // //       finePrint: "Add multiple language options for global reach."
// // // //     },
// // // //     {
// // // //       title: "Event Calendar Integration",
// // // //       pricing: { oneTime: "$300", monthly: "$25" },
// // // //       finePrint: "Add an event calendar to your website, including updates and support."
// // // //     },
// // // //     {
// // // //       title: "Custom API Integrations",
// // // //       pricing: { oneTime: "$500+", monthly: "$50+" },
// // // //       finePrint: "Connect to third-party services or custom applications via APIs."
// // // //     },
// // // //   ];

// // // //   const pricingSlides = [
// // // //     {
// // // //       title: 'One-Time Charge',
// // // //       highlightColor: '#00ff00',
// // // //       cards: [
// // // //         {
// // // //           title: 'Basic',
// // // //           price: '$2500 one-time',
// // // //           features: [
// // // //             { text: '5 pages', included: true },
// // // //             { text: 'Template design', included: true },
// // // //             { text: 'Starter SEO Boost', included: true },
// // // //             { text: 'Easy Content Updates', included: true },
// // // //             { text: 'SSL/TLS Encryption', included: true },
// // // //             { text: 'Google Business Profile and Analytics Setup', included: true },
// // // //             { text: 'Standard Contact Form', included: true },
// // // //             { text: 'Custom Domain Email Setup', included: false },
// // // //             { text: 'Google Business Profile Optimization', included: false },
// // // //             { text: 'Local SEO Optimization', included: false },
// // // //             { text: 'Google Business Profile Management', included: false },
// // // //             { text: 'Custom Website Animations', included: false },
// // // //           ],
// // // //           additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
// // // //         },
// // // //         {
// // // //           title: 'Standard',
// // // //           price: '$4500 one-time',
// // // //           features: [
// // // //             { text: '10 pages', included: true },
// // // //             { text: 'Semi-custom Design', included: true },
// // // //             { text: 'Growth SEO Strategy', included: true },
// // // //             { text: 'Team Content Management', included: true },
// // // //             { text: 'SSL/TLS Encryption', included: true },
// // // //             { text: 'Google Business Profile and Analytics Setup', included: true },
// // // //             { text: 'Standard Contact Form', included: true },
// // // //             { text: 'Custom Domain Email Setup', included: true },
// // // //             { text: 'Google Business Profile Optimization', included: true },
// // // //             { text: 'Local SEO Optimization', included: true },
// // // //             { text: 'Google Business Profile Management', included: false },
// // // //             { text: 'Custom Website Animations', included: false },
// // // //           ],
// // // //           additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
// // // //         },
// // // //         {
// // // //           title: 'Premium',
// // // //           price: '$6500 one-time',
// // // //           features: [
// // // //             { text: '15 pages', included: true },
// // // //             { text: 'Fully Custom Design', included: true },
// // // //             { text: 'Ultimate SEO Tactics', included: true },
// // // //             { text: 'Advanced Content Solutions', included: true },
// // // //             { text: 'SSL/TLS Encryption', included: true },
// // // //             { text: 'Google Business Profile and Analytics Setup', included: true },
// // // //             { text: 'Standard Contact Form', included: true },
// // // //             { text: 'Custom Domain Email Setup', included: true },
// // // //             { text: 'Google Business Profile Optimization', included: true },
// // // //             { text: 'Local SEO Optimization', included: true },
// // // //             { text: 'Google Business Profile Management', included: true },
// // // //             { text: 'Custom Website Animations', included: true },
// // // //           ],
// // // //           additional: 'Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
// // // //         },
// // // //       ],
// // // //     },
// // // //     {
// // // //       title: <span className="purple-glow purple-flicker">Subscription Plans</span>,
// // // //       highlightColor: '#A700FF',
// // // //       flicker: true,
// // // //       cards: [
// // // //         {
// // // //           title: 'Basic',
// // // //           price: '$110/month',
// // // //           features: [
// // // //             { text: '5 pages', included: true },
// // // //             { text: 'Template design', included: true },
// // // //             { text: 'Starter SEO Boost', included: true },
// // // //             { text: 'Easy Content Updates', included: true },
// // // //             { text: 'SSL/TLS Encryption', included: true },
// // // //             { text: 'Google Business Profile and Analytics Setup', included: true },
// // // //             { text: 'Standard Contact Form', included: true },
// // // //             { text: 'Custom Domain Email Setup', included: false },
// // // //             { text: 'Google Business Profile Optimization', included: false },
// // // //             { text: 'Local SEO Optimization', included: false },
// // // //             { text: 'Google Business Profile Management', included: false },
// // // //             { text: 'Custom Website Animations', included: false },
// // // //           ],
// // // //           additional: 'Hosting & Maintenance included during 2-year minimum contract. After 2 years: Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
// // // //         },
// // // //         {
// // // //           title: 'Standard',
// // // //           price: '$195/month',
// // // //           features: [
// // // //             { text: '10 pages', included: true },
// // // //             { text: 'Semi-custom Design', included: true },
// // // //             { text: 'Growth SEO Strategy', included: true },
// // // //             { text: 'Team Content Management', included: true },
// // // //             { text: 'SSL/TLS Encryption', included: true },
// // // //             { text: 'Google Business Profile and Analytics Setup', included: true },
// // // //             { text: 'Standard Contact Form', included: true },
// // // //             { text: 'Custom Domain Email Setup', included: true },
// // // //             { text: 'Google Business Profile Optimization', included: true },
// // // //             { text: 'Local SEO Optimization', included: true },
// // // //             { text: 'Google Business Profile Management', included: false },
// // // //             { text: 'Custom Website Animations', included: false },
// // // //           ],
// // // //           additional: 'Hosting & Maintenance included during 2-year minimum contract. After 2 years: Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
// // // //         },
// // // //         {
// // // //           title: 'Premium',
// // // //           price: '$285/month',
// // // //           features: [
// // // //             { text: '15 pages', included: true },
// // // //             { text: 'Fully Custom Design', included: true },
// // // //             { text: 'Ultimate SEO Tactics', included: true },
// // // //             { text: 'Advanced Content Solutions', included: true },
// // // //             { text: 'SSL/TLS Encryption', included: true },
// // // //             { text: 'Google Business Profile and Analytics Setup', included: true },
// // // //             { text: 'Standard Contact Form', included: true },
// // // //             { text: 'Custom Domain Email Setup', included: true },
// // // //             { text: 'Google Business Profile Optimization', included: true },
// // // //             { text: 'Local SEO Optimization', included: true },
// // // //             { text: 'Google Business Profile Management', included: true },
// // // //             { text: 'Custom Website Animations', included: true },
// // // //           ],
// // // //           additional: 'Hosting & Maintenance included during 2-year minimum contract. After 2 years: Hosting & Maintenance: $25/month, Edits: $50/hour (1-hour minimum). For a detailed add-ons list, visit our services page.',
// // // //         },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <Hero 
// // // //         title={
// // // //           <>
// // // //             Bring Your <span className="flicker">Business</span> Online
// // // //           </>
// // // //         }
// // // //         description="We manage your entire digital presence—website, hosting, analytics, updates, and more—so you can focus on growing your business."
// // // //         button1="Get Started"
// // // //       />
// // // //       <PricingSection
// // // //         title="Our Pricing"
// // // //         slides={pricingSlides}
// // // //       />
// // // //       <AddOnsSection
// // // //         title="Add-Ons"
// // // //         caption="Discover our additional services with detailed fine print."
// // // //         addOnsData={addOnsData}
// // // //       />
// // // //       <Contact />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Home;








// // // // import React from 'react';
// // // // import { FaTools } from 'react-icons/fa'; // An icon representing tools/construction

// // // // const Home = () => {
// // // //   return (
// // // //     <div className="coming-soon-container">
// // // //       <div className="content-wrapper">
// // // //         <FaTools className="icon flicker" />
// // // //         <h1 className="title flicker">Under Construction</h1>
// // // //         <p className="subtitle">
// // // //           This part of the internet has been temporarily closed.
// // // //           <br />
// // // //           Normal services will resume shortly.
// // // //           <br />
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;







// // // // import React, { useState, useEffect } from 'react';
// // // // import { FaTools } from 'react-icons/fa';

// // // // const Home = () => {
// // // //   const [subtitle, setSubtitle] = useState('');
// // // //   const [showCaret, setShowCaret] = useState(true);

// // // //   const fullSubtitle = "On a speck that is speckled and spinning through space, You were given a time, you were given a place. There are planets much bigger, with mountains of blue! There are stars that are older and brighter than you. But this small, wobbly speckle, this one that you're on, Is your Now and your Here 'til your moment is gone. So don't fret that you're small and the big is so vast, Just make your one speckle a wonderful blast!";
// // // //   const titleText = "Under Construction";
// // // //   const typingSpeed = 50; // Milliseconds per character

// // // //   useEffect(() => {
// // // //     // Prevent re-triggering the animation
// // // //     if (subtitle.length === fullSubtitle.length) {
// // // //       setShowCaret(false); // Hide caret when typing is done
// // // //       return;
// // // //     }

// // // //     const timer = setTimeout(() => {
// // // //       setSubtitle(fullSubtitle.slice(0, subtitle.length + 1));
// // // //     }, typingSpeed);

// // // //     // Cleanup function to clear the timer
// // // //     return () => clearTimeout(timer);
// // // //   }, [subtitle, fullSubtitle.length]);

// // // //   return (
// // // //     <div className="coming-soon-container">
// // // //       {/* The ::after pseudo-element on this div will create the scan lines */}
// // // //       <div className="content-wrapper">
// // // //         <FaTools className="icon flicker" />
// // // //         <h1 className="title flicker glitch" data-text={titleText}>
// // // //           {titleText}
// // // //         </h1>
// // // //         <p className="subtitle">
// // // //           {subtitle}
// // // //           {showCaret && <span className="caret"></span>}
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;

// // // import React, { useState, useEffect } from 'react';
// // // import { FaTools } from 'react-icons/fa';

// // // const Home = () => {
// // //   const [intro, setIntro] = useState('');
// // //   const [showPoem, setShowPoem] = useState(false);
// // //   const [showCaret, setShowCaret] = useState(true);

// // //   const titleText = "Under Construction";

// // //   // The poem is now an array for easier formatting
// // //   const introLine = [
// // //     "On a speck that is speckled and spinning through space,",
// // //     "You were given a time, you were given a place.",
// // //     "There are planets much bigger, with mountains of blue!",
// // //     "There are stars that are older and brighter than you.",
// // //     "But this small, wobbly speckle, this one that you're on,",
// // //     "Is your Now and your Here 'til your moment is gone.",
// // //     "So don't fret that you're small and the big is so vast,",
// // //     "Just make your one speckle a wonderful blast!"
// // //   ];

// // //   useEffect(() => {
// // //     // Type out the intro line
// // //     if (intro.length < introLine.length) {
// // //       const timer = setTimeout(() => {
// // //         setIntro(introLine.slice(0, intro.length + 1));
// // //       }, 60); // Typing speed
// // //       return () => clearTimeout(timer);
// // //     } else {
// // //       // When intro is done, hide the caret and show the poem after a delay
// // //       setShowCaret(false);
// // //       const poemTimer = setTimeout(() => {
// // //         setShowPoem(true);
// // //       }, 750); // Delay before poem appears
// // //       return () => clearTimeout(poemTimer);
// // //     }
// // //   }, [intro, introLine.length]);

// // //   return (
// // //     <div className="coming-soon-container">
// // //       <div className="content-wrapper">
// // //         <FaTools className="icon flicker" />
// // //         <h1 className="title flicker glitch" data-text={titleText}>
// // //           {titleText}
// // //         </h1>
// // //         <p className="main-subtitle">
// // //           Our digital architects are hard at work. Please check back soon.
// // //         </p>

// // //         <div className="poem-container">
// // //           <p className="poem-intro">
// // //             {intro}
// // //             {showCaret && <span className="caret"></span>}
// // //           </p>

// // //           {showPoem && (
// // //             <blockquote className="poem-text">
// // //               {poem.map((line, index) => (
// // //                 <span key={index} className="poem-line">{line}</span>
// // //               ))}
// // //             </blockquote>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useState, useEffect } from 'react';
// // import { FaTools } from 'react-icons/fa';

// // const Home = () => {
// //   const [startAnimation, setStartAnimation] = useState(false);

// //   // This hook initiates the animation after a brief, deliberate pause on page load.
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setStartAnimation(true);
// //     }, 750); // A 0.75-second delay for dramatic effect.
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const titleText = "SITE UNDER CONSTRUCTION";
// //   const introLine = "// Recovered data fragment:";

// //   const poem = [
// // `The Brain—is wider than the Sky—
// // For—put them side by side—
// // The one the other will contain
// // With ease—and You—beside—

// // The Brain is deeper than the sea—
// // For—hold them—Blue to Blue—
// // The one the other will absorb—
// // As Sponges—Buckets—do—`
// //   ];

// //   return (
// //     <div className="coming-soon-container">
// //       <div className="content-wrapper">
// //         <FaTools className="icon flicker" />
// //         <h1 className="title flicker glitch" data-text={titleText}>
// //           {titleText}
// //         </h1>
// //         <p className="main-subtitle">
// //           Displaying loading screen poem, static echoes from the silicon mind
// //         </p>

// //         <div className="poem-container">
// //           <p className="poem-intro">{introLine}</p>
          
// //           <blockquote className={`poem-text ${startAnimation ? 'animate' : ''}`}>
// //             {poem.map((line, index) => (
// //               <span
// //                 key={index}
// //                 className="poem-line"
// //                 style={{ animationDelay: `${index * 0.25}s` }} // The cascade delay for each line.
// //               >
// //                 {line}
// //               </span>
// //             ))}
// //           </blockquote>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useState, useEffect } from 'react';
// import { FaCog } from 'react-icons/fa'; // Swapped to a more fitting 'Cog' icon for a system reboot

// const Home = () => {
//   const [startAnimation, setStartAnimation] = useState(false);

//   // This hook initiates the animation after a brief, deliberate pause on page load.
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setStartAnimation(true);
//     }, 1000); // A 1-second delay for dramatic effect.
//     return () => clearTimeout(timer);
//   }, []);

//   const titleText = "SYSTEM UNDER CONSTRUCTION";
//   const introLine = "// Recovered data...";

//   // CRITICAL FIX: The poem is now an array of individual lines.
//   // An empty string creates a blank line for the stanza break.
//   const poem = [
//     "The Brain... is wider than the Sky... ",
//     "For... put them side by side... ",
//     "The one the other will contain",
//     "With ease... and You... beside... ",
//     "", // This empty string renders the stanza break.
//     "The Brain is deeper than the sea... ",
//     "For... hold them... Blue to Blue... ",
//     "The one the other will absorb... ",
//     "As Sponges... Buckets... do... "
//   ];

//   return (
//     <div className="coming-soon-container">
//       <div className="content-wrapper">
//         <FaCog className="icon flicker" />
//         <h1 className="title flicker glitch" data-text={titleText}>
//           {titleText}
//         </h1>
//         <p className="main-subtitle">
//           PLEASE... Stand by for maintenance.
//         </p>

//         <div className="poem-container">
//           <p className="poem-intro">{introLine}</p>
          
//           <blockquote className={`poem-text ${startAnimation ? 'animate' : ''}`}>
//             {poem.map((line, index) => (
//               <span
//                 key={index}
//                 className="poem-line"
//                 // A longer base delay and slower cascade for a more deliberate, readable effect.
//                 style={{ animationDelay: `${1 + index * 0.2}s` }} 
//               >
//                 {/* Use a non-breaking space to ensure empty lines have height */}
//                 {line === "" ? '\u00A0' : line}
//               </span>
//             ))}
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { FaCog } from 'react-icons/fa';

const Home = () => {
  const [displayedPoem, setDisplayedPoem] = useState([]);
  const [typingComplete, setTypingComplete] = useState(false);

  const titleText = "SYSTEM UNDER CONSTRUCTION";
  const introLine = "// Recovered data fragment...";

  // The poem is an array of lines. Empty strings create stanza breaks.
  const poemLines = [
    "The Brain... is wider than the Sky... ",
    "For... put them side by side... ",
    "The one the other will contain",
    "With ease... and You... beside... ",
    "",
    "The Brain is deeper than the sea... ",
    "For... hold them... Blue to Blue... ",
    "The one the other will absorb... ",
    "As Sponges... Buckets... do... "
  ];

  useEffect(() => {
    // --- Configuration ---
    const typingSpeed = 100; // ms per character. SLOW.
    const linePause = 1200; // ms between lines.
    const stanzaPause = 600; // ms for stanza breaks.
    const initialDelay = 1500; // ms before typing begins.

    let lineIndex = 0;
    let charIndex = 0;
    let currentLines = [""]; // Start with the first line empty.

    const type = () => {
      if (lineIndex >= poemLines.length) {
        setTypingComplete(true);
        return;
      }

      const currentLineText = poemLines[lineIndex];

      // Handle empty lines for stanza breaks
      if (currentLineText.length === 0) {
        lineIndex++;
        currentLines.push("");
        setDisplayedPoem([...currentLines]);
        setTimeout(type, stanzaPause);
        return;
      }

      // Type the next character
      if (charIndex < currentLineText.length) {
        currentLines[lineIndex] += currentLineText[charIndex];
        charIndex++;
        setDisplayedPoem([...currentLines]);
        setTimeout(type, typingSpeed);
      } else { // End of a line
        lineIndex++;
        charIndex = 0;
        if (lineIndex < poemLines.length) {
          currentLines.push("");
        }
        setDisplayedPoem([...currentLines]);
        setTimeout(type, linePause);
      }
    };

    const startTimer = setTimeout(type, initialDelay);

    // A robust cleanup is difficult with chained timeouts. This is a simple guard.
    return () => clearTimeout(startTimer);
  }, []); // The empty dependency array ensures this runs only once.

  return (
    <div className="coming-soon-container">
      <div className="content-wrapper">
        <FaCog className="icon flicker" />
        <h1 className="title flicker glitch" data-text={titleText}>
          {titleText}
        </h1>
        <p className="main-subtitle">
          PLEASE... Stand by. Rearchitecture in progress...
        </p>

        <div className="poem-container">
          <p className="poem-intro">{introLine}</p>
          
          <blockquote className="poem-text">
            {displayedPoem.map((line, index) => (
              <span key={index} className="poem-line">
                {line === "" ? '\u00A0' : line}
              </span>
            ))}
            {/* {!typingComplete && <span className="caret"></span>} */}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;