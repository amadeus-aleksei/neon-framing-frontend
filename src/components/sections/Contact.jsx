    function Contact() {
      return (
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="button">Send</button>
          </form>
        </section>
      );
    }

    export default Contact