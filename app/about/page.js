'use client';

import React from 'react';

export default function AboutPage() {
  // 1. المستوى الأول: مؤسسة الرئاسة العليا
  const presidency = [
    { role: "الرئيس", name: "يونس باحفيظ", icon: "👑", img: "/team/younesse_bahfid.jfif", desc: "الإشراف العام والقيادة الإستراتيجية لشؤون النادي" },
    { role: "النائب الأول للرئيس", name: "أيوب بن الحاج", icon: "🤝", img: "/team/ayoub_benelhaj.jpeg", desc: "دعم الرئاسة والتنسيق العام بين مختلف اللجان" },
    { role: "النائب الثاني للرئيس", name: "معاذ اشبرو", icon: "🏀", img: "/team/moad_achbarou.jfif", desc: "متابعة الشؤون الرياضية واللوجستيكية للفريق" }
  ];

  // 2. المستوى الثاني: المكتب التنفيذي (الأمانة والكتابة)
  const executive = [
    { role: "الكاتب العام", name: "عبد العلي حميدة", icon: "📝", img: "/team/abdelali_hamida.jfif", desc: "التنسيق الإداري، المراسلات الرسمية والتوثيق القانوني" },
    { role: "نائب الكاتب العام", name: "زينب باحفيظ", icon: "📋", img: "/team/zineb_bahfid.jpg", desc: "المعاونة الإدارية وتوثيق محاضر الاجتماعات والأنشطة" },
    { role: "أمين المال", name: "الحسين أيت اكهو", icon: "💼", img: "/team/team-photo.jpg.jpeg.jfif", desc: "التدبير المالي الدقيق والميزانية والموارد المالية للنادي" },
    { role: "نائب أمين المال", name: "محمد امين ملكي", icon: "📉", img: "/team/mohamed_amine_malki.jfif", desc: "المراقبة المالية المساعدة والمتابعة المحاسباتية" }
  ];

  // 3. المستوى الثالث: هيئة المستشارين
  const advisors = [
    { role: "المستشار الأول", name: "ياسين باحفيظ", icon: "⚡", img: "/team/yassine_bahfid.jfif", desc: "تقديم الاستشارات الإدارية والتنسيق اللوجستي" },
    { role: "المستشار الثاني", name: "سفيان المركاوي", icon: "🛡️", img: "/team/soufyane_el_margaoui.jfif", desc: "المساهمة في تنظيم ودعم أنشطة النادي" },
    { role: "المستشار الثالث", name: "منتصر لمغيميمي", icon: "🌱", img: "/team/montasser_lamghimimi.jfif", desc: "مواكبة وتطوير الفئات الصغرى والناشئة" },
    { role: "المستشار الرابع", name: "جواد القرس", icon: "📣", img: "/team/jaouad_elkars.jfif", desc: "العلاقات العامة والدعم التنظيمي داخل النادي" }
  ];

  // كومبوننت البطاقة مجهز بقياسات أكبر للتصاور (w-32 h-32 للرئاسة و w-28 h-28 للباقي)
  const MemberCard = ({ member, isLarge }) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm flex flex-col overflow-hidden hover:shadow-md hover:border-emerald-600/20 transition-all duration-300">
        {/* حاوية الصورة الشخصية المكبرة والمحسنة */}
        <div className={`p-8 flex justify-center items-center bg-slate-50/40 border-b border-slate-100 ${isLarge ? 'h-48' : 'h-44'}`}>
          <div className={`relative ${isLarge ? 'w-32 h-32' : 'w-28 h-28'} rounded-2xl overflow-hidden shadow-md bg-slate-100 border-2 border-white flex items-center justify-center`}>
            
            {!imageError ? (
              <img 
                src={member.img} 
                alt={member.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <span className={`filter drop-shadow-sm select-none ${isLarge ? 'text-4xl' : 'text-3xl'}`}>
                {member.icon}
              </span>
            )}

          </div>
        </div>

        {/* تفاصيل العضو الإدارية */}
        <div className="p-5 flex-1 flex flex-col justify-between text-center space-y-2">
          <div>
            <span className="text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md inline-block mb-1">
              {member.role}
            </span>
            <h3 className={`font-black text-slate-800 ${isLarge ? 'text-lg md:text-xl' : 'text-base'}`}>
              {member.name}
            </h3>
          </div>
          <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed px-2 pt-1">
            {member.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 text-right antialiased" dir="rtl">
      
      {/* 🌟 البانر العلوي الترحيبي الجمالي (Hero Section) */}
      <section className="container mx-auto max-w-6xl px-4 pt-8">
        <div className="bg-gradient-to-br from-[#0B4028] to-[#115335] text-white rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-lg border-b-4 border-[#D4AF37]">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 space-y-4">
            <div className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] md:text-xs font-black px-3 py-1 rounded-full">
              تأسس سنة 2021
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-sm">
              نادي كرة السلة <span className="text-[#D4AF37]">زاكورة</span>
            </h1>
            <p className="text-emerald-100/90 max-w-2xl mx-auto text-xs md:text-sm font-medium leading-relaxed">
              الممثل والمنار الوحيد لجهة درعة تافيلالت في كرة السلة، والمنضوي تحت لواء الجامعة الملكية المغربية لكرة السلة.
            </p>
          </div>
        </div>
      </section>

      {/* 👑 العرض الهرمي المتناسق للمكتب المسير */}
      <section className="container mx-auto max-w-6xl px-4 pt-12 space-y-12">
        
        <div className="flex items-center gap-3 border-r-4 border-[#0B4028] pr-4">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
            | الهيكل التنظيمي والمكتب المسير
          </h2>
        </div>

        {/* 🔷 الهرم - المستوى الأول: مؤسسة الرئاسة (3 بطاقات بارزة بتصاور كبار) */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 bg-slate-100/60 inline-block px-3 py-1 rounded-md">المستوى الأول: مؤسسة الرئاسة العليا</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {presidency.map((member, i) => (
              <MemberCard key={i} member={member} isLarge={true} />
            ))}
          </div>
        </div>

        {/* 🔷 الهرم - المستوى الثاني: الهيئة التنفيذية (4 بطاقات متناسقة) */}
        <div className="space-y-4 pt-4">
          <div className="text-xs font-bold text-slate-400 bg-slate-100/60 inline-block px-3 py-1 rounded-md">المستوى الثاني: الأمانة المالية والكتابة العامة</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {executive.map((member, i) => (
              <MemberCard key={i} member={member} isLarge={false} />
            ))}
          </div>
        </div>

        {/* 🔷 الهرم - المستوى الثالث: المستشارين (4 بطاقات مكملة للهيكل) */}
        <div className="space-y-4 pt-4">
          <div className="text-xs font-bold text-slate-400 bg-slate-100/60 inline-block px-3 py-1 rounded-md">المستوى الثالث: السادة المستشارون المكلفون بمهام</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {advisors.map((member, i) => (
              <MemberCard key={i} member={member} isLarge={false} />
            ))}
          </div>
        </div>

      </section>

      {/* القسم السفلي: الوضعية القانونية فقط */}
      <section className="container mx-auto max-w-6xl px-4 mt-16">
        
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-4 max-w-md">
          <h3 className="font-black text-slate-800 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
            📁 الوضعية القانونية
          </h3>
          <ul className="space-y-3 text-xs md:text-sm font-bold text-slate-600">
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 font-sans">✓</span> أمر اعتماد الوزارة: <span className="text-emerald-700 mr-auto font-medium">متوفر</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 font-sans">✓</span> النظام الأساسي: <span className="text-emerald-700 mr-auto font-medium">مصادق عليه</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600 font-sans">✓</span> انخراط الجامعة: <span className="text-emerald-700 mr-auto font-medium">متوفر</span>
            </li>
          </ul>
        </div>

      </section>

      {/* شريط الحقوق السفلي */}
      <footer className="w-full bg-[#0B4028] text-white text-center py-4 mt-20 text-xs font-bold shadow-inner">
      
      </footer>

    </div>
  );
}