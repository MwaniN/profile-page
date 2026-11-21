

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen">
      <div id="contact-section" className="justify-center">
      <span className="text-lg max-w-min bg-blue-500 justify-center"> Contact Me</span>
      <form className="m-auto">

      <label htmlFor="email">Your Email</label>
        <input type="email" id="email" className="block my-3 w-full text-black" placeholder="example@email.com" required/>

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" className="block my-3 w-full text-black" placeholder="Subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" className="block my-3 p-2.5 w-full text-black" rows={6} placeholder="Enter Message..." required />
        <button className="block bg-gray-500" type="button">Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact;