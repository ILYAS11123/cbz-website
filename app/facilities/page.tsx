import React from 'react'

export default function FacilitiesPage() {
  const facilitiesList = [
    { name: "القاعة المغطاة زاكورة", desc: "المستضيف الرسمي لمباريات فئة الكبار والتدريبات المغلقة.", icon: "🏛️" },
    { name: "المركب السوسيو رياضي للقرب المندمج", desc: "فضاء مخصص لتأطير وتدريب الفئات الصغرى والمدرسة.", icon: "🏟️" },
    { name: "سلة كرات متكاملة وكرات تدريب احترافية", desc: "معدات بجودة عالية مطابقة للمواصفات الجامعة الملكية.", icon: "🏀" },
    { name: "أدوات الإعداد البدني واللوحات التكتيكية", desc: "أحدث الوسائل المعتمدة فـ التدريب العصري والتحليل التكتيكي.", icon: "📋" },
    { name: "أطواق وسلال إضافية وصداري التدريب (Chasubles)", desc: "معدات متكاملة لتنظيم وتسهيل الحصص التدريبية اليومية.", icon: "🛡️" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-right" dir="rtl">
      <div className="container mx-auto max-w-4xl px-4 space-y-8">
        
        <div className="border-r-4 border-[#0B4028] pr-4">
          <h1 className="text-3xl font-black text-[#0B4028]">🛡️ المرافق والتجهيزات المتوفرة</h1>
          <p className="text-gray-500 text-sm font-medium mt-1">البنية التحتية والوسائل اللوجستية التي تعتمد عليها جمعية C.B.Z</p>
        </div>

        {/* قائمة المرافق بالتفصيل */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 space-y-4">
          {facilitiesList.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D4AF37] transition-colors">
              <span className="text-3xl p-2 bg-white rounded-xl shadow-sm shrink-0">{item.icon}</span>
              <div className="space-y-1">
                <h3 className="font-black text-gray-800 text-base md:text-lg">{item.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}