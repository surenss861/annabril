import { NavLink } from "react-router-dom";

const link =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
const active = "underline";

export default function Nav() {
    return (
        <header className="border-b bg-white shadow-sm" style={{ borderColor: '#E2E8F0' }}>
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src="/images/centum-logo.jpg"
                        alt="CENTUM Financial Group"
                        className="h-12 w-auto"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="size-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg" style={{ display: 'none' }}>
                        <span className="text-white font-black text-lg">C</span>
                    </div>
                    <div className="leading-tight">
                        <p className="font-bold" style={{ color: '#2D3748' }}>Anne Brill</p>
                        <p className="text-xs font-medium" style={{ color: '#718096' }}>M08005655 • CENTUM Financial</p>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-1">
                    <NavLink to="/" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>About</NavLink>
                    <div className="relative group">
                        <button className={`${link} flex items-center gap-1`} style={{ color: '#718096' }}>
                            Calculators
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style={{ borderColor: '#E2E8F0' }}>
                            <NavLink to="/calculators/payment" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors" style={{ color: '#718096' }}>Payment Calculator</NavLink>
                            <NavLink to="/calculators/affordability" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors" style={{ color: '#718096' }}>Affordability Calculator</NavLink>
                            <NavLink to="/calculators/rent-vs-buy" className="block px-4 py-3 text-sm hover:bg-gray-50 transition-colors" style={{ color: '#718096' }}>Rent vs Buy</NavLink>
                        </div>
                    </div>
                    <NavLink to="/blog" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>Blog</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>Contact</NavLink>
                </nav>

                <a href="/pre-approval" className="hidden md:inline-flex px-6 py-2 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200" style={{ backgroundColor: '#8F182C' }}>Get Pre-Approved</a>
            </div>
        </header>
    );
}
