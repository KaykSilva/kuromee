require('./settings')
const {
    downloadContentFromMessage,
    areJidsSameUser,
    useMultiFileAuthState,
    BufferJSON,
    makeInMemoryStore,
    DisconnectReason,
    WAGroupMetadata,
    relayWAMessage,
    MediaPathMap,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL,
    processTime,
    MediaType,
    MessageType,
    Presence,
    Mimetype,
    delay,
    fetchLatestBaileysVersion,
    MessageRetryMap,
    extractGroupMetadata,
    generateWAMessageFromContent,
    generateWAMessage,
    prepareWAMessageMedia,
    Browser,
    Browsers,
    proto,
    getContentType
} = require('@adiwajshing/baileys')
const {
    pino,
    Boom,
    fs,
    yargs,
    chalk,
    FileType,
    path,
    PhoneNumber,
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    util,
    exec,
    spawn,
    execSync,
    axios,
    JSDOM,
    moment,
    os,
    performance,
    speed,
    primbon,
    Primbon,
    formatp,
    tanggal,
    formatDate,
    getTime,
    clockString,
    runtime,
    jsonformat,
    format,
    parseMention,
    getRandom,
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep,
    resizeImg,
    color,
} = require('./consts.js')

const dgxeon = require('xfarr-api')
//rpg function\\
const {
    addInventoriDarah,
    cekDuluJoinAdaApaKagaDiJson,
    addDarah,
    kurangDarah,
    getDarah
} = require('./storage/user/darah.js')
const {
    cekInventoryAdaAtauGak,
    addInventori,
    addBesi,
    addEmas,
    addEmerald,
    addUmpan,
    addPotion,
    kurangBesi,
    kurangEmas,
    kurangEmerald,
    kurangUmpan,
    kurangPotion,
    getBesi,
    getEmas,
    getEmerald,
    getUmpan,
    getPotion
} = require('./storage/user/alat_tukar.js')
const {
    addInventoriMonay,
    cekDuluJoinAdaApaKagaMonaynyaDiJson,
    addMonay,
    kurangMonay,
    getMonay
} = require('./storage/user/monay.js')
const {
    addInventoriLimit,
    cekDuluJoinAdaApaKagaLimitnyaDiJson,
    addLimit,
    kurangLimit,
    getLimit
} = require('./storage/user/limit.js')
const {
    cekDuluHasilBuruanNya,
    addInventoriBuruan,
    addIkan,
    addAyam,
    addKelinci,
    addDomba,
    addSapi,
    addGajah,
    kurangIkan,
    kurangAyam,
    kurangKelinci,
    kurangDomba,
    kurangSapi,
    kurangGajah,
    getIkan,
    getAyam,
    getKelinci,
    getDomba,
    getSapi,
    getGajah
} = require('./storage/user/buruan.js')
const { isatty } = require('tty')
let DarahAwal = global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟', '🐠', '🐡']


