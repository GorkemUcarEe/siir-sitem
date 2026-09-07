export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir' });
  }

  const { message } = req.body;
  
  // 1. DEĞİŞKENLERİ BURAYA YAPIŞTIR (Tırnak işaretlerini silmeden!)
  const TELEGRAM_TOKEN = "8730327227:AAHRnmJmDUPp8wnE1k5Zx24HuJBg_xz_Y5k"; 
  const CHAT_ID = "1961201506"; 

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Bildirim gönderilemedi' });
  }
}