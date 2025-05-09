import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "TypeScript", "Coherence Design System"]
    },
    {
      title: "Backend Development",
      skills: ["C#", "RESTful APIs"]
    },
    {
      title: "Cloud Technologies",
      skills: ["Azure Logic Apps", "Azure App Insights"]
    },
    {
      title: "Database Management",
      skills: ["SQL"]
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "Azure DevOps"]
    },
    {
      title: "Development Methodologies",
      skills: ["Agile", "ADO Tool", "JIRA"]
    },
    {
      title: "Testing & Optimization",
      skills: ["Unit Testing", "Data Validation", "Error Handling", "SonarQube"]
    },
    {
      title: "UI/UX Collaboration",
      skills: ["Figma", "Wire framing"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Key Skills</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-background-light p-6 rounded-lg shadow-lg border border-accent/20 hover:border-accent/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-background px-3 py-1 rounded-full text-sm text-text-secondary border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;