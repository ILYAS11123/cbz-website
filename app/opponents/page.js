'use client';

import { useState, useEffect } from 'react';

export default function OpponentsMatches() {
  // ردينا المباريات عبارة عن State كيقرا من المتصفح
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // جلب الداتا المباشرة لي دخل الأدمن ف لوحة التحكم
    const savedMatches = localStorage.getItem('cbz_matches_local_table');
    if (savedMatches) {
      setMatches(JSON.parse(savedMatches));
    } else {
      // هادو هما نفس المباريات الافتراضية ديالك لي كيبانو ف الأول إيلا كان المتصفح باق خاوي
      const defaultMatches = [
        { match: "الدورة 1", opponent: "الاتحاد الرياضي لورزازات", location: "خارج الميدان", date: "قريباً" },
        { match: "الدورة 2", opponent: "الوفاق الرياضي لتنغير", location: "داخل الميدان (زاكورة)", date: "قريباً" },
        { match: "الدورة 3", opponent: "النادي الرياضي للرشيدية", location: "خارج الميدان", date: "قريباً" },
        { match: "الدورة 4", opponent: "أمل ميدلت لكرة السلة", location: "داخل الميدان (زاكورة)", date: "قريباً" },
      ];
      setMatches(defaultMatches);
      localStorage.setItem('cbz_matches_local_table', JSON.stringify(defaultMatches));
    }
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 text-right bg-gradient-to-b from-[#0B4028]/10 to-gray-50" dir="rtl">
      <div className="container mx-auto max-w-4xl space-y-10">
        
        {/* رأس الصفحة */}
        <div className="relative bg-[#0B4028] rounded-3xl overflow-hidden shadow-2xl border-b-8 border-[#D4AF37] p-8 text-center space-y-3">
          <span className="inline-block bg-[#D4AF37] text-[#0B4028] px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
            بطولة القسم الثالث هواة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-md">
            مركز <span className="text-[#D4AF37]">المواجهات</span> ومجموعة النادي
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto text-sm md:text-base">
            خريطة المباريات الرسمية لنادي C.B.Z وجدول الترتيب المباشر في منافسات البطولة الوطنية.
          </p>
        </div>

        {/* جدول مباريات البطولة الديناميكي */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-150">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-[#0B4028] text-white font-black text-sm md:text-base">
                  <th className="p-4">المباراة</th>
                  <th className="p-4">الخصم المنافس</th>
                  <th className="p-4">مكان اللقاء</th>
                  <th className="p-4 text-center">الحالة / التاريخ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-sm md:text-base text-gray-700">
                {matches.map((item, index) => (
                  <tr key={index} className="hover:bg-[#0B4028]/5 transition-colors">
                    {/* الدورة كتقرا إما من الحقل القديم (match) أو الحقل الجديد (round) حيت رديناها مرنة */}
                    <td className="p-4 font-bold text-[#0B4028]">{item.match || item.round}</td>
                    <td className="p-4 font-black text-gray-800">{item.opponent}</td>
                    <td className="p-4">
                      <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${
                        item.location && item.location.includes("زاكورة") 
                          ? "bg-[#0B4028]/10 text-[#0B4028]" 
                          : "bg-[#D4AF37]/10 text-[#7A6210]"
                      }`}>
                        {item.location}
                      </span>
                    </td>
                    {/* التوقيت أو النتيجة كتقرا من الحقل المتوفر (date أو status) */}
                    <td className="p-4 text-center text-xs font-bold text-gray-400">
                      <span className="bg-gray-50 px-2 py-1 rounded text-gray-600">
                        {item.date || item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* تنويه العصبة */}
        <div className="bg-[#0B4028] text-white p-4 rounded-2xl shadow-md text-center text-xs font-bold">
          ⚠️ يتم تحديث جدول المباريات والتوقيت الرسمي فور صدوره من طرف اللجنة البرمجية التابعة للعصبة الوطنية.
        </div>

      </div>
    </div>
  );
}