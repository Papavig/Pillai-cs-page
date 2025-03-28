import { ArrowRight, Phone } from "lucide-react";

export default function Overview(){
  return(
    <section className="relative min-h-screen flex flex-col">
      <main className="container mx-auto py-8 px-4 flex-grow">
        {/* Title */}
        <h1 className="text-3xl text-[#910000] font-bold tracking-wide">
          Bachelor of Science in Computer Science
        </h1>
        <hr className="my-8" />

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {/* Left Section - Enhanced with card styling */}
          <div className="md:col-span-1 mb-8 md:mb-0 p-2">
            <div className="space-y-5 px-4">
              {[
                {
                  title: "Eligibility",
                  desc: "10 + 2 or equivalent (any stream)",
                },
                {
                  title: "Duration",
                  desc: "36 Months",
                },
                {
                  title: "Mode Of Training",
                  desc: "Blended Learning (In-Campus & Online)",
                },
                {
                  title: "Degree Awarded By",
                  desc: "University of Mumbai",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}

              <div className="mt-6">
                <p className="font-medium text-gray-800">
                  For admissions and inquiries:
                </p>
                <div className="mt-2 space-y-1">
                  <a href="tel:02265748014" className="flex items-center">
                    <Phone className="mr-2 fill-gray-600 text-gray-800 w-5" />
                    <span className="font-medium hover:text-[#910000]">
                      022-65748014
                    </span>
                  </a>
                  <a href="tel:02265748016" className="flex items-center">
                    <Phone className="mr-2 fill-gray-600 text-gray-800 w-5" />
                    <span className="font-medium hover:text-[#910000]">
                      022-65748016
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 md:col-span-2">
            <div className="text-gray-800 leading-relaxed">
              {/* Program Overview Section */}
              <p className="text-base">
                The Bachelor of Science in Computer Science (B.Sc. C.S.)
                program is designed to equip students with specialized
                knowledge and technical skills in the field of Computer
                Science and Applications. Established in 2001, the Department
                of Information Technology and Computer Science aims to nurture
                talented youth by providing quality education aligned with
                global industry requirements.
              </p>

              {/* Program Highlights */}
              <h3 className="text-xl font-bold text-gray-900 mt-7 border-l-4 border-[#910000] pl-3">
                Program Highlights
              </h3>
              <ul className="space-y-3 text-gray-800 mt-4">
                {[
                  {
                    title: "Affiliated with the University of Mumbai:",
                    desc: "Curriculum tailored to meet global IT industry needs.",
                  },
                  {
                    title: "Industry Collaboration:",
                    desc: "MoUs with Google, Zensar Ltd., and Oracle Corp. for academic and career growth.",
                  },
                  {
                    title: "Comprehensive Student Support:",
                    desc: "Mentorship programs, student exchange, and advanced learning initiatives.",
                  },
                  {
                    title: "Practical Exposure:",
                    desc: "Hands-on project sessions and training for MH-CET (MCA entrance).",
                  },
                  {
                    title: "Strong Alumni Network:",
                    desc: "Continuous engagement with graduates for guidance and career support.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm hover:bg-gray-50 p-1 rounded-md"
                  >
                    <span className="text-lg mr-2">•</span>
                    <strong>{item.title}</strong>
                    <span className="ml-1">{item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Learning & Development Opportunities */}
              <h3 className="text-xl font-bold text-gray-900 mt-7 border-l-4 border-[#910000] pl-3">
                Learning & Development Opportunities
              </h3>
              <ul className="space-y-3 text-gray-800 mt-4">
                <li className="flex items-start text-sm hover:bg-gray-50 p-1 rounded-md">
                  <span className="text-lg mr-2">•</span>
                  <div>
                    <strong>Technical and Soft Skills Training:</strong>
                    <span className="ml-1">
                      Enhancing leadership, teamwork, and organizational
                      abilities.
                    </span>
                  </div>
                </li>
                <li className="flex items-start text-sm hover:bg-gray-50 p-1 rounded-md">
                  <span className="text-lg mr-2">•</span>
                  <div>
                    <strong>"Computer Association":</strong>
                    <span className="ml-1">
                      A student-driven platform for technical and social
                      events under faculty mentorship.
                    </span>
                  </div>
                </li>
                <li className="flex items-start text-sm hover:bg-gray-50 p-1 rounded-md">
                  <span className="text-lg mr-2">•</span>
                  <div>
                    <strong>Continuous Improvement Initiatives:</strong>
                    <span className="md:hidden ml-1">
                      Unbiased evaluation, exit feedback, and collaborative
                      learning.
                    </span>
                    <ul className="ml-1 mt-2 space-y-2 text-gray-700 hidden md:block">
                      {[
                        "Unbiased evaluation process",
                        "Exit feedback from final-year students",
                        "Collaborative learning and research opportunities",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm ml-4"
                        >
                          <span className="mr-2">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <p className="mt-5">
                With a focus on academic excellence and industry relevance,
                the B.Sc. C.S. program provides a solid foundation for higher
                studies and career advancement in the IT sector.
              </p>
            </div>
          </div>
        </div>
      </main>
      <p className="font-bold mt-8 bg-gray-50 p-3 rounded-lg flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
        Ready to kickstart your journey in Computer Science?
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