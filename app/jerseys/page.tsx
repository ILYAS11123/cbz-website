import React from 'react'

export default function JerseysPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 text-right overflow-hidden" dir="rtl">
      
      {/* الـ Styles الخاصة بالدوران والقلب ثلاثي الأبعاد 3D */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        /* حركة الدوران المستمر الافتراضي */
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-10px) rotateY(15deg); }
        }
        .animate-jersey {
          animation: subtleFloat 6s ease-in-out infinite;
        }
        
        /* تأثير القلب الكامل عند تمرير الماوس */
        .flip-container:hover .flip-card {
          transform: rotateY(180deg);
        }
      `}} />

      <div className="container mx-auto max-w-4xl px-4 space-y-12">
        
        <div className="border-r-4 border-[#0B4028] pr-4 text-center md:text-right">
          <h1 className="text-3xl font-black text-[#0B4028]"> أقمصة المباريات الرسمية </h1>
          <p className="text-gray-500 text-sm font-medium mt-1">  التصميم من الأمام والخلف بحركة ثلاثية الأبعاد </p>
        </div>

        {/* حاوية العرض الوسطى */}
        <div className="flex justify-center pt-8">
          
          {/* الكارت الذكي التفاعلي */}
          <div className="flip-container perspective-1000 w-full max-w-[400px] h-[550px] cursor-pointer">
            <div className="flip-card preserve-3d w-full h-full duration-700 relative">
              
              {/* الوجه الأمامي للقميص */}
              <div className="backface-hidden w-full h-full bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 flex flex-col justify-between absolute inset-0">
                <div className="w-full h-[440px] bg-gray-50 rounded-2xl overflow-hidden relative">
                  <img 
                    src="/jersey-front.jpeg" 
                    alt="القميص الرسمي من الأمام" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-[#0B4028] text-[#D4AF37] px-3 py-1 rounded-full font-black text-xs shadow-md">
                    الواجهة الأمامية
                  </span>
                </div>
                <div className="text-center pb-2">
                  <h3 className="text-xl font-black text-gray-800">قميص C.B.Z الرسمي</h3>
                  <p className="text-gray-500 text-xs font-medium">نادي كرة السلة زاكورة</p>
                </div>
              </div>

              {/* الوجه الخلفي للقميص (كيظهر ملي كيدور) */}
              <div className="backface-hidden rotate-y-180 w-full h-full bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 flex flex-col justify-between absolute inset-0">
                <div className="w-full h-[440px] bg-gray-50 rounded-2xl overflow-hidden relative">
                  <img 
                    src="/jersey-back.jpeg" 
                    alt="القميص الرسمي من الخلف" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-[#D4AF37] text-[#0B4028] px-3 py-1 rounded-full font-black text-xs shadow-md">
                    التصميم الخلفي
                  </span>
                </div>
                <div className="text-center pb-2">
                  <h3 className="text-xl font-black text-[#0B4028]"> C.B.Z</h3>
                  <p className="text-gray-500 text-xs font-medium">77</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* تنبيه تفاعلي للمستخدم */}
        <div className="text-center text-xs font-bold text-gray-400 bg-white border border-gray-200 p-4 rounded-2xl max-w-md mx-auto shadow-sm animate-pulse">

        </div>

      </div>
    </div>
  )
}
