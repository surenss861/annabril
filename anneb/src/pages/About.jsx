import { CheckBadgeIcon, AcademicCapIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function About() {
    const achievements = [
        { year: '2015', title: 'Joined CENTUM Financial', desc: 'Started career with Canada\'s largest mortgage brokerage' },
        { year: '2018', title: 'Top Producer Award', desc: 'Recognized for exceptional client service and results' },
        { year: '2020', title: '500+ Mortgages Milestone', desc: 'Helped over 500 families achieve homeownership' },
        { year: '2023', title: '1000+ Mortgages Closed', desc: 'Reached major milestone serving GTA clients' },
        { year: '2025', title: 'Industry Leader', desc: 'Recognized as Toronto\'s top mortgage specialist' }
    ];

    const certifications = [
        { name: 'Licensed Mortgage Agent', code: 'M08005655', issuer: 'FSRA Ontario' },
        { name: 'CENTUM Financial Services LP', code: 'Brokerage #13054', issuer: 'Licensed Brokerage' },
        { name: 'Mortgage Professional', code: 'CAAMP Member', issuer: 'Canadian Association' },
        { name: 'Continuing Education', code: '40+ Hours Annual', issuer: 'Professional Development' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Professional Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
                    <div data-aos="fade-up">
                        <h1 className="text-5xl md:text-6xl font-black font-display mb-6 text-shadow-xl">
                            About <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Anne Brill</span>
                        </h1>
                        <p className="text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                            Toronto's trusted mortgage specialist with over a decade of experience helping families achieve their homeownership dreams
                        </p>
                    </div>
                </div>
            </section>

            {/* Personal Story */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-200/40 to-pink-200/40 rounded-3xl blur-2xl"></div>
                                <img
                                    src="/images/anne-brill.jpg"
                                    alt="Anne Brill - Licensed Mortgage Agent"
                                    className="relative w-full h-96 rounded-2xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <div>
                                <h2 className="text-4xl font-black font-display text-gray-900 mb-6">
                                    My <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Story</span>
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        I'm dedicated to guiding you through the mortgage process with ease and ensuring you're fully informed about your options,
                                        whether you're purchasing, renewing or refinancing. I take pride in my ability to communicate complex financial concepts
                                        in a way that's easy for everyone to understand.
                                    </p>
                                    <p>
                                        Purchasing a home can be a stressful experience, which is why I strive to make the process of securing a mortgage as
                                        seamless and stress-free as possible. Whether you're a first-time homebuyer or a seasoned homeowner, I'm committed to
                                        finding the mortgage solution that best meets your unique needs.
                                    </p>
                                    <p>
                                        If you need real estate financing in Toronto or the surrounding area, I'd love to work with you!
                                    </p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-black text-red-600 font-display">1000+</div>
                                    <p className="text-sm font-bold text-gray-600">Mortgages Closed</p>
                                </div>
                                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                                    <div className="text-3xl font-black text-green-600 font-display">98%</div>
                                    <p className="text-sm font-bold text-gray-600">Approval Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Timeline */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-black font-display text-gray-900 mb-4">
                            Career <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600">A decade of excellence in mortgage services</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-purple-500 rounded-full"></div>

                        <div className="space-y-12">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                    data-aos-delay={index * 200}
                                >
                                    <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 magnetic">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold">
                                                    {achievement.year.slice(-2)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-500">{achievement.year}</p>
                                                    <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-gray-600">{achievement.desc}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-black font-display text-gray-900 mb-4">
                            Licenses & <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Certifications</span>
                        </h2>
                        <p className="text-xl text-gray-600">Fully licensed and continuously educated for your protection</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 magnetic"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <CheckBadgeIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                                        <p className="text-sm text-gray-500">{cert.issuer}</p>
                                    </div>
                                </div>
                                <p className="text-red-600 font-bold text-lg">{cert.code}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
