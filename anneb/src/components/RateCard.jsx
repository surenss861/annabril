import { useState } from 'react';

export default function RateCard({ term, apr, note }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className="rate-card transition-all duration-300 rounded-xl bg-gray-100 p-4 text-center shadow-sm hover:shadow-md cursor-pointer"
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            onFocus={() => setShowDetails(true)}
            onBlur={() => setShowDetails(false)}
            tabIndex={0}
        >
            <h3 className="text-xs font-medium text-gray-500 mb-1">{term}</h3>
            <p className="text-2xl font-bold mb-1" style={{ color: 'var(--primary)' }}>
                {apr}
            </p>
            <p className="text-xs text-gray-500">APR*</p>
            {showDetails && note && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">{note}</p>
                </div>
            )}
        </div>
    );
}
