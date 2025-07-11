export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © 2024 Gabriel Yang. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <p className="text-sm text-gray-300">didalsdud@gmail.com</p>
            <a
              href="https://github.com/minyoung-yang/minyoung-yang.github.io"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
