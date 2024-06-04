

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen min-w-screen">

      <text className="text-lg text-white"> Contact Me</text>
      <form>
        <input className="block my-3" placeholder="Your Email Address" />
        <input className="block my-3" placeholder="Subject" />
        <textarea className="block my-3" rows={6} placeholder="Message" />
        <button className="block text-white bg-gray-500" type="button">Send Message</button>
      </form>
    </div>
  )
}

export default Contact;