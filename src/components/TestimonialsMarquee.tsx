
interface Testimonial {
    review: string
    author: string
    company: string
    logo?: string
}

const TestimonialsMarquee = () => {
    const testimonials: Testimonial[] = [
        {
            review: "Working with Zeeniith Technology on the Easy Go Overseas Advisor website was a genuinely smooth and positive experience; the team quickly understood my vision... and delivered a fast, mobile-friendly, and conversion-focused website that I'm truly proud to use for my business.",
            author: 'Alpesh Suthar',
            company: 'Easy Go Overseas Advisor',
        },
        {
            review: "Managing client relationships and internal tasks used to be a headache with disjointed tools. Zeeniith built us a custom ecosystem where everything talks to each other. It's not just software; it's peace of mind.",
            author: 'Jay Bhatt',
            company: 'Digital Devas',
        },
        {
            review: "We needed a partner who could handle sensitive data securely while boosting our public visibility. Zeeniith delivered on both fronts. Our SEO rankings jumped significantly, and the internal software they built is rock solid.",
            author: 'Vikram Singh',
            company: 'Raaso',
        },
        {
            review: "We wanted our online store to feel as premium as our products. The team at Zeeniith absolutely nailed the aesthetic and the user experience. Customers constantly compliment the ease of shopping on our site.",
            author: 'Tirth Trivedi',
            company: 'Syla',
        },
        {
            review: "Tracking attendance and student progress on paper was a nightmare. The system Zeeniith designed for us is intuitive and saved us hours of admin work every week.",
            author: 'Rajesh Kumar',
            company: 'Hir Sports',
        },
        {
            review: "Our engagement on social media has gone through the roof since Zeeniith took over. They understand the sports community and create content that really connects with our fans.",
            author: 'Smit Patel',
            company: 'Royals Sports',
        },
        {
            review: "Launching a new brand is scary, but Zeeniith made it seamless. From the stunning website design to the targeted marketing campaigns, they handled everything. We saw traffic and sales from day one.",
            author: 'Isha Parmar',
            company: 'House of Ish (HOI)',
        },
        {
            review: "Zeenitth built a custom AI automation system and integrated ML into our workflow that now handles everything in the background from predicting inventory needs to automating customer communication. Our team saves hours every single day.What impressed me most was that they understood our business before building anything. It didn't feel like a generic solution it felt built for us. Highly recommend Zeeniith Technology to any business ready to work smarter.",
            author: "Shambhu Soni",
            company: "Swastik Furniture"
        },
        {
            review: "Zeeniith and Dharmik in particular really helped me get a fresh look and some new designs around getting my customers past their hesitance to use my platform. They helped me come up with a smoother onboarding process and some prescriptive dashboards that help the users decide where to go next based on their role, instead of leaving them wondering.",
            author: "Brent Whistler",
            company: "BuildrunKit",
            // logo: "/brk-logo-light.webp"
        }
    ]

    const Card = ({ client }: { client: Testimonial }) => (
        <div className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] whitespace-normal">
            <div className="flex flex-col gap-4 p-5 sm:p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
                    {client.logo ? (
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                            <img src={client.logo} alt={client.company} className="w-full h-full object-contain p-1" loading="lazy" />
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold flex-shrink-0">
                            {client.author.charAt(0)}
                        </div>
                    )}
                    <div className="min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">{client.author}</h4>
                        <p className="text-xs text-primary font-medium truncate">{client.company}</p>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed line-clamp-4">"{client.review}"</p>
                </div>
            </div>
        </div>
    )

    return (
        /* Break out of the padded layout container so the marquee spans full viewport width */
        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-4">
            {/* Left fade */}
            <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none" />

            {/* Track */}
            <div className="flex">
                <div className="flex animate-marquee-slow gap-5 sm:gap-6 items-stretch shrink-0 pl-5 sm:pl-6">
                    {[...testimonials, ...testimonials].map((client, index) => (
                        <Card key={`a-${index}`} client={client} />
                    ))}
                </div>
                <div aria-hidden="true" className="flex animate-marquee-slow gap-5 sm:gap-6 items-stretch shrink-0 pl-5 sm:pl-6">
                    {[...testimonials, ...testimonials].map((client, index) => (
                        <Card key={`b-${index}`} client={client} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialsMarquee
