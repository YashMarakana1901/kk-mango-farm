export default function Shop() {
  return (
    <section
      id="shop"
      className="py-24 px-6 md:px-16"
      style={{ background: '#2D5016' }}
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-[#FFF3DC] mb-3">
        Order Now
      </p>
      <h2 className="font-playfair font-black text-white leading-tight mb-4"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Our Kesar Mango Box
      </h2>
      <p className="text-white/70 text-base max-w-xl leading-relaxed mb-14">
        We offer one carefully curated 10kg box — loaded with the finest Kesar mangoes
        from Surva Gir, picked at peak ripeness just for you.
      </p>

      {/* Single Box Card - centered and prominent */}
      <div className="max-w-md mx-auto relative">
        {/* Popular tag */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-white text-[#2D5016] text-xs font-black tracking-widest uppercase px-5 py-2 rounded-full shadow-lg">
            ⭐ Our Signature Box
          </span>
        </div>

        <div
          className="rounded-3xl p-10 text-white relative overflow-hidden"
          style={{ background: '#F5A623' }}
        >
          {/* Background decoration */}
          <div
            className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-20"
            style={{ background: 'rgba(255,255,255,0.3)' }}
          />
          <div
            className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full opacity-10"
            style={{ background: 'rgba(255,255,255,0.3)' }}
          />

          {/* Emoji */}
          <div className="text-6xl mb-6 relative z-10">🥭</div>

          {/* Weight */}
          <div className="font-playfair font-black text-6xl relative z-10">10 kg</div>
          <div className="text-white/80 text-base mt-1 mb-6 relative z-10">Premium Kesar Mango Box</div>

          {/* Price */}
          <div className="font-playfair font-black text-4xl mb-2 relative z-10">
            ₹899 <span className="text-lg font-normal opacity-70">/ box</span>
          </div>
          <p className="text-white/70 text-sm mb-8 relative z-10">Free home delivery included</p>

          {/* Features */}
          <ul className="space-y-3 mb-10 relative z-10">
            {[
              '25–28 premium Kesar mangoes',
              'Naturally tree-ripened in Surva Gir',
              'Hand-selected, carefully packed',
              'Free delivery to your door',
              'Gift-ready packaging available',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Order Buttons */}
          <div className="space-y-3 relative z-10">
            <a
              href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20a%2010kg%20Kesar%20mango%20box%20from%20KK%20Mango%20Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#2D5016] text-white font-bold py-4 rounded-2xl hover:bg-[#4A7C23] transition-colors text-base"
            >
              💬 Order on WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="flex items-center justify-center gap-3 w-full bg-white/20 text-white font-semibold py-4 rounded-2xl hover:bg-white/30 transition-colors text-sm"
            >
              📞 Call to Order
            </a>
          </div>
        </div>
      </div>

      {/* Delivery note */}
      <p className="text-center text-white/50 text-sm mt-10">
        📍 Delivering across Gujarat · Bulk orders & corporate gifting welcome
      </p>
    </section>
  )
}
