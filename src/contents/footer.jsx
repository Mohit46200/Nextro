import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0a0f1f] via-[#0b1226] to-[#0a0f1f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                &lt;/&gt;
              </div>
              <span className="text-lg font-semibold text-white">
                Nexora Infotech
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              Empowering businesses and individuals with cutting-edge
              technology solutions, career guidance, and innovative services.
              Transform your ideas into digital reality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">✨ Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/web" className="hover:text-white">Web Development</Link></li>
              <li><Link to="/services/app" className="hover:text-white">App Development</Link></li>
              <li><Link to="/services/research" className="hover:text-white">Research Help</Link></li>
              <li><Link to="/services/events" className="hover:text-white">Event Management</Link></li>
              <li><Link to="/services/hackathons" className="hover:text-white">Hackathons</Link></li>
              <li><Link to="/services/internship-help" className="hover:text-white">Internship Help</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/internships" className="hover:text-white">Internships</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@nexorainfotech.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                India, Jalandhar Punjab
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>© 2024 Nexora Infotech. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/refund" className="hover:text-white">Refund Policy</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
