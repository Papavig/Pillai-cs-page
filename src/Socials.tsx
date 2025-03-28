import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function Social() {
  const linkedInRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const [feedHeight, setFeedHeight] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Add a resize observer to monitor LinkedIn feed height changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === linkedInRef.current && linkedInRef.current) {
          // Get the height of the LinkedIn container and apply it to the Instagram container
          const height = linkedInRef.current.offsetHeight;
          setFeedHeight(height);
        }
      }
    });

    // Start observing after a delay to allow widgets to load
    const timer = setTimeout(() => {
      if (linkedInRef.current) {
        resizeObserver.observe(linkedInRef.current);
      }
    }, 2000); // 2 second delay

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative">
      <div className="container mx-auto py-12 px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Campus Highlights & Student Stories
          </h2>
          <p className="text-gray-600 mt-2">
            A glimpse into life at Pillai College of Arts, Commerce & Science
            (Autonomous) from achievements to campus events.
          </p>
        </div>

        {/* Instagram & LinkedIn Feeds */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Instagram Feed */}
          <div
            className="p-4 bg-white flex flex-col justify-center items-center text-center relative overflow-hidden"
            style={{ height: feedHeight ? `${feedHeight}px` : "auto" }}
            ref={instagramRef}
          >
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Instagram Highlights
            </h3>
            <div
              className="elfsight-app-77bd8b68-a1e8-4d1d-81ce-86aaf1adc9e9 w-full overflow-y-auto rounded-b-2xl"
              style={{ height: feedHeight ? `${feedHeight - 50}px` : "500px" }}
              data-elfsight-app-lazy
            ></div>
          </div>

          {/* LinkedIn Feed */}
          <div
            className="p-4 bg-white flex flex-col justify-center items-center text-center relative overflow-hidden"
            ref={linkedInRef}
          >
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              LinkedIn Stories
            </h3>
            <div
              className="elfsight-app-9924373e-91ee-44b7-8527-3cc49ab5645a w-full"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
      <p className="font-bold my-8 bg-gray-50 p-3 rounded-lg flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
        Interested in learning more? Contact us for admissions and program details!
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeymgod1KHMKwmrgyp5hExK8datN4VwCfeMnw4SslNISlj_EQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener"
          className="text-[#910000] flex items-center gap-2 mt-2 sm:mt-0 sm:ml-2 group"
        >
          Inquire Here
          <ArrowRight className="w-4 h-4 -mx-1 mt-1 transition-transform group-hover:translate-x-0.5 duration-300 ease-in-out" />
        </a>
      </p>
    </section>
  );
}

export default Social;
