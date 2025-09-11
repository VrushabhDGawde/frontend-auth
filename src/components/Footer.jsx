export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {["About", "Contact", "Privacy Policy", "Terms of Service"].map((link, i) => (
            <div className="px-5 py-2" key={i}>
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">{link}</a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {/* Add social icons here if needed */}
        </div>
      </div>
    </footer>
  );
}
