import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Fatima, Oran', text: 'Wow! Fabric feels amazing, stitching perfect. Loved it!' },
  { id: 2, name: 'Imen, Alger', text: 'Service rapide, très élégant. Je recommande fortement.' },
  { id: 3, name: 'Sara, Béjaïa', text: 'الجودة رائعة والتفاصيل دقيقة. عجبني بزاف!' },
];

const WhyUsReviews = ({ t }) => {
  return (
    <section className="mx-auto my-20 max-w-6xl px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl bg-[var(--warm-beige)]/60 p-8 shadow-[0_24px_80px_rgba(212,196,176,0.5)]">
          <h3 className="mb-4 text-2xl font-serif text-[var(--text-charcoal)]" style={{ fontFamily: 'Playfair Display, serif' }}>{t.why.title}</h3>
          <ul className="grid gap-3 text-[var(--text-charcoal)]">
            {t.why.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2 rounded-xl bg-white/60 p-3 shadow">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--peachy-coral)' }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-serif text-[var(--text-charcoal)]" style={{ fontFamily: 'Playfair Display, serif' }}>{t.reviews.title}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.id} className="review-card group rounded-2xl bg-white/70 p-5 text-[var(--text-charcoal)] shadow-[0_20px_60px_rgba(230,215,247,0.45)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(230,215,247,0.6)]">
                <div className="mb-2 flex text-[var(--peachy-coral)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#FFB4A2" color="#FFB4A2" />
                  ))}
                </div>
                <p className="text-sm">“{r.text}”</p>
                <span className="mt-2 block text-xs text-[var(--text-muted)]">- {r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsReviews;
