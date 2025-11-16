// Experience Section
const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedExperience, setExpandedExperience] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const experiences = [
        {
            title: "Junior Flutter Developer",
            company: "Current Position",
            period: "June 16, 2025 - Present",
            location: "Makati City",
            status: "Current",
            summary: "Leading ecommerce application development for the dental industry while orchestrating comprehensive digital marketing strategies",
            description: "Currently developing innovative ecommerce platforms for healthcare professionals while working in Makati City. I specialize in Flutter mobile development and React web applications with a focus on user-centered design and performance optimization.",
            highlights: [
                "🏗️ Architected ecommerce application for dentist using Flutter framework",
                "⚛️ Developed responsive Seller Center for ecommerce project using React",
                "📊 Social Media Manager & Marketing specialist driving engagement",
                "📱 Created and managed Meta (Facebook) advertising campaigns",
                "📈 Provided strategic insights and analytics for Facebook page performance",
                "🎯 Analyzed ad performance and optimized campaigns for maximum ROI",
                "🎨 Created compelling social media creatives and brand content",
                "✍️ Developed engaging captions and analyzed ad effectiveness metrics"
            ],
            icon: "📱",
            gradient: "from-blue-500 via-purple-500 to-cyan-500",
            bgGradient: "from-blue-500/10 to-purple-500/10"
        },
        {
            title: "Tertiary IT Instructor",
            company: "STI College Batangas",
            period: "August 2024 - June 15, 2025",
            location: "Batangas City",
            status: "Completed",
            summary: "Empowering the next generation of IT professionals through comprehensive technology education and hands-on learning experiences",
            description: "Teaching Information Technology subjects to 2nd-year and 3rd-year students, focusing on practical skills and industry-relevant knowledge transfer. Developed comprehensive curricula and mentored students in various technology domains.",
            highlights: [
                "💾 Information Management - Database concepts and data modeling",
                "🗄️ Advanced Database System - Practical SQL management and optimization",
                "🌐 Web System Technologies - Modern website development fundamentals",
                "📱 Mobile System Technologies - Android Studio development and deployment",
                "🎨 Human Computer Interaction - UI/UX Design principles and user research"
            ],
            icon: "👨‍🏫",
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            bgGradient: "from-green-500/10 to-emerald-500/10"
        },
        {
            title: "DevOps Intern",
            company: "SD Solution IT Outsourcing Inc.",
            period: "Feb 2024 - May 2024",
            location: "Rosario, Pasig",
            status: "Completed",
            summary: "Contributed to enterprise-level development and quality assurance processes in a fast-paced outsourcing environment",
            description: "Gained valuable experience in enterprise software development lifecycle, quality assurance methodologies, and project management in a professional IT outsourcing environment.",
            highlights: [
                "🚌 Victory Liner Bus Website development contribution and feature implementation",
                "🔍 Quality assurance: comprehensive regression and stress testing",
                "📋 Project management task coordination and team collaboration",
                "📚 Creation of detailed user manuals and technical documentation"
            ],
            icon: "⚙️",
            gradient: "from-orange-500 via-red-500 to-pink-500",
            bgGradient: "from-orange-500/10 to-red-500/10"
        }
    ];

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleExperience = (index) => {
        setExpandedExperience(expandedExperience === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-t from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
                
                {/* Floating experience icons */}
                <div className="absolute top-32 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-25" style={{animationDelay: '3s'}}></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="h-full w-full" style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Enhanced Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                        Work Experience
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        My professional journey across development, education, and digital innovation
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
                    </div>
                    <div className="mt-6 text-gray-500 text-sm">
                        💡 Click any experience to expand details
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Compact Experience Cards */}
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index} 
                                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-500 hover:bg-gray-700/60 relative overflow-hidden group cursor-pointer transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{animationDelay: `${index * 150}ms`}}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => toggleExperience(index)}
                            >
                                {/* Card background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                {/* Compact Header - Always Visible */}
                                <div className="relative z-10 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 flex-1">
                                            {/* Status Badge */}
                                            <div className="flex-shrink-0">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                    exp.status === 'Current' 
                                                        ? 'bg-green-500 text-white animate-pulse' 
                                                        : 'bg-gray-600 text-gray-300'
                                                }`}>
                                                    {exp.status}
                                                </span>
                                            </div>

                                            {/* Icon */}
                                            <div className={`text-3xl transition-all duration-300 flex-shrink-0 ${hoveredCard === index ? 'scale-125 rotate-12' : ''}`}>
                                                {exp.icon}
                                            </div>

                                            {/* Main Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className={`text-xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-1 truncate`}>
                                                    {exp.title}
                                                </h3>
                                                <p className="text-gray-300 font-semibold mb-1">{exp.company}</p>
                                                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                                                    <span className="flex items-center gap-1">
                                                        📅 {exp.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        📍 {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expand/Collapse Button */}
                                        <div className="flex-shrink-0 ml-4">
                                            <div className={`w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                expandedExperience === index ? 'bg-blue-600 hover:bg-blue-700' : ''
                                            }`}>
                                                <svg 
                                                    className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${
                                                        expandedExperience === index ? 'rotate-180 text-white' : ''
                                                    }`} 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Summary - Always Visible */}
                                    <div className="mt-4">
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {exp.summary}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Expandable Details */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    expandedExperience === index 
                                        ? 'max-h-[600px] opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="relative z-10 px-6 pb-6">
                                        {/* Divider */}
                                        <div className={`w-full h-px bg-gradient-to-r ${exp.gradient} mb-6 opacity-30`}></div>
                                        
                                        {/* Full Description */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                📝 Detailed Description
                                            </h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                        
                                        {/* Enhanced Highlights */}
                                        <div className="space-y-3">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                ⭐ Key Achievements & Responsibilities
                                            </h4>
                                            <div className="grid gap-3">
                                                {exp.highlights.map((highlight, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className="flex items-start gap-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-600 hover:bg-gray-800/60 transition-all duration-300 group/item"
                                                    >
                                                        <div className={`w-3 h-3 bg-gradient-to-r ${exp.gradient} rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                                                        <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                {hoveredCard === index && (
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.gradient} opacity-5 pointer-events-none`}></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Compact Career Summary */}
                    <div className={`mt-12 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/40 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '450ms'}}>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-xl">
                                🚀
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Career Progression
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
                            My journey spans from DevOps foundations to full-stack development mastery, with a unique blend of 
                            technical expertise and educational leadership. Currently driving innovation in healthcare ecommerce.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-3">
                                <div className="text-xl mb-1">⚡</div>
                                <div className="text-sm font-semibold text-blue-400">Technical Growth</div>
                                <div className="text-xs text-gray-400">DevOps → Full-Stack → Flutter Specialist</div>
                            </div>
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-3">
                                <div className="text-xl mb-1">🎓</div>
                                <div className="text-sm font-semibold text-green-400">Leadership</div>
                                <div className="text-xs text-gray-400">Teaching → Mentoring → Team Guidance</div>
                            </div>
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-3">
                                <div className="text-xl mb-1">🎯</div>
                                <div className="text-sm font-semibold text-purple-400">Impact</div>
                                <div className="text-xs text-gray-400">Quality → Education → Innovation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};