import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        mortgageType: 'purchase',
        timeline: '1-3months'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        toast.success('🎉 Message sent! Anne will contact you within 24 hours.', {
            duration: 5000,
            style: {
                background: '#22C55E',
                color: 'white',
                fontWeight: 'bold'
            }
        });

        setIsSubmitting(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            mortgageType: 'purchase',
            timeline: '1-3months'
        });
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Modern Office Interior"
                    className="w-full h-full object-cover opacity-5"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/95 to-blue-50/95"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div>
                            <h2 className="text-4xl font-black font-display text-gray-900 mb-4">
                                Let's <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Connect</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Ready to start your mortgage journey? Get in touch and I'll guide you through every step.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            <a href="tel:4162892224" className="group flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 magnetic">
                                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <PhoneIcon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Call Direct</p>
                                    <p className="text-red-600 font-semibold">(416) 289-2224</p>
                                    <p className="text-sm text-gray-500">Available 7 days a week</p>
                                </div>
                            </a>

                            <a href="tel:4165657795" className="group flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 magnetic">
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Mobile</p>
                                    <p className="text-red-600 font-semibold">(416) 565-7795</p>
                                    <p className="text-sm text-gray-500">Text or call anytime</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                    <EnvelopeIcon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Office Address</p>
                                    <p className="text-gray-600">200 Consumers Road, Unit 402</p>
                                    <p className="text-gray-600">Toronto ON M2J 4R4</p>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                            <h3 className="font-bold text-gray-900 mb-3">Office Hours</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Monday - Friday</span>
                                    <span className="font-semibold">8:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="glass-premium rounded-3xl p-8 shadow-2xl" data-aos="fade-left">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                            <p className="text-gray-600">Fill out the form below and I'll get back to you within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                        placeholder="(416) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                    placeholder="john@email.com"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mortgage Type</label>
                                    <select
                                        name="mortgageType"
                                        value={formData.mortgageType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="purchase">Purchase</option>
                                        <option value="renewal">Renewal</option>
                                        <option value="refinance">Refinance</option>
                                        <option value="self-employed">Self-Employed</option>
                                        <option value="investment">Investment Property</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                                    <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="asap">ASAP</option>
                                        <option value="1-3months">1-3 Months</option>
                                        <option value="3-6months">3-6 Months</option>
                                        <option value="6months+">6+ Months</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">How can I help you?</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Tell me about your mortgage needs, questions, or goals..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-premium py-4 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-display"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending Message...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By submitting this form, you agree to receive communications from Anne Brill.
                                Your information is secure and will never be shared.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
