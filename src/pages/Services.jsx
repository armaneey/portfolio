const Services = () => {
  const services = [
    {
      title: "Responsive Website Design",
      description: "Crafting user-friendly and responsive websites that adapt seamlessly across all devices, ensuring an optimal user experience.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "Performance Optimization"]
    },
    {
      title: "Mobile & Web App Design",
      description: "Designing engaging and efficient mobile and web applications tailored to meet user needs and business goals.",
      features: ["Interactive UI/UX", "Progressive Web Apps", "Native-like Experience"]
    },
    {
      title: "Landing Page Design",
      description: "Building captivating and high-converting landing pages that grab attention and deliver results.",
      features: ["Conversion Optimization", "A/B Testing", "Analytics Integration"]
    },
    {
      title: "Web Development",
      description: "Developing robust and scalable websites using modern frameworks like React, Vue, and Next.js.",
      features: ["Modern Frameworks", "API Integration", "Scalable Architecture"]
    },
    {
      title: "Cybersecurity",
      description: "Ensuring your digital solutions are secure, leveraging my growing expertise in cybersecurity and IT support.",
      features: ["Security Audits", "Best Practices", "Risk Assessment"]
    },
    {
      title: "UI/UX Consulting",
      description: "Providing expert consultation on user interface and experience design to enhance product usability.",
      features: ["User Research", "Design Systems", "Prototyping"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in delivering modern and innovative digital solutions that combine technical expertise and creativity to help you achieve your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
            >
              {/* Service Header */}
              <div className="p-6 bg-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              My Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Discovery", description: "Understanding your needs and goals" },
                { title: "Design", description: "Creating beautiful and functional designs" },
                { title: "Development", description: "Building robust and scalable solutions" },
                { title: "Launch", description: "Deploying and optimizing your project" }
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start your project?
            </h3>
            <p className="mb-6 opacity-90">
              Let&apos;s work together to bring your ideas to life with modern, beautiful, and functional web solutions.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;