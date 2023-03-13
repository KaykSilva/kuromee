const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
	star: 'https://star-bot-api.herokuapp.com'
}

global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',
	'https://star-bot-api.herokuapp.com': 'key-Kurome-Bot-k'
}

global.owner = ['556796564460']
global.owner2 = ['5521966851369']
global.premium = ['556796564460']
global.ownernomer = '556796564460'
global.ownername = 'Shun'
global.ownername2 = 'Julya'
global.botname = 'Kurome'
global.footer = 'KUROME BOT'
global.ig = 'https://github.com/KaykSilva'
global.region = 'Brasil'
global.sc = 'https://chat.whatsapp.com/GnC5UzmFfGwBtrVmTML0xd'
global.myweb = 'https://www.youtube.com/channel/UCTBE6NdGmR6FunlO1wMrhcw'
global.packname = 'Kurome Bot'
global.author = 'https://linktr.ee/kuromebot'
global.sessionName = 'session'
global.prefix = ['!']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: '[⚙️] Esse comando só pode ser usado por administradores de grupo [❗]',
    botAdmin: '[⚙️] Este comando só pode ser usado quando o bot se torna administrador [❗]',
    owner: '[⚙️] Esse comando só pode ser usado pelo dono do bot[❗]',
    group: '[⚙️] Esse comando só pode ser usado em grupo [❗]',
    private: '[⚙️] Esse comando só pode ser usado no privado [❗]',
    bot: 'Este recurso é apenas para bot',
    wait: '[⚙️] Aguarde...enviando [❗]',
    error: '[⚙️] Erro de API [❗]',
    endLimit: 'Limite diário exedido, ADM não é afetado. [Reseta em 12h]',
}
    global.limitawal = {
    premium: 10000,
    free: 20,
    monayawal: 5
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./KuromeMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})