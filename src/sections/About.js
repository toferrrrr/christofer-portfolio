// About Section
const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeTab, setActiveTab] = useState('story');
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredStat, setHoveredStat] = useState(null);
    
    const images = [
        'assets/images/picture1.jpg',
        'assets/images/picture2.jpg'
    ];

    const stats = [
        { number: '2+', label: 'Years Experience', icon: '💼', color: 'from-blue-400 to-cyan-400' },
        { number: '5+', label: 'Projects Completed', icon: '🚀', color: 'from-purple-400 to-pink-400' },
        { number: '15+', label: 'Technologies', icon: '⚡', color: 'from-green-400 to-emerald-400' },
        { number: '99%', label: 'Client Satisfaction', icon: '⭐', color: 'from-yellow-400 to-orange-400' }
    ];

    const tabContent = {
        story: {
            title: "My Journey",
            icon: "🌟",
            content: [
                "My curiosity in development, software, and IT started when I was a kid—from learning the basics of opening MS Word to discovering the fascinating world of coding.",
                "After graduating with a Bachelor of Science in Information Technology from STI College Batangas, I became an IT Instructor for one year. This experience helped me develop my interpersonal skills and deepen my understanding of programming—learning to explain technical concepts both in professional terms and in layman's language.",
                "I also gained valuable experience in setting up Meta Ads campaigns and creating conversion pixels for analysis. Currently, I'm working on an ecommerce application using Flutter and React JS. My goal as a developer is not just to become good at coding, but to provide better insights on how IT can enhance websites and digital experiences."
            ]
        },
        passion: {
            title: "What Drives Me",
            icon: "💡",
            content: [
                "What drives me right now is keeping up with technology. The fast-paced evolution of AI has made me realize that I need to continuously improve my skillset—not just the fundamentals.",
                "Currently, I'm in the phase of becoming a marketing-focused developer. I've learned that no matter how well a website exists, if it's not properly marketed, it becomes useless.",
                "This unique combination of development and marketing expertise is what sets me apart from the competition, allowing me to create solutions that are both technically sound and strategically positioned for success."
            ]
        },
        achievements: {
            title: "My Impact",
            icon: "🏆",
            content: [
                "While I have only a few achievements yet, the one I find most fulfilling is becoming an IT Instructor. Being able to help young learners realize they can succeed, providing insights, and explaining complicated concepts in ways students can understand—this helped me develop my ability to communicate and share my thoughts effectively.",
                "My next achievement is applying my skills to both marketing and development. In the current phase of my career, this is my edge among competitors.",
                "I focus on delivering comprehensive solutions that bridge the gap between technical excellence and market effectiveness, ensuring that every project I work on not only functions beautifully but also reaches its intended audience."
            ]
        }
    };
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-t from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
                
                {/* Floating geometric shapes */}
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
                        About Me
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        Front End Developer & IT Instructor crafting exceptional digital experiences
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid xl:grid-cols-2 gap-16 items-start">
                    {/* Enhanced Image Section */}
                    <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="relative">
                            {/* Animated border glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                            
                            <div className="relative w-96 h-[28rem] mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden group">
                                {/* Image container */}
                                <div className="relative w-full h-full">
                                    {images.map((image, index) => (
                                        <img 
                                            key={index}
                                            src={image} 
                                            alt={`Christofer A. Bautista - Professional Photo ${index + 1}`}
                                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                                index === currentImage 
                                                    ? 'opacity-100 scale-100' 
                                                    : 'opacity-0 scale-105'
                                            }`}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                if (index === 0) {
                                                    const placeholder = document.createElement('div');
                                                    placeholder.className = 'absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center';
                                                    placeholder.innerHTML = `
                                                        <div class="text-center p-8">
                                                            <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                            <p class="text-white text-lg font-semibold mb-2">Christofer A. Bautista</p>
                                                            <p class="text-gray-400 text-sm mb-4">Front End Developer & IT Instructor</p>
                                                            <div class="bg-gray-700 rounded-lg p-3">
                                                                <p class="text-gray-300 text-xs">Add professional photos:</p>
                                                                <p class="text-blue-400 text-xs font-mono">picture1.jpg & picture2.jpg</p>
                                                                <p class="text-gray-400 text-xs">to assets/images/</p>
                                                            </div>
                                                        </div>
                                                    `;
                                                    e.target.parentNode.appendChild(placeholder);
                                                }
                                            }}
                                        />
                                    ))}
                                    
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    
                                    {/* Image indicators */}
                                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                                    index === currentImage 
                                                        ? 'bg-white shadow-lg scale-125' 
                                                        : 'bg-white/40 hover:bg-white/70'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    
                                    {/* Enhanced hover controls */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between px-6">
                                        <button 
                                            onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button 
                                            onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {Object.keys(tabContent).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                                        activeTab === tab
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:bg-gray-700/70 hover:border-gray-600'
                                    }`}
                                >
                                    <span className="text-lg">{tabContent[tab].icon}</span>
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8 hover:bg-gray-800/40 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-2xl">{tabContent[activeTab].icon}</span>
                                {tabContent[activeTab].title}
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </h3>
                            <div className="space-y-5">
                                {tabContent[activeTab].content.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-300 text-lg leading-relaxed transition-all duration-500 hover:text-gray-200"
                                        style={{animationDelay: `${index * 200}ms`}}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-center xl:justify-start">
                            <a
                                href="#contact"
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>🤝</span>
                                    Let's Connect & Collaborate
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Enhanced Stats Section */}
                <div className={`mt-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center group hover:bg-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                                onMouseEnter={() => setHoveredStat(index)}
                                onMouseLeave={() => setHoveredStat(null)}
                            >
                                <div className={`text-4xl mb-3 transition-all duration-300 ${hoveredStat === index ? 'scale-125 rotate-12' : 'scale-100'}`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 transition-all duration-300 ${hoveredStat === index ? 'scale-110' : ''}`}>
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                                    {stat.label}
                                </div>
                                {hoveredStat === index && (
                                    <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};