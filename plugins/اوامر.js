let handler = async (m, { conn, args, usedPrefix, command }) => {
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: `*﹝⟣┈┈┈⟢﹝🐦‍🔥﹞⟣┈┈┈⟢﹞*\n *اهلا* 👋🏻 『 ${m.pushName} 』 \n *• اسم البوت: بوت تربو*\n *• اسم المطور:𝐵𝛩𝑺𝑺 *\n *• وَنَجّنَا بِرَحْمَتِكَ مِنَ القوم الكافرين*\n`
          },
          body: {
            text: ' *`افتح القائمة بواسطه الزر`🔘*\n*﹝⟣┈┈┈⟢﹝🐦‍🔥﹞⟣┈┈┈⟢﹞*\n\n> *Copyright© 2024 🐦‍🔥𝑇𝑈𝑅𝐵𝛩 𝐵𝛩𝑇🐦‍🔥*.'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: '📝 القائمة 📝',
                  sections: [
                    {
                      title: '🐦‍🔥قائمة الأوامر🐦‍🔥',
                      highlight_label: '𝑻𝑼𝑹𝑩𝑶 𝑩𝑶𝑻',
                      rows: [
                        {
                          header: 'صانع البوت👤',
                          title: 'الـمطور👾',
                          description: '',
                          id: '.المطور'
                        },
                        {
                          header: 'خصوصيه استخدام البوت❔❕',
                          title: 'الاسـتخدام📜',
                          description: '',
                          id: '.الاستخدام'
                        },
                        {
                          header: 'ابلاغ او ارسال رساله للمطور💭',
                          title: 'طـلـب ابـلاغ📨',
                          description: '',
                          id: '.بلاغ'
                        },
                        {
                          header: 'اوامر البوت🔖',
                          title: 'طـلـب جميع الاوامـر📑',
                          description: '',
                          id: '.المهام'
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: ''
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "قروب الـواتـساب📣",
                  url: "https://chat.whatsapp.com/JUVqvna0qCK9Pn1aNswxhh",
                  merchant_url: "https://chat.whatsapp.com/JUVqvna0qCK9Pn1aNswxhh"
                })
              },
              // Adding new button here
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "رقم المطور🎦",
                  url: "‏https://wa.me/message/5VUTXBO7XOMQD1",
                  merchant_url: "‏مراسلة 𝐵𝛩𝑺𝑺 عبر واتساب. https://wa.me/message/5VUTXBO7XOMQD1"
                })
              }
            ]
          }
        }
      }
    }
  }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['أوامر', 'اوامر', 'الاوامر', 'ألاوامر', 'menu', 'Menu'];

export default handler;
