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
 if (event.body && event.body.toLowerCase() === "saidul") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ʜᴇʏ ..\n❥︎----ღ᭄_  𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑࿐.♡.\nᥫᩣ ɪᴛ’s 𝚂𝙰𝙸𝙳𝚄𝙻\n\n𝐁𝐎𝐓 𝐒𝐀𝐈𝐃𝐔𝐋\n」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/c8JdH7A.mp4")
 });
 }
 }
}
