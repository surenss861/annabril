import { PhoneIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function Hero() {
    const handleRateQuoteClick = () => {
        toast.success('🎉 Rate quote request sent! Anne will contact you within 24 hours.', {
            duration: 4000,
            style: {
                background: '#10B981',
                color: 'white',
                fontWeight: 'bold'
            }
        });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Modern Toronto Home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-transparent to-blue-100/60"></div>
            </div>

            {/* Subtle Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold border border-emerald-200 shadow-lg">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>50+ Premium Lenders • Licensed M08005655</span>
                        </div>

                        {/* Main Headline with Premium Typography */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tight font-display text-shadow-xl">
                                <span className="block" style={{ color: '#2D3748' }}>Toronto's</span>
                                <span className="block" style={{ color: '#8F182C' }}>
                                    #1 Mortgage
                                </span>
                                <span className="block" style={{ color: '#2D3748' }}>Specialist</span>
                            </h1>
                        </div>

                        {/* Compelling Subtitle with Enhanced Typography */}
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-light leading-relaxed text-shadow-lg" style={{ color: '#718096' }}>
                                Get <span className="font-bold" style={{ color: '#2D3748' }}>pre-approved in 24 hours</span> with rates as low as{' '}
                                <span className="inline-flex items-center px-4 py-2 text-white font-black rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow" style={{ backgroundColor: '#8F182C' }}>
                                    4.29%
                                </span>
                            </p>
                            <p className="text-xl leading-relaxed max-w-xl font-medium" style={{ color: '#718096' }}>
                                Professional guidance through every step. <strong style={{ color: '#2D3748' }}>Over 1,000 successful mortgages closed</strong> across the GTA.
                            </p>

                            {/* Urgency Message */}
                            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-bold border border-orange-200 animate-pulse">
                                <span>🔥</span>
                                <span>Only 3 pre-approval spots left this week!</span>
                            </div>
                        </div>

                        {/* Contact Info Pills */}
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                                <span>🏛️</span>
                                <span className="font-semibold">Licensed M08005655</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                                <span>📍</span>
                                <span className="font-semibold">200 Consumers Rd, Toronto</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                                <span>📞</span>
                                <span className="font-semibold">(416) 289-2224</span>
                            </div>
                        </div>

                        {/* Premium CTA Buttons with Magnetic Effects */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="/pre-approval"
                                className="group relative btn-premium inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white rounded-2xl shadow-2xl hover:shadow-3xl magnetic overflow-hidden font-display"
                                onClick={handleRateQuoteClick}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <span>Get Pre-Approved Now</span>
                                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </a>

                            <a
                                href="tel:4162892224"
                                className="group inline-flex items-center justify-center px-10 py-5 text-xl font-black text-slate-700 bg-white/95 backdrop-blur-md border-2 border-slate-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-red-300 magnetic transition-all duration-300 font-display"
                            >
                                <span className="flex items-center gap-3">
                                    <PhoneIcon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                                    <span>Call: (416) 289-2224</span>
                                </span>
                            </a>
                        </div>

                        {/* Social Proof Indicators */}
                        <div className="flex flex-wrap items-center gap-4 pt-6 text-sm">
                            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full border border-green-200">
                                <span>⭐</span>
                                <span className="font-bold">5.0 Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-full border border-blue-200">
                                <span>🏆</span>
                                <span className="font-bold">Top 1% Broker</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-full border border-purple-200">
                                <span>🚀</span>
                                <span className="font-bold">1000+ Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Rate Card */}
                    <div className="relative">
                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 rounded-full opacity-40 blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full opacity-40 blur-xl"></div>

                        <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900">Today's Best Rates</h3>
                                <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                                    LIVE
                                </div>
                            </div>

                            {/* Rate Cards */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-600">1-Year Fixed</p>
                                        <p className="text-xs text-slate-500">APR*</p>
                                    </div>
                                    <div className="text-3xl font-black text-blue-600">5.09%</div>
                                </div>

                                <div className="relative flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-2 border-red-200 hover:border-red-300 transition-colors">
                                    <div className="absolute -top-2 left-4">
                                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">MOST POPULAR</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-600">3-Year Fixed</p>
                                        <p className="text-xs text-slate-500">APR*</p>
                                        <p className="text-xs font-bold text-red-600 mt-1">Save $400+/month</p>
                                    </div>
                                    <div className="text-4xl font-black text-red-600">4.29%</div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-600">5-Year Fixed</p>
                                        <p className="text-xs text-slate-500">APR*</p>
                                    </div>
                                    <div className="text-3xl font-black text-purple-600">4.39%</div>
                                </div>
                            </div>

                            {/* Premium CTA Button */}
                            <button
                                onClick={handleRateQuoteClick}
                                className="group relative w-full py-5 btn-premium text-white font-black text-lg rounded-2xl shadow-2xl hover:shadow-3xl magnetic font-display overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <span>🚀 Get My Rate Quote - FREE</span>
                                </span>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </button>

                            <p className="text-xs text-slate-400 text-center mt-4 italic">
                                *Best rates in Canada. Licensed M08005655
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
