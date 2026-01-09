// Skills Section
const Skills = () => {
    const [activeTab, setActiveTab] = React.useState('programming');
    const [expandedSkill, setExpandedSkill] = React.useState(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [hoveredSkill, setHoveredSkill] = React.useState(null);
    const [skillAnimations, setSkillAnimations] = React.useState({});

    const skillCategories = {
        programming: [
            { 
                name: 'React', 
                icon: '⚛️', 
                color: 'from-cyan-400 to-blue-500',
                description: 'Advanced component architecture & hooks',
                details: 'My current primary framework that I am actively using and enhancing. I leverage React for building dynamic user interfaces with modern hooks, component composition, and state management. Currently developing multiple production applications using React 18 features including Suspense, Concurrent Rendering, and the latest hooks patterns.'
            },
            { 
                name: 'Flutter', 
                icon: '📱', 
                color: 'from-blue-400 to-indigo-500',
                description: 'Cross-platform mobile development',
                details: 'Used for building cross-platform mobile applications with native performance. I create responsive UIs with custom widgets, implement state management using Provider and Bloc patterns, and integrate with REST APIs and Firebase services for comprehensive mobile solutions.'
            },
            { 
                name: 'Android Studio', 
                icon: '🤖', 
                color: 'from-green-400 to-emerald-500',
                description: 'Native Android app development',
                details: 'Utilized for native Android development and Flutter app debugging. I work with Android SDK, implement Material Design principles, handle device-specific features, and optimize app performance using Android Studio\'s profiling tools.'
            },
            { 
                name: 'Java', 
                icon: '☕', 
                color: 'from-orange-400 to-red-500',
                description: 'Object-oriented programming & Spring',
                details: 'Applied in enterprise applications and Android development. I use Java for backend services, implement design patterns, work with Spring Framework for web applications, and create robust, scalable solutions following OOP principles and best practices.'
            },
            { 
                name: 'TypeScript', 
                icon: '🔷', 
                color: 'from-blue-500 to-purple-500',
                description: 'Type-safe JavaScript development',
                details: 'Implemented in React projects for better code quality and maintainability. I use TypeScript for defining interfaces, creating type-safe components, implementing generic functions, and ensuring robust code that scales well in team environments.'
            },
            { 
                name: 'JavaScript', 
                icon: '🚀', 
                color: 'from-yellow-400 to-orange-500',
                description: 'ES6+ & modern frameworks',
                details: 'Foundation language for all my web development projects. I utilize modern ES6+ features like async/await, destructuring, modules, and arrow functions. Applied in React applications, API integrations, and creating interactive user experiences.'
            },
            { 
                name: 'HTML/CSS', 
                icon: '🎨', 
                color: 'from-pink-400 to-red-500',
                description: 'Responsive design & animations',
                details: 'Core technologies for creating semantic, accessible web interfaces. I implement responsive designs using CSS Grid and Flexbox, create smooth animations and transitions, and ensure cross-browser compatibility while maintaining clean, semantic HTML structure.'
            },
            { 
                name: 'Tailwind CSS', 
                icon: '💨', 
                color: 'from-teal-400 to-cyan-500',
                description: 'Utility-first CSS framework',
                details: 'My preferred styling solution for rapid UI development. I use Tailwind for creating consistent design systems, implementing responsive layouts quickly, customizing themes, and maintaining scalable CSS architectures in React applications.'
            }
        ],
        database: [
            { name: 'MSSQL', icon: '🗄️', color: 'from-blue-400 to-blue-600', description: 'Relational database design & optimization' },
            { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-red-500', description: 'Real-time database & authentication' },
            { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-emerald-500', description: 'NoSQL document database' },
            { name: 'SQLite', icon: '📊', color: 'from-gray-400 to-gray-600', description: 'Lightweight embedded database' }
        ],
        marketing: [
            { name: 'Digital Marketing', icon: '📈', color: 'from-purple-400 to-pink-500', description: 'SEO, SEM & social media strategy' },
            { name: 'Content Creation', icon: '✍️', color: 'from-blue-400 to-cyan-500', description: 'Technical writing & documentation' },
            { name: 'Brand Strategy', icon: '🎯', color: 'from-indigo-400 to-purple-500', description: 'Brand positioning & messaging' },
            { name: 'Analytics', icon: '📊', color: 'from-green-400 to-teal-500', description: 'Google Analytics & performance tracking' },
            { name: 'UI/UX Design', icon: '🎨', color: 'from-pink-400 to-red-500', description: 'User experience & interface design' },
            { name: 'Project Management', icon: '📋', color: 'from-yellow-400 to-orange-500', description: 'Agile methodologies & team leadership' }
        ]
    };

    const tabConfig = {
        programming: { 
            title: 'Programming', 
            icon: '💻',
            gradient: 'from-blue-500 via-purple-500 to-cyan-500',
            description: 'Frontend & mobile development mastery'
        },
        database: { 
            title: 'Database', 
            icon: '🗃️',
            gradient: 'from-green-500 via-emerald-500 to-teal-500',
            description: 'Data management & storage expertise'
        },
        marketing: { 
            title: 'Marketing', 
            icon: '📊',
            gradient: 'from-purple-500 via-pink-500 to-red-500',
            description: 'Digital strategy & brand building'
        }
    };

    React.useEffect(() => {
        setIsVisible(true);
        // Initialize skill animations
        const animations = {};
        skillCategories[activeTab].forEach((skill, index) => {
            setTimeout(() => {
                setSkillAnimations(prev => ({
                    ...prev,
                    [skill.name]: true
                }));
            }, index * 150);
        });
    }, [activeTab]);

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-t from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
                
                {/* Floating tech icons */}
                <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-25" style={{animationDelay: '3s'}}></div>
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
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Technical mastery across programming, databases, and digital strategy
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
                    </div>
                </div>

                {/* Enhanced Tab Navigation */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {Object.entries(tabConfig).map(([key, config]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 min-w-[200px] justify-center ${
                                activeTab === key
                                    ? `bg-gradient-to-r ${config.gradient} text-white shadow-2xl shadow-blue-500/25 scale-105`
                                    : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:bg-gray-700/70 hover:border-gray-600'
                            }`}
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{config.icon}</span>
                            <div className="text-left">
                                <div className="font-bold">{config.title}</div>
                                <div className="text-xs opacity-80">{config.description}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Enhanced Skills Grid */}
                <div className={`max-w-7xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:bg-gray-800/40 transition-all duration-300">
                        {/* Section Header */}
                        <div className="text-center mb-8">
                            <h3 className={`text-3xl font-bold bg-gradient-to-r ${tabConfig[activeTab].gradient} bg-clip-text text-transparent mb-3 flex items-center justify-center gap-3`}>
                                <span className="text-3xl">{tabConfig[activeTab].icon}</span>
                                {tabConfig[activeTab].title} Mastery
                            </h3>
                            <p className="text-gray-400 text-lg">{tabConfig[activeTab].description}</p>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {skillCategories[activeTab].map((skill, index) => (
                                <div 
                                    key={skill.name}
                                    className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                                        expandedSkill === skill.name ? 'ring-2 ring-blue-500/50 bg-gray-700/70' : ''
                                    }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                                >
                                    {/* Skill Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`text-3xl transition-all duration-300 ${hoveredSkill === skill.name ? 'scale-125 rotate-12' : ''}`}>
                                                {skill.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl text-white group-hover:text-gray-100 flex items-center gap-2">
                                                    {skill.name}
                                                    {skill.details && (
                                                        <svg 
                                                            className={`w-4 h-4 transition-transform duration-300 text-gray-400 ${
                                                                expandedSkill === skill.name ? 'rotate-180 text-blue-400' : ''
                                                            }`} 
                                                            fill="currentColor" 
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </h4>
                                                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expandable Details */}
                                    {skill.details && (
                                        <div className={`overflow-hidden transition-all duration-500 ${
                                            expandedSkill === skill.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 mt-4">
                                                <h5 className={`font-semibold mb-3 text-lg bg-gradient-to-r ${skill.color || tabConfig[activeTab].gradient} bg-clip-text text-transparent`}>
                                                    How I Master {skill.name}:
                                                </h5>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {skill.details}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Hover glow effect */}
                                    {hoveredSkill === skill.name && (
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color || tabConfig[activeTab].gradient} opacity-10 pointer-events-none`}></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Category Summary */}
                        <div className={`mt-12 bg-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 text-center hover:bg-gray-900/70 transition-all duration-300`}>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tabConfig[activeTab].gradient} flex items-center justify-center text-2xl`}>
                                    {tabConfig[activeTab].icon}
                                </div>
                                <h4 className={`font-bold text-2xl bg-gradient-to-r ${tabConfig[activeTab].gradient} bg-clip-text text-transparent`}>
                                    {activeTab === 'programming' && 'Frontend & Mobile Development Focus'}
                                    {activeTab === 'database' && 'Data Architecture & Performance'}
                                    {activeTab === 'marketing' && 'Digital Strategy & Brand Excellence'}
                                </h4>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                                {activeTab === 'programming' && 'Specializing in React and Flutter ecosystems, I create exceptional user experiences across web and mobile platforms using cutting-edge technologies and best practices.'}
                                {activeTab === 'database' && 'Expert in designing scalable database architectures, optimizing query performance, and implementing robust data management solutions for enterprise applications.'}
                                {activeTab === 'marketing' && 'Combining technical expertise with strategic marketing insights to build compelling digital experiences, optimize user engagement, and drive business growth.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};