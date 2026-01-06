import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0f1f] via-[#0b1226] to-[#0a0f1f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6">
            ⭐ Trusted by 500+ Clients Worldwide ✨
          </div>

          {/* Heading */}
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

          {/* Description */}
          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
            From cutting-edge web development to comprehensive career guidance,
            we provide innovative tech services that help businesses thrive and
            individuals succeed in the digital age.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/services"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-medium flex items-center gap-2"
            >
              Explore Services →
            </Link>

            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2"
            >
              ▶ View Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-14 max-w-lg">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">500+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">50+</h3>
              <p className="text-sm text-gray-400">Events Organized</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">1000+</h3>
              <p className="text-sm text-gray-400">Students Helped</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Live Projects badge */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur border border-white/10 text-sm flex items-center gap-2">
            🟢 Live Projects
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Success Rate Card */}
          <div className="absolute bottom-4 right-4 bg-[#0b1226]/90 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-center">
            <h4 className="text-2xl font-bold text-blue-400">98%</h4>
            <p className="text-xs text-gray-300">Success Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}
