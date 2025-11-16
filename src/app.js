// Main App Component
const App = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));