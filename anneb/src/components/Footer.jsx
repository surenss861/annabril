import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Anne', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Calculators', href: '/calculators/payment' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    const services = [
        { name: 'First-Time Buyers', href: '/services/first-time-buyers' },
        { name: 'Renewals & Switches', href: '/services/renewals' },
        { name: 'Refinancing', href: '/services/refinancing' },
        { name: 'Self-Employed', href: '/services/self-employed' },
        { name: 'Investment Properties', href: '/services/investment' },
        { name: 'Reverse Mortgages', href: '/services/reverse' }
    ];

    const calculators = [
        { name: 'Payment Calculator', href: '/calculators/payment' },
        { name: 'Affordability Calculator', href: '/calculators/affordability' },
        { name: 'Rent vs Buy', href: '/calculators/rent-vs-buy' }
    ];

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Toronto Skyline"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Anne Brill Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/images/centum-logo.jpg"
                                    alt="CENTUM Financial Group"
                                    className="h-12 w-auto"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">Anne Brill</h3>
                                    <p className="text-slate-300">Licensed Mortgage Agent M08005655</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed max-w-md">
                                Dedicated to guiding you through the mortgage process with ease and ensuring you're fully informed about your options.
                                Over 1,000 successful mortgages closed across the GTA.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a href="tel:4162892224" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                    <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>(416) 289-2224</span>
                                </a>
                                <a href="tel:4165657795" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                    <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>(416) 565-7795 (Mobile)</span>
                                </a>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <MapPinIcon className="w-5 h-5" />
                                    <span>200 Consumers Road, Unit 402<br />Toronto ON M2J 4R4</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-slate-300 hover:text-white transition-colors hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-bold mb-6">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <a
                                            href={service.href}
                                            className="text-slate-300 hover:text-white transition-colors hover:underline"
                                        >
                                            {service.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 pt-8 border-t border-slate-700">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                Get pre-approved in 24 hours with Toronto's most trusted mortgage specialist
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/pre-approval"
                                    className="btn-premium px-8 py-4 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 magnetic"
                                >
                                    Get Pre-Approved Now
                                </a>
                                <a
                                    href="tel:4162892224"
                                    className="px-8 py-4 border-2 border-slate-600 text-white font-bold rounded-xl hover:border-white hover:bg-white hover:text-slate-900 transition-all duration-300 magnetic"
                                >
                                    Call: (416) 289-2224
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700 bg-slate-800/50">
                    <div className="max-w-6xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-sm text-slate-400">
                                © {currentYear} Anne Brill • CENTUM Financial Services LP (ACB) • Brokerage #13054
                            </div>
                            <div className="flex gap-6 text-sm">
                                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                                <a href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Use</a>
                                <a href="/sitemap" className="text-slate-400 hover:text-white transition-colors">Sitemap</a>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                            <p className="text-xs text-slate-500">
                                Each office is independently owned and operated. Rates subject to change without notice.
                                Conditions may apply. Licensed under the Mortgage Brokerages, Lenders and Administrators Act, 2006.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
