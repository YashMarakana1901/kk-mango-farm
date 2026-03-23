export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-6 md:px-16 py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8E7 0%, #FFF3DC 50%, #E8F5D0 100%)',
      }}
    >
      {/* Background glow top right */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)' }}
      />
      {/* Background glow bottom left */}
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,124,35,0.1) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="max-w-2xl animate-fade-up relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2D5016] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span>🌿</span> Surva Gir, Gujarat · Season 2026
        </div>

        {/* Heading */}
        <h1 className="font-playfair font-black text-[#2D5016] leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
        >
          The Finest{' '}
          <em className="text-[#E8891A] not-italic">Kesar Mangoes</em>
          ,<br />
          Direct From Our Farm
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
          No middlemen. No cold storage. Hand-picked from our Gir orchard and
          delivered fresh to your door — the true taste of Gujarat.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20a%2010kg%20Kesar%20mango%20box%20from%20KK%20Mango%20Farm%20(Surva%20Gir)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F5A623] text-white font-bold text-base px-8 py-4 rounded-full transition-all hover:bg-[#E8891A] hover:-translate-y-1"
            style={{ boxShadow: '0 4px 20px rgba(245,166,35,0.4)' }}
          >
            📦 Order 10kg Box
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 border-2 border-[#2D5016] text-[#2D5016] font-bold text-base px-7 py-4 rounded-full transition-all hover:bg-[#2D5016] hover:text-white"
          >
            Our Farm Story
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 pt-8 border-t border-black/10">
          <div>
            <div className="font-playfair font-black text-3xl text-[#2D5016]">500+</div>
            <div className="text-xs text-gray-500 mt-1">Happy Families</div>
          </div>
          <div>
            <div className="font-playfair font-black text-3xl text-[#2D5016]">100%</div>
            <div className="text-xs text-gray-500 mt-1">Farm Fresh</div>
          </div>
          <div>
            <div className="font-playfair font-black text-3xl text-[#2D5016]">5 ★</div>
            <div className="text-xs text-gray-500 mt-1">Customer Rating</div>
          </div>
        </div>
      </div>

      {/* Floating Mango Emoji */}
      <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 text-[11rem] animate-float select-none"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
      >
        🥭
      </div>
    </section>
  )
}
