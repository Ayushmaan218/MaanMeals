import React, { useState, useEffect } from 'react';

// --- Helper Components for Icons ---
// Using inline SVGs for icons is a great practice in React to avoid extra dependencies.

const SunIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
            <path d="M20 12c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8z" />
            <path d="M21 8c0-1.7-1.3-3-3-3H6C4.3 5 3 6.3 3 8" />
            <path d="m12 18 2-4H10l2 4Z" />
        </svg>
        <span className="text-xl font-bold text-gray-800 dark:text-white">MaanMeals</span>
    </div>
);

// --- Main Application Components ---

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="flex items-center">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-orange-500 transition-all"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center px-4 py-20">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/food.png')"}}></div>
            <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                    Welcome to <span className="text-orange-500">MaanMeals</span>
                </h1>
                <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300">
                    Your one-stop solution for delicious meals, delivered right to your door.
                </p>
                <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
                    Order Now
                </button>
            </div>
        </section>
    );
}

function ServicesSection() {
    const services = [
        {
            img: "https://placehold.co/400x300/f87171/ffffff?text=Catering",
            title: "Food Catering",
            description: "From corporate events to weddings, our catering service brings delightful culinary journeys that will leave your guests raving for years to come."
        },
        {
            img: "https://placehold.co/400x300/fb923c/ffffff?text=Bulk+Orders",
            title: "Bulk Ordering",
            description: "Streamlined ordering and exceptional service for your large-scale needs. We ensure timely delivery, quality products, and competitive pricing."
        },
        {
            img: "https://placehold.co/400x300/fdba74/ffffff?text=Delivery",
            title: "Food Ordering",
            description: "Craving something delicious? Satisfy your taste buds with an extensive selection of mouthwatering dishes from your favorite local restaurants."
        }
    ];

    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We offer a variety of services to satisfy your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Have questions? We'd love to hear from you.</p>
                </div>
                <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                    <form action="#" method="POST">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Full name</label>
                                <input type="text" name="name" id="name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Full name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Phone" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" name="message" rows="4" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-black">
            <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} MaanMeals.com. All rights reserved.</p>
            </div>
        </footer>
    );
}


export default function App() {
    // State to manage the theme. Defaults to user's system preference.
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Effect to apply the theme class to the root element.
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        // The main container that changes color based on the theme
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <HeroSection />
                <ServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