//rpg database\\
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = Kurome = async (Kurome, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = global.prefix
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Kurome.decodeJid(Kurome.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Kurome.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        //member\\
        let picaks = [flaming, fluming, flarun, flasmurf]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
            }

        } catch (err) {
            console.error(err)
        }

        //group target by xeon\\
        const reply = (teks) => {
            Kurome.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": ` Join Bot's Official GC`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./XeonMedia/cheemspic.jpg`), "sourceUrl": "https://chat.whatsapp.com/GnC5UzmFfGwBtrVmTML0xd" } } }, { quoted: m })
        }

        const replay = (teks) => {
            Kurome.sendMessage(m.chat, { text: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": ` Join Bot's Official GC`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./XeonMedia/cheemspic.jpg`), "sourceUrl": "https://chat.whatsapp.com/GnC5UzmFfGwBtrVmTML0xd" } } }, { quoted: m })
        }

        //Public & Self\\
        if (!Kurome.public) {
            if (!m.key.fromMe) return
        }
        const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        //Push Message To Console && Auto Read\\
        if (m.message) {
            Kurome.readMessages(m.chat, m.sender, [m.key.id])

            if (!m.isGroup && isCmd && m.sender) console.log(
                `\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
\x1b[1;37m┃ Número: ${color(m.sender.split('@')[0])}
\x1b[1;37m┃ Data: ${color(time)}
\x1b[1;37m┃ Comando: ${color(command)}
\x1b[1;37m┃ Palavras: ${color(args.length)}
\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`
            )
            if (!m.isGroup && !isCmd && m.sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
\x1b[1;37m┃ Número: ${color(m.sender.split('@')[0])}
\x1b[1;37m┃ Data: ${color(time)}
\x1b[1;37m┃ Comando: Não
\x1b[1;37m┃ Palavras: ${color(args.length)}
\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`
            )
            if (isCmd && m.isGroup && m.sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
\x1b[1;37m┃ Número: ${color(m.sender.split('@')[0])}
\x1b[1;37m┃ Data: ${color(time)}
\x1b[1;37m┃ Comando: ${color(command)}
\x1b[1;37m┃ Palavras: ${color(args.length)}
\x1b[1;37m┃ Grupo: ${color(groupName)}
\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`
            )
            if (!isCmd && m.isGroup && m.sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
\x1b[1;37m┃ Número: ${color(m.sender.split('@')[0])}
\x1b[1;37m┃ Data: ${color(time)}
\x1b[1;37m┃ Comando: Não
\x1b[1;37m┃ Palavras: ${color(args.length)}
\x1b[1;37m┃ Grupo: ${color(groupName)}
\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`
            )

        }

        //reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('01 00 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })

        //auto set bio\\
        if (db.data.settings[botNumber].autobio) {
            let setting = global.db.data.settings[botNumber]
            if (new Date() * 1 - setting.status > 1000) {
                let uptime = await runtime(process.uptime())
                await Kurome.setStatus(`${Kurome.user.name} | Runtime : ${runtime(uptime)}`)
                setting.status = new Date() * 1
            }
        }

        //antilink\\
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
                if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
                let gclink = (`https://chat.whatsapp.com/` + await Kurome.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
                if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
                if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐶`)
                Kurome.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }



        //auto reply by xeon 🦄
        for (let anji of setik) {
            if (budy === anji) {
                result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
                Kurome.sendMessage(m.chat, { sticker: result }, { quoted: m })
            }
        }
        for (let anju of vien) {
            if (budy === anju) {
                result = fs.readFileSync(`./XeonMedia/vn/${anju}.mp3`)
                Kurome.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
        }
        for (let anjh of imagi) {
            if (budy === anjh) {
                result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
                Kurome.sendMessage(m.chat, { image: result }, { quoted: m })
            }
        }
        for (let anjh of videox) {
            if (budy === anjh) {
                result = fs.readFileSync(`./XeonMedia/vid/${anjh}.mp4`)
                Kurome.sendMessage(m.chat, { video: result }, { quoted: m })
            }
        }

        //Mute Chat\\
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        //media detect by 🦄xeon\\
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        //Respon Cmd with media\\

        const { isFiltered, addFilter } = require('./lib/antispam.js')

        if (isCmd && isFiltered(m.sender) && !m.key.fromMe) {

            return Kurome.sendMessage(from, { react: { text: "❌", key: m.key } })
        }

        if (isCmd && !isCreator && !m.key.fromMe) addFilter(m.sender)

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: Kurome.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, Kurome.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            Kurome.ev.emit('messages.upsert', msg)
        }

        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
                return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
            }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Kurome.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) } }).then(mes => { return _family100['family100' + m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nResposta Correta 🎉\n\nQuer Jogar Novamente? Enviar modo matemático`, Kurome.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Resposta Errada*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nResposta Correta 🎉\n\nQuer Jogar Novamente? Mande ${prefix}matematica mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Kurome.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Kurome.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Kurome.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Kurome.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Kurome.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Kurome.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        //TicTacToe\\
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            //reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'O Jogo Acabou',
                    '-2': 'Inválido',
                    '-1': 'Posição inválida',
                    0: 'Posição inválida',
                }[ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Ganhou!` : isTie ? `Deu Velha` : `Vez de: ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Digite*surrender* para arregar`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await Kurome.sendText(room.x, str, m, { mentions: parseMention(str) })
            await Kurome.sendText(room.o, str, m, { mentions: parseMention(str) })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }

        //Suit PvP\\
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
                    Kurome.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                Kurome.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Entre no link e faça sua jogada"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
                if (!roof.pilih) Kurome.sendText(roof.p, `Por favor escolha entre \n\Pedra🗿\nPapel📄\nTesoura✂️`, m)
                if (!roof.pilih2) Kurome.sendText(roof.p2, `Por favor escolha entre \n\Pedra🗿\nPapel📄\nTesoura✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) Kurome.sendText(m.chat, `Ambos os jogadores não querem jogar,\nppt Cancelado`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        Kurome.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Não escolheu nada, Game Over!`, m)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /tesoura/i
            let b = /pedra/i
            let k = /papel/i
            let reg = /^(tesoura|pedra|papel)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                reply(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando o oponente jogar` : ''}`)
                if (!roof.pilih2) Kurome.sendText(roof.p2, '_O oponente jogou_\nAgora é a sua vez', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                reply(`Você escolheu ${m.text} ${!roof.pilih ? `\n\nEsperando o oponente jogar` : ''}`)
                if (!roof.pilih) Kurome.sendText(roof.p, '_O oponente jogou_\nAgora é a sua vez', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                Kurome.sendText(roof.asal, `_*Resultado do jogo*_${tie ? '\nEMPATE' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganhou \n` : ` Perdeu \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganhou \n` : ` Perdeu \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
        }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch (command) {
            case 'inventori': case 'inventory': case 'profile': {
                if (q.includes('--help')) return reply(examkosong)
                if (!isDarah) { addInventoriDarah(m.sender, DarahAwal) }
                if (!isInventory) { addInventori(m.sender) }
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }

                var xeonbotinc = await getBuffer(picak + `User's Inventory`)
                let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
                teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
                teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
                teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
                teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
                teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
                teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
                teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
                teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
                teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
                teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
                teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
                teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
                teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
                teksehmazeh += `_*${pushname}*_`
                await Kurome.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, xeonbotinc, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }])
            }
                break

            case 'userlimit':
                {
                    let txt = `「 *ALL LIMIT USER* 」\n\n`
                    for (let i of _limit) {
                        txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                    }
                    reply(txt)
                }
                break



            case 'leaderboard':
                {
                    let txt = `「 *LEADERBOARD* 」\n\n`
                    for (let i of _buruan) {
                        txt += `➸ *ID :* ${i.id}\n`
                        txt += `*🐟Fish* : ${i.ikan}\n`
                        txt += `*🐔Chicken* : ${i.ayam}\n`
                        txt += `*🐇Rabbit* : ${i.kelinci}\n`
                        txt += `*🐑Sheep* : ${i.domba}\n`
                        txt += `*🐄Cow* : ${i.sapi}\n`
                        txt += `*🐘Elephant* : ${i.gajah}\n\n`
                    }
                    reply(txt)
                }
                break

            case 'mining': case 'mine': {
                if (q.includes('--help')) return reply(examkosong)
                if (!isInventory) { addInventori(m.sender) }
                if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`)
                let besi = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0]
                let emas = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2]
                let emerald = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1]
                var besinya = besi[Math.floor(Math.random() * besi.length)]
                var emasnya = emas[Math.floor(Math.random() * emas.length)]
                var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
                setTimeout(() => {
                    let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
                    let buttons = [
                        {
                            buttonId: `${prefix}${prefix + command}`,
                            buttonText: {
                                displayText: 'Mine Again⛏️'
                            }, type: 1
                        },
                    ]
                    let buttonMessage = {
                        image: { url: './storage/image/tambang.jpg' },
                        caption: caption,
                        footer: pushname,
                        buttons: buttons,
                        headerType: 4
                    }
                    Kurome.sendMessage(from, buttonMessage, { quoted: m })

                }, 7000)
                setTimeout(() => {
                    reply(`@${m.sender.split("@")[0]} Started Mining🎣`)
                }, 1500)
                kurangDarah(m.sender, 10)
                addBesi(m.sender, besinya)
                addEmas(m.sended, emasnya)
                addEmerald(m.sender, emeraldnya)
            }
                break
            //transaction\\
            case 'beli': case 'buy': {
                if (q.includes('--help')) return reply(examkosong)
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                if (!isInventoryMonay) { addInventoriMonay(m.sender) }
                if (!isInventory) { addInventori(m.sender) }
                if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
                var anu = args[1]
                if (args[0] === 'potion') {
                    let noh = 100000 * anu
                    if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
                    if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
                    kurangMonay(m.sender, noh)
                    var apalu = anu * 1
                    addPotion(m.sender, apalu)
                    setTimeout(() => {
                        reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
                    }, 2000)
                } else
                    if (args[0] === 'baitfood') {
                        let noh = 5000 * anu
                        if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
                        if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
                        kurangMonay(m.sender, noh)
                        var apalu = anu * 1
                        addUmpan(m.sender, apalu)
                        setTimeout(() => {
                            reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
                        }, 2000)
                    } else
                        if (args[0] === 'limit') {
                            let noh = 35000 * anu
                            if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
                            if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
                            kurangMonay(m.sender, noh)
                            var apalu = anu * 1
                            addLimit(m.sender, apalu)
                            setTimeout(() => {
                                reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
                            }, 2000)
                        } else { reply("Incorrect Format!") }
            }
                break
            case 'sel': case 'jual': {
                if (!q) return reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                if (!isInventoryMonay) { addInventoriMonay(m.sender) }
                if (!isInventory) { addInventori(m.sender) }
                var anu = args[1]
                if (args[0] === 'fish') {
                    if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
                    if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
                    kurangIkan(m.sender, anu)
                    let monaynya = 1500 * anu
                    addMonay(m.sender, monaynya)
                    setTimeout(() => {
                        reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
                    }, 2000)
                } else
                    if (args[0] === 'chicken') {
                        if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
                        if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
                        kurangAyam(m.sender, anu)
                        let monaynya = 2500 * anu
                        addMonay(m.sender, monaynya)
                        setTimeout(() => {
                            reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
                        }, 2000)
                    } else
                        if (args[0] === 'rabbit') {
                            if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
                            if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
                            kurangKelinci(m.sender, anu)
                            let monaynya = 3000 * anu
                            addMonay(m.sender, monaynya)
                            setTimeout(() => {
                                reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
                            }, 2000)
                        } else
                            if (args[0] === 'sheep') {
                                if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
                                if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
                                kurangDomba(m.sender, anu)
                                let monaynya = 5000 * anu
                                addMonay(m.sender, monaynya)
                                setTimeout(() => {
                                    reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
                                }, 2000)
                            } else
                                if (args[0] === 'cow') {
                                    if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
                                    if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
                                    kurangSapi(m.sender, anu)
                                    let monaynya = 10000 * anu
                                    addMonay(m.sender, monaynya)
                                    setTimeout(() => {
                                        reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
                                    }, 2000)
                                } else
                                    if (args[0] === 'elephant') {
                                        if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
                                        if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
                                        kurangGajah(m.sender, anu)
                                        let monaynya = 15000 * anu
                                        addMonay(m.sender, monaynya)
                                        setTimeout(() => {
                                            reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
                                        }, 2000)
                                    } else
                                        if (args[0] === 'iron') {
                                            if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
                                            if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
                                            kurangBesi(m.sender, anu)
                                            let monaynya = 16000 * anu
                                            addMonay(m.sender, monaynya)
                                            setTimeout(() => {
                                                reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
                                            }, 2000)
                                        } else
                                            if (args[0] === 'gold') {
                                                if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
                                                if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
                                                kurangEmas(m.sender, anu)
                                                let monaynya = 50000 * anu
                                                addMonay(m.sender, monaynya)
                                                setTimeout(() => {
                                                    reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
                                                }, 2000)
                                            } else
                                                if (args[0] === 'emerald') {
                                                    if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
                                                    if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
                                                    kurangEmerald(m.sender, anu)
                                                    let monaynya = 100000 * anu
                                                    addMonay(m.sender, monaynya)
                                                    setTimeout(() => {
                                                        reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
                                                    }, 2000)
                                                } else { reply("Incorrect Format!") }

            }
                break

            case 'heal': {
                if (q.includes('--help')) return reply(examkosong)
                if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
                if (isCekDarah > 100) return reply('Your Blood Is Full')
                if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`)
                addDarah(m.sender, 100)
                kurangPotion(m.sender, 1)
                reply('Success! Your Bood Is Full')
            }
                break
            case 'hunt': case 'hunting': {
                if (q.includes('--help')) return reply(examkosong)
                if (!isDarah) { addInventoriDarah(m.sender, DarahAwal) }
                if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions')
                if (!isInventoriBuruan) { addInventoriBuruan(m.sender) }
                let luka = ["Pierced by a thorn while hunting", "Slipped into the abyss while hunting", "Scratched by a wild animal", "Not careful", "Entangled in roots", "Fall while hunting"]
                let location = ["Jungle", "Amazon forest", "Tropical forest", "Meadow", "African forest", "Mountains"]
                var ikanmu = Math.ceil(Math.random() * 10)
                var ayam = Math.ceil(Math.random() * 8)
                var kelinci = Math.ceil(Math.random() * 7)
                var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
                var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
                var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
                var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
                var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
                var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
                var lukanya = luka[Math.floor(Math.random() * luka.length)]
                var lokasinya = location[Math.floor(Math.random() * location.length)]
                if (lokasinya === 'Jungle') {
                    var image = './storage/image/rimba.jpg'
                } else
                    if (lokasinya === 'Amazon forest') {
                        var image = './storage/image/amazon.jpg'
                    } else
                        if (lokasinya === 'Tropical forest') {
                            var image = './storage/image/tropis.jpg'
                        } else
                            if (lokasinya === 'Meadow') {
                                var image = './storage/image/padang_rumput.jpg'
                            } else
                                if (lokasinya === 'African forest') {
                                    var image = './storage/image/afrika.jpg'
                                } else
                                    if (lokasinya === 'Mountains') {
                                        var image = './storage/image/pegunungan.jpg'
                                    }
                setTimeout(() => {
                    let teksehmazeh = `_[ HUNT RESULT ]_\n`
                    teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
                    teksehmazeh += `*🐔Chicken* : ${ayam}\n`
                    teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
                    teksehmazeh += `*🐑Sheep* : ${domba}\n`
                    teksehmazeh += `*🐄Cow* : ${sapi}\n`
                    teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
                    teksehmazeh += `_[ INFO ]_\n`
                    teksehmazeh += `*Location* : ${lokasinya}\n`
                    teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
                    teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
                    let buttons = [
                        {
                            buttonId: `${prefix}${prefix + command}`,
                            buttonText: {
                                displayText: 'Hunt Again️🏹'
                            }, type: 1
                        },
                    ]
                    let buttonMessage = {
                        image: { url: image },
                        caption: teksehmazeh,
                        footer: pushname,
                        buttons: buttons,
                        headerType: 4
                    }
                    Kurome.sendMessage(from, buttonMessage, { quoted: m })
                }, 5000)
                setTimeout(() => {
                    reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)
                }, 1000)
                addIkan(m.sender, ikanmu)
                addAyam(m.sender, ayam)
                addKelinci(m.sender, kelinci)
                addDomba(m.sender, domba)
                addSapi(m.sender, sapi)
                addGajah(m.sender, gajah)
                kurangDarah(m.sender, 10)
            }
                break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
                break
            case 'ttc': case 'jogodavelha': case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`Você já está em uma partida`)
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    reply('Adversário encontrado!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        }[v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Digite *surrender* caso queira arregar`
                    if (room.x !== room.o) await Kurome.sendText(room.x, str, m, { mentions: parseMention(str) })
                    await Kurome.sendText(room.o, str, m, { mentions: parseMention(str) })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    reply('ESPERANDO ADVERSÁRIO,' + (text ? ` ADVERSÁRIO DIGITE ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
                break
            case 'rv': case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        Kurome.sendText(m.chat, `Partida deletada`, m)
                    } else if (!this.game) {
                        reply(`TicTacToe🎮 Partida não existe`)
                    } else reply('?')
                } catch (e) {
                    reply('Damaged')
                }
            }
                break

            case 'ppt': case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Você já está em uma partida`)
                if (m.mentionedJid[0] === m.sender) return reply(`Não posso jogar comigo mesmo!`)
                if (!m.mentionedJid[0]) return reply(`_Quem você quer desafiar?_\nMarque alguém\n\nExemplo : ${prefix}ppt @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply(`A pessoa que você está desafiando está jogando com outra pessoa:(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*Pedra Papel Tesoura*_

@${m.sender.split`@`[0]} Desafiou @${m.mentionedJid[0].split`@`[0]} Para Jogar "Pedra, Papel, Tesoura"

Por Favor @${m.mentionedJid[0].split`@`[0]} Digite accept/reject`
                this.suit[id] = {
                    chat: await Kurome.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) Kurome.sendText(m.chat, `_Tempo esgotado_`, m)
                        delete this.suit[id]
                    }, 60000), poin, poin_lose, timeout
                }
            }
                break

            case 'reviverqr':
                if (!isCreator) return
                exec(`cd ${sessionName} && rm -rf pre-key* sender* session*`, async () => {
                    process.exit()
                })
                break

            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    Kurome.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Kurome.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Kurome.chatModify({ archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Kurome.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Kurome.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Kurome.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Kurome.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true } } }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
                break
            case 'family100': {
                if ('family100' + m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100' + m.chat] = {
                    id: 'family100' + m.chat,
                    pesan: await Kurome.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
                break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                break
            case 'guess': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Kurome.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Kurome.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                        tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Answer: " + result.jawaban)
                        Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, Kurome.user.name, m)
                        delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kurome.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Answer: " + result.jawaban)
                        Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Kurome.user.name, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kurome.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Answer: " + result.jawaban)
                        Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Kurome.user.name, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kurome.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Answer: " + result.jawaban)
                        Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, Kurome.user.name, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kurome.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Answer: " + result.jawaban)
                        Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, Kurome.user.name, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kurome.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                        caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                        caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Answer: " + result.jawaban)
                        Kurome.sendButtonText(m.chat, [{ buttonId: prefix + 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, Kurome.user.name, m)
                        delete caklontong[m.sender.split('@')[0]]
                        delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
                break
            case 'matematica': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}matematica medium`)
                let result = await genMath(text.toLowerCase())
                Kurome.sendText(m.chat, `*Dê o resultado de: ${result.soal.toLowerCase()}*?\n\nEm: ${(result.waktu / 1000).toFixed(2)} segundos`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Resposta: " + result.jawaban)
                    reply("Tempo Esgotado\n Resposta Correta: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
                break
            case 'crush': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Seu Crush é

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [
                    { buttonId: prefix + '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                ]
                await Kurome.sendButtonText(m.chat, buttons, jawab, Kurome.user.name, m, { mentions: ments })
            }
                break
            case 'casal': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Eu shipooo❤️💖👀`
                let menst = [orang, jodoh]
                let buttons = [
                    { buttonId: prefix + '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                ]
                await Kurome.sendButtonText(m.chat, buttons, jawab, Kurome.user.name, m, { mentions: menst })
            }
                break
            case 'is':
                if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
                const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                const kah = apa[Math.floor(Math.random() * apa.length)]
                Kurome.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

                break
            case 'what':
                if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
                const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                const kahk = lel[Math.floor(Math.random() * lel.length)]
                Kurome.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

                break

            case 'can':
                if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
                const bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`]
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                Kurome.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

                break

            case 'how':
                if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
                const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`, `Holy Cow! Really???`, `Dizzy Ah`, `Ohhh I See:(`, `The Patient, Boss:(`, `How Are You?`]
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                Kurome.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

                break

            case 'rate':
                if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
                Kurome.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${Math.floor(Math.random() * 100)}%*` }, { quoted: m })

                break
            case 'handsomecheck':
                if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
                Kurome.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${Math.floor(Math.random() * 100)}%*` }, { quoted: m })

                break

            case 'beautifulcheck':
                if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
                Kurome.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${Math.floor(Math.random() * 100)}%*` }, { quoted: m })

                break

            case 'awesomecheck':
            case 'greatcheck':
            case 'gaycheck':
            case 'cutecheck':
            case 'lesbicheck':
            case 'lesbiancheck':
            case 'hornycheck':
            case 'prettycheck':
            case 'lovelycheck':
            case 'uglycheck':
                if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
                Kurome.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${Math.floor(Math.random() * 100)}%*` }, { quoted: m })
                break

            case 'stupid':
            case 'tolo':
            case 'inteligente':
            case 'idiota':
            case 'gay':
            case 'lesbica':
            case 'desgracado':
            case 'restolho':
            case 'cachorro':
            case 'porra':
            case 'noob':
            case 'excelente':
            case 'tesao':
            case 'binita':
            case 'lindo':
            case 'fofo':
            case 'feio':
            case 'bonito':
            case 'nerd':
            case 'sexy':
            case 'quente':
            case 'corno':
                {
                    if (!m.isGroup) return replay(`${mess.group}`)
                    let member = participants.map(u => u.id)
                    let me = m.sender
                    let jodoh = member[Math.floor(Math.random() * member.length)]
                    let jawab = `O Mais *${command}* daqui é esta pessoa @${jodoh.split('@')[0]}`
                    let ments = [me, jodoh]
                    let buttons = [
                        { buttonId: prefix + '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, jawab, Kurome.user.name, m, { mentions: ments })
                }
                break

            case 'when':
                if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
                const kapan = ['5 More Days', '10 More Days', '15 More Days', '20 More Days', '25 More Days', '30 More Days', '35 More Days', '40 More Days', '45 More Days', '50 More Days', '55 More Days', '60 More Days', '65 More Days', '70 More Days', '75 More Days', '80 More Days', '85 More Days', '90 More Days', '100 More Days', '5 Months More', '10 Months More', '15 Months More', '20 Months More', '25 Months More', '30 Months More', '35 Months More', '40 Months More', '45 Months More', '50 Months More', '55 Months More', '60 Months More', '65 Months More', '70 Months More', '75 Months More', '80 Months More', '85 Months More', '90 Months More', '100 Months More', '1 More Year', '2 More Years', '3 More Years', '4 More Years', '5 More Years', 'Tomorrow', 'The Day After Tomorrow', `After This Command, You Too ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                Kurome.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
                break

            case 'checkdeath':
                if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Xeon`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
                break

            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                break
            case 'reactxxx': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Kurome.sendMessage(m.chat, reactionMessage)
            }
                break
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Kurome.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await Kurome.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'setexif': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif Has Been Successfully Changed to\n\n🐶 Packname : ${global.packname}\n🐶 Author : ${global.author}`)
            }
                break
            case 'kick': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kurome.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'add': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kurome.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'promote': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kurome.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'demote': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kurome.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break

            case 'block': {
                if (!isCreator) return replay(`${mess.owner}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kurome.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break

            case 'unblock': {
                if (!isCreator) return replay(`${mess.owner}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await Kurome.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await Kurome.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await Kurome.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
                break
            case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                await Kurome.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
            }
                break
            case 'setgrouppp': case 'setgruppp': case 'ftgrupo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                await Kurome.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
            }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                    teks += `🐶 @${mem.id.split('@')[0]}\n`
                }
                Kurome.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break

            case 'hidetag': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                Kurome.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'style': case 'styletext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
                db.data.users[m.sender].limit -= 1 // -1 limit
                let { styletext } = require('./lib/scraper')
                if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🐶 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
            }
                break
            case 'vote': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (m.chat in vote) replay(`_Ainda há votos neste bate-papo!_\n\n*${prefix}delvote* - To Delete Vote Session`)
                if (!text) return replay(`Digite o motivo do voto, exemplo: *${prefix + command} ShzZ para ADM*`)
                reply(`Começa a votação!\n\n*${prefix}💚* - A favor\n*${prefix}❤️* -Contra\n*${prefix}checkvote* - Para verificar o voto\n*${prefix}delvote* - Para excluir a sessão de votação`)
                vote[m.chat] = [q, [], []]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 A FAVOR 〕
│ 
┃ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 CONTRA 〕
│ 
┃ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - Para excluir a sessão de votaçãO`
                let buttonsVote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: '💚' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: '❤️' }, type: 1 }
                ]

                let buttonMessageVote = {
                    text: teks_vote,
                    footer: Kurome.user.name,
                    buttons: buttonsVote,
                    headerType: 1
                }
                Kurome.sendMessage(m.chat, buttonMessageVote)
            }
                break
            case 'upvote': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) replay(`You've Voted`)
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
                let buttonsUpvote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: 'Upvote' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: 'Devote' }, type: 1 }
                ]

                let buttonMessageUpvote = {
                    text: teks_vote,
                    footer: Kurome.user.name,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                }
                Kurome.sendMessage(m.chat, buttonMessageUpvote)
            }
                break

            case 'devote': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) return replay(`You've Voted`)
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
                let buttonsDevote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: 'Upvote' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: 'Devote' }, type: 1 }
                ]

                let buttonMessageDevote = {
                    text: teks_vote,
                    footer: Kurome.user.name,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                Kurome.sendMessage(m.chat, buttonMessageDevote)
            }
                break

            case 'checkvote':
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
                teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${Kurome.user.id}
