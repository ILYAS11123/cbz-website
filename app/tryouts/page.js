'use client';
import { useState } from 'react';
import { saveTryoutToDatabase } from './actions'; // استيراد دالة السيرفر

export default function Tryouts() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    phone: '',
    neighborhood: '',
    height: '',
    weight: '',
    position: '',
    hand: '',
    experience: '',
    prevClub: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // استدعاء السيرفر نيشان بكل أمان
      const result = await saveTryoutToDatabase(formData);

      if (result && result.success) {
        alert('🎉 تم إرسال طلبك بنجاح وحفظه في قاعدة البيانات! سنتواصل معك قريباً للاختبارات.');
        setFormData({
          fullName: '', birthDate: '', phone: '', neighborhood: '',
          height: '', weight: '', position: '', hand: '', experience: '', prevClub: ''
        });
        e.target.reset();
      } else {
        // ⚠️ تعديل أساسي: كشف نص الخطأ الحقيقي القادم من Supabase لمعرفة السبب ديريكت
        alert(`❌ فشل الحفظ: ${result?.error || 'سبب غير معروف من قاعدة البيانات'}`);
      }
    } catch (error) {
      console.error('Client Error:', error);
      alert(`❌ خطأ في الاتصال بالسيرفر: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 text-right bg-gradient-to-b from-[#0B4028]/10 to-gray-150" dir="rtl">
      <div className="container mx-auto max-w-3xl space-y-10">
        
        {/* رأس الصفحة */}
        <div className="relative bg-[#0B4028] rounded-3xl overflow-hidden shadow-2xl border-b-8 border-[#D4AF37] p-8 md:p-12 text-center space-y-4">
          <span className="inline-block bg-[#D4AF37] text-[#0B4028] px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
            بوابة تنقيب المواهب 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-md">
            إختبارات فئات <span className="text-[#D4AF37]">C.B.Z</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
            مرحباً بك في المنصة الرسمية لنادي زاكورة لكرة السلة. قم بملء الاستمارة الاحترافية أسفله للانضمام إلى صفوف النادي.
          </p>
        </div>

        {/* الاستمارة المستيلية بألوان النادي */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="h-3 w-full bg-gradient-to-r from-[#0B4028] via-[#D4AF37] to-[#0B4028]"></div>
          
          <div className="p-6 md:p-10 space-y-8">
            
            {/* 1. المعلومات الشخصية */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#0B4028] border-r-4 border-[#D4AF37] pr-2">1. المعلومات الشخصية والاتصال</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">الاسم الكامل للاعب *</label>
                  <input 
                    type="text" required placeholder="مثال: محمد العمري"
                    value={formData.fullName}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium"
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">تاريخ الازدياد *</label>
                  <input 
                    type="date" required
                    value={formData.birthDate}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium text-right"
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">رقم الهاتف (اللاعب أو ولي الأمر) *</label>
                  <input 
                    type="tel" required placeholder="06XXXXXXXX"
                    value={formData.phone}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium text-left"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">مكان السكن *</label>
                  <input 
                    type="text" required placeholder="الحي الإداري، زاكورة"
                    value={formData.neighborhood}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium"
                    onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 2. الجانب البدني والرياضي */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#0B4028] border-r-4 border-[#D4AF37] pr-2">2. الجانب البدني والمراكز</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">الطول (بالسنتيمتر) *</label>
                  <input 
                    type="number" required placeholder="مثال: 185"
                    value={formData.height}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium"
                    onChange={(e) => setFormData({...formData, height: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">الوزن (بالكيلوغرام) *</label>
                  <input 
                    type="number" required placeholder="مثال: 75"
                    value={formData.weight}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium"
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">المركز المفضل في الملعب *</label>
                  <select 
                    required value={formData.position} className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-bold text-gray-600"
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                  >
                    <option value="">اختر المركز...</option>
                    <option value="PG">موزع (Meneur / Point Guard)</option>
                    <option value="SG">مدافع مسدد (Arrière / Shooting Guard)</option>
                    <option value="SF">جناح (Ailier / Small Forward)</option>
                    <option value="PF">لاعب ارتكاز قوي (Power Forward)</option>
                    <option value="C">لاعب ارتكاز وسط (Pivot / Center)</option>
                    <option value="beginner">مبتدئ / لا أعرف</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">اليد المفضلة للتسديد *</label>
                  <div className="flex gap-4 pt-2">
                    <label className="flex items-center gap-2 font-bold text-gray-600 cursor-pointer">
                      <input type="radio" name="hand" value="right" checked={formData.hand === 'right'} required className="w-4 h-4 accent-[#0B4028]" onChange={(e) => setFormData({...formData, hand: e.target.value})} /> اليمنى
                    </label>
                    <label className="flex items-center gap-2 font-bold text-gray-600 cursor-pointer">
                      <input type="radio" name="hand" value="left" checked={formData.hand === 'left'} className="w-4 h-4 accent-[#0B4028]" onChange={(e) => setFormData({...formData, hand: e.target.value})} /> اليسرى
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 3. التجربة الرياضية */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-[#0B4028] border-r-4 border-[#D4AF37] pr-2">3. التجربة والخبرة الرياضية</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">هل مارست كرة السلة سابقاً؟ *</label>
                  <select 
                    required value={formData.experience} className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-bold text-gray-600"
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  >
                    <option value="">اختر الإجابة...</option>
                    <option value="club">نعم، مارستها في نادٍ آخر سابقاً</option>
                    <option value="school">نعم، في الرياضة المدرسية أو الأحياء</option>
                    <option value="no">لا، أنا مبتدئ تماماً وشغوف بالتعلم</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-gray-700 block">اسم النادي السابق (إن وجد)</label>
                  <input 
                    type="text" placeholder="مثال: النادي الرياضي " value={formData.prevClub}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0B4028] focus:ring-2 focus:ring-[#0B4028]/20 transition font-medium"
                    onChange={(e) => setFormData({...formData, prevClub: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* زر الإرسال */}
            <div className="pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0B4028] text-white hover:bg-[#D4AF37] hover:text-[#0B4028] disabled:bg-gray-400 disabled:cursor-not-allowed font-black text-lg p-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.01] cursor-pointer text-center"
              >
                {isSubmitting ? '⏳ جاري الحفظ في قاعدة البيانات...' : '🚀 تأكيد التسجيل وإرسال الطلب'}
              </button>
            </div>

          </div>
        </form>

        {/* كادر الصورة الحقيقية */}
        <div className="bg-white p-4 rounded-3xl shadow-xl border-2 border-[#0B4028]/10 overflow-hidden">
          <div 
            className="w-full h-64 md:h-[450px] rounded-2xl bg-cover bg-center shadow-inner"
            style={{ backgroundImage: "url('/TSWIRA.jpeg')" }}
          ></div>
        </div>

      </div>
    </div>
  );
}