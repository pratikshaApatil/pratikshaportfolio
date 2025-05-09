import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

// Image carousel for specific projects
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[index]}
      alt={`Project Image ${index + 1}`}
      className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out"
    />
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Text-to-Image Generation with ComfyUI",
      description: `• Created complex node-based workflows in ComfyUI to generate high-quality images from text prompts.\n\n• Leveraged ControlNet, IPAdapter, and prompt engineering to refine outputs and ensure visual consistency across styles.\n\n`,
      carouselImages: [
        "/stage1_flow.PNG",
        "/stage3.png",
        "/stage4-6.png",
        "/stage5-3.png",
        "/stage6.png",
        "/stage6-3.png",
      ],
      demoLink: ""
    },
    {
      title: "LoRA Training on Custom Dataset (Face)",
      description: `• Trained a LoRA (Low-Rank Adaptation) model on a personal dataset for identity-preserving image generation.\n\n• Used Kohya trainer and integrated results into Stable Diffusion pipelines for generating face-specific variations.\n\n`,
      image: "/photo1.png",
      demoLink: ""
    },
    {
      title: "Wardrobe Expansion using Inpainting and ControlNet",
      description: `• Developed a workflow using ControlNet and Inpainting to virtually expand wardrobe options for given subject images.\n\n• Integrated three core workflows: pose extraction via OpenPose, targeted masking for Inpainting, and style transfer with the Adapter model for outfit generation.\n\n`,
      carouselImages: [
        "/RDJ1.png",
        "/RDJ2.png",
        "/RDJ3.png",
        "/RDJ4.png",
        "/RDJ5.png",
      ],
      demoLink: ""
    },
    {
      title: "Panchayat Samiti Panvel",
      description: `• Built a responsive web platform for Panvel Panchayat Samiti (Raigad District, Maharashtra) to digitize and manage village-level survey processes.\n\n• Developed a dynamic survey builder enabling administrators to create, assign, and manage custom forms for multiple Gram Panchayats with role-based access controls.\n\n`,
      image: "/panvel.png",
      demoLink: "https://www.panchayatsamitipanvel.com/"
    }
  ];

  return (
    <section id="projects" className="section bg-[#1E1E1E] py-24 md:py-32">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-[#2A2A2A] rounded-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="h-[600px] overflow-hidden rounded-lg flex items-center justify-center w-full">
                  {project.carouselImages ? (
                    <ImageCarousel images={project.carouselImages} />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>
                    <div className="prose prose-invert max-w-none mb-6">
                      {project.description.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-gray-300 leading-relaxed">
                          {paragraph.startsWith('• ') ? (
                            <span className="flex">
                              <span className="mr-2">•</span>
                              <span>{paragraph.substring(2)}</span>
                            </span>
                          ) : paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black rounded-lg font-medium hover:bg-[#F0D78C] transition-colors"
                      >
                        <FiExternalLink /> Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
