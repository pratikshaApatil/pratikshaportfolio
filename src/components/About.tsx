import { motion } from 'framer-motion';

const About = () => {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Pratiksha Patil.pdf';
    link.download = 'Pratiksha Patil.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section bg-background-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm Pratiksha Patil, a Pune-based Front-end Developer who believes clean code and great design go hand-in-hand.
              Over the last three-plus years I've turned complex requirements into smooth, pixel-perfect experiences for global
              brands such as Microsoft and H&M while working at Tata Consultancy Services. My daily toolkit revolves around
              React JS, TypeScript, JavaScript and C#, sprinkled with Azure Logic Apps, RESTful APIs and plenty of coffee.
              I love pairing up with UX teams, transforming wireframes into living, breathing products, and refactoring code
              so tomorrow's sprint starts faster than today's.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              When I'm not optimising components or hunting down edge-case bugs, you'll catch me mentoring teammates,
              championing Agile rituals and celebrating wins—like the On-the-Spot Award I bagged for leading Microsoft's
              recruitment-tool revamp. My mission? Build web experiences that feel effortless for users and empowering
              for businesses.
            </p>

            <div className="pt-4">
              <button
                onClick={handleDownloadResume}
                className="btn btn-outline"
              >
                Download Resume
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background p-6 rounded-lg shadow-lg border border-accent/20"
          >
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Current Role: Software Developer</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Experience: 3+ years </span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Notable Projects: 1. Unified recruitment platform for Microsoft (React, TypeScript),<br /> 2. High-volume order-processing system for H&M (React, C#, SQL, Azure)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Super-powers: React JS, TypeScript, JavaScript, Azure Logic Apps, RESTful APIs, SQL</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Methodologies & Tools: Agile / Scrum, Git, Azure DevOps, JIRA, SonarQube</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Award: TCS "On-the-Spot" Award for leadership & innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Education: B.Tech (IT), KIT's College of Engineering, Kolhapur — CGPA 8.8/10</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Certifications: Microsoft AZ-900 & AZ-204</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Location: Pune, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;