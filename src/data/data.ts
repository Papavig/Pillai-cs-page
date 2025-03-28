export const curriculumData = {
  title: "Curriculum",
  semesters: [
    {
      semester: "Semester 1",
      subjects: [
        { code: "PUSCS101", name: "Mathematical and Statistical Techniques" },
        { code: "PUSCS102", name: "Python Programming" },
        { code: "PUSCS103", name: "Database Management System" },
        { code: "PUSCS104", name: "Problem Solving and Design Thinking" }
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        { code: "PUSCS201", name: "Statistical Methods and Testing of Hypothesis" },
        { code: "PUSCS202", name: "Core Java" },
        { code: "PUSCS203", name: "Web Programming" },
        { code: "PUSCS204", name: "Computer Organization and Architecture" }
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        { code: "PUSCS301", name: "Operation Research" },
        { code: "PUSCS302", name: "Data Structure Using Python" },
        { code: "PUSCS303", name: "Operating System" },
        { code: "PUSCS304D", name: "Data Visualization using Python" },
        { code: "PUSCS304U", name: "Interaction Design" },
        { code: "PUSCS304F", name: "Full Stack Development Paper-I" },
        { code: "PUSCS305", name: "Mini Project" }
      ]
    },
    {
      semester: "Semester 4",
      subjects: [
        { code: "PUSCS401", name: "Advanced JAVA" },
        { code: "PUSCS402", name: "Computer Networks" },
        { code: "PUSCS403", name: "Advanced Database Management System" }
      ]
    },
    {
      semester: "Semester 5",
      subjects: [
        { code: "PUSCS501", name: "Java Framework" },
        { code: "PUSCS502", name: "Advanced Database Management Systems" },
        { code: "PUSCS503", name: "Game Programming" },
        { code: "PUSCS504(F)", name: "Hybrid Application Development" },
        { code: "PUSCS504(D)", name: "Artificial Intelligence" },
        { code: "PUSCS505", name: "Web Services" },
        { code: "PUSCS506", name: "Emotional Intelligence" },
        { code: "PUSCS507", name: "Internship" }
      ]
    },
    {
      semester: "Semester 6",
      subjects: [
        { code: "PUSCS601", name: "Software Testing & Quality Assurance" },
        { code: "PUSCS602", name: "Cloud Computing" },
        { code: "PUSCS603", name: "Android Programming" },
        { code: "PUSCS604(F)", name: "Application Deployment" },
        { code: "PUSCS604(D)", name: "Machine Learning" },
        { code: "PUSCS605", name: "Ethical Hacking" },
        { code: "PUSCS606", name: "Project" }
      ]
    }
  ]
};

export const testimonials = [
  {
    quote: "The computer science curriculum at this institution offers an excellent balance between theoretical foundations and practical implementation. Students graduate with both the knowledge and hands-on experience needed in today's tech industry.",
    name: "Rajesh Kumar",
    title: "Chief Technology Officer",
    company: "TechSolutions India, Bangalore"
  },
  {
    quote: "As a recruiter for a leading tech company, I find graduates from this program particularly well-prepared. The comprehensive coverage of algorithms, data structures, and modern programming paradigms gives them a competitive edge.",
    name: "Priya Verma",
    title: "Technical Recruitment Lead",
    company: "InnovateX Systems, Mumbai"
  },
  {
    quote: "The curriculum's focus on both core computer science concepts and emerging technologies like AI and cloud computing creates versatile professionals ready to tackle the challenges of our rapidly evolving industry.",
    name: "Vikram Desai",
    title: "Engineering Director",
    company: "CloudNative Technologies, Delhi"
  },
  {
    quote: "I've mentored several students from this program and found their problem-solving abilities exceptional. The rigorous coursework in mathematics and computing fundamentals builds a strong foundation for any specialization in tech.",
    name: "Ananya Krishnan",
    title: "Senior Software Architect",
    company: "DataSphere Solutions, Hyderabad"
  },
  {
    quote: "What sets this computer science program apart is how it seamlessly integrates software development practices with theoretical computer science. The graduates understand not just how to code, but how to architect scalable, efficient systems.",
    name: "Suresh Patel",
    title: "Founder & CEO",
    company: "Infinite Computing, Chennai"
  }
];

export interface StudentTestimonial {
  name: string;
  quote: string;
  role?: string;
}

export const studentTestimonials: StudentTestimonial[] = [
  {
    name: "RAHUL SHARMA",
    role: "B.Sc. Computer Science Graduate, 2022",
    quote: "Choosing Pillai College for my B.Sc. Computer Science was the best decision. The curriculum is industry-oriented, and the faculty is incredibly supportive. I gained hands-on experience through projects and workshops, which helped me secure a great job through campus placement. I'm grateful for the practical skills and guidance I received."
  },
  {
    name: "PRIYA IYER",
    role: "Final Year B.Sc. Computer Science Student",
    quote: "The learning environment at Pillai College is truly inspiring. The professors encourage us to think beyond textbooks and focus on real-world applications. I've participated in hackathons and coding competitions, which helped me build confidence and skills. Looking forward to my final year project!"
  },
  {
    name: "ARJUN PATIL",
    role: "B.Sc. Computer Science Graduate, 2020",
    quote: "Pillai College shaped my career in IT. The comprehensive curriculum and constant guidance from faculty members helped me build a strong foundation. I secured an internship during my final year, which eventually led to a full-time position. I highly recommend this program to anyone passionate about computer science."
  },
  {
    name: "SNEHA NAIR",
    role: "B.Sc. Computer Science Graduate, 2023",
    quote: "I had a great experience at Pillai College. The college not only focuses on academics but also encourages extracurricular activities. I was part of the Computer Association, where I gained leadership and organizational skills. Thanks to the guidance from my mentors, I am now working as a software developer at a reputed IT firm."
  },
  {
    name: "VISHAL KHANNA",
    role: "Second Year B.Sc. Computer Science Student",
    quote: "Pillai College offers a perfect blend of theory and practical knowledge. The labs are well-equipped, and the teachers are always ready to help. The Computer Science department regularly organizes seminars and workshops that keep us updated with the latest industry trends. I feel confident about my future!"
  },
  {
    name: "MEERA GUPTA",
    role: "B.Sc. Computer Science Graduate, 2021",
    quote: "Studying at Pillai College was a transformative experience. The practical approach to teaching helped me develop problem-solving skills, and the project-based learning kept me engaged throughout the course. I got placed through campus interviews and am currently working in a tech startup. Forever grateful to my professors!"
  }
];