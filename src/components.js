const { useState, useEffect } = React;

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">
                        Christofer A. Bautista - Front End Developer
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
                        <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
                        <a href="#experience" className="text-gray-700 hover:text-primary transition-colors">Experience</a>
                        <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4">
                        <a href="#home" className="block py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
                        <a href="#about" className="block py-2 text-gray-700 hover:text-primary transition-colors">About</a>
                        <a href="#skills" className="block py-2 text-gray-700 hover:text-primary transition-colors">Skills</a>
                        <a href="#projects" className="block py-2 text-gray-700 hover:text-primary transition-colors">Projects</a>
                        <a href="#contact" className="block py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
};