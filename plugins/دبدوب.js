
let handler = async (m, { conn, args, 
text, usedPrefix, command }) => {
  let too = `[❗] الأمر خطأ *🕵🏻‍♂️*\n\n *مـثــال* :\n*${usedPrefix + command}* تربو عمك`

  if (!text) throw too
  if (!text.includes('+')) throw too  
  let [a, b] = text.split`+`   
  let lr = (`https://api.popcat.xyz/pooh?text1=${a}&text2=${b}`)
  conn.sendFile(m.chat, lr, 'drake.png', `تم بواسطه ✅
  𝐵𝛩𝑺𝑺🐦‍🔥`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['ميم','دبدوب']

export default handler
