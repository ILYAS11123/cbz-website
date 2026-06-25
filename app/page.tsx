import React from 'react'

// 🚀 إعدادات الـ SEO الخاصة بالصفحة الرئيسية والـ OpenGraph للبارطاج
export const metadata = {
  title: 'نادي كرة السلة زاكورة | الموقع الرسمي C.B.Z',
  description: 'اكتشف الهوية التعريفية لنادي كرة السلة زاكورة (C.B.Z). تصنيف الفئات العمرية، الوضعية القانونية، وتقارير الممارسة الرياضية بجهة درعة تافيلالت.',
  keywords: ['نادي كرة السلة زاكورة', 'كرة السلة زاكورة', 'C.B.Z', 'عصبة درعة تافيلالت', 'كرة السلة درعة تافيلالت', 'رياضة زاكورة'],
  openGraph: {
    title: 'نادي كرة السلة زاكورة | الموقع الرسمي C.B.Z',
    description: 'البوابة الرسمية والبطاقة التقنية لنادي كرة السلة زاكورة، ممثل جهة درعة تافيلالت في منافسات كرة السلة الوطنية.',
    url: 'https://cbz-zagora.vercel.app',
    siteName: 'C.B.Z Zagora',
    locale: 'ar_MA',
    type: 'website',
    images: [
      {
        url: '/team-photo.jpg.jpeg',
        width: 1200,
        height: 630,
        alt: 'الصورة الرسمية الجماعية للاعبي وطاقم نادي زاكورة لكرة السلة',
      },
    ],
  },
}

