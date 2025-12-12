export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gym Website',
      description: 'Simple gym website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/gym.jpg',
      liveLink: 'https://gabriel-petras.github.io/gymdemo/',
      githubLink: 'https://github.com/Gabriel-Petras/gymdemo',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Weather Application',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologies: ['React', 'API Integration', 'CSS3'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 w-full bg-gray-200 dark:bg-gray-800"></div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}








