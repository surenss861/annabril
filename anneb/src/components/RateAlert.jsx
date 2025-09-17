import { useState } from 'react';
import { BellAlertIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function RateAlert() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            toast.success('🔔 Rate alerts activated! You\'ll be notified when rates drop.', {
                duration: 4000,
                style: {
                    background: '#8B5CF6',
                    color: 'white',
                    fontWeight: 'bold'
                }
            });
        }
    };

    return (
        <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <div data-aos="zoom-in">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <BellAlertIcon className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-4xl font-black font-display mb-4 text-shadow-xl">
                        Never Miss a Rate Drop
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get instant alerts when mortgage rates drop below your target. Be the first to lock in the best rates.
                    </p>

                    {!isSubscribed ? (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-gray-900 font-medium"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-white text-red-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-white/70 mt-3">
                                Free service • Unsubscribe anytime • No spam guaranteed
                            </p>
                        </form>
                    ) : (
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center justify-center gap-3 bg-green-500/20 backdrop-blur-md px-6 py-4 rounded-xl border border-green-400/30">
                                <CheckCircleIcon className="w-6 h-6 text-green-300" />
                                <span className="font-bold">You're subscribed! Rate alerts activated.</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
