const cards = [
  {
    icon: '🌱',
    title: 'Direct from Orchard',
    desc: 'We grow, harvest, and deliver ourselves. No middlemen means fresher fruit and honest prices for your family.',
  },
  {
    icon: '🍃',
    title: 'Naturally Ripened',
    desc: 'Our Kesar mangoes ripen on the tree in Gir\'s natural climate — never artificially. Pure taste, pure sweetness.',
  },
  {
    icon: '📦',
    title: 'Carefully Hand-Packed',
    desc: 'Every mango is hand-selected and packed in ventilated boxes to arrive in perfect condition at your door.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    desc: 'Same-day or next-day delivery across Gujarat. From our Surva Gir farm to your home in hours, not days.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 px-6 md:px-16 bg-[#FFFDF7]">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#E8891A] mb-3">
        Why Choose Us
      </p>
      <h2 className="font-playfair font-black text-[#2D5016] leading-tight mb-4"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Not just mangoes.<br />An experience.
      </h2>
      <p className="text-gray-500 text-base max-w-xl leading-relaxed">
        KK Mango Farm (Surva Gir) has been growing Kesar mangoes for generations.
        Here's why families across Gujarat trust us every season.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 border border-[#F5A623]/20 card-hover relative overflow-hidden group"
          >
            {/* Top border accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A623] to-[#4A7C23] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
            <div className="text-4xl mb-5">{card.icon}</div>
            <h3 className="font-playfair font-bold text-lg text-[#2D5016] mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
