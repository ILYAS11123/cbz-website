'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("❌ خطأ: السوارت غير معرفة في ملف .env.local");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 1. حفظ اللاعبين من فورم التسجيل (القديم ديالك)
export async function saveTryoutToDatabase(formData: any) {
  try {
    const cleanData = {
      full_name: formData.fullName ? String(formData.fullName).trim() : null,
      birth_date: formData.birthDate ? String(formData.birthDate) : null,
      phone: formData.phone ? String(formData.phone).trim() : null,
      neighborhood: formData.neighborhood ? String(formData.neighborhood).trim() : null,
      height: formData.height && String(formData.height).trim() !== '' ? parseInt(formData.height, 10) : null,
      weight: formData.weight && String(formData.weight).trim() !== '' ? parseInt(formData.weight, 10) : null,
      position: formData.position ? String(formData.position) : null,
      hand: formData.hand ? String(formData.hand) : null,
      experience: formData.experience ? String(formData.experience) : null,
      prev_club: formData.prevClub && String(formData.prevClub).trim() !== '' ? String(formData.prevClub).trim() : null
    };

    const { error } = await supabase.from('tryouts').insert([cleanData]);
    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

// 2. جلب اللاعبين للأدمن
export async function getRegisteredPlayers() {
  try {
    const { data, error } = await supabase
      .from('tryouts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, players: data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

// 3. دالة كتدخل مباراة جديدة يدوياً للـ Database ملي يبرك الأدمن على حفظ
export async function updateMatchDetails(matchData: any) {
  try {
    const cleanMatch = {
      round: String(matchData.round).trim(),       // الدورة 1، الدورة 2...
      opponent: String(matchData.opponent).trim(), // الخصم المنافس
      location: String(matchData.location).trim(), // داخل أو خارج الميدان
      status: String(matchData.status).trim(),     // قريباً، أو التوقيت (مثلا 18:00)
    };

    const { error } = await supabase
      .from('matches')
      .insert([cleanMatch]); // كيدير إدخال (Insert) جديد ديريكت

    if (error) throw error;
    return { success: true };
  } catch (err: any) {
    console.error('❌ خطأ أثناء حفظ المباراة:', err);
    return { success: false, error: err.message };
  }
}

// 4. دالة كيجيب كاع الماتشات اللي دخلهم الأدمن باش يبانو فـ الصفحة الرئيسية للزوار
export async function getMatches() {
  try {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .order('created_at', { ascending: true }); // الترتيب على حسب شكون ترفعات الأولى

    if (error) throw error;
    return { success: true, matches: data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}