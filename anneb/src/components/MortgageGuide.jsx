import { DocumentArrowDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function MortgageGuide() {
    const handleDownload = () => {
        toast.success('📋 Mortgage guide sent to your email!', {
            duration: 4000,
            style: {
                background: '#3B82F6',
                color: 'white',
                fontWeight: 'bold'
            }
        });
    };

    const guides = [
        {
            title: "First-Time Buyer's Complete Guide",
            description: "Everything you need to know about buying your first home in Toronto",
            pages: "24 pages",
            topics: ["Down payment options", "FHSA & HBP strategies", "Toronto neighborhoods", "Closing costs breakdown"]
        },
        {
            title: "Renewal & Refinancing Handbook",
            description: "Maximize your savings when renewing or refinancing your mortgage",
            pages: "18 pages",
            topics: ["Rate negotiation tactics", "Switching lenders", "Equity access strategies", "Penalty calculations"]
        },
        {
            title: "Self-Employed Mortgage Guide",
            description: "Special programs and documentation for business owners",
            pages: "16 pages",
            topics: ["Bank statement programs", "Alternative documentation", "Income verification", "Tax strategies"]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-200">
                        <DocumentArrowDownIcon className="w-4 h-4" />
                        <span>FREE RESOURCES</span>
                    </div>
                    <h2 className="text-5xl font-black font-display text-gray-900 mb-6">
                        Free <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mortgage Guides</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Download my comprehensive guides and get insider knowledge to make informed mortgage decisions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {guides.map((guide, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 transition-all duration-500 transform hover:-translate-y-2 magnetic"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <DocumentArrowDownIcon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                                <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                                    {guide.pages}
                                </span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <p className="text-sm font-semibold text-gray-700">What's included:</p>
                                {guide.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="flex items-center gap-2">
                                        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{topic}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={handleDownload}
                                className="w-full btn-premium py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-display"
                            >
                                Download FREE Guide
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-gray-600 mb-4">Need personalized advice?</p>
                    <a href="/book" className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors">
                        <span>Book a free 15-minute consultation</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
