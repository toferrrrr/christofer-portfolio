// Contact Section
const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Get In Touch
                </h2>
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <p className="text-xl mb-8 opacity-90">
                        I'm always open to discussing new opportunities and interesting projects.
                    </p>
                    
                    {/* Professional Links */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a href="https://github.com/christoferrrnewtech" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center px-6 py-3 bg-white text-secondary rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                        <a href="mailto:tofer.bautista.06@gmail.com" 
                           className="flex items-center px-6 py-3 bg-white text-secondary rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email Me
                        </a>
                        <a href="tel:+639120732452" 
                           className="flex items-center px-6 py-3 bg-white text-secondary rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Call Me
                        </a>
                    </div>
                </div>
                
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
        </section>
    );
};