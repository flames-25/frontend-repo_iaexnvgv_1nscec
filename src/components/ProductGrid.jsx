import React from 'react';

const sampleProducts = [
  {
    id: 'silk-rose-abaya',
    name: 'Silk Rose Abaya',
    price: 8000,
    badge: 'Available',
    image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'golden-eve-kaftan',
    name: 'Golden Eve Kaftan',
    price: 10400,
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'lavender-dream-dress',
    name: 'Lavender Dream Dress',
    price: 9200,
    badge: 'Available',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductGrid = ({ t, onSelect }) => {
  return (
    <section id="collection" className="relative mx-auto mt-16 max-w-6xl px-6">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-serif text-[var(--text-charcoal)]" style={{ fontFamily: 'Playfair Display, serif' }}>{t.collection.title}</h2>
        <p className="text-sm text-[var(--text-muted)]">{t.collection.subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p)}
            className="group relative overflow-hidden rounded-2xl bg-[var(--warm-beige)] p-3 text-left shadow-[0_20px_60px_rgba(212,196,176,0.45)] transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(212,196,176,0.6)]"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-xl">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.06] group-hover:[transform:perspective(900px)_rotateX(2deg)]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs text-[var(--text-charcoal)] backdrop-blur">
                {p.badge}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-[var(--text-charcoal)]">{p.name}</p>
                <p className="text-sm text-[var(--text-muted)]">{p.price.toLocaleString()} DZD</p>
              </div>
              <span className="text-sm text-[var(--peachy-coral)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {t.collection.view}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
