export default function Footer() {
  return (
    <footer className="bg-[#2D5016] text-white px-6 md:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🥭</span>
            <span className="font-playfair font-black text-xl">
              KK <span className="text-[#F5A623]">Mango</span> Farm
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Premium Kesar mangoes directly from our orchard in Surva Gir, Gujarat.
            No middlemen — just pure farm-fresh quality, delivered to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Why Choose Us', href: '#why' },
              { label: 'Order Box', href: '#shop' },
              { label: 'Our Farm', href: '#about' },
              { label: 'Reviews', href: '#reviews' },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/70 text-sm hover:text-[#F5A623] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-[#F5A623] transition-colors flex items-center gap-2"
              >
                💬 WhatsApp Us
              </a>
            </li>
            <li>
              <a href="tel:+919999999999" className="text-white/70 text-sm hover:text-[#F5A623] transition-colors flex items-center gap-2">
                📞 Call Us
              </a>
            </li>
            <li>
              <span className="text-white/70 text-sm flex items-center gap-2">
                📍 Surva Gir, Gujarat
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
        © 2026 KK Mango Farm, Surva Gir. All rights reserved. Made with 🥭 in Gujarat.
      </div>
    </footer>
  )
}
