module.exports = {
 config: {
	 name: "saidul",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "jan") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ʜᴇʏ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.♡.\nᥫᩣ ɪᴛ’s 𝚂𝙰𝙸𝙳𝚄𝙻\n\n𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑\n」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/c8JdH7A.mp4")
 });
 }
 }
}
