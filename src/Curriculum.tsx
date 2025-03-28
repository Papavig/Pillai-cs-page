import { ArrowRight } from 'lucide-react';
import { curriculumData, testimonials } from './data/data';

export default function Curriculum() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold tracking-wide mb-12">Curriculum Structure</h1>      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Curriculum Section - Taking 2 columns on medium screens */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-[#910000] pl-3">
            {curriculumData.title}
          </h2>
          
          <div className="space-y-6">
            {/* Group semesters in pairs */}
            {Array.from({ length: Math.ceil(curriculumData.semesters.length / 2) }).map((_, groupIndex) => {
              const startIdx = groupIndex * 2;
              const semesterPair = curriculumData.semesters.slice(startIdx, startIdx + 2);
              const year = groupIndex + 1;
              
              return (
                <div key={groupIndex}>
                  {/* Render the pair of semesters */}
                  {semesterPair.map((semester, index) => (
                    <div key={index} className="bg-white rounded-md mb-4">
                      <h3 className="font-bold text-gray-900 mb-3">• {semester.semester.toUpperCase()}</h3>
                      <ul className="space-y-2 text-gray-800">
                        {semester.subjects.map((subject, i) => (
                          <li key={i} className="flex items-start text-sm hover:bg-gray-50 p-1 rounded-md">
                            <span className="text-lg mr-2">-</span>
                            <strong className="mr-2">{subject.code}:</strong> {subject.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Add syllabus link and separator after each pair */}
                  <div className="mt-2 mb-6">
                    <a 
                      href={`/syllabus/year-${year}.pdf`} 
                      className="text-[#910000] text-sm font-medium group inline-flex items-center"
                      target='_blank'
                    >
                      View Year {year} Complete Syllabus
                      <ArrowRight className="w-4 h-4 ml-1 mt-1 transition-transform group-hover:translate-x-0.5 duration-300 ease-in-out" />
                    </a>

                    
                    {/* Add separator unless it's the last group */}
                    {groupIndex < Math.ceil(curriculumData.semesters.length / 2) - 1 && (
                      <div className="mt-4 border-b border-gray-300"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section - Taking 1 column */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-[#910000] pl-3">
            Industry Endorsements
          </h2>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="italic text-gray-700 mb-3">"{testimonial.quote}"</p>
                <p className="text-[#910000] font-bold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}, {testimonial.company}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Why Our Curriculum Stands Out</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sm">
                <span className="text-lg mr-2">•</span>
                <span>Industry-aligned course content</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-lg mr-2">•</span>
                <span>Balanced theoretical & practical approach</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-lg mr-2">•</span>
                <span>Regular updates to match technological advancements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8 w-full mx-auto"/>
    </section>
  );
}