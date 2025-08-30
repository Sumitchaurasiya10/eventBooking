import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gray-900/90 backdrop-blur-xl border-t border-white/10 text-gray-300 py-10">
      {/* Floating Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
        {/* Brand */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          SmartEvent
        </h1>
        <p className="text-sm opacity-70">
          Browse events, book seats, manage reservations.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/events" className="hover:text-pink-400 transition">Events</Link>
          <Link to="/bookings" className="hover:text-pink-400 transition">Bookings</Link>
          <Link to="/admin" className="hover:text-pink-400 transition">Admin</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaTwitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
        </div>

        {/* Newsletter */}
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="px-4 py-2 rounded-r-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition">
            Subscribe
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} SmartEvent. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            ⬆ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
