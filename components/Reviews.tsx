const reviews = [
  {
    text: 'Best Kesar mangoes I have had in years! So fresh and sweet — you can taste the difference from market mangoes. Ordering every season!',
    name: 'Priya Shah',
    loc: 'Gandhinagar',
    initial: 'P',
  },
  {
    text: 'Ordered for our office gifting. Everyone loved it! Beautiful packaging, arrived perfectly ripe. KK Mango Farm is our go-to now.',
    name: 'Rahul Mehta',
    loc: 'Ahmedabad',
    initial: 'R',
  },
  {
    text: 'Direct from Surva Gir — such a difference in taste! My kids absolutely love these. We have ordered three times this season already.',
    name: 'Anita Patel',
    loc: 'Sector 21, Gandhinagar',
    initial: 'A',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 md:px-16 bg-[#FFF3DC]">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#E8891A] mb-3">
        Customer Reviews
      </p>
      <h2 className="font-playfair font-black text-[#2D5016] leading-tight mb-4"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        What families say
      </h2>
      <p className="text-gray-500 text-base max-w-xl leading-relaxed">
        Don't take our word for it. Here's what our happy customers across Gujarat share every season.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 card-hover"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
          >
            {/* Stars */}
            <div className="text-[#F5A623] text-lg mb-4">★★★★★</div>
            {/* Text */}
            <p className="text-gray-700 text-sm leading-relaxed italic mb-6">"{r.text}"</p>
            {/* Reviewer */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#2D5016] text-white flex items-center justify-center font-bold text-base">
                {r.initial}
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
