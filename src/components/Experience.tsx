import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "2025 – Present",
      company: "Vedaniti Technologies",
      title: "Senior Software Engineer",
      responsibilities: [
        "Spearheading front-end architecture and design decisions for enterprise-grade web applications using React, TypeScript, and Next.js.",
        "Leading cross-functional teams and mentoring junior developers to ensure high standards in code quality, testing, and performance.",
        "Implementing CI/CD pipelines and driving best practices in modern software development for scalable and maintainable applications."
      ]
    },
    {
      year: "2022 – 2024",
      company: "Tata Consultancy Services",
      title: "Software Developer | Microsoft",
      responsibilities: [
        "Led the end-to-end development of a comprehensive recruitment tool for Microsoft, effectively integrating and streamlining three separate systems into a unified platform using React.js, Typescript, HTML, and CSS.",
        "Enhanced the user experience by building responsive and interactive UIs, optimizing candidate-recruiter interactions, and delivering a seamless end-to-end recruitment process.",
        "Transformed UX wireframes into dynamic web pages, ensuring smooth user journeys and integrating features seamlessly.",
        "Created reusable components to boost scalability, accelerate development, and ensure maintainability.",
        "Designed a partner communication system using Axios and managed state via Redux and React hooks.",
        "Led code reviews to enforce quality, fix bugs, and uphold best practices."
      ]
    },
    {
      year: "2021",
      company: "Tata Consultancy Services",
      title: "Software Developer | H&M",
      responsibilities: [
        "Designed and optimized a robust order processing system using React and C#, enhancing operational performance.",
        "Built RESTful APIs for seamless data handling between frontend and SQL backend.",
        "Automated data migration via Azure Logic Apps, reducing manual errors and improving reliability.",
        "Actively contributed to Agile practices, sprint planning, and timely deliveries."
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-background-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Experience</h2>
        </motion.div>

        <div className="relative grid grid-cols-12 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="contents"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Year (Left Column) */}
              <div className="col-span-3 text-right pr-4 text-accent font-semibold text-lg mt-4">
                {exp.year}
              </div>

              {/* Timeline Indicator (Middle Column) */}
              <div className="col-span-1 flex flex-col items-center relative">
                {/* Vertical Line */}
                <div className="w-px bg-accent h-full absolute top-0"></div>
                {/* Dot */}
                <div className="w-4 h-4 bg-accent rounded-full border-2 border-white z-10 mt-1"></div>
              </div>

              {/* Experience Details (Right Column) */}
              <div className="col-span-8 bg-background p-6 rounded-lg shadow-lg border border-accent/20">
                <h3 className="text-2xl font-bold text-accent mb-1">{exp.company}</h3>
                <h4 className="text-xl font-semibold mb-4">{exp.title}</h4>
                <ul className="space-y-4 list-none">
                  {exp.responsibilities.map((item, rIdx) => (
                    <li key={rIdx} className="flex items-start text-text-secondary">
                      <span className="text-accent mr-2 mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
