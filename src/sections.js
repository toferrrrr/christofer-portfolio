// Hero Section
const Hero = () => {
    return (
        <section id="home" className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Christofer A. Bautista
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                    Full Stack Developer & Creative Problem Solver
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        San Pascual, Batangas
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        (+63) 912-073-2452
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        tofer.bautista.06@gmail.com
                    </div>
                </div>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View My Work
                </button>
            </div>
        </section>
    );
};

// About Section
const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
                    About Me
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-secondary">
                                Hello! I'm Christofer
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                A passionate full-stack developer based in San Pascual, Batangas. 
                                I love creating innovative solutions and bringing ideas to life through code.
                                With a strong foundation in modern web technologies, I strive to build 
                                applications that are not only functional but also provide exceptional user experiences.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, 
                                contributing to open-source projects, or enjoying the beautiful 
                                landscapes of Batangas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section
const Skills = () => {
    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Git", level: 80 }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
                    Skills
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold text-secondary">{skill.name}</h3>
                                    <span className="text-primary font-medium">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div 
                                        className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Projects Section
const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
                    Projects
                </h2>
                <div className="text-center text-gray-600">
                    <p className="text-lg">Coming soon... Stay tuned for my latest projects!</p>
                </div>
            </div>
        </section>
    );
};

// Contact Section
const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Get In Touch
                </h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xl mb-8 opacity-90">
                        I'm always open to discussing new opportunities and interesting projects.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 mb-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="opacity-80">San Pascual, Batangas</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 mb-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <p className="opacity-80">(+63) 912-073-2452</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 mb-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="opacity-80">tofer.bautista.06@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="opacity-80">
                    © 2025 Christofer A. Bautista. All rights reserved.
                </p>
            </div>
        </footer>
    );
};