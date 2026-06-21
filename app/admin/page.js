'use client';

import { useState, useEffect } from 'react';
import { getRegisteredPlayers } from '../tryouts/actions'; // خليناها للّعابة

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('matches'); // التبديل بين الماتشات واللعابة
  
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // 📋 مصفوفة المباريات اللي غاتحفظ ف الـ LocalStorage
  const [existingMatches, setExistingMatches] = useState([]);
  
  // ✍️ بيانات فورم إدخال المباريات (اللي غايعوض الـ textarea اللي ف الصورة image_796c77.png)
  const [matchForm, setMatchForm] = useState({
    round: '',
    opponent: '',
    location: 'داخل الميدان (زاكورة)',
    status: 'قريباً'
  });

  const ADMIN_PASSWORD = "CBZ_ADMIN_2026"; 

  // جلب المباريات المحفوظة أول ما يحل الأدمن الصفحة
  useEffect(() => {
    const savedMatches = localStorage.getItem('cbz_matches_local_table');
    if (savedMatches) {
      setExistingMatches(JSON.parse(savedMatches));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchPlayersData();
    } else {
      alert('❌ الكود السرّي خاطئ!');
    }
  };

  const fetchPlayersData = async () => {
    setLoading(true);
    const resPlayers = await getRegisteredPlayers();
    if (resPlayers.success) setPlayers(resPlayers.players || []);
    setLoading(false);
  };

  // 🚀 حفظ المقابلة ف الـ LocalStorage وزيادتها فـ السطر ديال الجدول
  const handleMatchSubmit = (e) => {
    e.preventDefault();
    
    const newMatch = {
      id: Date.now().toString(), // ID فريد لكل ماتش
      ...matchForm
    };

    const updatedMatches = [...existingMatches, newMatch];
    setExistingMatches(updatedMatches);
    
    // السيف ف المتصفح ديريكت
    localStorage.setItem('cbz_matches_local_table', JSON.stringify(updatedMatches));
    
    alert('✅ تم حفظ ونشر المباراة فـ الجدول بنجاح!');
    
    // خوي الفورم باش يدخل ماتش أخر
    setMatchForm({ round: '', opponent: '', location: 'داخل الميدان (زاكورة)', status: 'قريباً' });
  };

  // 🗑️ حذف مباراة من الجدول
  const handleDeleteMatch = (id) => {
    if (confirm('هل أنت متأكد من حذف هذه المباراة؟')) {
      const filtered = existingMatches.filter(m => m.id !== id);
      setExistingMatches(filtered);
      localStorage.setItem('cbz_matches_local_table', JSON.stringify(filtered));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4" dir="rtl">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 max-w-md w-full border-t-8 border-[#0B4028]">
          <h2 className="text-2xl font-black text-center text-[#0B4028]">لوحة تحكم الإدارة الشاملة 🛡️</h2>
          <p className="text-xs text-center text-gray-500 font-bold">يرجى إدخال رمز المرور للولوج للمباريات والتسجيلات</p>
          <input 
            type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border text-center font-bold text-lg focus:outline-none focus:border-[#0B4028]"
          />
          <button type="submit" className="w-full bg-[#0B4028] text-white font-black p-3 rounded-xl hover:bg-[#D4AF37] hover:text-[#0B4028] transition">🔓 دخول الإدارة</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* الهيدر الرئيسي */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0B4028] p-6 rounded-2xl text-white border-b-4 border-[#D4AF37] shadow-lg">
          <div>
            <h1 className="text-xl md:text-2xl font-black">لوحة التحكم الموحدة لـ C.B.Z 🏆</h1>
            <p className="text-xs text-gray-200 mt-1">تسيير المباريات ومراقبة اللاعبين المسجلين من مكان واحد</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition">🔒 خروج</button>
        </div>

        {/* أزرار التنقل */}
        <div className="flex border-b border-gray-200 bg-white p-2 rounded-xl shadow-sm space-x-reverse space-x-2">
          <button 
            onClick={() => setActiveTab('matches')}
            className={`flex-1 text-center py-3 rounded-lg font-black text-sm transition-all ${activeTab === 'matches' ? 'bg-[#0B4028] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            🗓️ تسيير وإدخل المباريات (خانات)
          </button>
          <button 
            onClick={() => setActiveTab('players')}
            className={`flex-1 text-center py-3 rounded-lg font-black text-sm transition-all ${activeTab === 'players' ? 'bg-[#0B4028] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            👥 اللاعبين المسجلين ({players.length})
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* التبويب الأول: إدخال المباريات بخانات الطابلو المنظم */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'matches' && (
          <div className="space-y-6 animate-fadeIn">
            {/* فورم الإدخال المقسم المريح بديل الـ textarea */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
              <h2 className="text-lg font-black text-[#0B4028] border-r-4 border-[#D4AF37] pr-2">أدخل تفاصيل المباراة فـ الخانات:</h2>
              <form onSubmit={handleMatchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600">المباراة (مثال: الدورة 1)</label>
                  <input type="text" required placeholder="الدورة 1" value={matchForm.round} onChange={(e) => setMatchForm({...matchForm, round: e.target.value})} className="w-full p-2.5 border rounded-xl text-sm focus:outline-none focus:border-[#0B4028]" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600">الخصم المنافس</label>
                  <input type="text" required placeholder="الوفاق الرياضي لتنغير" value={matchForm.opponent} onChange={(e) => setMatchForm({...matchForm, opponent: e.target.value})} className="w-full p-2.5 border rounded-xl text-sm focus:outline-none focus:border-[#0B4028]" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600">مكان اللقاء</label>
                  <input type="text" required placeholder="داخل الميدان (زاكورة)" value={matchForm.location} onChange={(e) => setMatchForm({...matchForm, location: e.target.value})} className="w-full p-2.5 border rounded-xl text-sm focus:outline-none focus:border-[#0B4028]" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600">الحالة / التاريخ</label>
                  <input type="text" required placeholder="قريباً أو 16:00" value={matchForm.status} onChange={(e) => setMatchForm({...matchForm, status: e.target.value})} className="w-full p-2.5 border rounded-xl text-sm focus:outline-none focus:border-[#0B4028]" />
                </div>
                <div className="md:col-span-4 text-left">
                  <button type="submit" className="bg-[#0B4028] text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-[#D4AF37] hover:text-[#0B4028] transition shadow-md">🚀 إضافة للمركز ونشر المقابلة</button>
                </div>
              </form>
            </div>

            {/* لائحة المباريات المدرجة فـ المتصفح */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-lg font-black text-[#0B4028] mb-4">📋 الجدول الحالي للمباريات المنشورة ({existingMatches.length}):</h2>
              {existingMatches.length === 0 ? (
                <p className="text-center py-4 text-gray-400">لا توجد مباريات منشورة حالياً.</p>
              ) : (
                <div className="overflow-x-auto rounded-xl border">
                  <table className="w-full text-right text-sm">
                    <thead className="bg-gray-100 font-bold text-gray-700">
                      <tr>
                        <th className="p-3">المباراة</th>
                        <th className="p-3">الخصم</th>
                        <th className="p-3">المكان</th>
                        <th className="p-3">الحالة</th>
                        <th className="p-3 text-center">إجراء</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y font-medium text-gray-800">
                      {existingMatches.map((m) => (
                        <tr key={m.id} className="hover:bg-gray-50">
                          <td className="p-3 text-[#0B4028] font-black">{m.round}</td>
                          <td className="p-3">{m.opponent}</td>
                          <td className="p-3"><span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{m.location}</span></td>
                          <td className="p-3 text-gray-500">{m.status}</td>
                          <td className="p-3 text-center">
                            <button onClick={() => handleDeleteMatch(m.id)} className="text-red-600 hover:text-red-900 text-xs font-bold bg-red-50 px-2.5 py-1 rounded-lg transition">🗑️ حذف</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* التبويب الثاني: رؤية ومراقبة اللاعبين المسجلين */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'players' && (
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4 animate-fadeIn">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-black text-[#0B4028] border-r-4 border-[#D4AF37] pr-2">👥 المواهب واللاعبين المسجلين عبر الإستمارة</h2>
              <button onClick={fetchPlayersData} className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-3 py-1.5 rounded-lg transition">🔄 تحديث القائمة</button>
            </div>

            {loading ? <p className="text-center py-6 text-gray-400">⏳ جاري التحميل من السيرفر...</p> : players.length === 0 ? (
              <p className="text-center py-6 text-gray-400">لا يوجد أي لاعب مسجل لحد الساعة.</p>
            ) : (
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-right text-sm">
                  <thead className="bg-gray-100 text-gray-700 font-bold border-b">
                    <tr>
                      <th className="p-3">الاسم الكامل</th>
                      <th className="p-3">الهاتف</th>
                      <th className="p-3">الحي والسكن</th>
                      <th className="p-3">المركز</th>
                      <th className="p-3">الطول/الوزن</th>
                      <th className="p-3">التجربة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-gray-800">
                    {players.map((player) => (
                      <tr key={player.id} className="hover:bg-gray-50 font-medium">
                        <td className="p-3 font-bold text-gray-900">{player.full_name}</td>
                        <td className="p-3 text-blue-600 tracking-wide font-mono">{player.phone}</td>
                        <td className="p-3 text-gray-600">{player.neighborhood}</td>
                        <td className="p-3"><span className="bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full font-black text-xs">{player.position}</span></td>
                        <td className="p-3 font-mono">{player.height}cm / {player.weight}kg</td>
                        <td className="p-3 text-xs text-gray-500">{player.experience === 'club' ? `نادي سابق: ${player.prev_club || 'غير محدد'}` : 'مبتدئ / مدرسة'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}