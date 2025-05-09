import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-accent opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-accent font-medium">Hello, my name is</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pratiksha Patil
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-text-secondary font-medium mb-6">
              Software Developer
            </motion.h2>
            <motion.p variants={itemVariants} className="text-text-secondary max-w-xl mb-8 text-lg">
              A highly skilled Software Developer with over 3 years of experience in designing, developing, and
              deploying enterprise-level applications. Successfully contributed to projects for global clients like
              Microsoft and H&M, delivering innovative solutions that streamline processes and enhance user
              experience.
            </motion.p>

            <motion.div variants={itemVariants} className="flex space-x-4 mb-10">
              <a href="mailto:pratiksha14.6.99@gmail.com" className="btn btn-primary" aria-label="Email me">
                Get in touch
              </a>
              <a href="#projects" className="btn btn-outline" aria-label="View my projects">
                View my work
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-5">
              <a href="https://github.com/pratikshapatil146" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="GitHub">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pratiksha-patil-718b2a159" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:pratiksha14.6.99@gmail.com" className="text-text-secondary hover:text-accent transition-colors" aria-label="Email">
                <FiMail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                <img
                  src="/Pratiksha.jpeg"
                  alt="Pratiksha Patil"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-accent opacity-5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;