export default function Home() {
  // 🏀 معطيات الفئات العمرية المنتمية للنادي
  const ageGroups = [
    { name: "فئة الكبار (Senior)", label: "عصبة جهة مراكش آسفي", icon: "🏀", status: "competition", desc: "الممثل الوحيد للجهة في المنافسات الوطنية" },
    { name: "فئة أقل من 17 سنة (U17)", label: "عصبة درعة تافيلالت", icon: "⚡", status: "local", desc: "البطولة الجهوية لفئة الفتيان" },
    { name: "فئة أقل من 15 سنة (U15)", label: "عصبة درعة تافيلالت", icon: "🔥", status: "local", desc: "فئة الصغار لتطوير المهارات الأساسية" },
    { name: "فئة أقل من 13 سنة (U13)", label: "عصبة درعة تافيلالت", icon: "🌟", status: "local", desc: "البراعم الواعدة لمستقبل كرة السلة بالمدينة" },
    { name: "مدرسة كرة السلة (U11 - U9)", label: "عصبة درعة تافيلالت", icon: "🎒", status: "local", desc: "قاعدة التكوين والتلقين الأولي للصغار" }
  ];

  // 📋 تفاصيل الوضعية القانونية والاعتماد
  const legalStatus = [
    { title: "متطلبات الاعتماد", detail: "متوفرة بالكامل ومنتظمة من طرف الوزارة الوصية" },
    { title: "النظام الأساسي", detail: "ملائم ومصادق عليه طبقاً للقوانين الجاري بها العمل" },
    { title: "الانخراط السنوي", detail: "مستوفى وصادر رسمياً عن الجامعة الملكية المغربية" }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 text-right antialiased selection:bg-[#0B4028] selection:text-white" dir="rtl">
      
      {/* 👑 واجهة الترحيب الكبرى (Hero Section) باللون الأصفر والرموز الخلفية */}
      <section className="relative bg-[#D4AF37] text-[#0B4028] pt-24 pb-44 px-4 overflow-hidden border-b-4 border-[#0B4028]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0B4028_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto max-w-4xl space-y-6 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#0B4028]/10 backdrop-blur-md text-[#0B4028] border border-[#0B4028]/20 px-4 py-2 rounded-full font-bold text-xs shadow-sm hover:bg-[#0B4028]/20 transition-all cursor-pointer">
            <span>🏀</span> البوابة الرسمية والمنصة التعريفية لنادي C.B.Z
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0B4028] leading-tight drop-shadow-sm">
            نادي كرة السلة <span className="underline decoration-4 decoration-[#0B4028] tracking-wide">زاكورة</span>
          </h1>
          <p className="text-[#0B4028]/90 max-w-2xl mx-auto text-base md:text-xl font-bold leading-relaxed">
            تأسس النادي ليقود التميز الرياضي برؤية احترافية طموحة، ويمثل بفخر واعتزاز جماهير جهة درعة تافيلالت في كبرى منافسات كرة السلة الوطنية.
          </p>
        </div>
      </section>

      {/* 📸 إطار الصورة الرسمية للفريق (تأثير مائل ومتداخل مع الواجهة) */}
      <section className="container mx-auto max-w-4xl px-4 -mt-28 relative z-20">
        <div className="bg-white p-3 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(11,64,40,0.15)] border border-slate-100/80 overflow-hidden hover:shadow-[0_30px_60px_-10px_rgba(11,64,40,0.2)] transition-shadow duration-500">
          <div className="relative rounded-[2rem] overflow-hidden group shadow-inner bg-slate-100">
            <img 
              src="/team-photo.jpg.jpeg" 
              alt="فريق نادي زاكورة لكرة السلة" 
              className="w-full h-auto object-cover max-h-[480px] transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90"></div>
            <div className="absolute bottom-5 right-5 left-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-5 py-3 rounded-2xl border border-white/10">
              <span className="flex items-center gap-2">✨ <strong>الصورة الرسمية الجماعية:</strong> طاقم، مسيرو ولاعبو نادي كرة السلة زاكورة</span>
              <span className="bg-[#D4AF37] text-[#0B4028] font-black px-3 py-1 rounded-lg text-[10px]">موسم 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 القسم الخاص بالبطاقة التقنية والبيانات الإدارية */}
      <section className="container mx-auto max-w-5xl px-4 mt-24">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-slate-100/90 space-y-12">
          
          <div className="flex items-center gap-4 border-r-4 border-[#0B4028] pr-4">
            <div>
              <h2 className="text-2xl md:text-3.5xl font-black text-[#0B4028] tracking-tight">📊 الهوية التعريفية والبطاقة التقنية</h2>
              <p className="text-xs md:text-sm text-slate-400 font-bold mt-1">البيانات الإدارية الرسمية، الهيكلية الرياضية العامة، والوضعية القانونية المعتمدة</p>
            </div>
          </div>

          {/* مربعات المعلومات الأربعة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: "الاسم الرسمي للنادي", value: "نادي كرة السلة زاكورة (C.B.Z)", style: "text-slate-800" },
              { label: "سنة التأسيس الاعتبارية", value: "2021 م", style: "text-[#0B4028]" },
              { label: "الامتداد الجغرافي والمقر", value: "زاكورة، درعة تافيلالت", style: "text-slate-800" },
              { label: "المستوى والتصنيف الحالي", value: "القسم الوطني الثالث هواة", style: "text-amber-700 font-black" }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center min-h-[120px] hover:bg-slate-100/50 transition-colors">
                <span className="text-[11px] text-slate-400 font-bold block mb-2">{card.label}</span>
                <span className={`text-sm md:text-base font-black leading-snug ${card.style}`}>{card.value}</span>
              </div>
            ))}
          </div>

          {/* الاستيفاء القانوني والجامعي */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-black text-sm text-slate-700 flex items-center gap-2">
              <span className="text-[#0B4028] text-xl">•</span> الوضعية الإدارية والاعتماد الجامعي الرسمي:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {legalStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-emerald-50/40 text-emerald-950 p-5 rounded-2xl border border-emerald-100/60 shadow-sm hover:border-emerald-200 transition-colors">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-emerald-950">{item.title}</h4>
                    <p className="text-xs text-emerald-700 font-bold leading-relaxed">{item.detail}</p>
                  </div>
                  <span className="flex items-center justify-center bg-[#0B4028] text-white text-xs w-6 h-6 rounded-full shrink-0 shadow-md">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* التقرير الجغرافي الاستثنائي */}
          <div className="bg-amber-50/50 rounded-2xl p-6 md:p-8 border border-amber-200/60 space-y-3 shadow-inner relative overflow-hidden">
            <div className="absolute left-0 top-0 text-7xl opacity-5 font-black p-2 select-none">📌</div>
            <h3 className="font-black text-base md:text-lg text-amber-900 flex items-center gap-2">📌 تقرير التوزيع الجغرافي ومظاهر التنافس الاستثنائية</h3>
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed max-w-4xl">
              يُعد نادي زاكورة لكرة السلة هو <strong className="text-slate-900 font-black">الفريق الممثل الوحيد لجهة درعة تافيلالت</strong> في فئة الكبار. وبناءً على عدم تواجد بطولة محلية منافسة لفئة الكبار داخل الحدود الترابية للجهة، فقد تم رسمياً وباعتماد جامعي مصادق عليه إدماج <strong className="text-[#0B4028] font-black">فئة الكبار (Senior) للمنافسة ببطولة عصبة جهة مراكش آسفي</strong>. بينما تحافظ وتنشط <strong className="text-slate-900 font-black">كافة الفئات العمرية الصغرى والناشئة</strong> في بطولات الممارسة المحلية التابعة لـ <strong className="text-amber-900 font-black">عصبة درعة تافيلالت لكرة السلة</strong> تعزيزاً للتنقيب عن المواهب المحلية.
            </p>
          </div>

        </div>
      </section>

      {/* 🏅 قسم بطاقات الفئات العمرية */}
      <section className="container mx-auto max-w-5xl px-4 mt-20 space-y-6">
        <div className="flex items-center gap-4 border-r-4 border-[#0B4028] pr-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B4028] tracking-tight">🏅 تصنيف الفئات العمرية والارتباط الجغرافي</h2>
            <p className="text-xs md:text-sm text-slate-400 font-bold mt-1">توزيع الهرم الرياضي للنادي ومجال ممارسته الرسمية وتنافسيته حسب العصب الوطنية</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {ageGroups.map((group, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm text-center space-y-4 flex flex-col justify-between min-h-[220px] hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-2">
                <span className="text-3xl block filter drop-shadow-sm mb-2">{group.icon}</span>
                <h4 className="font-black text-slate-800 text-sm md:text-base leading-tight px-1">{group.name}</h4>
                <p className="text-[11px] text-slate-400 font-medium leading-normal px-2">{group.desc}</p>
              </div>
              <div>
                <span className={`inline-block w-full py-2.5 rounded-xl font-black text-[10px] md:text-xs tracking-tight ${group.status === 'competition' ? 'bg-amber-100 text-amber-900 border border-amber-200/60' : 'bg-slate-100 text-slate-700 border border-slate-200/60'}`}>
                  {group.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}