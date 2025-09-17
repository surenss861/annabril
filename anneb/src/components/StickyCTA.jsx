export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50 z-50">
            <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm">Anne Brill - Licensed M08005655</p>
                        <p className="text-xs text-gray-600 font-medium">Rates as low as 4.29% • 24hr approval</p>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href="tel:4162892224"
                            className="flex items-center gap-1 px-4 py-2 text-white font-bold rounded-xl shadow-lg text-sm transform hover:scale-105 transition-transform"
                            style={{ backgroundColor: 'var(--primary)' }}
                        >
                            📞 Call
                        </a>
                        <a
                            href="/pre-approval"
                            className="flex items-center gap-1 px-4 py-2 border-2 border-red-600 text-red-600 font-bold rounded-xl text-sm transform hover:scale-105 transition-transform hover:bg-red-50"
                        >
                            🚀 Apply
                        </a>
                    </div>
                </div>

                {/* Progress Bar Effect */}
                <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                </div>
            </div>
        </div>
    );
}
