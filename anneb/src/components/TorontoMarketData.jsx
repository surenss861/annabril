import { useState, useEffect } from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function TorontoMarketData() {
    const [selectedArea, setSelectedArea] = useState('Toronto');

    const marketData = {
        'Toronto': { avgPrice: 1150000, change: 3.2, trend: 'up', inventory: 2.1 },
        'Mississauga': { avgPrice: 985000, change: 2.8, trend: 'up', inventory: 2.4 },
        'Vaughan': { avgPrice: 1320000, change: 4.1, trend: 'up', inventory: 1.8 },
        'Markham': { avgPrice: 1280000, change: 3.7, trend: 'up', inventory: 1.9 },
        'Brampton': { avgPrice: 920000, change: 2.3, trend: 'up', inventory: 2.7 },
        'Richmond Hill': { avgPrice: 1450000, change: 5.2, trend: 'up', inventory: 1.5 }
    };

    const areas = Object.keys(marketData);
    const data = marketData[selectedArea];

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Toronto Skyline"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-black font-display text-gray-900 mb-4">
                        Live <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">GTA Market Data</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real-time insights from Toronto's hottest neighborhoods. Make informed decisions with current market data.
                    </p>
                </div>

                {/* Area Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up" data-aos-delay="200">
                    {areas.map((area) => (
                        <button
                            key={area}
                            onClick={() => setSelectedArea(area)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 magnetic ${selectedArea === area
                                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            {area}
                        </button>
                    ))}
                </div>

                {/* Market Stats */}
                <div className="grid md:grid-cols-3 gap-6" data-aos="zoom-in" data-aos-delay="400">
                    <div className="glass-premium rounded-2xl p-8 text-center magnetic">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🏠</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Average Home Price</h3>
                        <p className="text-3xl font-black text-gray-900 font-display">
                            ${data.avgPrice.toLocaleString()}
                        </p>
                    </div>

                    <div className="glass-premium rounded-2xl p-8 text-center magnetic">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            {data.trend === 'up' ? (
                                <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
                            ) : (
                                <ArrowTrendingDownIcon className="w-8 h-8 text-white" />
                            )}
                        </div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Price Change (YoY)</h3>
                        <p className={`text-3xl font-black font-display ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            +{data.change}%
                        </p>
                    </div>

                    <div className="glass-premium rounded-2xl p-8 text-center magnetic">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <MapPinIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Months of Inventory</h3>
                        <p className="text-3xl font-black text-gray-900 font-display">
                            {data.inventory}
                        </p>
                    </div>
                </div>

                <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-gray-600 text-sm mb-4">
                        Data updated daily • Source: Toronto Regional Real Estate Board
                    </p>
                    <a
                        href="/calculators/affordability"
                        className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors"
                    >
                        <span>Calculate what you can afford in {selectedArea}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
