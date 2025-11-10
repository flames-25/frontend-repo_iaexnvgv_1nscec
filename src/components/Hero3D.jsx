import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = ({ t, onViewCollection, lang, setLang }) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-3xl bg-[var(--cream-white)] shadow-[0_40px_120px_rgba(236,197,192,0.35)]">
      {/* Spline background or graceful fallback gradient */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/d0A7R6n2Zq3Kk4l2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center lg:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm text-[var(--text-muted)] backdrop-blur-md shadow-[0_12px_32px_rgba(244,228,193,0.45)]">
          <span className="h-2 w-2 rounded-full" style={{ background: 'var(--peachy-coral)' }} />
          <span>ElModa DZ · {t.hero.badge}</span>
        </div>

        <h1 className="text-4xl font-serif leading-tight text-[var(--text-charcoal)] sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t.hero.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">
          {t.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={onViewCollection}
            className="btn-primary"
            style={{
              background: 'var(--gradient-sunset)',
              color: 'var(--text-charcoal)',
              padding: '1rem 2rem',
              borderRadius: 999,
              boxShadow: '0 12px 32px rgba(255,180,162,0.35)',
              transition: 'transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.5s, background 0.5s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) rotateX(2deg) scale(1.06)';
              e.currentTarget.style.boxShadow = '0 24px 64px rgba(255,180,162,0.55)';
              e.currentTarget.style.background = 'var(--gradient-dreamy)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,180,162,0.35)';
              e.currentTarget.style.background = 'var(--gradient-sunset)';
            }}
          >
            ✨ {t.hero.cta}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 rounded-full bg-white/70 px-2 py-1 backdrop-blur-md shadow-[0_8px_24px_rgba(230,215,247,0.35)]">
            {['dz', 'fr', 'en'].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                  lang === code ? 'bg-[var(--soft-lavender)] text-[var(--text-charcoal)] shadow' : 'text-[var(--text-muted)] hover:text-[var(--text-charcoal)]'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-24 w-24 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,180,162,0.45), transparent 70%)' }} />
        <div className="absolute bottom-10 right-16 h-32 w-32 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(244,228,193,0.5), transparent 70%)' }} />
      </div>
    </section>
  );
};

export default Hero3D;
