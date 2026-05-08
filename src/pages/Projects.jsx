const projects = [
  {
    title: "BESTIES CAFE",
    description: "A modern social cafe platform connecting friends and communities through shared experiences, events, and digital interactions.",
    liveLink: "https://besties-cafe.vercel.app",
    githubLink: "#",
    image: "/restaurant.jpeg",
    tags: ["React", "Social", "Community", "Cafe", "Vercel"]
  },
  {
    title: "MAIZ",
    description: "A unique Saudi Arabia restaurant with delicious cuisines inspired by their rich cultural heritage.",
    liveLink: "https://maiz-hub.netlify.app/",
    githubLink: "#",
    image: "/restaurant.jpeg",
    tags: ["React", "Tailwind CSS", "Restaurant", "Cultural"]
  },
  {
    title: "BUMA LOGISTICS",
    description: "A comprehensive logistics platform delivering goods across nation and globe with speed and reliability.",
    liveLink: "https://buma022.netlify.app",
    githubLink: "#",
    image: "/log.jpeg",
    tags: ["Logistics", "Tracking", "Business", "Delivery"]
  },
  {
    title: "COM",
    description: "A non-profit spiritual organization platform sharing messages of salvation, restoration, and charity.",
    liveLink: "https://com-hub.netlify.app",
    githubLink: "#",
    image: "/com.jpeg",
    tags: ["Non-Profit", "Spiritual", "Community", "Charity"]
  },
  {
    title: "Quiz App",
    description: "An engaging brain-teasing quiz application for all ages with thought-provoking questions.",
    liveLink: "https://quizap-y1vo.onrender.com",
    githubLink: "#",
    image: "/quiz.jpeg",
    tags: ["Quiz", "Education", "Interactive", "Mobile"]
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of web applications, from restaurant platforms to logistics solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;