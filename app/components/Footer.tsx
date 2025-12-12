export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Gabriel Petraš. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Gabriel-Petras" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gabriel-petra%C5%A1-90279b393/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




