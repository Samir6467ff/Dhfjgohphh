import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `قول اي حاجه!`;

  try {
    m.react('🐦‍🔥');
    var apii = await fetch(`https://aemt.me/bard?text=${text}`);
    var res = await apii.json();

    await conn.sendFile(m.chat, 'https://telegra.ph/file/a9f44cb6ec9750b8de49d.jpg', 'image.png', res.result, m);

  } catch (error) {
    console.error(error);
    throw '*احمس ايرور*';
  }
};

handler.command = ['تست'];
handler.help = ['bard'];
handler.tags = ['herramientas'];
handler.premium = false;

export default handler;
