import React from 'react'

export default function Home() {
  const ageGroups = [
    { name: "فئة الكبار (Senior)", label: "عصبة جهة مراكش آسفي", icon: "🏀", status: "competition" },
    { name: "فئة أقل من 17 سنة (U17)", label: "عصبة درعة تافيلالت", icon: "⚡", status: "local" },
    { name: "فئة أقل من 15 سنة (U15)", label: "عصبة درعة تافيلالت", icon: "🔥", status: "local" },
    { name: "فئة أقل من 13 سنة (U13)", label: "عصبة درعة تافيلالت", icon: "🌟", status: "local" },
    { name: "مدرسة كرة السلة (U11 - U9)", label: "عصبة درعة تافيلالت", icon: "🎒", status: "local" }
  ];

  const legalStatus = [
    { title: "متطلبات الاعتماد", detail: "متوفرة من طرف الوزارة الوصية" },
    { title: "النظام الأساسي", detail: "مصادق عليه من طرف الوزارة" },
    { title: "الانخراط السنوي", detail: "صادر عن الجامعة الملكية المغربية" }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 text-right antialiased selection:bg-[#0B4028] selection:text-white" dir="rtl">
      
      {/* 1. قسم الواجهة الترحيبية (Hero Section) - تم تعديله للأصفر والأخضر بنجاح */}
      <section className="relative bg-[#D4AF37] text-[#0B4028] pt-24 pb-44 px-4 overflow-hidden border-b-4 border-[#0B4028]">
        {/* النقاط الخلفية الجمالية بالأخضر فوق الأصفر */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0B4028_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto max-w-4xl space-y-6 relative z-10 text-center">
          {/* البادج الفوقاني متناسق بالأخضر */}
          <div className="inline-flex items-center gap-2 bg-[#0B4028]/10 backdrop-blur-md text-[#0B4028] border border-[#0B4028]/20 px-4 py-2 rounded-full font-bold text-xs shadow-sm">
            <span>🏀</span> البوابة الرسمية لنادي C.B.Z
          </div>
          
          {/* العنوان الكبير بالأخضر الكامل مع خط تحت كلمة زاكورة */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0B4028] leading-tight drop-shadow-sm">
            نادي كرة السلة <span className="underline decoration-4 decoration-[#0B4028]">زاكورة</span>
          </h1>
          
          {/* الوصف بالأخضر الداكن لضمان أعلى نسبة وضوح وقراءة فوق الأصفر */}
          <p className="text-[#0B4028]/90 max-w-2xl mx-auto text-base md:text-xl font-bold leading-relaxed">
            تأسس النادي ليقود التميز الرياضي برؤية احترافية، ويمثل بفخر جهة درعة تافيلالت في منافسات كرة السلة الوطنية.
          </p>
        </div>
      </section>

      {/* 📸 2. الحاوية العائمة لصورة الفريق الجمالية (محفوظة بالكامل) */}
      <section className="container mx-auto max-w-4xl px-4 -mt-28 relative z-20">
        <div className="bg-white p-3 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(11,64,40,0.12)] border border-slate-100 overflow-hidden">
          <div className="relative rounded-[2rem] overflow-hidden group shadow-inner bg-slate-100">
            <img 
              src="/team-photo.jpg.jpeg" 
              alt="فريق نادي زاكورة لكرة السلة" 
              className="w-full h-auto object-cover max-h-[460px] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl border border-white/10">
              📸 الصورة الرسمية الجماعية لطاقم ولاعبي النادي
            </div>
          </div>
        </div>
      </section>

      {/* 📑 3. الكتلة الهندسية للبطاقة التقنية والمعلومات العامة */}
      <section className="container mx-auto max-w-5xl px-4 mt-20">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-slate-100/80 space-y-12">
          
          {/* عنوان القسم */}
          <div className="flex items-center gap-4 border-r-4 border-[#0B4028] pr-4">
            <div>
              <h2 className="text-2xl md:text-3.5xl font-black text-[#0B4028] tracking-tight">📊 الهوية التعريفية والبطاقة التقنية</h2>
              <p className="text-xs md:text-sm text-slate-400 font-bold mt-1">البيانات الإدارية، الهيكلية الرياضية، والوضعية القانونية المعتمدة</p>
            </div>
          </div>

          {/* شبكة البطاقات العلوية الأربعة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: "الاسم الرسمي للنادي", value: "نادي كرة السلة زاكورة (C.B.Z)", style: "text-slate-800" },
              { label: "سنة التأسيس الاعتبارية", value: "2021 م", style: "text-[#0B4028]" },
              { label: "الامتداد الجغرافي والمقر", value: "زاكورة، درعة تافيلالت", style: "text-slate-800" },
              { label: "المستوى والتصنيف الحالي", value: "القسم الوطني الثالث هواة", style: "text-[#amber-800] text-amber-700 font-black" }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100/70 hover:bg-white hover:shadow-lg hover:border-emerald-100/50 transition-all duration-300 flex flex-col justify-center min-h-[110px]">
                <span className="text-[11px] text-slate-400 font-bold block mb-2">{card.label}</span>
                <span className={`text-sm md:text-base font-black leading-snug ${card.style}`}>{card.value}</span>
              </div>
            ))}
          </div>

          {/* الموقف الإداري والاعتماد القانوني */}
          <div className="space-y-4 pt-2">
            <h3 className="font-black text-sm text-slate-700 flex items-center gap-2">
              <span className="text-[#0B4028] text-base">•</span> الوضعية الإدارية والاعتماد الجامعي:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {legalStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-emerald-50/30 text-emerald-950 p-5 rounded-2xl border border-emerald-100/40 shadow-sm">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-emerald-950">{item.title}</h4>
                    <p className="text-xs text-emerald-700 font-bold">{item.detail}</p>
                  </div>
                  <span className="flex items-center justify-center bg-emerald-500 text-white text-xs w-5 h-5 rounded-full shrink-0 shadow-sm font-sans">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* التقرير الاستثنائي الجغرافي */}
          <div className="bg-amber-50/40 rounded-2xl p-6 md:p-8 border border-amber-200/50 space-y-3 shadow-inner relative overflow-hidden">
            <h3 className="font-black text-base md:text-lg text-amber-900 flex items-center gap-2">
              📌 تقرير التوزيع الجغرافي ومظاهر التنافس الاستثنائية
            </h3>
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed max-w-4xl">
              يُعد نادي زاكورة لكرة السلة هو <strong className="text-slate-900 font-black">الفريق الممثل الوحيد لجهة درعة تافيلالت</strong> في فئة الكبار. وبناءً على عدم تواجد بطولة محلية منافسة للكبار داخل حدود الجهة، فقد تم رسمياً وباعتماد جامعي إدماج <strong className="text-[#0B4028] font-black">فئة الكبار (Senior) للمنافسة ببطولة عصبة جهة مراكش آسفي</strong>. بينما تحافظ وتنشط <strong className="text-slate-900 font-black">كافة الفئات العمرية الصغرى والناشئة</strong> في بطولات الممارسة المحلية التابعة لـ <strong className="text-amber-900 font-black">عصبة درعة تافيلالت لكرة السلة</strong>.
            </p>
          </div>

        </div>
      </section>

      {/* 🏅 4. توزيع الفئات العمرية والجهات الحاضنة لها */}
      <section className="container mx-auto max-w-5xl px-4 mt-20 space-y-6">
        <div className="flex items-center gap-4 border-r-4 border-[#0B4028] pr-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B4028] tracking-tight">🏅 تصنيف الفئات العمرية والارتباط الجغرافي</h2>
            <p className="text-xs md:text-sm text-slate-400 font-bold mt-1">توزيع الهرم الرياضي للنادي ومجال ممارسته الرسمية حسب العصب</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {ageGroups.map((group, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-slate-100 text-center space-y-4 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-3xl block filter drop-shadow-sm mb-2">{group.icon}</span>
                <h4 className="font-black text-slate-800 text-sm md:text-base leading-tight px-1">{group.name}</h4>
              </div>
              <div>
                <span className={`inline-block w-full py-2 rounded-xl font-black text-[10px] md:text-xs tracking-tight transition-colors ${
                  group.status === 'competition' 
                    ? 'bg-amber-100/70 text-amber-900 border border-amber-200/50' 
                    : 'bg-slate-100/80 text-slate-700 border border-slate-200/60'
                }`}>
                  {group.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}