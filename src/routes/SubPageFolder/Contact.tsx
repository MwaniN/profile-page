

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen min-w-screen">
      <div id="contact-section" className="justify-center">
      <text className="text-lg text-white max-w-min bg-blue-500 justify-center"> Contact Me</text>
      <form className="m-auto">

      <label htmlFor="email" className="text-white" >Your Email</label>
        <input type="email" id="email" className="block my-3 w-full" placeholder="example@email.com" required/>

        <label htmlFor="subject" className="text-white" >Subject</label>
        <input type="text" id="subject" className="block my-3 w-full" placeholder="Subject" required />

        <label htmlFor="message" className="text-white" >Message</label>
        <textarea id="message" className="block my-3 p-2.5 w-full" rows={6} placeholder="Enter Message..." required />
        <button className="block text-white bg-gray-500" type="button">Send Message</button>
      </form>
      </div>
    </div>
  )
}

export default Contact;