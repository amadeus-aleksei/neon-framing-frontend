import React from 'react';

const AnimationShowcase = () => {
  return (
    <section className="animation-showcase">
      <h2>Advanced Animation Features</h2>
      <div className="animation-grid">
        <div className="animation-example">
          <button className="neon-pulse-glow">Pulse Glow</button>
          <p>Neon Pulse Glow</p>
        </div>
        <div className="animation-example">
          <span className="glitch-distortion" data-text="Glitch Text">Glitch Text</span>
          <p>Glitch Distortion Text</p>
        </div>
        <div className="animation-example">
          <div className="holographic-card">
            <img src="/images/sample.jpg" alt="Holographic Card" />
          </div>
          <p>Holographic Card</p>
        </div>
        <div className="animation-example">
          <div className="neon-scanline">Scanline Effect</div>
          <p>Neon Scanline</p>
        </div>
        <div className="animation-example">
          <button className="cyber-ripple">Click Me</button>
          <p>Cyber Ripple Effect</p>
        </div>
        <div className="animation-example">
          <span className="flicker-fade-in">Flicker Text</span>
          <p>Flicker Fade-In</p>
        </div>
        <div className="animation-example">
          <div className="neon-orbit-spinner"></div>
          <p>Neon Orbit Spinner</p>
        </div>
      </div>
    </section>
  );
};

export default AnimationShowcase;