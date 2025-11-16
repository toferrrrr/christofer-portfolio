// Hero Section
const Hero = () => {
    const [showProjectDropdown, setShowProjectDropdown] = React.useState(false);
    const [currentCodeSnippet, setCurrentCodeSnippet] = React.useState(0);
    const [typedText, setTypedText] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(true);

    const projects = [
        {
            title: "🦷 Dental Ecommerce Platform",
            description: "Full-stack healthcare solution",
            tech: "React • Flutter • Firebase",
            url: "https://dentpal-store.web.app"
        },
        {
            title: "💪 GetFit Mobile App",
            description: "Cross-platform fitness app",
            tech: "Flutter • Dart • API Integration",
            url: "https://apkpure.com/getfit/com.example.getfit"
        },
        {
            title: "🌟 Spring Ray Philippines",
            description: "Corporate website",
            tech: "React • Responsive Design",
            url: "https://sprinrayphilippines.com"
        },
        {
            title: "🦌 Rundeer Philippines",
            description: "Business showcase",
            tech: "HTML • CSS • JavaScript",
            url: "https://rundeerphilipines.com"
        },
        {
            title: "💻 GitHub Portfolio",
            description: "Code repositories",
            tech: "Open Source Projects",
            url: "https://github.com/christoferrrnewtech"
        }
    ];

    const codeSnippets = [
        {
            language: "React",
            code: `const useAwesome = () => {
  const [innovation, setInnovation] = useState(∞);
  
  useEffect(() => {
    createMagic();
  }, []);
  
  return { innovation, creativity: true };
};`
        },
        {
            language: "Flutter",
            code: `class FrontendWizard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('Building Dreams with Code'),
      ),
    );
  }
}`
        },
        {
            language: "TypeScript",
            code: `interface Developer {
  name: 'Christofer';
  skills: ReactSkills & FlutterSkills;
  passion: 'Frontend Magic';
  status: 'Always Learning';
}

const me: Developer = createAwesome();`
        }
    ];

    const techSkills = ['React', 'Flutter', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Java'];
    const roles = ['Frontend Developer', 'Mobile Developer', 'UI/UX Enthusiast', 'Code Artist'];

    // Typing animation effect
    React.useEffect(() => {
        const text = "I craft digital experiences that users love ❤️";
        let index = 0;
        
        const typeText = () => {
            if (index < text.length) {
                setTypedText(text.slice(0, index + 1));
                index++;
                setTimeout(typeText, 80);
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    index = 0;
                    setTypedText('');
                    setIsTyping(true);
                    typeText();
                }, 3000);
            }
        };
        
        typeText();
    }, []);

    // Code snippet rotation
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (showProjectDropdown && !event.target.closest('.project-dropdown')) {
                setShowProjectDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showProjectDropdown]);

    return (
        <section id="home" className={`relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden transition-all duration-500 ${
            showProjectDropdown ? 'min-h-screen pb-96' : 'min-h-screen'
        }`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Code Elements */}
                <div className="absolute top-20 left-10 text-blue-300 opacity-20 animate-bounce">
                    <span className="text-2xl font-mono">{'<>'}</span>
                </div>
                <div className="absolute top-40 right-20 text-green-300 opacity-30 animate-pulse">
                    <span className="text-xl font-mono">console.log('Hello World!');</span>
                </div>
                <div className="absolute bottom-40 left-20 text-purple-300 opacity-25 animate-bounce" style={{animationDelay: '1s'}}>
                    <span className="text-lg font-mono">useState(awesome)</span>
                </div>
                <div className="absolute top-60 left-1/3 text-yellow-300 opacity-20 animate-pulse" style={{animationDelay: '2s'}}>
                    <span className="text-lg font-mono">{'</>'}</span>
                </div>
                
                {/* Geometric Shapes */}
                <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-blue-400 rounded-full animate-spin opacity-30"></div>
                <div className="absolute bottom-1/3 left-16 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg animate-pulse opacity-40"></div>
                <div className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-green-400 transform rotate-45 animate-bounce opacity-25"></div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    
                    {/* Left Side - Text Content */}
                    <div className="text-white space-y-8">
                        {/* Animated Role Badges */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {roles.map((role, index) => (
                                <span 
                                    key={role}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-medium animate-pulse"
                                    style={{animationDelay: `${index * 0.5}s`}}
                                >
                                    {role}
                                </span>
                            ))}
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Hi, I'm
                                </span>
                                <br />
                                <span className="text-white relative">
                                    Christofer
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 animate-pulse"></div>
                                </span>
                            </h1>
                            
                            {/* Typed Animation */}
                            <div className="text-xl md:text-2xl text-gray-300 h-16 flex items-center">
                                <span className="font-mono">
                                    {typedText}
                                    {isTyping && <span className="animate-pulse">|</span>}
                                </span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <div className="grid md:grid-cols-1 gap-3 text-sm">
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-4 h-4 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    San Pascual, Batangas
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-4 h-4 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    (+63) 912-073-2452
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-4 h-4 mr-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    tofer.bautista.06@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Carousel */}
                        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-lg font-semibold mb-4 text-blue-300">⚡ Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {techSkills.map((skill, index) => (
                                    <div 
                                        key={skill}
                                        className="group relative px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600 hover:border-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-105"
                                        style={{animationDelay: `${index * 0.2}s`}}
                                    >
                                        <span className="text-white font-medium">{skill}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <div className="relative project-dropdown">
                                <button
                                    onClick={() => setShowProjectDropdown(!showProjectDropdown)}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                                >
                                    <span className="relative z-10 flex items-center">
                                        🚀 View My Projects
                                        <svg className={`ml-2 w-4 h-4 transition-transform ${showProjectDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </button>

                                {/* Projects Dropdown */}
                                {showProjectDropdown && (
                                    <div className="absolute top-full left-0 mt-2 w-96 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50">
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-blue-300 mb-4 text-center flex items-center justify-center">
                                                🌟 My Live Projects
                                            </h3>
                                            <div className="space-y-3">
                                                {projects.map((project, index) => (
                                                    <a
                                                        key={index}
                                                        href={project.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105 group border border-gray-600 hover:border-blue-400"
                                                        onClick={() => setShowProjectDropdown(false)}
                                                    >
                                                        <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors text-base">
                                                            {project.title}
                                                        </h4>
                                                        <p className="text-gray-300 text-sm mt-1 leading-relaxed">{project.description}</p>
                                                        <div className="flex items-center justify-between mt-2">
                                                            <span className="text-blue-400 text-xs font-mono bg-gray-800 rounded px-2 py-1">
                                                                {project.tech}
                                                            </span>
                                                            <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                            <div className="mt-4 pt-3 border-t border-gray-600 text-center">
                                                <p className="text-gray-400 text-xs">All projects are live and deployed! 🚀</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a
                                href="https://github.com/christoferrrnewtech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                            >
                                💻 GitHub Profile
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                            >
                                📧 Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Interactive Code Display */}
                    <div className="relative">
                        {/* Code Editor Mock */}
                        <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
                            {/* Editor Header */}
                            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-gray-400 text-sm font-mono">
                                    {codeSnippets[currentCodeSnippet].language}.tsx
                                </div>
                            </div>
                            
                            {/* Code Content */}
                            <div className="p-6 font-mono text-sm">
                                <pre className="text-gray-300 leading-relaxed">
                                    <code className="language-typescript">
                                        {codeSnippets[currentCodeSnippet].code}
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white shadow-xl animate-bounce">
                            <div className="text-center">
                                <div className="text-2xl font-bold">5+</div>
                                <div className="text-xs opacity-90">Live Projects</div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white shadow-xl animate-pulse">
                            <div className="text-center">
                                <div className="text-2xl font-bold">∞</div>
                                <div className="text-xs opacity-90">Creativity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Only show when dropdown is closed */}
            {!showProjectDropdown && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            )}

            {/* Expanded area for dropdown when visible */}
            {showProjectDropdown && (
                <div className="h-96 flex items-center justify-center">
                    <div className="text-white text-center opacity-50">
                        <p className="text-sm">👆 Check out my projects above</p>
                    </div>
                </div>
            )}
        </section>
    );
};