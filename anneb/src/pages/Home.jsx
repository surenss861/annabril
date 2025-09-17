import Hero from "../components/Hero";
import StickyCTA from "../components/StickyCTA";
import FloatingCTA from "../components/FloatingCTA";
import LiveStats from "../components/LiveStats";
import UrgencyBanner from "../components/UrgencyBanner";
import TorontoMarketData from "../components/TorontoMarketData";
import ContactForm from "../components/ContactForm";
import MortgageGuide from "../components/MortgageGuide";
import RateAlert from "../components/RateAlert";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Toaster, toast } from 'react-hot-toast';
import {
    CheckCircleIcon,
    ClockIcon,
    AcademicCapIcon,
    CurrencyDollarIcon,
    HeartIcon,
    ShieldCheckIcon,
    PhoneIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export default function Home() {
    const [statsRef, statsInView] = useInView({
        threshold: 0.3,
        triggerOnce: false,
        rootMargin: '-100px 0px'
    });

    // Force re-render and re-initialization when component mounts
    useEffect(() => {
        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
            // Force recalculation of all elements
            window.dispatchEvent(new Event('resize'));
        }, 200);

        return () => clearTimeout(timer);
    }, []);


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
        <>
            <Toaster position="top-right" />
            <UrgencyBanner />
            <StickyCTA />
            <FloatingCTA />

            {/* Premium Hero Section */}
            <Hero />

            {/* Live Performance Dashboard */}
            <LiveStats />

            {/* Toronto Market Data */}
            <TorontoMarketData />

            {/* PREMIUM About Anne Section with Real Estate Imagery */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/60 to-pink-100/60 rounded-full opacity-40 blur-3xl transform translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/60 to-purple-100/60 rounded-full opacity-40 blur-3xl transform -translate-x-48 translate-y-48"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                        {/* Anne's Photo with Premium Styling */}
                        <div className="relative" data-aos="fade-right">
                            <div className="absolute -inset-6 bg-gradient-to-r from-red-200/40 to-pink-200/40 rounded-3xl opacity-60 blur-2xl"></div>
                            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                                <img
                                    src="/images/anne-brill.jpg"
                                    alt="Anne Brill - Licensed Mortgage Agent"
                                    className="w-full h-96 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl">
                                    <div className="text-center">
                                        <div className="text-xs font-bold">Licensed Agent</div>
                                        <div className="text-lg font-black">M08005655</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content with Premium Typography */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span>⭐ 5.0 Google Reviews • 1,000+ Mortgages Closed</span>
                                </div>

                                <h2 className="text-5xl font-black text-slate-900 leading-tight">
                                    Meet <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Anne Brill</span>
                                </h2>

                                <p className="text-xl text-slate-700 font-light leading-relaxed">
                                    I'm dedicated to guiding you through the mortgage process with ease and ensuring you're fully informed about your options,
                                    whether you're purchasing, renewing or refinancing.
                                </p>

                                <p className="text-lg text-slate-600 leading-relaxed">
                                    I take pride in my ability to communicate complex financial concepts in a way that's easy for everyone to understand.
                                    Purchasing a home can be a stressful experience, which is why I strive to make the process of securing a mortgage as
                                    seamless and stress-free as possible.
                                </p>
                            </div>

                            {/* Premium Contact Cards with Heroicons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="tel:4162892224" className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-right">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <PhoneIcon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-600">Direct Line</p>
                                            <p className="text-xl font-black text-slate-900">(416) 289-2224</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="tel:4165657795" className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-left">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <DevicePhoneMobileIcon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-600">Mobile</p>
                                            <p className="text-xl font-black text-slate-900">(416) 565-7795</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* ANIMATED STATISTICS */}
                            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8" data-aos="zoom-in">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-red-600">
                                        {statsInView && <CountUp end={1000} duration={2.5} />}+
                                    </div>
                                    <p className="text-sm font-bold text-slate-600">Mortgages Closed</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-green-600">
                                        {statsInView && <CountUp end={98} duration={2.5} />}%
                                    </div>
                                    <p className="text-sm font-bold text-slate-600">Approval Rate</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-blue-600">
                                        {statsInView && <CountUp end={24} duration={2.5} />}h
                                    </div>
                                    <p className="text-sm font-bold text-slate-600">Avg Approval Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-green-600 font-bold text-xl">50+</span>
                            </div>
                            <h3 className="font-semibold mb-2">Lender Network</h3>
                            <p className="text-sm text-gray-600">Access to Canada's largest network of mortgage lenders</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-blue-600 font-bold text-xl">24h</span>
                            </div>
                            <h3 className="font-semibold mb-2">Fast Approval</h3>
                            <p className="text-sm text-gray-600">Get pre-approved within 24 hours</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-purple-600 font-bold text-xl">GTA</span>
                            </div>
                            <h3 className="font-semibold mb-2">Local Expert</h3>
                            <p className="text-sm text-gray-600">Toronto and GTA market specialist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECTACULAR Services Overview Section */}
            <section className="mt-16 py-24 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Modern Office Buildings"
                        className="w-full h-full object-cover opacity-5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-blue-50/95"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-200">
                            <span>💼</span>
                            <span>COMPREHENSIVE SERVICES</span>
                        </div>
                        <h2 className="text-5xl font-black font-display text-gray-900 mb-6 text-shadow-lg">
                            Complete <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mortgage Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            From first-time buyers to complex commercial deals, I provide expert guidance for every mortgage need across the GTA
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                IconComponent: CheckCircleIcon,
                                title: "First-Time Buyers",
                                desc: "Special programs, grants, and step-by-step guidance for your first home purchase",
                                highlight: "FHSA + HBP Programs",
                                gradient: "from-green-500 to-emerald-600",
                                bg: "from-green-50 to-emerald-50",
                                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: ClockIcon,
                                title: "Renewals & Switches",
                                desc: "Keep your great rate or find something better. No stress, just results",
                                highlight: "Save $400+/month",
                                gradient: "from-blue-500 to-cyan-600",
                                bg: "from-blue-50 to-cyan-50",
                                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: AcademicCapIcon,
                                title: "Self-Employed",
                                desc: "Flexible documentation and specialized programs for business owners",
                                highlight: "Bank Statement Programs",
                                gradient: "from-purple-500 to-violet-600",
                                bg: "from-purple-50 to-violet-50",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: CurrencyDollarIcon,
                                title: "Investment Properties",
                                desc: "Build your portfolio with competitive investor rates and cash-flow analysis",
                                highlight: "Up to 80% LTV",
                                gradient: "from-yellow-500 to-orange-600",
                                bg: "from-yellow-50 to-orange-50",
                                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: ShieldCheckIcon,
                                title: "Refinancing",
                                desc: "Access your equity for renovations, investments, or debt consolidation",
                                highlight: "Up to 80% of Value",
                                gradient: "from-red-500 to-pink-600",
                                bg: "from-red-50 to-pink-50",
                                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: ClockIcon,
                                title: "Bridge Financing",
                                desc: "Short-term solutions when you need to buy before you sell",
                                highlight: "Quick Approvals",
                                gradient: "from-indigo-500 to-purple-600",
                                bg: "from-indigo-50 to-purple-50",
                                image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: HeartIcon,
                                title: "Reverse Mortgages",
                                desc: "Access your home equity without monthly payments (55+)",
                                highlight: "No Monthly Payments",
                                gradient: "from-pink-500 to-rose-600",
                                bg: "from-pink-50 to-rose-50",
                                image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                IconComponent: CheckCircleIcon,
                                title: "Construction Loans",
                                desc: "Build your dream home with progress-based funding",
                                highlight: "Custom Build Financing",
                                gradient: "from-teal-500 to-cyan-600",
                                bg: "from-teal-50 to-cyan-50",
                                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Background Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <service.IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{service.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                                    <div className="inline-flex items-center px-3 py-2 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                                        ✨ {service.highlight}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="/pre-approval" className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" style={{ backgroundColor: 'var(--primary)' }}>
                            Get Started Today
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="mt-16 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Mortgage Journey Made Simple</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From application to closing, I'll guide you through each step with transparency and expertise
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connection Lines */}
                        <div className="hidden md:block absolute top-16 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-red-200 to-red-300"></div>
                        <div className="hidden md:block absolute top-16 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-red-200 to-red-300"></div>

                        <div className="text-center relative" data-aos="fade-up" data-aos-delay="0">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                                <span className="text-white font-bold text-2xl">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Pre-Approval</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We'll discuss your goals, review your finances, and get you pre-approved within 24 hours.
                                Rate hold included to protect you while you shop.
                            </p>
                        </div>

                        <div className="text-center relative" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                                <span className="text-white font-bold text-2xl">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Shop & Find Your Home</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Armed with your pre-approval, shop with confidence. I'll be available for any questions
                                and help structure competitive offers.
                            </p>
                        </div>

                        <div className="text-center relative" data-aos="fade-up" data-aos-delay="400">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                                <span className="text-white font-bold text-2xl">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Finalize & Close</h3>
                            <p className="text-gray-600 leading-relaxed">
                                I'll handle all the paperwork, coordinate with lawyers, and ensure a smooth closing.
                                You'll get the keys to your new home!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECTACULAR Calculator Section */}
            <section className="mt-16 py-24 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Modern Toronto Cityscape"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-purple-50/90"></div>
                </div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-red-200/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
                    <div data-aos="fade-right">
                        <h2 className="text-5xl font-black text-gray-900 mb-6">
                            How Much Can You <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Afford?</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Try one of my easy to use mortgage calculators to quickly and easily see what you can afford.
                            Run payment scenarios, figure out land transfer costs, closing costs and much more!
                        </p>
                        <a
                            href="/calculators/affordability"
                            className="group inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <span className="flex items-center gap-3">
                                <span>Start Calculating</span>
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <a href="/calculators/payment" className="text-center p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                                <div className="text-2xl mb-2">🏠</div>
                                <p className="text-sm font-medium text-gray-700">Payment Calculator</p>
                            </a>
                            <a href="/calculators/affordability" className="text-center p-4 border border-red-300 bg-red-50 rounded-lg">
                                <div className="text-2xl mb-2">💰</div>
                                <p className="text-sm font-medium text-red-700">Max Mortgage</p>
                            </a>
                            <a href="/calculators/rent-vs-buy" className="text-center p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                                <div className="text-2xl mb-2">📊</div>
                                <p className="text-sm font-medium text-gray-700">Rent vs Buy</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Phone mockup */}
                            <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                                    {/* Phone screen content */}
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="text-center mb-6">
                                            <h3 className="text-lg font-semibold text-gray-900">Maximum Mortgage Calculator</h3>
                                            <p className="text-sm text-gray-600 mt-2">Calculate the maximum mortgage amount you qualify for based on your income. A great tool for buyers.</p>
                                        </div>

                                        <div className="space-y-4 flex-1">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Annual Family Income</label>
                                                <div className="bg-gray-100 rounded p-2 text-sm">$120,000</div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Annual Property Taxes (est.)</label>
                                                <div className="bg-gray-100 rounded p-2 text-sm">$4,200</div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Monthly Heating Costs/Condo Fees (est.)</label>
                                                <div className="bg-gray-100 rounded p-2 text-sm">$350</div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Min. Monthly Payments for Loans/Credit Cards</label>
                                                <div className="bg-gray-100 rounded p-2 text-sm">$400</div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Monthly Recurring Financing Payment</label>
                                                <div className="bg-gray-100 rounded p-2 text-sm">$0</div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Interest Rate</label>
                                                <div className="bg-gray-100 rounded p-2 text-sm">4.39%</div>
                                            </div>
                                        </div>

                                        <button className="w-full py-3 text-white font-semibold rounded-lg mt-4" style={{ backgroundColor: 'var(--primary)' }}>
                                            Calculate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECTACULAR Client Reviews */}
            <section className="mt-16 py-24 relative overflow-hidden">
                {/* Premium Background with Toronto Skyline */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Toronto Skyline"
                        className="w-full h-full object-cover opacity-5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/95 via-orange-50/95 to-red-50/95"></div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-5xl font-black text-gray-900 mb-6">
                            What My <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Real reviews from satisfied clients across the GTA</p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-8 h-8 fill-current animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: `${i * 0.2}s` }}>
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-yellow-200">
                                <span className="text-2xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">5.0</span>
                                <span className="text-gray-600 font-bold ml-2">• Google Reviews</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Eleni Mak Review */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="0">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                                    E
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">Eleni Mak</p>
                                    <p className="text-sm text-gray-500">Local Guide • 22 reviews</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">a month ago</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                I had a great experience working with Anne and her team for my mortgage needs. They were knowledgeable, responsive, and made the entire process feel much less overwhelming. I appreciated their clear communication and willingness to walk me through my options without any pressure. Everything was handled efficiently, and I felt confident that I was in good hands. I'd definitely recommend them to anyone looking for a solid, dependable mortgage broker.
                            </p>
                        </div>

                        {/* John Arruda Review */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                                    J
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">John Arruda</p>
                                    <p className="text-sm text-gray-500">2 reviews</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">a year ago</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Working with Anne and her team was amazing! We attempted to consolidate with several institutions and no luck. We spoke to Anne who promised us she could help provide a solution. I can't tell you how grateful I am to have Anne on my side. She basically saved my small business. Words can't describe how thankful we are for her support. Not only was she knowledgeable and connected in the industry she truly cared. Super blessed to have worked with Anne! Thank you so much for your expertise and all your support!
                            </p>
                        </div>

                        {/* Nathaly Arraiz Matute Review */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                    N
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">Nathaly Arraiz Matute</p>
                                    <p className="text-sm text-gray-500">Local Guide • 20 reviews • 12 photos</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">2 months ago</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                I've had great experience dealing with Anne Brill, she is always available for my questions and will work hard and quick to get what I need! Very pleased with the 2 mortgages +and 1 bridge loan) she's helped me with 👍
                            </p>
                        </div>

                        {/* Sharda B Review */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                    S
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">Sharda B.</p>
                                    <p className="text-sm text-gray-500">2 reviews</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">2 months ago</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                I can't thank Anne Brill enough for everything she and her team did to help me through the mortgage process. She is very knowledgeable and very patient. Getting a mortgage can sometimes be very challenging but because of her expertise and guidance, it was really a great experience. I put everything in her hands and felt relief doing so. She goes above and beyond, so grateful for her work ethic and her voice of confidence. No nonsense just hard work and results. She is fantastic at what she does! I highly recommend Anne. I have actually already recommended her to two other people and will continue to do so to anyone now wants results. Anne I cannot thank you enough you are an amazing broker and an amazing human.
                            </p>
                        </div>

                        {/* Jackson Dinas Review */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                    J
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">Jackson Dinas</p>
                                    <p className="text-sm text-gray-500">1 review</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">3 months ago</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Anne was amazing !!!<br /><br />
                                Just a few things about my dealings with her:<br /><br />
                                • Responsiveness (returning calls quickly)<br />
                                • Transparency (no hidden fees or surprises)<br />
                                • Ability to get the best rates by shopping multiple lenders<br />
                                • Helpfulness during stressful transactions<br />
                                • Educating clients rather than rushing them<br />
                                • Excellent communication<br />
                                • Walks clients through complex situations<br />
                                • Goes above and beyond for credit challenges<br /><br />
                                Definitely recommend Anne to assist you!
                            </p>
                        </div>

                        {/* Marcia Rose Review */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                    M
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">Marcia Rose</p>
                                    <p className="text-sm text-gray-500">3 reviews</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">a year ago</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                I would like to thank Anne Brill from Centum Financial Services, for her incredible dedication and commitment in finding me a way out of my financial situation.<br /><br />
                                I have been dealing with Anne for a number of years, she went over and beyond to get my mortgage renewal approved.<br /><br />
                                I felt supported and comfortable in her expertise and knowledge that she was doing everything possible to ensure my mortgage renewal and my debts were taken care of, to ease the financial burden.<br /><br />
                                Anne was always there to assist with any issues or questions I had, always return my phone call and reply to my emails promptly.<br /><br />
                                I would highly recommend Anne Brill - Centum Financial Services, to anyone that wants help with Finance, Buying a Property or Mortgage Renewal.
                            </p>
                        </div>

                        {/* Ajith J. Beragama Review */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 md:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                                <div className="ml-3">
                                    <p className="font-semibold text-gray-900">Ajith J. Beragama</p>
                                    <p className="text-sm text-gray-500">1 review</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm ml-2">3 weeks ago</span>
                                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">NEW</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                It is a pleasure to work with Anne Brill, the principal Broker of CENTUM for almost a decade by now, as I have seen the manner that she takes care of her clients effectively, and actively involving with all parties, not only with the new lender, to maximize the lasting benefit and protection to her client's mortgage solution. In my very recent experience, Anne stepped forward and fought vigorously with the existing lender for unreasonable charges that were financially burdened the client unexpectedly, which is one of very rare and unique characteristic in her practice to appreciate.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">Ready to join these satisfied clients?</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="tel:4162892224" className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center border-2 border-red-600">
                                📞 Call (416) 289-2224
                            </a>
                            <a href="/pre-approval" className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200" style={{ backgroundColor: 'var(--primary)' }}>
                                Get Pre-Approved Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas Served */}
            <section className="mt-16 py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving the Greater Toronto Area</h2>
                        <p className="text-lg text-gray-600">Local expertise across all GTA communities</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill",
                            "Scarborough", "North York", "Etobicoke", "Oakville", "Burlington", "Milton",
                            "Pickering", "Ajax", "Whitby", "Oshawa", "Newmarket", "Aurora", "King City",
                            "Stouffville", "Georgina", "Bradford", "Caledon", "Halton Hills"
                        ].map((city, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <p className="font-medium text-gray-900">{city}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 text-sm">Don't see your area? I work throughout Ontario - just give me a call!</p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="mt-16 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                        <p className="text-lg text-gray-600">Multiple ways to connect - choose what works best for you</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <a href="tel:4162892224" className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Direct</h3>
                            <p className="text-gray-600 mb-3">(416) 289-2224</p>
                            <p className="text-sm text-gray-500">Available 7 days a week</p>
                        </a>

                        <a href="/pre-approval" className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Online</h3>
                            <p className="text-gray-600 mb-3">Get pre-approved in 24 hours</p>
                            <p className="text-sm text-gray-500">Secure online application</p>
                        </a>

                        <a href="/book" className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Book a Call</h3>
                            <p className="text-gray-600 mb-3">15-minute consultation</p>
                            <p className="text-sm text-gray-500">Free strategy session</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Latest Insights */}
            <section className="mt-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Market Insights</h2>
                    <p className="text-lg text-gray-600">Stay informed with Anne's expert analysis and market updates</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-xs text-blue-600 font-semibold mb-2">MARKET UPDATE</div>
                            <h3 className="font-semibold text-gray-900 mb-2 leading-tight">Bank of Canada holds policy rate at 2.75%</h3>
                            <p className="text-sm text-gray-600 mb-4">Understanding what this means for your mortgage renewal and new purchases.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400">July 30, 2025</span>
                                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Read More →</button>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-xs text-green-600 font-semibold mb-2">FIRST-TIME BUYERS</div>
                            <h3 className="font-semibold text-gray-900 mb-2 leading-tight">Double-Barrel Down Payments: FHSA + $60k HBP</h3>
                            <p className="text-sm text-gray-600 mb-4">How to combine programs for up to $100k+ in down payment funding.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400">July 9, 2025</span>
                                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Read More →</button>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-xs text-orange-600 font-semibold mb-2">RENEWALS</div>
                            <h3 className="font-semibold text-gray-900 mb-2 leading-tight">Mortgage Payments Ease, Renewal Stress Grows</h3>
                            <p className="text-sm text-gray-600 mb-4">What renewal clients need to know about the changing landscape.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400">July 16, 2025</span>
                                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Read More →</button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Rate Alert Signup */}
            <RateAlert />

            {/* Free Mortgage Guides */}
            <MortgageGuide />

            {/* Contact Form */}
            <ContactForm />

        </>
    );
}
