const badges = [
  '🌿 Naturally Grown',
  '🚫 No Artificial Ripening',
  '👨‍🌾 Family Farm',
  '📍 Surva Gir, Gujarat',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[#FFFDF7]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual */}
        <div
          className="rounded-3xl p-16 text-center text-8xl relative order-1 lg:order-none"
          style={{
            background: 'linear-gradient(135deg, #FFF3DC, #E8F5D0)',
          }}
        >
          🥭
          <div className="mt-4 text-sm font-semibold text-[#2D5016] font-dm">KK Mango Farm · Surva Gir</div>
          <span className="absolute top-5 right-5 text-3xl">🌿</span>
          <span className="absolute bottom-5 left-5 text-2xl">🌳</span>
        </div>

        {/* Text */}
        <div className="order-none lg:order-1">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8891A] mb-3">
            Our Farm Story
          </p>
          <h2 className="font-playfair font-black text-[#2D5016] leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Grown with care,<br />harvested with pride
          </h2>
          <div className="space-y-4 text-gray-500 text-base leading-relaxed">
            <p>
              Our mango orchard in <strong className="text-[#2D5016]">Surva Gir, Gujarat</strong> has
              been a family tradition for generations. We grow the world-famous
              <strong className="text-[#2D5016]"> Kesar mango</strong> — known for its rich saffron
              color, intense aroma, and unforgettable sweetness.
            </p>
            <p>
              Every season, we carefully tend to our trees, harvest at the perfect
              moment, and deliver directly to families and businesses across Gujarat.
              Our Gir soil and climate give our Kesar mangoes a distinct richness you
              simply cannot find elsewhere.
            </p>
            <p>
              When you order from KK Mango Farm, you're not buying from a store —
              you're buying <strong className="text-[#2D5016]">directly from the farmer</strong>, with
              full traceability from tree to table.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {badges.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-[#E8F5D0] text-[#2D5016] text-xs font-semibold px-4 py-2 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
