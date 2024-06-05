
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] الأمر خطأ *🕵🏻‍♂️*\n\n *مـثــال* :\n*${usedPrefix + command}*تربو عمك.`

  if (!text) throw too
  let lr = (`https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`)
  conn.sendFile(m.chat, lr, 'drake.png', `تم بواسطه ✅
  𝐵𝛩𝑺𝑺🐦‍🔥`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['بايدن','meme']

export default handler