`
                Kurome.sendTextWithMentions(m.chat, teks_vote, m)
                break
            case 'deletevote': case 'delvote': case 'hapusvote': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
                delete vote[m.chat]
                reply('Successfully Deleted The Vote Session In This Group')
            }
                break
            case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close') {
                    await Kurome.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await Kurome.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: prefix + 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: prefix + 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `Group Mode`, Kurome.user.name, m)

                }
            }
                break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'open') {
                    await Kurome.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await Kurome.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: prefix + 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: prefix + 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `Mode Edit Info`, Kurome.user.name, m)

                }
            }
                break

            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                    db.data.chats[m.chat].antilink = true
                    reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                    db.data.chats[m.chat].antilink = false
                    reply(`Antilink Inactive !`)
                } else {
                    let buttons = [
                        { buttonId: prefix + 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: prefix + 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `Antilink Mode`, Kurome.user.name, m)
                }
            }
                break
            case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                    db.data.chats[m.chat].mute = true
                    reply(`${Kurome.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                    db.data.chats[m.chat].mute = false
                    reply(`${Kurome.user.name} Has Been Unmuted In This Group!`)
                } else {
                    let buttons = [
                        { buttonId: prefix + 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: prefix + 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `Mute Bot`, Kurome.user.name, m)
                }
            }
                break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await Kurome.groupInviteCode(m.chat)
                Kurome.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
                break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await Kurome.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Kurome.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
                break

            case 'delete':
            case 'del':
            case 'd':
                {
                    if (!m.quoted) return reply(false)
                    let { chat, fromMe, id, isBaileys } = m.quoted
                    Kurome.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                }
                break

            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Xeon Handsome`)
                let getGroups = await Kurome.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'Grupo Oficial 🤍',
                            url: `${sc}`
                        }
                    }, {
                        urlButton: {
                            displayText: 'YouTube📍',
                            url: `${myweb}`
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '🎀Menu🎀',
                            id: 'menu'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '👤dono👤',
                            id: 'owner'
                        }
                    }]
                    let txt = `「 Aviso 」\n\n${text}`
                    Kurome.send5ButImg(i, txt, Kurome.user.name, global.thumb, btn)
                }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
                break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Xeon`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
                for (let yoi of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'Grupo Oficial 🤍',
                            url: `${sc}`
                        }
                    }, {
                        urlButton: {
                            displayText: 'YouTube📍',
                            url: `${myweb}`
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '🎀Menu🎀',
                            id: 'menu'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '👤dono👤',
                            id: 'owner'
                        }
                    }]
                    let txt = `「 Aviso 」\n\n${text}`
                    Kurome.send5ButImg(yoi, txt, Kurome.user.name, global.thumb, btn)
                }
                reply('Broadcast Success')
            }
                break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🐶 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━🐶 *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🐶 *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                Kurome.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'q': case 'quoted': {
                if (!m.quoted) return reply('Reply Message!!')
                let wokwol = await Kurome.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
                break
            case 'listpc': case 'pclist': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `🐕 *Name :* ${nama}\n🐕 *User :* @${i.split('@')[0]}\n🐕 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                }
                Kurome.sendTextWithMentions(m.chat, teks, m)
            }
                break

            case 'listgc': case 'gclist': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                for (let i of anu) {
                    let metadata = await Kurome.groupMetadata(i)
                    teks += `🐕 *Name :* ${metadata.subject}\n🐕 *Owner :* @${metadata.owner.split('@')[0]}\n🐕 *ID :* ${metadata.id}\n🐕 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🐕 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                }
                Kurome.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listonlinexxx': case 'onlinelistxxx': {
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                Kurome.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🐶 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
            }
                break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
                if (!m.isGroup) return replay(`${mess.group}`)
                reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Kurome.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                    let media = await quoted.download()
                    let encmedia = await Kurome.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-10 Seconds`)
                }
            }
                break

            case 'legenda': case 'stickermemex': case 'stickmemex': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let { TelegraPh } = require('./lib/uploader')
                if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
                if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
                reply(mess.wait)
                mee = await Kurome.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
                memek = await Kurome.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(memek)
            }
                break
            case 'ebinary': {
                if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
                let { eBinary } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                reply(eb)
            }
                break
            case 'dbinary': {
                if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
                let { dBinary } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                reply(db)
            }
                break
            case 'emojimix': {
                if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
                let [emoji1, emoji2] = text.split`+`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Kurome.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    Kurome.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'tomp4': case 'tovideo': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Kurome.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'toaud': case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
                if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                Kurome.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tomp3': {
                if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
                if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
                if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                Kurome.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${Kurome.user.name}.mp3` }, { quoted: m })
            }
                break
            case 'tovn': case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
                if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
                reply(mess.wait)
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                Kurome.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
            }
                break
            case 'togif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Kurome.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'tourl': {
                reply(mess.wait)
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
                break

            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let remobg = require('remove.bg')
                let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
                let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
                hmm = await './src/remobg-' + getRandom('')
                localFile = await Kurome.downloadAndSaveMediaMessage(quoted, hmm)
                outputFile = await './src/hremo-' + getRandom('.png')
                reply(mess.wait)
                remobg.removeBackgroundFromImageFile({
                    path: localFile,
                    apiKey: apinobg,
                    size: "regular",
                    type: "auto",
                    scale: "100%",
                    outputFile
                }).then(async result => {
                    Kurome.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: mess.success }, { quoted: m })
                    await fs.unlinkSync(localFile)
                    await fs.unlinkSync(outputFile)
                })
            }
                break
            case 'yts': case 'ytsearch': {
                if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `✨ No : ${no++}\n✨ Type : ${i.type}\n✨ Video ID : ${i.videoId}\n✨ Title : ${i.title}\n✨ Views : ${i.views}\n✨ Duration : ${i.timestamp}\n✨ Uploaded On : ${i.ago}\n✨ Author : ${i.author.name}\n✨ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Kurome.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
            }
                break

            case 'google': {
                if (!text) return reply(`Example : ${prefix + command} cheems shiba inu`)
                let google = require('google-it')
                google({ 'query': text }).then(res => {
                    let teks = `Google Search Title : ${text}\n\n`
                    for (let g of res) {
                        teks += `✨ *Title* : ${g.title}\n`
                        teks += `✨ *Description* : ${g.snippet}\n`
                        teks += `✨ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    reply(teks)
                })
            }
                break

            case 'gimage': case 'googleimage': {
                if (!text) return reply(`Example : ${prefix + command} cheems`)
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [
                        { buttonId: `${prefix}gimage ${text}`, buttonText: { displayText: '➡️➡️Next Image➡️➡️' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: images },
                        caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                        footer: Kurome.user.name,
                        buttons: buttons,
                        headerType: 4
                    }
                    Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
            }
                break
            case 'play': case 'song': case 'ytplay': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    { buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: { displayText: '🎶Audio🎶' }, type: 1 },
                    { buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: { displayText: '📽️Video📽️' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
✨ Title : ${anu.title}
✨ Ext : Search
✨ ID : ${anu.videoId}
✨ Duration : ${anu.timestamp}
✨ Viewes : ${anu.views}
✨ Uploaded On : ${anu.ago}
✨ Author : ${anu.author.name}
✨ Channel : ${anu.author.url}
✨ Description : ${anu.description}
✨ Url : ${anu.url}`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'ytmp3': case 'getmusic': case 'ytaudio': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
                Kurome.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '320kbps'}`, m)
                Kurome.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
                Kurome.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
                break
            case 'getmusicxxx': {
                let { yta } = require('./lib/y2mate')
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
                Kurome.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '128kbps'}`, m)
                Kurome.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'getvideoxxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
                Kurome.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
                break
            case 'pinterest': {
                reply(mess.wait)
                let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Kurome.sendMessage(m.chat, { image: { url: result }, caption: '🐶 Media Url : ' + result }, { quoted: m })
            }
                break

            case 'webtonsearch': case 'webtoon':
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                dgxeon.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                    .catch((err) => {
                        reply(mess.error)
                    })
                break
            case 'drakorxxx':
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                dgxeon.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from, data[0].thumbnail, txt, m)
                })
                    .catch((err) => {
                        reply(mess.error)
                    })
                break
            case 'animexxx': {
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                dgxeon.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                    var but = [
                        {
                            "urlButton": {
                                "displayText": "Watch🎥",
                                "url": `${myweb}`
                            }
                        }
                    ]
                    await Kurome.send5ButLoc(from, txt, `© ${ownername}`, gam, but, { userJid: m.chat, quoted: m })
                })
                    .catch((err) => {
                        reply(mess.error)
                    })
            }
                break
            case 'characterxxx': case 'karakterxxx':
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                dgxeon.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                    var but = [
                        {
                            "urlButton": {
                                "displayText": "YouTube📍",
                                "url": `${myweb}`
                            }
                        }
                    ]
                    await Kurome.send5ButLoc(from, txt, `© ${ownername}`, gam, but, { userJid: m.chat, quoted: m })
                })
                    .catch((err) => {
                        reply(mess.error)
                    })
                break
            case 'manga':
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                dgxeon.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
                    var but = [
                        {
                            "urlButton": {
                                "displayText": "YouTube📍",
                                "url": `${myweb}`
                            }
                        }
                    ]
                    await Kurome.send5ButLoc(from, txt, `© ${ownername}`, gam, but, { userJid: m.chat, quoted: m })
                })
                    .catch((err) => {
                        reply(mess.error)
                    })
                break

            case 'husbu': case 'neko': case 'shinobu': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                Kurome.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/' + command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
                break

            case 'couplepp': case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Kurome.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                Kurome.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
                break

            //Animes

            case 'waifu':
                reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/waifu`)
                    .then(({ data }) => {
                        Kurome.sendImage(m.chat, data.url, mess.success, m)
                    })
                break


            case 'tapa':
                db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                axios.get(`https://api.rei.my.id/v3/slap`)
                    .then(({ data }) => {
                        Kurome.sendImage(m.chat, data.url, mess.success, m)
                    })
                break

            case 'megumin': {
                let buttons = [
                    { buttonId: `${prefix}megumin`, buttonText: { displayText: 'Próxima' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://api-yogipw.herokuapp.com/api/sfw/megumin' },
                    caption: `Megumin wallpaper`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'anime': {
                let buttons = [
                    { buttonId: `${prefix}anime`, buttonText: { displayText: 'Próxima' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://api-yogipw.herokuapp.com/api/sfw/waifu' },
                    caption: `Anime wallpaper`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'catgirl': {
                let buttons = [
                    { buttonId: `${prefix}catgirl`, buttonText: { displayText: 'Próxima' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://api-yogipw.herokuapp.com/api/sfw/neko' },
                    caption: `Cat Girl wallpaper`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'wallpaper': {
                if (!text) return reply(`Enter Query Title`)
                let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `${prefix}wallpaper ${text}`, buttonText: { displayText: '➡️Next Image➡️' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `🐶 Title : ${result.title}\n🐶 Category : ${result.type}\n🐶 Detail : ${result.source}\n🐶 Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
                let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `${prefix}wikimedia ${text}`, buttonText: { displayText: '➡️Next Image➡️' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `🐶 Title : ${result.title}\n🐶 Source : ${result.source}\n🐶 Media Url : ${result.image}`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
                let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `${prefix}quotesanime`, buttonText: { displayText: '➡️Next➡️' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/' + command, {}, 'apikey'))
                let buttons = [
                    { buttonId: `${prefix}motivasi`, buttonText: { displayText: '➡️Next➡️' }, type: 1 }
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case '3dchristmas':
            case '3ddeepsea':
            case 'americanflag':
            case '3dscifi':
            case '3drainbow':
            case '3dwaterpipe':
            case 'halloweenskeleton':
            case 'sketch':
            case 'bluecircuit':
            case 'space':
            case 'metallic':
            case 'fiction':
            case 'greenhorror':
            case 'transformer':
            case 'berry':
            case 'thunder':
            case 'magma':
            case '3dcrackedstone':
            case '3dneonlight':
            case 'impressiveglitch':
            case 'naturalleaves':
            case 'fireworksparkle':
            case 'matrix':
            case 'dropwater':
            case 'harrypotter':
            case 'foggywindow':
            case 'neondevils':
            case 'christmasholiday':
            case '3dgradient':
            case 'blackpink':
            case 'gluetext':
                {
                    if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                    reply(mess.wait)
                    Kurome.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m })
                }
                break
            case 'stalker': case 'stalk': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Limite Exedido')
                if (!text) return reply(`Example : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    Kurome.sendMedia(m.chat, anu.caption.profile_hd, '', `🐶 Full Name : ${anu.caption.full_name}\n🐶 User Name : ${anu.caption.user_name}\n🐶 ID ${anu.caption.user_id}\n🐶 Following : ${anu.caption.followers}\n🐶 Followers : ${anu.caption.following}\n🐶 Bussines : ${anu.caption.bussines}\n🐶 Professional : ${anu.caption.profesional}\n🐶 Verified : ${anu.caption.verified}\n🐶 Private : ${anu.caption.private}\n🐶 Bio : ${anu.caption.biography}\n🐶 Bio Url : ${anu.caption.bio_url}`, m)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`🐶 Name : ${anu.name}\n🐶 Version : ${Object.keys(anu.versions)}\n🐶 Created : ${tanggal(anu.time.created)}\n🐶 Modified : ${tanggal(anu.time.modified)}\n🐶 Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n🐶 Description : ${anu.description}\n🐶 Homepage : ${anu.homepage}\n🐶 Keywords : ${anu.keywords}\n🐶 Author : ${anu.author.name}\n🐶 License : ${anu.license}\n🐶 Readme : ${anu.readme}`)
                    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
                break
            case 'tiktokd': case 'tiktoknowmx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    { buttonId: `${prefix}tiktokwm ${text}`, buttonText: { displayText: '🥬With Watermark🥬' }, type: 1 },
                    { buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: { displayText: '🎵Audio🎵' }, type: 1 }
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'tiktokwmx': case 'tiktokwatermarkx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    { buttonId: `${prefix}tiktoknowm ${text}`, buttonText: { displayText: '🥬No Watermark🥬' }, type: 1 },
                    { buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: { displayText: '🎵Audio🎵' }, type: 1 }
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'tiktokmp3x': case 'tiktokaudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    { buttonId: `${prefix}tiktoknowm ${text}`, buttonText: { displayText: '🥬No Watermark🥬' }, type: 1 },
                    { buttonId: `${prefix}tiktokwm ${text}`, buttonText: { displayText: '🥬With Watermark🥬' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
                Kurome.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg' }, { quoted: msg })
            }
                break
            case 'instagramx': case 'igx': case 'igdlx': {
                if (!text) return reply(`No Query Url!`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) Kurome.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    Kurome.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
                break
            //Backup, for example, the video above doesn't come out\\
            case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)

                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: text }, 'apikey'))
                Kurome.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
                break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await Kurome.sendImage(m.chat, anu.result.img, `🐶 Title : ${anu.result.lagu}\n🐶 Album : ${anu.result.album}\n🐶 Singer : ${anu.result.penyanyi}\n🐶 Publish : ${anu.result.publish}\n🐶 Lyrics :\n${anu.result.lirik.result}`, m)
                Kurome.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu + '.m4a' }, { quoted: msg })
            }
                break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Kurome.sendImage(m.chat, anu.result.thumb, `🐶 Title : ${anu.result.title}\n🐶 Url : ${isUrl(text)[0]}`)
                Kurome.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title + '.m4a' }, { quoted: msg })
            }
                break
            case 'twitdlx': case 'twitterx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    { buttonId: `${prefix}twittermp3 ${text}`, buttonText: { displayText: '🎵Audio🎵' }, type: 1 }
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'twittermp3x': case 'twitteraudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    { buttonId: `${prefix}twitter ${text}`, buttonText: { displayText: '📽️Video📽️' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
                Kurome.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
                break
            case 'fbdlx': case 'fbx': case 'facebookx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Kurome.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `🐶 Title : ${anu.result.title}` }, { quoted: m })
            }
                break
            case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Kurome.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
                break
            case 'umma': case 'ummadl': {
                if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
                let anu = await umma(isUrl(text)[0])
                if (anu.type == 'video') {
                    let buttons = [
                        { buttonId: `${prefix}ytmp3 ${anu.media[0]} 128kbps`, buttonText: { displayText: '🎵Audio🎵' }, type: 1 },
                        { buttonId: `${prefix}ytmp4 ${anu.media[0]} 360p`, buttonText: { displayText: '📽️Video📽️' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: anu.author.profilePic },
                        caption: `
🐶 Title : ${anu.title}
🐶 Author : ${anu.author.name}
🐶 Like : ${anu.like}
🐶 Caption : ${anu.caption}
🐶 Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
                        footer: Kurome.user.name,
                        buttons,
                        headerType: 4
                    }
                    Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
                } else if (anu.type == 'image') {
                    anu.media.map(async (url) => {
                        Kurome.sendMessage(m.chat, { image: { url }, caption: `🐶 Title : ${anu.title}\n🐶 Author : ${anu.author.name}\n🐶 Like : ${anu.like}\n🐶 Caption : ${anu.caption}` }, { quoted: m })
                    })
                }
            }
                break

            case 'ringtone': {
                if (!text) return reply(`Example : ${prefix + command} black rover`)
                let { ringtone } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                Kurome.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'iqraxxx': {
                oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
                if (!text) return reply(oh)
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                Kurome.sendMessage(m.chat, { document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf` }, { quoted: m }).catch((err) => reply(oh))
            }
                break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    reply(mess.wait)
                    Kurome.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf' }, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf' }, { quoted: m })
                } else if (args[0] === 'docx') {
                    reply(mess.wait)
                    Kurome.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx' }, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx' }, { quoted: m })
                } else if (args[0] === 'pptx') {
                    reply(mess.wait)
                    Kurome.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx' }, { quoted: m })
                } else if (args[0] === 'xlsx') {
                    reply(mess.wait)
                    Kurome.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx' }, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx' }, { quoted: m })
                } else {
                    reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
                }
            }
                break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        reply(mess.wait)
                        let media = await Kurome.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return reply(err)
                            let buff = fs.readFileSync(ran)
                            Kurome.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                    reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
                break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
                break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Kurome.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
            }
                break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
                break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
                break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                Kurome.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
                break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
                let teks = '「 DATABASE LIST 」\n\n'
                for (let i of seplit) {
                    teks += `🐕 *Name :* ${i.nama}\n🐕 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                reply(teks)
            }
                break
            case 'delmsg': case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                delete msgs[text.toLowerCase()]
                reply(`Delete Successfully '${text}' From The Message list`)
            }
                break
            case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let buttons = [
                    { buttonId: prefix + 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                Kurome.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Kurome.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, Kurome.user.name, m)
            }
                break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: prefix + 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                    reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await Kurome.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: prefix + 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, Kurome.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix + 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: prefix + 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Kurome.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Kurome.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Kurome.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix + 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Kurome.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: prefix + 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await Kurome.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: prefix + 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: prefix + 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Kurome.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Kurome.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, Kurome.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: prefix + 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await Kurome.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, Kurome.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                Kurome.public = true
                reply('Successful Change To Public Usage')
            }
                break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                Kurome.public = false
                reply('Successful Change To Self Usage')
            }
                break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
    `.trim()
                reply(respon)
            }
                break
            case 'speedtest': {
                reply('Testing Speed...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) reply(stdout)
                    if (stderr.trim()) reply(stderr)
                }
            }
                break
            case 'owner': case 'creator': {
                Kurome.sendContact(m.chat, global.owner, m)
            }
                break
                case 'owner2': case 'creator2': {
                    Kurome.sendContact(m.chat, global.owner2, m)
                }
                    break
    

            case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'handhold':
                reply(mess.wait)
                axios.get(`https://exteam.herokuapp.com/api/${command}`)
                    .then(({ data }) => {
                        Kurome.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                    })
                break

            case 'bug': case 'report': {
                if (!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                Kurome.sendMessage(`556796564460@s.whatsapp.net`, {
                    text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}`
                })
                reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
            }
                break

            case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'cheems': case 'doge': {

                let buttons = [
                   
                    { buttonId: `${prefix}allmenu`, buttonText: { displayText: '⌘ Menu ⌘' }, type: 1 },
                    { buttonId: `${prefix}owner`, buttonText: { displayText: '🫂Dono🫂' }, type: 1 },
                    { buttonId: `${prefix}owner2`, buttonText: { displayText: '🫂Dona🫂' }, type: 1 },



                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/63f2f4bba611e0763b06d.jpg' },
                    caption: `
┌─❖
│「 Olá 👋 」
│「 ${pushname} 」
│
│ 「 BOT INFO 」
│✙ Ativo A : ${runtime(process.uptime())}
│✙ Bot: ${global.botname}
│✙ Dono: ${global.ownername}
│✙ Número: ${global.owner}
│✙ Dona: ${global.ownername2}
│✙ Número: ${global.owner2}
│✙ Plataforma : ${os.platform()}
│✙ Clientes ativos agora:  ${Object.keys(global.db.data.users).length}
└───────────────┈ ⳹
│✑ Entre no nosso grupo
│https://linktr.ee/kuromebot
└───────────────┈ ⳹`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'list': case 'menu': case 'help': case '?': {
                let buttons = [
                   
                    { buttonId: `${prefix}allmenu`, buttonText: { displayText: '⌘ Menu ⌘' }, type: 1 },
                    { buttonId: `${prefix}owner`, buttonText: { displayText: '🫂Dono🫂' }, type: 1 },
                    { buttonId: `${prefix}owner2`, buttonText: { displayText: '🫂Dona🫂' }, type: 1 },



                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/63f2f4bba611e0763b06d.jpg' },
                    caption: `
┌─❖
│「 Olá 👋 」
│「 ${pushname} 」
│
│ 「 BOT INFO 」
│✙ Ativo A : ${runtime(process.uptime())}
│✙ Bot: ${global.botname}
│✙ Dono: ${global.ownername}
│✙ Número: ${global.owner}
│✙ Dona: ${global.ownername2}
│✙ Número: ${global.owner2}
│✙ Plataforma : ${os.platform()}
│✙ Clientes ativos agora: ${Object.keys(global.db.data.users).length}
└───────────────┈ ⳹
│✑ Entre no nosso grupo
│https://linktr.ee/kuromebot
└───────────────┈ ⳹`,
                    footer: Kurome.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'command': {

                sections = [{
                    "title": "Main Features",
                    "rows": [
                        {
                            "title": "Menu",
                            "description": "Exibe a lista de recursos principais",
                            "rowId": `${prefix}mainmenu`
                        }
                    ]
                },
                {
                    "title": "Bot Features",
                    "rows": [
                        {
                            "title": "Todo Menu",
                            "description": "Exibe a lista de todo Menu!",
                            "rowId": `${prefix}allmenu`
                        },
                        {
                            "title": "Menu do proprietário",
                            "description": "Exibe a lista do menu do proprietário!",
                            "rowId": `${prefix}ownermenu`
                        },
                        {
                            "title": "Menu Do Grupo",
                            "description": "Exibe a lista dos menus principais em grupos",
                            "rowId": `${prefix}groupmenu`
                        },

                    ]
                }, {
                    "title": "Download Menu",
                    "rows": [
                        {
                            "title": "Download Menu",
                            "description": "Exibe a lista do menu de download",
                            "rowId": `${prefix}downloadmenu`
                        },
                        {
                            "title": "Menu de pesquisa",
                            "description": "Exibe a lista do menu de pesquisa",
                            "rowId": `${prefix}searchmenu`
                        },

                        {
                            "title": "Menu de anime",
                            "description": "Exibe a lista do menu de anime",
                            "rowId": `${prefix}randomanimemenu`
                        },
                        {
                            "title": "Menu Divertido",
                            "description": "Exibe a lista do menu divertidos",
                            "rowId": `${prefix}funmenu`
                        },
                        {
                            "title": "Menu Figurinha",
                            "description": "Exibe a lista do menu de conversão",
                            "rowId": `${prefix}figurinhas`
                        },
                        {
                            "title": "Interação",
                            "description": "Menu de Interações",
                            "rowId": `${prefix}interagir`
                        },
                        {
                            "title": "Menu Modificador de Voz",
                            "description": "Exibe a lista do menu de alteração de voz",
                            "rowId": `${prefix}voicechangermenu`
                        },
                    ]
                },
                {
                    "title": "Chat With Fellow Users",
                    "rows": [
                        {
                            "title": "Textos 3D",
                            "description": "Ferramenta de textos 3D",
                            "rowId": `${prefix}textpromenu`
                        }
                    ]
                },
                {
                    "title": "Credit",
                    "rows": [
                        {
                            "title": "SOBRE",
                            "description": "Sobre o Bot!",
                            "rowId": `${prefix}tqtt`
                        }
                    ]
                }
                ]
                Kurome.sendMessage(from, {
                    title: `Oi ${pushname}`,
                    text: `Aqui está a lista de menu resumido\n\n`,
                    buttonText: "Menu",
                    footer: `${global.footer}`,
                    mentions: [m.sender],
                    sections
                }, { quoted: m })

            }
                break
            case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                Kurome.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6ba2aed566865a068e91f.jpg' }, caption: `*Hi Bro ${m.pushName}*\n\nDonate Me : \n\n🐶 Fampay : https://telegra.ph/file/6ba2aed566865a068e91f.jpg\n🐶 Paytm : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/916909137213 (Click To Contact)` }, { quoted: m })
            }
                break

            case 'allmenu': {
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/817a33fa4701bb8f629c8.jpg' },
                    caption: `  
╔┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
║   *${botname}*
╚┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
╔┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃   •PRINCIPAL•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}planos -exibe painel de planos
┃${prefix}pix -exibe chave pix
┃${prefix}ping -execulta teste de ping
┃${prefix}dono -manda o contato do dono
┃${prefix}menu -abre o menu
┃${prefix}delete -deleta mensagem do bot
┃${prefix}chatinfo -mostra o chat
┃${prefix}quoted -encaminha mensagem
┃${prefix}listpc -lista chats com o bot
┃${prefix}listgc -lista grupos com o bot
┃${prefix}report [bug] -reporta bug
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃   •GRUPO•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}grouplink: manda o link do grupo
┃${prefix}setgcpp: muda a foto do grupo
┃${prefix}setname: muda o nome
┃${prefix}setdesc: muda desc
┃${prefix}group: botão abre e fecha grupo
┃${prefix}editinfo: botão edição do grupo
┃${prefix}kick: [reply/tag] -expulsa membro
┃${prefix}hidetag: marca todos a mensagem
┃${prefix}tagall: marca todos
┃${prefix}antilink: [on/off]
┃${prefix}mute: so adm usa o bot
┃${prefix}promote: promove a adm
┃${prefix}demote: rebaixa adm
┃${prefix}vote: abre votação
┃${prefix}devote: vota a favor
┃${prefix}upvote: vota contra
┃${prefix}checkvote: checa votos
┃${prefix}delvote: apaga votação
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃   •DONO•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}join [link] -bot entra em grupo
┃${prefix}leave bot -bot sai do grupo
┃${prefix}block [user] -bloqueia user
┃${prefix}unblock [user] -desbloqueia user
┃${prefix}bcgroup -transmissão aos grupos
┃${prefix}bcall -transmissão aos privados
┃${prefix}setppbot -troca a foto do bot
┃${prefix}setexif -muda o nome das fig
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃   •PESQUISA/BAIXAR•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀ 
┃${prefix}ytmp3 [url|qualidade]
┃${prefix}ytmp4 [url|qualidade]
┃${prefix}getmusic [yt link]
┃${prefix}getvideo [yt link]
┃${prefix}umma [query]
┃${prefix}joox [query]
┃${prefix}soundcloud [url]
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃   •ANIME•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}waifu - wallpaper
┃${prefix}megumin - wallpaper
┃${prefix}anime - wallpaper
┃${prefix}catgirl - wallpaper
┃${prefix}tapa - gif
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃   •FIGURINHA•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}toimage [responder stick]
┃${prefix}sticker [responder img|gif]
┃${prefix}emojimix [moji+moji]
┃${prefix}tovideo [responder img]
┃${prefix}togif [responder stick]
┃${prefix}tourl [responder img]
┃${prefix}tovn [responder aud]
┃${prefix}tomp3 [responder vn]
┃${prefix}toaudio [responder vid]
┃${prefix}ebinary [responder txt]
┃${prefix}dbinary [responder txt]
┃${prefix}styletext [text]
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃   •MODIFICADORES DE VOZ•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}bass [reply aud]
┃${prefix}blown [reply aud]
┃${prefix}deep [reply aud]
┃${prefix}earrape [reply aud]
┃${prefix}fast [reply aud]
┃${prefix}fat [reply aud]
┃${prefix}nightcore [reply aud]
┃${prefix}reverse [reply aud]
┃${prefix}robot [reply aud]
┃${prefix}slow [reply aud]
┃${prefix}squirrel [reply aud]
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃   •INTERAÇÃO COM O BOT•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃Bah
┃Boa noite
┃Boa tarde
┃Bom dia
┃Bugada
┃Glub
┃Gostosa
┃Interessante
┃Mesmo
┃Porra
┃Puta
┃Risada
┃Te amo
┃Tenso
┃Vadia
┃Vagabunda
┃Geme
┃Linda
┃Foda
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃   •BRINCADEIRAS•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┏━「 ${botname} 」━━⭓ 
┃${prefix}jogodavelha [Jogo da velha]
┃${prefix}ppt [Pedra papel tesoura]
┃${prefix}Matematica 
┃${prefix}Lindo [tag]
┃${prefix}Bonito [tag]
┃${prefix}Lesbica [tag]
┃${prefix}Gay [tag]
┃${prefix}Fofo [tag]
┃${prefix}Feio [tag]
┃${prefix}Casal
┃${prefix}Crush
┃${prefix}Quente
┃${prefix}Sexy
┃${prefix}Bonita
┃${prefix}Noob
┃${prefix}Desgracado 
┃${prefix}Tolo
┃${prefix}Nerd
┃${prefix}Idiota
┃${prefix}inteligente
┃${prefix}restolho
┃${prefix}Cachorro 
┗━「 *Created By ${ownername}* 」━⭓
`,
                    footer: Kurome.user.name,
                    headerType: 4
                }
                Kurome.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break

            case 'mainmenu':
                var unicorn = await getBuffer(picak + 'Main Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
╔┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃   •PRINCIPAL•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}planos -exibe painel de planos
┃${prefix}pix -exibe chave pix
┃${prefix}ping -execulta teste de ping
┃${prefix}dono -manda o contato do dono
┃${prefix}menu -abre o menu
┃${prefix}delete -deleta mensagem do bot
┃${prefix}chatinfo -mostra o chat
┃${prefix}quoted -encaminha mensagem
┃${prefix}listpc -lista chats com o bot
┃${prefix}listgc -lista grupos com o bot
┃${prefix}report [bug] -reporta bug
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube 📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'grupmenu': case 'groupmenu':
                var unicorn = await getBuffer(picak + 'Group Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃      •GRUPO•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}grouplink: manda o link do grupo
┃${prefix}setgcpp: muda a foto do grupo
┃${prefix}setname: muda o nome
┃${prefix}setdesc: muda desc
┃${prefix}group: botão abre e fecha grupo
┃${prefix}editinfo: botão edição do grupo
┃${prefix}kick: [reply/tag] -expulsa membro
┃${prefix}hidetag: marca todos a mensagem
┃${prefix}tagall: marca todos
┃${prefix}antilink: [on/off]
┃${prefix}mute: so adm usa o bot
┃${prefix}promote: promove a adm
┃${prefix}demote: rebaixa adm
┃${prefix}vote: abre votação
┃${prefix}devote: vota a favor
┃${prefix}upvote: vota contra
┃${prefix}checkvote: checa votos
┃${prefix}delvote: apaga votação
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break


            case 'funmenu':
                var unicorn = await getBuffer(picak + 'Fun Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃  •BRINCADEIRAS•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}jogodavelha [Jogo da velha]
┃${prefix}ppt [Pedra papel tesoura]
┃${prefix}Matematica 
┃${prefix}Lindo [tag]
┃${prefix}Bonito [tag]
┃${prefix}Lesbica [tag]
┃${prefix}Gay [tag]
┃${prefix}Fofo [tag]
┃${prefix}Feio [tag]
┃${prefix}Casal
┃${prefix}Crush
┃${prefix}Quente
┃${prefix}Sexy
┃${prefix}Bonita
┃${prefix}Noob
┃${prefix}Desgracado 
┃${prefix}Tolo
┃${prefix}Nerd
┃${prefix}Idiota
┃${prefix}inteligente
┃${prefix}restolho
┃${prefix}Cachorro 
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'ownermenu':
                var unicorn = await getBuffer(picak + 'Owner Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃      •DONO•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}join [link] -bot entra em grupo
┃${prefix}leave bot -bot sai do grupo
┃${prefix}block [user] -bloqueia user
┃${prefix}unblock [user] -desbloqueia user
┃${prefix}bcgroup -transmissão aos grupos
┃${prefix}bcall -transmissão aos privados
┃${prefix}setppbot -troca a foto do bot
┃${prefix}setexif -muda o nome das fig
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'downloadmenu':
                var unicorn = await getBuffer(picak + 'Downloader Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃┅═┅═══ ᐃᐁᐃ ══┅═┅═᳀
┃ •PESQUISA/BAIXAR•
┃ ┅═┅══ ᐃᐁᐃ ══┅═┅═᳀ 
┃${prefix}ytmp3 [url|qualidade]
┃${prefix}ytmp4 [url|qualidade]
┃${prefix}getmusic [yt link]
┃${prefix}getvideo [yt link]
┃${prefix}umma [query]
┃${prefix}joox [query]
┃${prefix}soundcloud [url]
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'searchmenu':
                var unicorn = await getBuffer(picak + 'Search Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 PESQUISA 」	        
┃╠${prefix}play [termo]
┃╠${prefix}song [termo]
┃╠${prefix}yts [termo]
┃╠${prefix}google [termo]
┃╠${prefix}gimage [termo]
┃╠${prefix}pinterest [termo]
┃╠${prefix}wallpaper [termo]
┃╠${prefix}wikimedia [termo]
┃╠${prefix}ytsearch [termo]
┃╠${prefix}ringtone [termo]
┃╠${prefix}webtoon [termo]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'randomanimemenu':
                var unicorn = await getBuffer(picak + 'Animes + wallpaper')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃     •ANIME•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃${prefix}waifu - wallpaper
┃${prefix}megumin - wallpaper
┃${prefix}anime - wallpaper
┃${prefix}catgirl - wallpaper
┃${prefix}tapa - gif
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'textpromenu':
                var unicorn = await getBuffer(picak + 'Text Pro Menu')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 TEXTOS PRO 」	        
┃╠ ${prefix}3dchristmas [txt]
┃╠ ${prefix}3ddeepsea [txt]
┃╠ ${prefix}americanflag [txt]
┃╠ ${prefix}3dscifi [txt]
┃╠ ${prefix}3drainbow [txt]
┃╠ ${prefix}3dwaterpipe [txt]
┃╠ ${prefix}halloweenskeleton [txt]
┃╠ ${prefix}sketch [txt]
┃╠ ${prefix}bluecircuit [txt]
┃╠ ${prefix}space [txt]
┃╠ ${prefix}metallic [txt]
┃╠ ${prefix}fiction [txt]
┃╠ ${prefix}greenhorror [txt]
┃╠ ${prefix}transformer [txt]
┃╠ ${prefix}berry [txt]
┃╠ ${prefix}thunder [txt]
┃╠ ${prefix}magma [txt]
┃╠ ${prefix}3dcrackedstone [txt]
┃╠ ${prefix}3dneonlight [txt]
┃╠ ${prefix}impressiveglitch [txt]
┃╠ ${prefix}naturalleaves [txt]
┃╠ ${prefix}fireworksparkle [txt]
┃╠ ${prefix}matrix [txt]
┃╠ ${prefix}dropwater [txt]
┃╠ ${prefix}harrypotter [txt]
┃╠ ${prefix}foggywindow [txt]
┃╠ ${prefix}neondevils [txt]
┃╠ ${prefix}christmasholiday [txt]
┃╠ ${prefix}3dgradient [txt]
┃╠ ${prefix}blackpink [txt]
┃╠ ${prefix}gluetext [txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'interagir':
                var unicorn = await getBuffer(picak + 'Interaja com o Bot')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓         
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃•INTERAÇÃO COM O BOT•
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┃Bah
┃Boa noite
┃Boa tarde
┃Bom dia
┃Bugada
┃Glub
┃Gostosa
┃Interessante
┃Mesmo
┃Porra
┃Puta
┃Risada
┃Te amo
┃Tenso
┃Vadia
┃Vagabunda
┃Geme
┃Linda
┃Foda
┃┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'figurinhas':
                var unicorn = await getBuffer(picak + 'Figurinhas')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 FIGURINHAS 」	        
┃╠ ${prefix}toimage [responder stick]
┃╠ ${prefix}sticker ou S [responder img|gif]
┃╠ ${prefix}legenda
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [responder img]
┃╠ ${prefix}togif [responder stick]
┃╠ ${prefix}tourl [responder img]
┃╠ ${prefix}tovn [responder aud]
┃╠ ${prefix}tomp3 [responder vn]
┃╠ ${prefix}toaudio [responder vid]
┃╠ ${prefix}ebinary [responder txt]
┃╠ ${prefix}dbinary [responder txt]
┃╠ ${prefix}styletext [text]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'voicechangermenu':
                var unicorn = await getBuffer(picak + 'Voice Changer Menu')
                await Kurome.send5ButImg(from, `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 MODIFICADORES DE VOZ 」	        
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'planos':
                var unicorn = await getBuffer(picak + 'Lista de Planos')
                await Kurome.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 PLANOS 」
┃╠ Alugue o bot para seu grupo :3
┃╠ 1 Dia 0,50 R$
┃╠ 4 Dias 1,50 R$
┃╠ 7 Dias 5,50 R$
┃╠ 15 Dias 9,50 R$
┃╠ 30 Dias 15,00 R$ 
┃╠ Teste a negociar
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube 📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            case 'pix':
                var unicorn = await getBuffer(picak + 'chave pix')
                await Kurome.send5ButImg(from, `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 PLANOS 」
┃╠ Chave Pix:
┃╠ 67996564460
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`, unicorn, [{ "urlButton": { "displayText": "YouTube 📍", "url": `${myweb}` } }, { "urlButton": { "displayText": "Grupo Oficial 🤍", "url": `${sc}` } }, { "quickReplyButton": { "displayText": "🍜Donate🍜", "id": 'donate' } }, { "quickReplyButton": { "displayText": "👤dono👤", "id": 'owner' } }])
                break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    Kurome.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
