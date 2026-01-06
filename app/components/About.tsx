import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-black text-white min-h-screen bg-gradient-to-b from-black-200 to-blue-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800 relative">
            <Image
              src="/fill.jpg"
              alt="Portrait of Gabriel Petraš"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white dark:text-gray-400 leading-relaxed">
              I began learning HTML and CSS at the age of eleven, fascinated by the idea of creating something on the web. In high school, around fifteen, I moved into real programming and started building more complex and functional websites, which helped me understand both design and the logic behind web development. This experience confirmed my passion for coding and motivated me to pursue it seriously. Today, I am studying at the University of Belgrade, Faculty of Mathematics, where I’m deepening my knowledge of computer science while continuing to develop my web development skills and work on projects that challenge and improve me.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-3">What Drives Me</h3>
              <p className="text-white-600 dark:text-white-400">
                I’m driven by curiosity, constant growth, and the satisfaction of turning ideas into functional, meaningful web experiences. Learning new technologies, solving problems, and building impactful projects continually motivates and inspires me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




