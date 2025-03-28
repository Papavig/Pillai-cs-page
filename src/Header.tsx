import React, { useState, useEffect } from "react";

const PillaiCollegeHeader: React.FC = () => {
  const navItems = [
    "About",
    "Academics",
    "Students",
    "Faculty",
    "Research",
    "Library",
    "Alumni",
    "IQAC",
    "Accreditation",
    "Events",
    "ERP",
    "Extension",
    "ARIA",
    "NISP",
  ];

  // State for current time
  const [currentTime, setCurrentTime] = useState<string>("");
  // State for ticker paused status
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // State for mobile menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // News items for ticker
  const newsItems = [
    "B.Com in Business Management",
    "B.Sc. Economics & Analytics",
    "B.Sc. Fashion Studies",
    "New Research Opportunities Available",
    "Upcoming Placement Drive on May 15th",
  ];

  // Create concatenated news text
  const newsText = newsItems.join(" • ") + " • " + newsItems.join(" • ");

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      
      setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    // Update immediately on component mount
    updateTime();
    
    // Set interval to update every second
    const intervalId = setInterval(updateTime, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center bg-white p-4">
        <img src="/pcacs-header.png" alt="PCACS Header" className="max-w-full h-auto" />
      </div>

      {/* Navigation Bar */}
      <nav className="bg-red-800 relative">
        {/* Mobile hamburger menu button */}
        <div className="md:hidden flex justify-between items-center px-4 py-2">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                // X icon when menu is open
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                // Hamburger icon when menu is closed
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
          <span className="text-white font-bold">Menu</span>
          <div className="w-6"></div> {/* Empty div for flex alignment */}
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-white text-sm hover:bg-white hover:text-red-500 px-2 py-2 rounded transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex justify-center space-x-4 py-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-white text-sm hover:bg-white hover:text-red-500 px-2 py-1 rounded transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Latest News and Navigation */}
      <div className="container mx-auto my-4">
        {/* Latest News Ticker */}
        <div className="flex items-center px-4 py-1">
          <span className="font-bold text-sm bg-gray-200 px-4 py-2 whitespace-nowrap">LATEST NEWS</span>
          <div 
            className="flex-grow overflow-hidden border-y py-2 mx-2 relative text-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`inline-block whitespace-nowrap ${
                isPaused 
                  ? "transform-none" 
                  : "animate-[marquee_30s_linear_infinite]"
              }`}
            >
              {newsText}
            </div>
          </div>
          <span className="text-sm bg-gray-200 px-4 py-2 whitespace-nowrap hidden sm:block">{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PillaiCollegeHeader;
