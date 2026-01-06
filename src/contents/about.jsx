import { Link } from "react-router-dom";
import { Users, Building2, BadgeCheck, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0f1f] via-[#0b1226] to-[#0a0f1f] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6">
          ✨ About Nexora Infotech
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Empowering Innovation
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          We are a passionate team of technologists, innovators, and mentors
          dedicated to transforming ideas into digital reality while empowering
          the next generation of tech professionals.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-medium flex items-center gap-2"
          >
            Get In Touch →
          </Link>

          <Link
            to="/careers"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Join Our Team
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat
            icon={<Users size={28} />}
            value="500+"
            title="Happy Clients"
            desc="Businesses and individuals served"
          />
          <Stat
            icon={<Building2 size={28} />}
            value="4+"
            title="Years Experience"
            desc="In the tech industry"
          />
          <Stat
            icon={<BadgeCheck size={28} />}
            value="25+"
            title="Team Members"
            desc="Passionate professionals"
          />
          <Stat
            icon={<TrendingUp size={28} />}
            value="98%"
            title="Success Rate"
            desc="Project completion satisfaction"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-blue-400">{value}</h3>
      <p className="text-sm font-medium mt-1">{title}</p>
      <p className="text-xs text-gray-400 mt-1">{desc}</p>
    </div>
  );
}
