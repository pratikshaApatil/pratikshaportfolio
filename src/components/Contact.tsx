import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status !== 200 && result.status !== 201) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text-text-secondary max-w-2xl mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind,
            want to discuss potential collaborations, or just want to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-background-light p-3 rounded-lg mr-4">
                  <FiMail className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:pratiksha14.6.99@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
                    pratiksha14.6.99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-background-light p-3 rounded-lg mr-4">
                  <FiLinkedin className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/pratiksha-patil-718b2a159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    linkedin.com/in/pratiksha-patil-718b2a159
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-background-light p-3 rounded-lg mr-4">
                  <FiMapPin className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-text-secondary">
                    Pune, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Let's connect</h3>
              <p className="text-text-secondary mb-4">
                I'm currently available for freelance work and open to new opportunities.
                If you have a project that needs my expertise, don't hesitate to reach out.
              </p>
              <a
                href="https://www.linkedin.com/in/pratiksha-patil-718b2a159"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Contact;