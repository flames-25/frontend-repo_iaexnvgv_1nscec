import React, { useMemo, useState } from 'react';

const WILAYAS = [
  'Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Algiers','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem','M’Sila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arréridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane'
];

const ProductModal = ({ product, onClose, t }) => {
  const [form, setForm] = useState({ name: '', phone: '', wilaya: '', size: '', address: '' });

  const shipping = useMemo(() => 400, []);
  const total = useMemo(() => (product?.price || 0) + shipping, [product, shipping]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4 backdrop-blur">
      <div className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl bg-[var(--cream-white)] shadow-[0_40px_120px_rgba(212,196,176,0.6)] md:grid-cols-2">
        {/* Gallery */}
        <div className="group relative h-full overflow-hidden bg-[var(--soft-lavender)]/20 p-4">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.06] group-hover:[transform:perspective(1000px)_rotateX(3deg)]"
            />
            <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(80%_60%_at_50%_0%, rgba(255,214,224,0.35), transparent 70%)' }} />
          </div>
        </div>

        {/* Order Card */}
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-serif text-[var(--text-charcoal)]" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h3>
              <span className="mt-1 inline-block rounded-full bg-[var(--champagne-gold)]/50 px-3 py-1 text-xs text-[var(--text-charcoal)]">{t.product.in_stock}</span>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/70 px-3 py-1 text-sm text-[var(--text-muted)] shadow hover:text-[var(--text-charcoal)]">✕</button>
          </div>

          <div className="rounded-2xl bg-white/70 p-4 shadow-[0_12px_32px_rgba(230,215,247,0.45)] backdrop-blur">
            <div className="mb-2 text-sm font-medium text-[var(--text-charcoal)]">{t.product.order_now}</div>
            <div className="grid grid-cols-1 gap-3">
              <input className="rounded-xl border border-transparent bg-[var(--warm-beige)]/60 px-3 py-2 text-sm text-[var(--text-charcoal)] outline-none placeholder:text-[var(--text-muted)] focus:ring-2 focus:ring-[var(--soft-lavender)]" placeholder={t.form.full_name} value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
              <input className="rounded-xl border border-transparent bg-[var(--warm-beige)]/60 px-3 py-2 text-sm text-[var(--text-charcoal)] outline-none placeholder:text-[var(--text-muted)] focus:ring-2 focus:ring-[var(--soft-lavender)]" placeholder={t.form.phone} value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
              <select className="rounded-xl border border-transparent bg-[var(--warm-beige)]/60 px-3 py-2 text-sm text-[var(--text-charcoal)] outline-none focus:ring-2 focus:ring-[var(--soft-lavender)]" value={form.wilaya} onChange={(e)=>setForm({...form,wilaya:e.target.value})}>
                <option value="">{t.form.wilaya}</option>
                {WILAYAS.map((w)=> (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
              <select className="rounded-xl border border-transparent bg-[var(--warm-beige)]/60 px-3 py-2 text-sm text-[var(--text-charcoal)] outline-none focus:ring-2 focus:ring-[var(--soft-lavender)]" value={form.size} onChange={(e)=>setForm({...form,size:e.target.value})}>
                <option value="">{t.form.size}</option>
                {['S','M','L','XL'].map((s)=> <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea className="min-h-[80px] rounded-xl border border-transparent bg-[var(--warm-beige)]/60 px-3 py-2 text-sm text-[var(--text-charcoal)] outline-none placeholder:text-[var(--text-muted)] focus:ring-2 focus:ring-[var(--soft-lavender)]" placeholder={t.form.address} value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} />
            </div>

            <div className="mt-4 divide-y divide-[var(--soft-taupe)]/20 rounded-xl bg-white/60 text-sm text-[var(--text-charcoal)] shadow">
              <div className="flex items-center justify-between px-4 py-2"><span>{t.form.price}</span><span>{product.price.toLocaleString()} DZD</span></div>
              <div className="flex items-center justify-between px-4 py-2"><span>{t.form.shipping}</span><span>{shipping.toLocaleString()} DZD</span></div>
              <div className="flex items-center justify-between px-4 py-3 font-semibold"><span>{t.form.total}</span><span>{total.toLocaleString()} DZD</span></div>
            </div>

            <button
              className="mt-4 w-full rounded-full px-5 py-3 text-center text-[var(--text-charcoal)] shadow-[0_12px_32px_rgba(255,180,162,0.35)] transition-all"
              style={{ background: 'var(--gradient-sunset)' }}
              onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-4px) scale(1.02)'; e.currentTarget.style.boxShadow='0 24px 64px rgba(255,180,162,0.55)'; e.currentTarget.style.background='var(--gradient-dreamy)';}}
              onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(255,180,162,0.35)'; e.currentTarget.style.background='var(--gradient-sunset)';}}
              onClick={()=>{
                alert(t.form.confirmed);
                onClose();
              }}
            >
              ✨ {t.form.confirm_order}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
