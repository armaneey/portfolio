const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-pink-300/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute top-60 left-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-green-400 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float animation-delay-3000"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-float">
            IMAN SHU&apos;AIBU ELE-OJO
          </h1>
          
          <div className="mb-8 animate-fadeInUp">
            <p className="text-2xl text-gray-700 mb-4 font-medium">Hello!, Welcome to my portfolio 🚀</p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              I am a Front-end developer skilled in building modern web applications, implementing secure systems, 
              and creating beautiful user interfaces. Experienced in frontend development with a strong focus on 
              performance, reliability, and clean code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse hover-lift"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200 hover-lift"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12 text-center animate-fadeInUp">
            My Experience
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Frontend Developer",
                company: "Freelance",
                period: "2022 - Present",
                description: "Developing responsive web applications using React, Vue, and modern CSS frameworks.",
                color: "from-purple-500 to-pink-500",
                animation: "animate-slideInLeft"
              },
              {
                title: "Web Designer & Developer", 
                company: "Various Clients",
                period: "2021 - 2022",
                description: "Creating beautiful and functional websites for businesses and individuals.",
                color: "from-blue-500 to-cyan-500",
                animation: "animate-slideInRight"
              },
              {
                title: "IT Support Specialist",
                company: "Tech Support",
                period: "2020 - 2021", 
                description: "Providing technical support and cybersecurity assistance to clients.",
                color: "from-green-500 to-teal-500",
                animation: "animate-slideInLeft"
              }
            ].map((exp, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 ${exp.animation} hover-lift`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full animate-pulse`}></div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  </div>
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full hover-scale">{exp.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12 text-center animate-fadeInUp">
            What I Do
          </h2>
          
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto animate-fadeInUp">
            A front-end developer with experience building modern web applications. 
            I specialize in creating responsive designs, implementing user interfaces, 
            and ensuring optimal performance across all devices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Frontend Development",
                skills: ["React", "Vue.js", "JavaScript", "HTML", "CSS"],
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                animation: "animate-float"
              },
              {
                title: "UI/UX Design", 
                skills: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"],
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                animation: "animate-float animation-delay-2000"
              },
              {
                title: "Tools & Technologies",
                skills: ["Git", "Tailwind CSS", "Bootstrap", "Webpack", "NPM", "Vite"],
                color: "from-green-500 to-teal-500",
                bgColor: "from-green-50 to-teal-50",
                animation: "animate-float animation-delay-4000"
              },
              {
                title: "Other Skills",
                skills: ["Cybersecurity", "IT Support", "Problem Solving", "Communication", "Team Work"],
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
                animation: "animate-float"
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 ${category.animation} hover-lift hover-scale`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full animate-pulse`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-white/50 hover:bg-white transition-colors hover-scale"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-12 text-center animate-fadeInUp">
            My Education
          </h2>
          
          <div className="space-y-6">
            {[
              {
                degree: "International Relations and Diplomacy",
                school: "University",
                period: "Current",
                description: "Studying international relations with focus on diplomatic protocols and global affairs.",
                color: "from-blue-500 to-purple-500",
                animation: "animate-slideInLeft"
              },
              {
                degree: "Frontend Development",
                school: "Self-Taught & Online Courses",
                period: "2020 - Present",
                description: "Completed various online courses and self-study programs in web development.",
                color: "from-green-500 to-teal-500",
                animation: "animate-slideInRight"
              },
              {
                degree: "Languages",
                school: "Various",
                period: "Ongoing",
                description: "English, French, Arabic, Spanish, Turkish,Yoruba, Hausa",
                color: "from-orange-500 to-pink-500",
                animation: "animate-slideInLeft"
              }
            ].map((edu, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 ${edu.animation} hover-lift`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <div className={`w-3 h-3 bg-gradient-to-r ${edu.color} rounded-full animate-pulse`}></div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full hover-scale">{edu.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-fadeInUp">
            Let&apos;s work together!
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fadeInUp">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to get in touch!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
            <a
              href="mailto:imanshuaibu1@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse hover-lift hover-glow"
            >
              Send Message
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200 hover-lift"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;