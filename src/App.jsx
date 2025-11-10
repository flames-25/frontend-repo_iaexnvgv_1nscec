import React, { useMemo, useRef, useState } from 'react';
import Hero3D from './components/Hero3D';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import WhyUsReviews from './components/WhyUsReviews';

// Global CSS variables for the palette
const cssVars = `:root { 
  --primary-rose: #F8E8EE; --soft-blush: #FFD6E0; --dusty-rose: #E8B4BC;
  --champagne-gold: #F4E4C1; --rose-gold: #ECC5C0; --soft-lavender: #E6D7F7;
  --cream-white: #FFFBF5; --warm-beige: #F5EBE0; --soft-taupe: #D4C4B0;
  --text-charcoal: #3D3D3D; --text-muted: #6B5B5B;
  --peachy-coral: #FFB4A2; --soft-mauve: #D4A5A5;
  --gradient-dreamy: linear-gradient(135deg, #FFD6E0 0%, #F8E8EE 50%, #E6D7F7 100%);
  --gradient-sunset: linear-gradient(120deg, #FFB4A2 0%, #ECC5C0 50%, #F4E4C1 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(248,232,238,0.7), rgba(230,215,247,0.85));
}`;

const translations = {
  dz: {
    nav: { home: 'الرئيسية', shop: 'المجموعة', about: 'قصتنا', contact: 'اتصل بنا' },
    hero: { badge: 'Luxury · Handmade', headline: 'ستايلك.. حكايتك. صُنِعت في الجزائر.', subheadline: 'موضة عصرية، أنثوية وفاخرة بتفاصيل دقيقة.', cta: 'اكتشفي الجديد' },
    collection: { title: 'المجموعة الجديدة', subtitle: 'تصاميم فاخرة بلمسة جزائرية', view: 'التفاصيل →' },
    product: { order_now: 'اطلبي الآن', in_stock: 'متوفر', limited: 'محدود', size_guide: 'دليل المقاسات', add_review: 'أضيفي رأيًا' },
    why: { title: 'لماذا تختارينّا؟', points: ['أقمشة عالية الجودة', 'صناعة جزائرية 100%', 'توصيل سريع', 'الدفع عند الاستلام', 'إرجاع سهل'] },
    reviews: { title: 'آراء الزبونات' },
    form: { full_name: 'الاسم الكامل', phone: 'رقم الهاتف', wilaya: 'الولاية', size: 'المقاس', address: 'العنوان', price: 'السعر', shipping: 'الشحن', total: 'الإجمالي', confirm_order: 'تأكيد الطلب', confirmed: 'تم استلام طلبك، سنتواصل معك قريبًا.' }
  },
  fr: {
    nav: { home: 'Accueil', shop: 'Collection', about: 'Notre histoire', contact: 'Contact' },
    hero: { badge: 'Luxe · Fait main', headline: 'Votre style, votre histoire. Conçu en Algérie.', subheadline: 'Mode moderne, féminine et raffinée.', cta: 'Voir les nouveautés' },
    collection: { title: 'Nouvelle collection', subtitle: 'Élégance à la touche algérienne', view: 'Voir détails →' },
    product: { order_now: 'Commander', in_stock: 'Disponible', limited: 'Limité', size_guide: 'Guide des tailles', add_review: 'Ajouter un avis' },
    why: { title: 'Pourquoi nous choisir ?', points: ["Tissus de haute qualité", 'Fabriqué en Algérie', 'Livraison express', 'Paiement à la livraison', 'Retours faciles'] },
    reviews: { title: 'Avis clients' },
    form: { full_name: 'Nom complet', phone: 'Téléphone', wilaya: 'Wilaya', size: 'Taille', address: 'Adresse', price: 'Prix', shipping: 'Livraison', total: 'Total', confirm_order: 'Confirmer', confirmed: 'Commande confirmée. Merci !' }
  },
  en: {
    nav: { home: 'Home', shop: 'Collection', about: 'Our Story', contact: 'Contact' },
    hero: { badge: 'Luxury · Handmade', headline: 'Your Style, Your Story. Crafted in Algeria.', subheadline: 'Modern fashion designed for you.', cta: 'View New' },
    collection: { title: 'New Collection', subtitle: 'Elegance with Algerian soul', view: 'View details →' },
    product: { order_now: 'Order Now', in_stock: 'Available', limited: 'Limited', size_guide: 'Size Guide', add_review: 'Add Review' },
    why: { title: 'Why choose us?', points: ['High-quality fabrics', 'Algerian-made', 'Express delivery', 'Cash on delivery', 'Easy returns'] },
    reviews: { title: 'Customer Reviews' },
    form: { full_name: 'Full Name', phone: 'Phone', wilaya: 'Wilaya', size: 'Size', address: 'Address', price: 'Price', shipping: 'Shipping', total: 'Total', confirm_order: 'Confirm Order', confirmed: 'Order received. We will contact you shortly.' }
  }
};

function App() {
  const [lang, setLang] = useState('dz');
  const t = useMemo(() => translations[lang], [lang]);
  const collectionRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[var(--primary-rose)]/40 p-4">
      <style>{cssVars}</style>

      {/* Top navigation */}
      <header className="mx-auto mb-4 flex max-w-6xl items-center justify-between rounded-2xl bg-white/70 px-5 py-3 text-[var(--text-charcoal)] shadow-[0_12px_32px_rgba(230,215,247,0.45)] backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full" style={{ background: 'var(--gradient-sunset)' }} />
          <span className="font-serif text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>ElModa DZ</span>
        </div>
        <nav className="hidden gap-6 sm:flex">
          {[t.nav.home, t.nav.shop, t.nav.about, t.nav.contact].map((item, idx) => (
            <a key={idx} href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-charcoal)]">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <Hero3D t={t} onViewCollection={scrollToCollection} lang={lang} setLang={setLang} />

      <ProductGrid t={t} onSelect={setSelected} ref={collectionRef} />

      <WhyUsReviews t={t} />

      <footer className="mx-auto my-16 max-w-6xl rounded-2xl bg-[var(--warm-beige)]/60 p-6 text-center text-sm text-[var(--text-muted)] shadow">
        © {new Date().getFullYear()} ElModa DZ. All rights reserved.
      </footer>

      <ProductModal product={selected} onClose={() => setSelected(null)} t={t} />
    </div>
  );
}

export default App;
