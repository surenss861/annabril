import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Blog() {
    const blogPosts = [
        {
            title: "CMHC - Monthly Housing Starts - July 2025",
            excerpt: "The July 2025 report shows notable shifts across the country, and we're here to break down what it means for you.",
            date: "September 3, 2025",
            readTime: "5 min read",
            category: "Market Update",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            featured: true
        },
        {
            title: "With Inflation at 1.7%, What This Means for Canadians Considering a Home Purchase or Mortgage Refinance",
            excerpt: "Understanding how current inflation rates impact your mortgage decisions and timing strategies.",
            date: "August 19, 2025",
            readTime: "7 min read",
            category: "Economic Analysis",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Is the Mortgage Stress Test on the Way Out?",
            excerpt: "Recent discussions about potential changes to Canada's mortgage stress test and what it could mean for borrowers.",
            date: "August 7, 2025",
            readTime: "6 min read",
            category: "Policy Update",
            image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Bank of Canada holds policy rate at 2.75%",
            excerpt: "Analysis of the latest Bank of Canada rate decision and implications for mortgage holders.",
            date: "July 30, 2025",
            readTime: "4 min read",
            category: "Rate Update",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Double-Barrel Down Payments: FHSA + New $60k HBP Withdrawal Rules Explained",
            excerpt: "How to combine programs for up to $100k+ in down payment funding for first-time buyers.",
            date: "July 9, 2025",
            readTime: "8 min read",
            category: "First-Time Buyers",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Mortgage Payments Ease, Renewal Stress Grows in Canada",
            excerpt: "What renewal clients need to know about the changing landscape and how to prepare.",
            date: "July 16, 2025",
            readTime: "6 min read",
            category: "Renewals",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const categories = ["All", "Market Update", "Economic Analysis", "Policy Update", "Rate Update", "First-Time Buyers", "Renewals"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Professional Reading"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-blue-50/95"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <div data-aos="fade-up">
                        <h1 className="text-5xl md:text-6xl font-black font-display text-gray-900 mb-6">
                            Mortgage <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Stay informed with the latest market trends, policy updates, and expert mortgage advice from Anne Brill
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all duration-300 shadow-md hover:shadow-lg magnetic"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post, index) => (
                <section key={index} className="max-w-6xl mx-auto px-6 mb-16">
                    <div className="glass-premium rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in">
                        <div className="grid lg:grid-cols-2 gap-0">
                            <div className="relative h-80 lg:h-auto">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        FEATURED
                                    </span>
                                </div>
                            </div>
                            <div className="p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CalendarIcon className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <ClockIcon className="w-4 h-4" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                                <button className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors">
                                    <span>Read Full Article</span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Blog Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.filter(post => !post.featured).map((post, index) => (
                        <article
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-500 transform hover:-translate-y-2 magnetic"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <CalendarIcon className="w-3 h-3" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ClockIcon className="w-3 h-3" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                                <button className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors text-sm">
                                    <span>Read More</span>
                                    <ArrowRightIcon className="w-3 h-3" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
