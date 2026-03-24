const methods = [
  {
    icon: '💬',
    title: 'WhatsApp',
    desc: 'Chat with us and place your order instantly',
    href: 'https://wa.me/919909286298?text=Hi!%20I%20want%20to%20order%20Kesar%20mangoes%20from%20KK%20Mango%20Farm',
  },
  {
    icon: '📞',
    title: 'Phone Call',
    desc: 'Call us directly — we love talking to customers',
    href: 'tel:+919909286298',
  },
  {
    icon: '🏡',
    title: 'Visit the Farm',
    desc: 'Come see our Surva Gir orchard and pick up fresh',
    href: '#about',
  },
]

export default function OrderCTA() {
  return (
    <section
      className="py-24 px-6 md:px-16 text-center"
      style={{ background: 'linear-gradient(135deg, #F5A623 0%, #E8891A 100%)' }}
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
        Easy Ordering
      </p>
      <h2 className="font-playfair font-black text-white leading-tight mb-4"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        3 ways to order
      </h2>
      <p className="text-white/80 text-base max-w-md mx-auto leading-relaxed mb-14">
        Order whichever way is easiest for you. We're always happy to hear from you!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
        {methods.map((m, i) => (
          <a
            key={i}
            href={m.href}
            target={m.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl p-8 text-white text-left transition-all hover:-translate-y-1"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="text-4xl mb-4">{m.icon}</div>
            <h3 className="font-bold text-lg mb-2">{m.title}</h3>
            <p className="text-white/75 text-sm leading-relaxed">{m.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
