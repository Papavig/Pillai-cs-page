import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, X } from "lucide-react";

const OverlayButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // State to control the dialog box

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // WhatsApp share function
  const shareWhatsApp = () => {
    setShowDialog(!showDialog); // Toggle dialog box visibility
  };

  // Handle WhatsApp click function
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917977212824";
    const message = "Hi!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Sample message text - customize as needed
  const messageText = "How can we help you today?";

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* WhatsApp Share Button - will move up when back to top button appears */}
      <div
        className={`transition-transform duration-300 ease-in-out relative ${isVisible ? "transform -translate-y-14" : ""}`}
      >
        {/* Button with Group wrapper for hover effect */}
        <div className="group relative">
          {/* Tooltip */}
          <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-green-600 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us
          </div>

          <button
            onClick={shareWhatsApp}
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle size={24} />
          </button>

          {/* Dialog Box */}
          {showDialog && (
            <div className="absolute bottom-16 right-0 bg-white shadow-xl flex flex-col w-[85vw] max-w-[280px] mb-4 rounded-lg">
              
              <div className="flex items-center justify-between bg-[#075E54] p-3 rounded-t-lg text-white">
                  <div className="flex items-center gap-2">
                      <img src="/favicon.ico" alt="Logo" className="w-7 h-7" />
                      <div>
                          <h3 className="font-medium text-sm leading-tight">Pillai Group of Institutions</h3>
                          <p className="text-white/80 text-xs">Online</p>
                      </div>
                  </div>
                  <button
                      onClick={() => setShowDialog(false)}
                      className="text-white hover:bg-[#075E54]/80 p-1 rounded"
                  >
                      <X className="w-4 h-4" />
                  </button>
              </div>

              <div className="bg-[#ECE5DD] p-3">
                <div className="bg-white rounded-lg p-2 max-w-[70%] shadow-sm text-sm mb-16">
                  {messageText}
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-[80%] mx-auto mt-3 rounded-lg bg-[#25D366] text-white py-2 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </button>

              <div className="text-center text-xs text-gray-500 py-2 flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online | Privacy policy
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={`absolute bottom-0 right-0 transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all hover:scale-110"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default OverlayButtons;
