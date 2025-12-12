export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      {/* Background video */}
      <video
        src="/typing.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/fill.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

  {/* Overlay for better contrast */}
  <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Hi, I'm <span className="text-blue-300 dark:text-blue-300">Gabriel Petraš</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 font-light drop-shadow">
            Full-Stack Web Developer
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
            Building modern, responsive web applications with clean code and exceptional user experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}








