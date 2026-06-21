import './globals.css'
import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'C.B.Z - نادي كرة السلة زاكورة',
  description: 'الموقع الرسمي لنادي كرة السلة زاكورة - الهوية، الإدارة ومركز المواجهات',
  // 👇 هَا حْنَا زِدْنَا الكُودْ دْيَالْ جُوجَلْ هْنَا بْطَرِيقَة نْقِيَّة وِاحْتِرَافِيَّة
  verification: {
    google: '6a682787f8148130',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 text-gray-800 antialiased font-['Cairo',sans-serif]">
        
        {/* 🧭 شريط التنقل الاحترافي (Premium Header) */}
        <nav className="bg-[#0B4028] text-white sticky top-0 z-50 shadow-lg border-b-4 border-[#D4AF37] backdrop-blur-md bg-opacity-95 transition-all">
          <div className="container mx-auto max-w-6xl px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* 👑 جهة اليمين: اللوغو الرسمي C.B.Z */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-10 w-10 bg-white rounded-full p-0.5 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo.jpeg" 
                  alt="شعار نادي كرة السلة زاكورة" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-900 text-xl tracking-wider text-white">
                C.B.<span className="text-[#D4AF37] font-black">Z</span>
              </span>
            </Link>

            {/* جهة اليسار: الروابط المصفوفه ومحاذية */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-7 font-bold text-xs md:text-sm">
              <Link href="/" className="text-white hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D4AF37] after:transition-all">
                الرئيسية
              </Link>
              <Link href="/about" className="text-white/90 hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D4AF37] after:transition-all">
                الإدارة والهوية
              </Link>
              <Link href="/jerseys" className="text-white/90 hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D4AF37] after:transition-all">
                أقمصة المباريات
              </Link>
              <Link href="/facilities" className="text-white/90 hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D4AF37] after:transition-all">
                المرافق والتجهيزات
              </Link>
              <Link href="/opponents" className="text-white/90 hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#D4AF37] after:transition-all ml-1">
                مركز المواجهات
              </Link>
              
              {/* 🛠️ زر الإدارة (Admin) المخفي بذكاء */}
              <Link 
                href="/admin" 
                className="text-white/40 hover:text-white transition-opacity text-xs p-1"
                title="لوحة تحكم الإدارة C.B.Z"
              >
                ⚙️
              </Link>

              <Link 
                href="/tryouts" 
                className="bg-gradient-to-r from-[#D4AF37] to-[#F3CD5F] text-[#0B4028] font-900 px-5 py-2 rounded-xl shadow-[0_4px_10px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-in-out shrink-0"
              >
                التحق بنا 📝
              </Link>
            </div>

          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* Footer التحتاني */}
        <footer className="bg-[#0B4028] text-gray-300 border-t-8 border-[#D4AF37] py-8 mt-12">
          <div className="container mx-auto max-w-5xl px-4 text-center space-y-4">
            <h3 className="font-black text-white text-lg">نادي كرة السلة زاكورة © 2026</h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              العنوان: حي القدس 1، السوسيو رياضي، زاكورة. <br />
              التواصل: clubbasketballzagora@gmail.com
            </p>
            <div className="text-xs font-bold text-[#D4AF37]">
              تم التطوير بكل فخر 🇲🇦 لصالح جمعية C.B.Z
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}