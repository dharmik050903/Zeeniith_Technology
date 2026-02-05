import React from 'react'

const TestimonialsMarquee = () => {
    const testimonials = [
        {
            review: "Working with Zeeniith Technology on the Easy Go Overseas Advisor website was a genuinely smooth and positive experience; the team quickly understood my vision... and delivered a fast, mobile-friendly, and conversion-focused website that I’m truly proud to use for my business.",
            author: 'Alpesh Suthar',
            company: 'Easy Go Overseas Advisor',
        },
        {
            review: "Managing client relationships and internal tasks used to be a headache with disjointed tools. Zeeniith built us a custom ecosystem where everything talks to each other. It’s not just software; it’s peace of mind.",
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
    ]

    return (
        <div className="w-full overflow-hidden bg-background-light dark:bg-background-dark py-4">
            <div className="relative w-full overflow-hidden group flex">
                <div className="flex animate-marquee-slow whitespace-nowrap gap-6 items-stretch shrink-0 min-w-full pr-6">
                    {[...testimonials, ...testimonials].map((client, index) => (
                        <div
                            key={`testimonial-repeater-${index}`}
                            className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] whitespace-normal"
                        >
                            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl h-full">
                                <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold flex-shrink-0">
                                        {client.author.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-base font-bold text-gray-900 dark:text-white truncate">{client.author}</h4>
                                        <p className="text-xs text-primary font-medium truncate">{client.company}</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed line-clamp-4">"{client.review}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="flex animate-marquee-slow whitespace-nowrap gap-6 items-stretch shrink-0 min-w-full pr-6">
                    {[...testimonials, ...testimonials].map((client, index) => (
                        <div
                            key={`testimonial-repeater-2-${index}`}
                            className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] whitespace-normal"
                        >
                            <div className="flex flex-col gap-4 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-xl h-full">
                                <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold flex-shrink-0">
                                        {client.author.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-base font-bold text-gray-900 dark:text-white truncate">{client.author}</h4>
                                        <p className="text-xs text-primary font-medium truncate">{client.company}</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed line-clamp-4">"{client.review}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialsMarquee
