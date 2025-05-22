const Hero = ({title, description, button1}) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{button1}</button>
    </section>
  );
}

export default Hero