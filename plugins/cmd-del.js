const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*[❗] يجب تحديد الهاش (hash) للأمر المخصص. استخدم ${usedPrefix}listcmd لعرض الأوامر المخصصة*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*[❗] هذا الأمر مقفل ولا يمكن حذفه*';
  delete sticker[hash];
  m.reply(`*[ ✔ ]* *تم حذف الأمر بنجاح*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
