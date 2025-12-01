import { useState, FormEvent } from 'react'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', company: '', email: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <SEO
        title="Contact Us - Zeeniith | Let's Build Something Amazing"
        description="Have a project in mind? We'd love to hear about it. Contact Zeeniith to discuss your software development needs. Get in touch via email, phone, or our contact form."
        path="/contact"
      />
      <main className="flex-grow">
        <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white md:text-5xl">
                Get in Touch with ZEENIITH
              </h1>
              <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
                We're here to answer your questions and discuss how we can help your business grow.
              </p>
            </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <label className="flex flex-col">
                    <p className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </p>
                    <input
                      className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-4 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                      placeholder="Your full name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <p className="pb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company
                    </p>
                    <input
                      className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-4 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                      placeholder="Your company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </p>
                  <input
                    className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-4 text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                    placeholder="your@email.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <p className="pb-2 text-base font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </p>
                  <textarea
                    className="form-textarea flex w-full min-h-[140px] resize-y overflow-hidden rounded-lg border border-gray-300 bg-white p-4 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-primary"
                    placeholder="Tell us about your project..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                  type="submit"
                >
                  <span className="truncate">Send Message</span>
                </button>
              </form>
            </div>
            <div className="flex flex-col space-y-8 lg:space-y-12">
              <div className="rounded-xl border border-gray-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Find us at our office or drop us a line.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Our Office
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        120 Narayan Empire, A.V. Road, Anand, Gujarat 388120, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Email Us
                      </p>
                      <a
                        className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                        href="mailto:zeeniithinfo@gmail.com"
                      >
                        zeeniithinfo@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Call Us
                      </p>
                      <a
                        className="text-xs text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                        href="tel:+916357120971"
                      >
                        +91 6357120971
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-200/80 dark:border-white/10">
                <iframe
                  allowFullScreen
                  className="dark:invert dark:grayscale w-full h-full"
                  data-location="Narayan Empire, Anand"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5!2d72.9289!3d22.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sNarayan%20Empire%2C%20A.V.%20Road%2C%20Anand%2C%20Gujarat%20388120%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  title="Zeeniith Location - Narayan Empire, Anand"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Follow our journey
                </h4>
                <div className="mt-4 flex items-center space-x-4">
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-white/10 dark:text-gray-300 dark:hover:bg-primary"
                    href="https://linkedin.com/company/[YOUR_HANDLE]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                    </svg>
                  </a>
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-white/10 dark:text-gray-300 dark:hover:bg-primary"
                    href="https://twitter.com/[YOUR_HANDLE]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-white/10 dark:text-gray-300 dark:hover:bg-primary"
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dribbble"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.39 3.922a.75.75 0 00-1.002.45l-2.268 6.94a.27.27 0 01-.51 0l-1.33-4.136a.272.272 0 01.127-.31L14.39 7.02a.75.75 0 00-.45-1.002l-2.45-.817a.75.75 0 00-.817.45l-1.8 5.546a.271.271 0 01-.508 0L6.46 5.546a.75.75 0 00-1.267.56l2.903 9.014a.271.271 0 00.509 0l1.33-4.135a.27.27 0 01.51 0l2.268 6.94a.271.271 0 00.509 0l3.05-9.42a.75.75 0 00-.56-1.267l-2.617.873z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Contact Us Section */}
        <div className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            Why Contact Us?
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: 'lightbulb',
                title: 'Free Consultation',
                description: 'Get expert advice on your project with a free consultation call. We\'ll help you understand the best approach for your needs.',
              },
              {
                icon: 'speed',
                title: 'Quick Response',
                description: 'We respond to all inquiries within 24 hours. Our team is always ready to discuss your project and answer your questions.',
              },
              {
                icon: 'handshake',
                title: 'Partnership Approach',
                description: 'We believe in building long-term partnerships. Let\'s discuss how we can grow together and achieve your business goals.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] h-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 flex-grow text-justify">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Hours */}
        <div className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-100/50 dark:bg-white/5 rounded-xl mx-2 xs:mx-3 sm:mx-4 md:mx-6 lg:mx-8">
          <h2 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-4 xs:mb-6 sm:mb-8 md:mb-10">
            Office Hours
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
              {[
                { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM IST' },
                { day: 'Saturday', time: '10:00 AM - 4:00 PM IST' },
                { day: 'Sunday', time: 'Closed' },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white dark:bg-[#1C2333] rounded-lg border border-gray-200 dark:border-[#282e39]"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{schedule.day}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 py-12 md:py-20">
          <h2 className="text-center text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                question: 'Where is ZEENIITH located?',
                answer: 'We\'re based in Anand, Gujarat, India. Our address: 120 Narayan Empire, A.V. Road, Anand, Gujarat 388120.',
              },
              {
                question: 'What industries have you worked with?',
                answer: 'We\'ve worked across 50+ industries including startups, healthcare, finance, e-commerce, SaaS, education, real estate, and manufacturing.',
              },
              {
                question: 'How many projects have you completed?',
                answer: 'We\'ve successfully delivered 100+ projects with 98% client satisfaction rate.',
              },
              {
                question: 'Do you sign NDAs?',
                answer: 'Yes, we sign non-disclosure agreements to protect your confidential information.',
              },
              {
                question: 'What\'s your communication process?',
                answer: 'We maintain regular communication through weekly updates, sprint reviews, and dedicated project managers.',
              },
              {
                question: 'Can you work with our timezone?',
                answer: 'Yes, we have team members across multiple timezones and can schedule calls accordingly.',
              },
              {
                question: 'How do I get a proposal?',
                answer: 'Schedule a free consultation with our team. We\'ll discuss your needs and provide a detailed proposal.',
              },
              {
                question: 'Still have questions?',
                answer: 'Contact us directly! We\'re happy to help.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39]"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="px-4 py-12 md:py-20">
          <h2 className="text-center text-2xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white mb-8">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'chat',
                title: 'Live Chat',
                description: 'Chat with us in real-time',
                action: 'Start Chat',
                link: '#',
              },
              {
                icon: 'video_call',
                title: 'Video Call',
                description: 'Schedule a video meeting',
                action: 'Book Meeting',
                link: '#',
              },
              {
                icon: 'forum',
                title: 'Community',
                description: 'Join our developer community',
                action: 'Join Now',
                link: '#',
              },
            ].map((method, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] text-center h-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">{method.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{method.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{method.description}</p>
                <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex-shrink-0">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact

