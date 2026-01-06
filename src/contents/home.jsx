import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Search,
  Calendar,
  Trophy,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0a0f1f] via-[#0b1226] to-[#0a0f1f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6">
              ⭐ Trusted by 500+ Clients Worldwide ✨
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your <br />
              Ideas Into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
              From cutting-edge web development to comprehensive career guidance,
              we provide innovative tech services that help businesses thrive and
              individuals succeed in the digital age.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/services"
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-medium"
              >
                Explore Services →
              </Link>

              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                ▶ View Portfolio
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14 max-w-lg">
              <Stat value="500+" label="Projects Completed" />
              <Stat value="50+" label="Events Organized" />
              <Stat value="1000+" label="Students Helped" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur border border-white/10 text-sm">
              🟢 Live Projects
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team Work"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-4 right-4 bg-[#0b1226]/90 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-center">
              <h4 className="text-2xl font-bold text-blue-400">98%</h4>
              <p className="text-xs text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-br from-[#0a0f1f] via-[#0b1226] to-[#0a0f1f] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400">
              ✨ Comprehensive Solutions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Services
              </span>
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              From development to career support, we offer everything you need to
              succeed in the tech industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Globe />} title="Web Development" desc="Custom websites and web applications built with modern technologies" />
            <ServiceCard icon={<Smartphone />} title="App Development" desc="Native and cross-platform mobile applications for iOS and Android" />
            <ServiceCard icon={<Search />} title="Research Help" desc="Academic and technical research assistance for students and professionals" />
            <ServiceCard icon={<Calendar />} title="Event Management" desc="End-to-end planning and execution of tech events and conferences" />
            <ServiceCard icon={<Trophy />} title="Hackathons" desc="Competitive coding & innovation events" />
            <ServiceCard icon={<GraduationCap />} title="Internship Help" desc="Guidance and support to secure internships" />
            <ServiceCard icon={<Briefcase />} title="Placement Support" desc="Resume building & interview preparation" />
          </div>
        </div>
      </section>
    </>
  );
}



function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-blue-400">{value}</h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );
}
