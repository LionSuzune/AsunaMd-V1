const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6285795586847']
global.premium = ['6285795586847']
global.youtube = 'https://www.youtube.com/channel/UCmUIWp6ZCkBWNhMrXLQ7cLg'
global.ownername = 'Uzui'
global.github = 'https://github.com/LionSuzune'
global.grupbot = 'https://chat.whatsapp.com/BpuUbEx8niML0pmEqkbp8L'
global.botname ='ASUNA YUUKI BOT'
global.donasi = {
    saweria: 'gak adA',
    nomor: '085795586847'
}
global.packname = 'Asuna Yuuki Chan'
global.author = 'Jangan Nyolong'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '[ ✅ ] Success',
    admin: '[ ❎ ] Fitur Khusus Admin Group',
    botAdmin: '[ ❎ ] Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '[ ❎ ] Fitur Khusus Owner Bot',
    group: '[ ❎ ] Fitur Digunakan Hanya Untuk Group',
    private: '[ ✅ ] Fitur Digunakan Hanya Untuk Private Chat',
    bot: '[ ❎ ] Fitur Khusus Pengguna Nomor Bot',
    wait: '[ ⏱ ] Tunggu ya, asuna yuuki lagi proses, harap sabar yaaa!!'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
