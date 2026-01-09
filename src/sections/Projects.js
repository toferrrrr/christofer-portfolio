// Projects & Achievements Section
const Projects = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState('all');
    const [hoveredProject, setHoveredProject] = React.useState(null);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const achievements = [
        {
            title: "Dental Ecommerce Platform",
            type: "Current Project",
            year: "2025",
            category: "web",
            description: "Comprehensive ecommerce solution for dental professionals featuring advanced mobile app and sophisticated web-based seller center. Set to be released by February 2026, this full-stack platform combines Flutter mobile development with a React-based seller dashboard for complete business management.",
            tech: ["Flutter", "React", "Ecommerce", "Healthcare"],
            iconImage: "assets/images/dentpal_logo.png",
            liveLink: "https://dentpal-store.web.app",
            linkText: "View Live Site",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-500/10 to-cyan-500/10"
        },
        {
            title: "GetFit: Personal Trainer Fitness App",
            type: "Capstone Project",
            year: "2024",
            category: "mobile",
            description: "AI-powered fitness application with advanced image classification for intelligent gym equipment identification and personalized workout recommendations",
            tech: ["Flutter", "Dart", "AI/ML", "Image Classification"],
            icon: "💪",
            liveLink: "https://apkpure.com/getfit/com.example.getfit",
            linkText: "Download APK",
            gradient: "from-purple-500 via-pink-500 to-red-500",
            bgGradient: "from-purple-500/10 to-pink-500/10"
        },
        {
            title: "Spring Ray Philippines",
            type: "Live Website",
            year: "2025",
            category: "web",
            description: "Professional business website with cutting-edge design, seamless user experience, and optimized performance metrics",
            tech: ["Web Development", "Responsive Design", "UI/UX"],
            iconImage: "assets/images/sprintray.png",
            liveLink: "https://sprintrayph.com",
            linkText: "Visit Website",
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            bgGradient: "from-green-500/10 to-emerald-500/10"
        },
        {
            title: "Rundeer Philippines",
            type: "Live Website",
            year: "2025",
            category: "web",
            description: "Sophisticated business website showcasing professional web development capabilities with enterprise-level features",
            tech: ["Web Development", "Business Solutions", "Frontend"],
            iconImage: "assets/images/rundeer.png",
            liveLink: "https://rundeerph.com",
            linkText: "Visit Website",
            gradient: "from-orange-500 via-yellow-500 to-amber-500",
            bgGradient: "from-orange-500/10 to-yellow-500/10"
        },
        {
            title: "CODEFEST 2023 Mobile App",
            type: "Competition",
            year: "2023",
            category: "mobile",
            description: "Innovative school learning material mobile application developed under extreme time constraints in competitive environment",
            tech: ["Mobile Development", "Android Studio", "Java"],
            icon: "🏆",
            gradient: "from-indigo-500 via-purple-500 to-pink-500",
            bgGradient: "from-indigo-500/10 to-purple-500/10"
        },
        {
            title: "Victory Liner Bus Website",
            type: "Professional Project",
            year: "2024",
            category: "web",
            description: "Enterprise-level contribution to comprehensive bus booking and management system with quality assurance excellence",
            tech: ["Web Development", "Quality Assurance", "DevOps"],
            icon: "🚌",
            gradient: "from-gray-500 via-slate-500 to-zinc-500",
            bgGradient: "from-gray-500/10 to-slate-500/10"
        }
    ];

    const education = {
        degree: "Bachelor of Science in Information Technology",
        school: "STI College Batangas",
        year: "2024",
        location: "Batangas City",
        honors: "Multiple Award Winner",
        gpa: "Dean's List"
    };

    const certifications = [
        { name: "Data Analytics Bootcamp", issuer: "Alexander Freberg", date: "June 30, 2024", icon: "📊", color: "from-blue-400 to-cyan-500" },
        { name: "Business Intelligence with Power BI Desktop", issuer: "Data Sense Analytics", date: "August 5, 2024", icon: "📈", color: "from-yellow-400 to-orange-500" },
        { name: "Google Cybersecurity Training", issuer: "ITx", date: "March 11, 2024", icon: "🔒", color: "from-red-400 to-pink-500" },
        { name: "Microsoft Office Suite Training", issuer: "ITx", date: "February 14, 2024", icon: "📄", color: "from-blue-400 to-indigo-500" },
        { name: "Network Foundation", issuer: "Huawei Talent", date: "June 28, 2022", icon: "🌐", color: "from-green-400 to-emerald-500" },
        { name: "Database Foundation", issuer: "Oracle Academy", date: "June 25, 2022", icon: "🗄️", color: "from-purple-400 to-violet-500" }
    ];

    const filterOptions = [
        { key: 'all', label: 'All Projects', icon: '🎯' },
        { key: 'web', label: 'Web Development', icon: '🌐' },
        { key: 'mobile', label: 'Mobile Apps', icon: '📱' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? achievements 
        : achievements.filter(project => project.category === activeFilter);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-t from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
                
                {/* Floating project icons */}
                <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
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
                        Projects & Achievements
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Award-winning projects and professional achievements that showcase technical excellence
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
                    </div>
                </div>

                {/* Enhanced Filter Navigation */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {filterOptions.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                                activeFilter === filter.key
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:bg-gray-700/70'
                            }`}
                        >
                            <span className="text-lg">{filter.icon}</span>
                            {filter.label}
                        </button>
                    ))}
                </div>
                
                {/* Enhanced Projects Grid */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div 
                                key={index} 
                                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{animationDelay: `${index * 150}ms`}}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                            >
                                {/* Card background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                {/* Project Header */}
                                <div className="relative z-10 mb-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`transition-all duration-300 ${hoveredProject === index ? 'scale-125 rotate-12' : ''}`}>
                                            {project.iconImage ? (
                                                <img 
                                                    src={project.iconImage} 
                                                    alt={project.title}
                                                    className="w-16 h-16 object-contain rounded-lg"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentNode.innerHTML = `<span class="text-5xl">${project.icon || '🎯'}</span>`;
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-5xl">{project.icon}</span>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-2">
                                                <span className="px-2 py-1 bg-gray-700 rounded-lg">{project.type}</span>
                                                <span className="px-2 py-1 bg-gray-700 rounded-lg">{project.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <div className="relative z-10 mb-6">
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>
                                
                                {/* Tech Stack */}
                                <div className="relative z-10 mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full shadow-lg`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Live Link */}
                                {project.liveLink && (
                                    <div className="relative z-10">
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            {project.linkText}
                                        </a>
                                    </div>
                                )}

                                {/* Hover glow effect */}
                                {hoveredProject === index && (
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-5 pointer-events-none`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Enhanced Education & Certifications */}
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
                    {/* Enhanced Education */}
                    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '800ms'}}>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                🎓
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                                Education
                            </h3>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-white mb-3">{education.degree}</h4>
                            <p className="text-blue-400 font-medium text-lg mb-2">{education.school}</p>
                            <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
                                <span>📍 {education.location}</span>
                                <span>🎯 Class of {education.year}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4">
                                    <div className="text-2xl mb-2">🏆</div>
                                    <div className="text-sm font-semibold text-blue-400">{education.honors}</div>
                                    <div className="text-xs text-gray-400">Academic Excellence</div>
                                </div>
                                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4">
                                    <div className="text-2xl mb-2">📚</div>
                                    <div className="text-sm font-semibold text-green-400">{education.gpa}</div>
                                    <div className="text-xs text-gray-400">Academic Standing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Enhanced Certifications */}
                    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '1000ms'}}>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                📜
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                                Certifications
                            </h3>
                        </div>
                        <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 hover:bg-gray-800/60 transition-all duration-300 group">
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {cert.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white text-sm mb-1">{cert.name}</h4>
                                            <p className="text-xs text-gray-400">{cert.issuer}</p>
                                            <p className="text-xs text-gray-500">{cert.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};