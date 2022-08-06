require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
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

module.exports = hinata = async (hinata, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hinata.decodeJid(hinata.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hinata.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = false
		if (!isNumber(setting.status)) setting.status = 0
	    } else global.db.data.settings[botNumber] = {
	    anticall: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hinata.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hinata.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hinata.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hinata.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hinata.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hinata.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hinata.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hinata.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hinata.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hinata.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
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

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hinata.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hinata.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hinata.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hinata.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hinata.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hinata.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hinata.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hinata.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hinata.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hinata.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
	    hinata.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
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
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hinata.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }

        function _0x47b5(_0x16579b,_0x3eba5a){var _0x41e15c=_0x42c9();return _0x47b5=function(_0x7732e9,_0x42c9c1){_0x7732e9=_0x7732e9-(-0xd34+-0x14e1+-0x180*-0x17);var _0x47b526=_0x41e15c[_0x7732e9];return _0x47b526;},_0x47b5(_0x16579b,_0x3eba5a);}(function(_0x3f6d14,_0x2a6867){function _0x444e34(_0x2a3fe3,_0x28cd43,_0x5be2ac,_0x261591,_0x38cf65){return _0x47b5(_0x28cd43- -0x383,_0x261591);}function _0x5c6e68(_0xdccea5,_0x1f3a69,_0x4070ad,_0x3605bc,_0x384764){return _0x47b5(_0xdccea5- -0x20e,_0x1f3a69);}function _0x4344d7(_0x268914,_0x1aae44,_0x5c2eef,_0x54a047,_0x9bc057){return _0x47b5(_0x9bc057- -0x3d9,_0x268914);}function _0xe0f137(_0x20aa6c,_0x5c2b3f,_0x5d11c2,_0x22ace1,_0x4ed6d3){return _0x47b5(_0x5d11c2-0x2ca,_0x22ace1);}var _0x592109=_0x3f6d14();function _0x530329(_0x58e920,_0x442ce0,_0xff78bd,_0x491023,_0x468b19){return _0x47b5(_0x442ce0- -0x2a3,_0x58e920);}while(!![]){try{var _0x13f5aa=parseInt(_0x4344d7(-0x2a5,-0x275,-0x274,-0x285,-0x2d9))/(-0x207*0x7+0x9d8+-0x1*-0x45a)+-parseInt(_0xe0f137(0x435,0x450,0x3e9,0x386,0x3f2))/(0x7bf*0x3+0x243*0x2+-0x1bc1)*(-parseInt(_0xe0f137(0x2fc,0x2e0,0x350,0x31e,0x36b))/(0x118d*0x2+-0x1547+0xd0*-0x11))+-parseInt(_0x4344d7(-0x350,-0x386,-0x31f,-0x3a0,-0x332))/(-0x1*-0xa21+-0x3*0xa45+0x3*0x6e6)+-parseInt(_0x4344d7(-0x382,-0x33c,-0x36e,-0x32f,-0x359))/(0x77e+0x2*0xcc1+-0x20fb)*(-parseInt(_0x5c6e68(-0x16f,-0x133,-0x14e,-0x15d,-0xff))/(-0x7f1*-0x1+0x3b*0x7e+-0x24f5))+parseInt(_0x444e34(-0x243,-0x236,-0x1ed,-0x1ee,-0x1da))/(-0xd4a+0x2197+-0x1446)*(parseInt(_0xe0f137(0x3c4,0x424,0x3fb,0x421,0x42e))/(0xe57+-0x2*-0x464+-0x1717))+-parseInt(_0x444e34(-0x24e,-0x2ae,-0x2ab,-0x244,-0x29b))/(0x3ca+-0x24ae+-0x20ed*-0x1)+-parseInt(_0x5c6e68(-0x106,-0xc0,-0xdd,-0x110,-0xa7))/(0x1ac2+0x1274+-0x2d2c*0x1);if(_0x13f5aa===_0x2a6867)break;else _0x592109['push'](_0x592109['shift']());}catch(_0x3fff94){_0x592109['push'](_0x592109['shift']());}}}(_0x42c9,0x228b9*0x7+-0x1*-0xd136d+-0x1174b0));var _0x7732e9=(function(){function _0x529a19(_0x4f6654,_0x53756c,_0x270693,_0x1619ab,_0x52d319){return _0x47b5(_0x1619ab-0x31e,_0x52d319);}var _0x5c6174={'uUfwI':function(_0x4e3a71,_0x11a34e,_0x8f5d8f){return _0x4e3a71(_0x11a34e,_0x8f5d8f);},'iRmNS':_0x1aef1e(-0x102,-0x104,-0xa6,-0xff,-0x105)+_0x182c36(0x283,0x272,0x2c0,0x2bd,0x275)+_0x1aef1e(-0xb9,-0xd7,-0xc7,-0xcd,-0xa8)+')','bSFnX':_0x182c36(0x1cf,0x256,0x1d5,0x25c,0x1ef)+_0x1aef1e(-0x55,-0xc4,-0x120,-0x63,-0x55)+_0x5eb996(0x5d,0x42,0x33,0x19,-0x20)+_0x5eb996(-0x1c,-0x13,-0x3c,0xc,-0x4e)+_0x182c36(0x19a,0x19c,0x155,0x22b,0x1cb)+_0x25244b(0x120,0x15d,0x8c,0xe8,0x101)+_0x25244b(0x66,0xf6,0x8a,0x117,0xb8),'KVmcn':function(_0x31e8f1,_0x4830c2){return _0x31e8f1(_0x4830c2);},'nkcVV':_0x182c36(0x25e,0x304,0x2ed,0x2f6,0x292),'mDuCi':function(_0x190462,_0xfe250){return _0x190462+_0xfe250;},'eVqMF':_0x1aef1e(-0x1c8,-0x184,-0x173,-0x1a3,-0x1ed),'dIPUy':_0x182c36(0x218,0x23a,0x29a,0x1f8,0x245),'vyNrX':function(_0x3bf8a0,_0x44fa1a){return _0x3bf8a0(_0x44fa1a);},'RewxW':function(_0x55c94f){return _0x55c94f();},'lJBmS':function(_0x23d547,_0x739374){return _0x23d547!==_0x739374;},'cpexC':_0x529a19(0x44e,0x452,0x3b1,0x3f1,0x43d),'cKQsk':function(_0x4a54df,_0x29ac34){return _0x4a54df===_0x29ac34;},'PmjSk':_0x1aef1e(-0x159,-0x103,-0xbf,-0x13c,-0xa4),'gpIae':_0x25244b(0xf5,0x1a9,0x127,0x163,0x149),'nZlJO':_0x1aef1e(-0x19f,-0x165,-0x166,-0x15a,-0xff)},_0x3dd446=!![];function _0x182c36(_0x10b50f,_0x3e59eb,_0x32b45f,_0x29e891,_0x48f78e){return _0x47b5(_0x48f78e-0x15c,_0x29e891);}function _0x5eb996(_0x438d3f,_0x5ca676,_0x646ce,_0x114e8a,_0x1f101c){return _0x47b5(_0x114e8a- -0x12c,_0x1f101c);}function _0x25244b(_0x52f9a6,_0x56b8ff,_0xbbc165,_0x2f6dc6,_0x3011b0){return _0x47b5(_0x3011b0- -0x8,_0x52f9a6);}function _0x1aef1e(_0x91af2f,_0x491b2d,_0xf39b78,_0x2ca53c,_0x2d0949){return _0x47b5(_0x491b2d- -0x206,_0xf39b78);}return function(_0x529b67,_0x2f12de){function _0x54f2c5(_0x20ca5c,_0x92d0e5,_0x1d93aa,_0x4c173f,_0x27aa80){return _0x25244b(_0x1d93aa,_0x92d0e5-0x79,_0x1d93aa-0x19b,_0x4c173f-0x146,_0x27aa80- -0x7b);}function _0x1f3cf6(_0xfa28c6,_0x2cfd2c,_0x2462fc,_0x3d19c9,_0x248fea){return _0x182c36(_0xfa28c6-0x1ea,_0x2cfd2c-0x1e2,_0x2462fc-0xcd,_0x2462fc,_0x248fea- -0x42c);}var _0x3e3e9a={'ieUAU':function(_0x303829,_0x6a58dd,_0x3b8151){function _0x332986(_0x187831,_0x3ff159,_0xe03290,_0x535ea0,_0x47a5ea){return _0x47b5(_0xe03290- -0x3a1,_0x47a5ea);}return _0x5c6174[_0x332986(-0x1f4,-0x266,-0x24c,-0x2a5,-0x2b4)](_0x303829,_0x6a58dd,_0x3b8151);},'goOvQ':_0x5c6174[_0x1f3cf6(-0x1e9,-0x216,-0x1e8,-0x1a5,-0x1a3)],'HyAhK':_0x5c6174[_0x42716b(-0x85,-0x4c,-0xcb,-0xa4,-0x107)],'nwGAU':function(_0x41fc57,_0x98918e){function _0x59481e(_0x13930e,_0x2aae93,_0x2e136b,_0x55b574,_0x1cf771){return _0x1f3cf6(_0x13930e-0x3b,_0x2aae93-0x1b8,_0x13930e,_0x55b574-0x1a4,_0x1cf771-0x7c);}return _0x5c6174[_0x59481e(-0x97,-0xeb,-0xff,-0xd6,-0xfd)](_0x41fc57,_0x98918e);},'gsAiW':_0x5c6174[_0x1f3cf6(-0x1b0,-0x145,-0x14f,-0x136,-0x17c)],'jGCde':function(_0x1223e2,_0x45cc7a){function _0x175892(_0x223b88,_0x23c026,_0x2ed493,_0x1e7470,_0x17bb1c){return _0x2eaf96(_0x2ed493-0x10d,_0x23c026-0xf9,_0x2ed493-0x66,_0x1e7470,_0x17bb1c-0x7b);}return _0x5c6174[_0x175892(0xe4,0x90,0x72,0xa7,0x91)](_0x1223e2,_0x45cc7a);},'DXdFE':_0x5c6174[_0x2eaf96(-0xc5,-0xf2,-0xb5,-0x5a,-0x11b)],'IHDQY':_0x5c6174[_0x42716b(-0xf2,-0x8d,-0x11f,-0xa8,-0x10c)],'ODsXK':function(_0x483398,_0x9e156c){function _0x14177d(_0x4a8a05,_0x385866,_0x12dbf8,_0x488b73,_0x412d58){return _0x54f2c5(_0x4a8a05-0x1c9,_0x385866-0xe,_0x12dbf8,_0x488b73-0xd8,_0x412d58-0xba);}return _0x5c6174[_0x14177d(0xdc,0x7d,0x12f,0x125,0xf1)](_0x483398,_0x9e156c);},'uWdvX':function(_0xdecaf2){function _0x426e26(_0x3da743,_0x1ee5ab,_0x3626da,_0x28a757,_0x1bf7bb){return _0x42716b(_0x3da743-0xcb,_0x1ee5ab-0xbd,_0x3626da-0x182,_0x28a757- -0x1f5,_0x3da743);}return _0x5c6174[_0x426e26(-0x240,-0x2a2,-0x289,-0x24e,-0x1e2)](_0xdecaf2);},'gtsuC':function(_0x15aaab,_0x1b1725){function _0x4b85b2(_0x391fa0,_0xb22b17,_0x258cac,_0x2be9b7,_0x4ca26f){return _0x54f2c5(_0x391fa0-0x24,_0xb22b17-0x1ca,_0x258cac,_0x2be9b7-0x1b4,_0x2be9b7-0xbe);}return _0x5c6174[_0x4b85b2(0x199,0x170,0x159,0x167,0x105)](_0x15aaab,_0x1b1725);},'DejmS':_0x5c6174[_0x1f3cf6(-0x218,-0x1f9,-0x222,-0x1dc,-0x1fa)],'NtweJ':function(_0x2cbe78,_0x47e24e){function _0x52fe8d(_0x445a36,_0x235c79,_0x5cb1f3,_0xb83714,_0x2dd7c8){return _0x42716b(_0x445a36-0x85,_0x235c79-0xbd,_0x5cb1f3-0xa4,_0x445a36-0x221,_0xb83714);}return _0x5c6174[_0x52fe8d(0x1b1,0x189,0x1f1,0x1d4,0x1e7)](_0x2cbe78,_0x47e24e);},'KrSsN':_0x5c6174[_0x42716b(-0xe6,-0x123,-0xef,-0xee,-0xdc)]};function _0x42716b(_0x4f4cf3,_0x2a5dcb,_0x316f35,_0x113290,_0x22ac43){return _0x182c36(_0x4f4cf3-0x8d,_0x2a5dcb-0x1ce,_0x316f35-0xb4,_0x22ac43,_0x113290- -0x2df);}function _0xb40120(_0x3bb5f9,_0x18b196,_0x58217b,_0x31f22f,_0x4fc948){return _0x182c36(_0x3bb5f9-0x8c,_0x18b196-0xb9,_0x58217b-0xfa,_0x4fc948,_0x31f22f- -0x38a);}function _0x2eaf96(_0xbb138,_0x5f039e,_0x428da6,_0x5d915e,_0x485d53){return _0x182c36(_0xbb138-0x89,_0x5f039e-0xe,_0x428da6-0x86,_0x5d915e,_0xbb138- -0x33d);}if(_0x5c6174[_0x2eaf96(-0xce,-0xc6,-0xcf,-0x88,-0x85)](_0x5c6174[_0xb40120(-0x1df,-0x172,-0x1b2,-0x18e,-0x121)],_0x5c6174[_0x54f2c5(-0x4,-0x8,0x7a,0xd1,0x6f)]))return!![];else{var _0x2aadba=_0x3dd446?function(){function _0x3ed96e(_0x277566,_0x3f7a0f,_0x5cd677,_0x12b71d,_0x559156){return _0xb40120(_0x277566-0x1a7,_0x3f7a0f-0x5b,_0x5cd677-0x91,_0x3f7a0f-0x48b,_0x559156);}function _0x4cc592(_0x45fcc3,_0x180ea9,_0x7e98ae,_0x5b5458,_0x2f3166){return _0xb40120(_0x45fcc3-0x197,_0x180ea9-0x92,_0x7e98ae-0xdf,_0x2f3166-0x236,_0x180ea9);}function _0x3e1c61(_0x38d402,_0x3c16cb,_0x232cfa,_0x52d81e,_0xcd2cef){return _0xb40120(_0x38d402-0x1b2,_0x3c16cb-0x4c,_0x232cfa-0x18a,_0x3c16cb-0x46e,_0x232cfa);}function _0x264782(_0x34f635,_0x42b84f,_0x1af6d8,_0xfa34c2,_0x12e2b2){return _0x42716b(_0x34f635-0xa5,_0x42b84f-0x182,_0x1af6d8-0x127,_0x42b84f- -0x80,_0x34f635);}function _0x24197d(_0xd6f33c,_0x5b5ea3,_0x13bd50,_0x3e17ad,_0x423da6){return _0x1f3cf6(_0xd6f33c-0x1c8,_0x5b5ea3-0x180,_0x3e17ad,_0x3e17ad-0x128,_0x5b5ea3-0x26f);}var _0x5ab895={'mNajL':_0x3e3e9a[_0x4cc592(0x15d,0xfb,0x141,0xb2,0x11d)],'fwqTH':_0x3e3e9a[_0x4cc592(0x70,0x7f,0x19,0xf5,0x82)],'LALuH':function(_0xe243f8,_0x2401f6){function _0x48b309(_0x57be16,_0x24d882,_0x48aadb,_0x4bb0db,_0x3d8667){return _0x24197d(_0x57be16-0x25,_0x3d8667- -0x190,_0x48aadb-0x1b1,_0x57be16,_0x3d8667-0x4a);}return _0x3e3e9a[_0x48b309(-0x1af,-0x1c1,-0x121,-0x1a8,-0x157)](_0xe243f8,_0x2401f6);},'PHTMU':_0x3e3e9a[_0x3e1c61(0x291,0x2cd,0x331,0x2d2,0x31b)],'BnFBQ':function(_0x1269e7,_0x141051){function _0xfc3210(_0x32e858,_0x14bcf3,_0x8a0084,_0xbc6118,_0x3eb4a0){return _0x3e1c61(_0x32e858-0x16,_0xbc6118- -0x35f,_0x32e858,_0xbc6118-0x90,_0x3eb4a0-0x2b);}return _0x3e3e9a[_0xfc3210(-0x82,-0x91,-0xb6,-0x5a,0x1a)](_0x1269e7,_0x141051);},'dKuAq':_0x3e3e9a[_0x3ed96e(0x30b,0x349,0x38b,0x362,0x332)],'VnqyM':_0x3e3e9a[_0x3e1c61(0x2df,0x2d0,0x2b7,0x29d,0x31a)],'aBkVC':function(_0x22d500,_0x895d45){function _0xa421a1(_0x44eef8,_0x5ec254,_0x1a8c30,_0x4c4ede,_0x538f55){return _0x264782(_0x538f55,_0x5ec254-0x138,_0x1a8c30-0x19,_0x4c4ede-0x4,_0x538f55-0x41);}return _0x3e3e9a[_0xa421a1(-0x43,0x1f,0xe,-0x56,0x7e)](_0x22d500,_0x895d45);},'qarzR':function(_0x1bc9a0){function _0x3bef66(_0x4e0938,_0x2b5ed3,_0x32f747,_0x4ec8cb,_0x2dfd44){return _0x24197d(_0x4e0938-0x32,_0x4e0938-0x222,_0x32f747-0x50,_0x2dfd44,_0x2dfd44-0x150);}return _0x3e3e9a[_0x3bef66(0x2bc,0x2ba,0x302,0x2c9,0x25e)](_0x1bc9a0);}};if(_0x3e3e9a[_0x3e1c61(0x373,0x32e,0x32a,0x35c,0x2f5)](_0x3e3e9a[_0x4cc592(0x130,0xa4,0x137,0x158,0x117)],_0x3e3e9a[_0x3e1c61(0x34d,0x34f,0x354,0x2e7,0x316)])){var _0x578dd3=_0x47b256?function(){function _0x5f1b23(_0x4247d7,_0x4ef7dd,_0x14b701,_0x56cb95,_0x28adb4){return _0x4cc592(_0x4247d7-0x1cc,_0x4ef7dd,_0x14b701-0x8a,_0x56cb95-0x78,_0x4247d7- -0x3ce);}if(_0x291219){var _0x16fea3=_0x159e49[_0x5f1b23(-0x351,-0x31f,-0x353,-0x325,-0x371)](_0x178745,arguments);return _0x33a2cd=null,_0x16fea3;}}:function(){};return _0x4eb5bb=![],_0x578dd3;}else{if(_0x2f12de){if(_0x3e3e9a[_0x264782(-0xe3,-0xab,-0x33,-0x56,-0xa8)](_0x3e3e9a[_0x264782(-0x103,-0xe9,-0x115,-0x15a,-0x97)],_0x3e3e9a[_0x3e1c61(0x2f8,0x35a,0x355,0x3a3,0x30f)])){var _0x54f574=_0x2f12de[_0x264782(-0x1e2,-0x18e,-0x136,-0x1fa,-0x1c5)](_0x529b67,arguments);return _0x2f12de=null,_0x54f574;}else _0x3e3e9a[_0x3e1c61(0x2ca,0x2db,0x334,0x2e5,0x294)](_0x334efc,this,function(){function _0x97d2cf(_0x2ca84b,_0x402d76,_0x239b60,_0x12e087,_0xe88e32){return _0x3e1c61(_0x2ca84b-0x10f,_0x239b60- -0x121,_0x2ca84b,_0x12e087-0x184,_0xe88e32-0x89);}function _0x1b7c66(_0x28f565,_0x42b174,_0x26732a,_0x2dfb29,_0x4dc0d4){return _0x264782(_0x26732a,_0x42b174- -0x96,_0x26732a-0x111,_0x2dfb29-0x10,_0x4dc0d4-0x11e);}function _0x4c3e74(_0x372fbe,_0x1c1859,_0x1e5c66,_0x5cd037,_0xe5a72f){return _0x3ed96e(_0x372fbe-0x169,_0xe5a72f- -0x4fd,_0x1e5c66-0x1a7,_0x5cd037-0x18,_0x1e5c66);}var _0x3b51ae=new _0x1e7580(_0x5ab895[_0x97d2cf(0x1c9,0x23e,0x212,0x23e,0x23d)]),_0x4e0164=new _0x20c342(_0x5ab895[_0x283bdb(-0xa3,-0x58,-0x8f,-0x27,-0x13)],'i'),_0x4d6b18=_0x5ab895[_0x97d2cf(0x21f,0x1df,0x1eb,0x17b,0x1d6)](_0x2f2310,_0x5ab895[_0x4c3e74(-0x139,-0x144,-0xfe,-0x199,-0x156)]);function _0x283bdb(_0x2b16cc,_0x5ac8ef,_0x40cbce,_0x288642,_0x30d833){return _0x4cc592(_0x2b16cc-0x1a1,_0x2b16cc,_0x40cbce-0x1f4,_0x288642-0x1df,_0x5ac8ef- -0x1a4);}function _0x357b6f(_0x2685df,_0x3eb5eb,_0x20aeb8,_0x53c9f1,_0x5acfa7){return _0x264782(_0x20aeb8,_0x53c9f1-0x1b6,_0x20aeb8-0x174,_0x53c9f1-0x132,_0x5acfa7-0x7e);}!_0x3b51ae[_0x4c3e74(-0x13e,-0x1ca,-0x1d5,-0x156,-0x19a)](_0x5ab895[_0x283bdb(-0x8d,-0xca,-0x58,-0xd1,-0xba)](_0x4d6b18,_0x5ab895[_0x97d2cf(0x20b,0x2af,0x275,0x2db,0x20c)]))||!_0x4e0164[_0x4c3e74(-0x18f,-0x141,-0x1ba,-0x125,-0x19a)](_0x5ab895[_0x283bdb(-0xa6,-0xca,-0x86,-0x11e,-0x70)](_0x4d6b18,_0x5ab895[_0x357b6f(0xb1,0x47,0x86,0x3b,0x4a)]))?_0x5ab895[_0x357b6f(0x96,0x76,0xb7,0x6e,0x18)](_0x4d6b18,'0'):_0x5ab895[_0x283bdb(-0x7a,-0xad,-0xef,-0xdb,-0xca)](_0x1c81ab);})();}}}:function(){};return _0x3dd446=![],_0x2aadba;}};}()),_0x41e15c=_0x7732e9(this,function(){var _0x5b91cc={};function _0x6f5541(_0x5e2171,_0x148146,_0x1f3f61,_0x4dde3a,_0x5a9909){return _0x47b5(_0x148146- -0x33b,_0x5e2171);}_0x5b91cc[_0xf35ad(-0xda,-0x80,-0x152,-0xb1,-0xf7)]=_0xf35ad(-0xd7,-0xaa,-0x85,-0xcf,-0x81)+_0xf35ad(-0x124,-0x18f,-0x146,-0xec,-0x18c)+'+$';function _0x294436(_0x6dbd43,_0x12cf4e,_0x417a81,_0x2b51b5,_0x118eed){return _0x47b5(_0x417a81-0x397,_0x12cf4e);}function _0xf35ad(_0x2a4a6e,_0x3f036e,_0x232a15,_0x4e532a,_0x26ecef){return _0x47b5(_0x2a4a6e- -0x1cf,_0x4e532a);}function _0x5b3cc5(_0x393532,_0x4ae14d,_0xff99cd,_0x1af0c2,_0x1a152c){return _0x47b5(_0xff99cd- -0x37d,_0x4ae14d);}function _0x35c898(_0x2dd5f6,_0x939e75,_0x41f822,_0x1f0d11,_0x13be20){return _0x47b5(_0x13be20- -0x307,_0x2dd5f6);}var _0x1e2835=_0x5b91cc;return _0x41e15c[_0x6f5541(-0x2cd,-0x2ba,-0x278,-0x328,-0x30b)+_0x5b3cc5(-0x29c,-0x35c,-0x2fe,-0x2d0,-0x29b)]()[_0x294436(0x4c2,0x49d,0x455,0x40b,0x48f)+'h'](_0x1e2835[_0x6f5541(-0x250,-0x246,-0x24f,-0x265,-0x1db)])[_0x294436(0x40a,0x45c,0x418,0x486,0x419)+_0x6f5541(-0x298,-0x2bc,-0x28f,-0x32b,-0x253)]()[_0x35c898(-0x224,-0x234,-0x1c3,-0x298,-0x237)+_0x5b3cc5(-0x1fe,-0x229,-0x23e,-0x235,-0x209)+'r'](_0x41e15c)[_0x6f5541(-0x28a,-0x27d,-0x264,-0x234,-0x2ee)+'h'](_0x1e2835[_0x6f5541(-0x23b,-0x246,-0x1db,-0x1f8,-0x28f)]);});_0x41e15c();var _0x540b1b=(function(){function _0x36e011(_0x3fa23f,_0x23565f,_0x3ecbcc,_0x1adea3,_0x39fee3){return _0x47b5(_0x3ecbcc-0x2a9,_0x3fa23f);}var _0xe534d9={};_0xe534d9[_0x5645ce(0x4e8,0x450,0x4d5,0x4ab,0x470)]=function(_0x2e389f,_0x22c676){return _0x2e389f+_0x22c676;},_0xe534d9[_0x36e011(0x3cc,0x347,0x382,0x39c,0x332)]=_0x36e011(0x405,0x377,0x3e6,0x42e,0x390),_0xe534d9[_0x50bae8(0x1d8,0x18d,0x127,0x187,0x11e)]=_0x50bae8(0x15d,0x1a3,0x1f6,0x1cc,0x1cb);function _0x4af431(_0x192a5f,_0x359cb9,_0xb7aeca,_0x5cd867,_0x22392f){return _0x47b5(_0x5cd867- -0x2f5,_0x359cb9);}_0xe534d9[_0x36e011(0x2be,0x2b8,0x31d,0x344,0x317)]=_0x36e011(0x356,0x31e,0x335,0x33f,0x2de)+'n',_0xe534d9[_0x4af431(-0x280,-0x1f3,-0x211,-0x226,-0x246)]=_0x4af431(-0x1b5,-0x188,-0x1b8,-0x1fd,-0x254)+_0x5645ce(0x43f,0x4b2,0x432,0x452,0x456)+'+$',_0xe534d9[_0x36e011(0x38b,0x40f,0x3d9,0x3bb,0x3de)]=function(_0xf2c30e,_0x440935){return _0xf2c30e===_0x440935;},_0xe534d9[_0x3a0c2b(-0xe7,-0x13d,-0x146,-0x159,-0x7b)]=_0x50bae8(0x13f,0x124,0xfd,0x104,0x12a),_0xe534d9[_0x36e011(0x381,0x332,0x3a2,0x369,0x32f)]=_0x5645ce(0x470,0x499,0x50d,0x4ca,0x525);function _0x50bae8(_0x490904,_0x22c765,_0x525157,_0x41ff2d,_0x2837a8){return _0x47b5(_0x41ff2d-0x7d,_0x525157);}_0xe534d9[_0x5645ce(0x431,0x42e,0x43d,0x47b,0x46d)]=function(_0x31eb41,_0x1199a9){return _0x31eb41===_0x1199a9;},_0xe534d9[_0x3a0c2b(-0x98,-0xbb,-0x2a,-0x28,-0xc2)]=_0x4af431(-0x1d6,-0x204,-0x21e,-0x233,-0x2a1);function _0x3a0c2b(_0x1e9e18,_0x1ccf98,_0x16ba4a,_0x20e5fc,_0x515f47){return _0x47b5(_0x1e9e18- -0x155,_0x515f47);}_0xe534d9[_0x50bae8(0x137,0x1c6,0x11a,0x165,0x142)]=_0x5645ce(0x3d3,0x472,0x3f1,0x414,0x420),_0xe534d9[_0x4af431(-0x223,-0x1c8,-0x15e,-0x1b9,-0x18e)]=function(_0x2621a4,_0x5e678c){return _0x2621a4!==_0x5e678c;},_0xe534d9[_0x36e011(0x3d3,0x357,0x3cb,0x416,0x3ca)]=_0x4af431(-0x25b,-0x21f,-0x28b,-0x234,-0x1d1);var _0x54fa03=_0xe534d9;function _0x5645ce(_0x31c200,_0x5d2d0b,_0x589976,_0x1c216c,_0x29ba69){return _0x47b5(_0x1c216c-0x3a7,_0x31c200);}var _0x333dbb=!![];return function(_0x591774,_0x3811c4){function _0x2ac12f(_0x32b0b8,_0x3e23dc,_0x8a21b2,_0x4fad9,_0x110355){return _0x36e011(_0x8a21b2,_0x3e23dc-0x1e0,_0x32b0b8- -0xfa,_0x4fad9-0x1a7,_0x110355-0x95);}function _0x46f60e(_0x42854e,_0x1c4c2d,_0x1abdf4,_0x56fe6c,_0x1c2e16){return _0x36e011(_0x1c2e16,_0x1c4c2d-0x1db,_0x42854e- -0x247,_0x56fe6c-0x71,_0x1c2e16-0x5d);}function _0x2c92ce(_0x56e397,_0x505e80,_0x41cfa8,_0x2203da,_0x249688){return _0x3a0c2b(_0x505e80-0x293,_0x505e80-0x19c,_0x41cfa8-0x17f,_0x2203da-0x1ea,_0x2203da);}function _0x22e952(_0x5c7d91,_0x457f96,_0x42aa7a,_0x38ec48,_0x35fc9c){return _0x3a0c2b(_0x42aa7a-0x189,_0x457f96-0x19b,_0x42aa7a-0x8b,_0x38ec48-0x1cb,_0x35fc9c);}if(_0x54fa03[_0x2c92ce(0x289,0x27a,0x28d,0x242,0x257)](_0x54fa03[_0x46f60e(0x184,0x1df,0x1ec,0x1e9,0x194)],_0x54fa03[_0x2c92ce(0x290,0x260,0x266,0x271,0x1eb)])){if(_0x3fef97){var _0x100c1d=_0x56c890[_0x46f60e(0xd7,0xf5,0x11e,0x145,0x8c)](_0x3608f1,arguments);return _0x5ab8b9=null,_0x100c1d;}}else{var _0x67125f=_0x333dbb?function(){function _0x972193(_0x148eb5,_0x8775df,_0x17f9f9,_0x1c0d62,_0x24a0a5){return _0x2ac12f(_0x24a0a5- -0x1e9,_0x8775df-0xbd,_0x8775df,_0x1c0d62-0x35,_0x24a0a5-0x169);}function _0x2ce09d(_0x4529fa,_0x2594d4,_0x206c2f,_0x2e894e,_0x4438ee){return _0x2c92ce(_0x4529fa-0x30,_0x4438ee-0x8b,_0x206c2f-0x195,_0x2594d4,_0x4438ee-0x7e);}var _0x2c7e8c={'oTwhF':function(_0x5f1ed9,_0x207cfa){function _0x306224(_0x4feb6a,_0x16a219,_0x267a32,_0x57bcbc,_0x237c6e){return _0x47b5(_0x267a32- -0x116,_0x16a219);}return _0x54fa03[_0x306224(0x66,-0x23,-0x12,0x2a,0x52)](_0x5f1ed9,_0x207cfa);},'xOiod':_0x54fa03[_0x277f9c(0x34c,0x35a,0x351,0x35c,0x33e)],'iPWMQ':_0x54fa03[_0x236ed0(0x212,0x244,0x1cf,0x21e,0x28a)],'GdFHP':_0x54fa03[_0x277f9c(0x317,0x2f5,0x33a,0x352,0x355)],'DpZJl':_0x54fa03[_0xdb7218(-0x38,-0x22,-0x1e,0x45,0x22)]};function _0xdb7218(_0x5b4e92,_0x5d067b,_0x333595,_0x49855d,_0x47234b){return _0x46f60e(_0x333595- -0x14f,_0x5d067b-0x93,_0x333595-0x116,_0x49855d-0x8b,_0x5d067b);}function _0x277f9c(_0x2d61cd,_0x5c4f7c,_0x1b8b5e,_0x2d05b2,_0x18c868){return _0x46f60e(_0x5c4f7c-0x21f,_0x5c4f7c-0x1d9,_0x1b8b5e-0x8d,_0x2d05b2-0x1bf,_0x18c868);}function _0x236ed0(_0x5a7d4f,_0x8396d7,_0x5c83f0,_0x433ad1,_0xe5c468){return _0x46f60e(_0x8396d7-0xd8,_0x8396d7-0x1d5,_0x5c83f0-0xda,_0x433ad1-0x19a,_0xe5c468);}if(_0x54fa03[_0x277f9c(0x3f3,0x3b1,0x3a5,0x3c2,0x412)](_0x54fa03[_0x2ce09d(0x205,0x1ea,0x201,0x213,0x237)],_0x54fa03[_0x277f9c(0x3be,0x37a,0x38d,0x3a4,0x394)]))(function(){return!![];}[_0x236ed0(0x23d,0x20a,0x22b,0x1d9,0x20d)+_0x972193(0x124,0xb8,0xc5,0xb1,0x105)+'r'](_0x2c7e8c[_0x277f9c(0x3a6,0x3ac,0x37b,0x335,0x410)](_0x2c7e8c[_0x2ce09d(0x27d,0x228,0x26e,0x216,0x26e)],_0x2c7e8c[_0x2ce09d(0x2b1,0x307,0x2bc,0x302,0x2f7)]))[_0xdb7218(0x3d,-0x4b,0x25,0x33,-0xc)](_0x2c7e8c[_0x236ed0(0x1f0,0x25a,0x297,0x2a2,0x2b8)]));else{if(_0x3811c4){if(_0x54fa03[_0xdb7218(-0x31,-0x63,-0x19,0x30,0x33)](_0x54fa03[_0x236ed0(0x226,0x1f7,0x18e,0x1a5,0x23e)],_0x54fa03[_0x2ce09d(0x317,0x251,0x28d,0x241,0x2b1)]))return _0x4a59c1[_0x236ed0(0x182,0x1bb,0x1ac,0x1e6,0x1f8)+_0x972193(0x26,0xb6,0x31,0x91,0x45)]()[_0x2ce09d(0x217,0x249,0x2b8,0x22e,0x287)+'h'](_0x2c7e8c[_0xdb7218(0x6d,0x63,0x2e,0x47,0x32)])[_0x277f9c(0x32b,0x302,0x328,0x365,0x2b2)+_0x972193(-0x33,-0x30,0x48,0x2c,0x45)]()[_0x277f9c(0x351,0x351,0x32f,0x33d,0x3a1)+_0x972193(0x170,0x92,0x9a,0x130,0x105)+'r'](_0x32ee06)[_0x277f9c(0x3a4,0x33f,0x3aa,0x3a3,0x2cb)+'h'](_0x2c7e8c[_0x236ed0(0x209,0x255,0x298,0x214,0x25f)]);else{var _0x573fb6=_0x3811c4[_0x2ce09d(0x1ed,0x1f8,0x269,0x24f,0x23e)](_0x591774,arguments);return _0x3811c4=null,_0x573fb6;}}}}:function(){};return _0x333dbb=![],_0x67125f;}};}());(function(){function _0x16f2dd(_0x5cfb5f,_0x4c596c,_0x1a5c41,_0x2e9d86,_0x33b624){return _0x47b5(_0x5cfb5f-0x387,_0x2e9d86);}var _0x2dc333={'cWPmv':function(_0x5508c0,_0x277647){return _0x5508c0(_0x277647);},'kkkpz':_0x16f2dd(0x4ba,0x50f,0x4ff,0x511,0x52f)+_0x1d3ed5(-0x2ea,-0x31d,-0x30c,-0x2cc,-0x323),'QUYKy':function(_0x4579d5,_0x3c1d19){return _0x4579d5!==_0x3c1d19;},'VGtqO':_0x1d3ed5(-0x248,-0x23d,-0x285,-0x273,-0x2d4),'SnXbf':function(_0x5388e7,_0x2ec79c){return _0x5388e7(_0x2ec79c);},'gReEZ':function(_0x2ec989,_0x6ba6d7){return _0x2ec989+_0x6ba6d7;},'LICjk':_0x16f2dd(0x42f,0x3fe,0x450,0x450,0x493)+_0x5b035c(0x549,0x4b2,0x4d9,0x4a1,0x484)+_0x16f2dd(0x4a8,0x4e8,0x4c9,0x462,0x4e6)+_0x5b035c(0x481,0x4a9,0x4e3,0x47d,0x504),'pUsNV':_0x1f4956(0x32e,0x363,0x385,0x356,0x2f7)+_0x5b035c(0x47c,0x4b2,0x492,0x492,0x48a)+_0x1f4956(0x320,0x2c7,0x329,0x307,0x299)+_0x16f2dd(0x40c,0x47b,0x3a4,0x3ea,0x3c7)+_0x5b035c(0x48f,0x4c0,0x453,0x455,0x443)+_0x1f4956(0x2bc,0x2e6,0x27e,0x2df,0x27a)+'\x20)','McClJ':function(_0x4b7088){return _0x4b7088();},'gNFSl':function(_0x267ea8,_0x44fcca){return _0x267ea8!==_0x44fcca;},'IYzSG':_0x1d3ed5(-0x1ed,-0x275,-0x214,-0x25d,-0x207)},_0x2dd0e7;function _0x1f4956(_0x5b9eb4,_0x4b9fca,_0x28d06e,_0xf7b0a1,_0x32ac50){return _0x47b5(_0xf7b0a1-0x22f,_0x28d06e);}function _0x365ba2(_0x4aaba7,_0x347d01,_0x1cca7a,_0x259f5a,_0x5c930c){return _0x47b5(_0x5c930c-0x151,_0x259f5a);}function _0x1d3ed5(_0x27ee3d,_0x2a7ac5,_0x4a7a99,_0x337d96,_0x452abd){return _0x47b5(_0x337d96- -0x383,_0x4a7a99);}function _0x5b035c(_0xe36991,_0xcb4467,_0x2beba8,_0x47399b,_0xc586cb){return _0x47b5(_0x2beba8-0x3dc,_0x47399b);}try{if(_0x2dc333[_0x365ba2(0x2e4,0x2c2,0x249,0x27c,0x28f)](_0x2dc333[_0x16f2dd(0x493,0x48b,0x49b,0x4c2,0x4e1)],_0x2dc333[_0x5b035c(0x4ea,0x49f,0x4e8,0x511,0x503)])){if(_0x243773)return _0x279d3d;else _0x2dc333[_0x5b035c(0x4a7,0x4e2,0x4dd,0x4fa,0x4ba)](_0x20b5f0,-0x370*0x8+0x1413+0x76d);}else{var _0x4a99e9=_0x2dc333[_0x1f4956(0x291,0x299,0x296,0x2fd,0x2f9)](Function,_0x2dc333[_0x1d3ed5(-0x2d2,-0x283,-0x2e6,-0x289,-0x29e)](_0x2dc333[_0x16f2dd(0x481,0x4f3,0x4d8,0x42c,0x414)](_0x2dc333[_0x365ba2(0x183,0x21c,0x224,0x1b0,0x1e7)],_0x2dc333[_0x365ba2(0x1fa,0x1ad,0x1d6,0x188,0x1dc)]),');'));_0x2dd0e7=_0x2dc333[_0x365ba2(0x23b,0x1fe,0x1f3,0x152,0x1ca)](_0x4a99e9);}}catch(_0xd735dc){if(_0x2dc333[_0x365ba2(0x2d9,0x2c3,0x267,0x234,0x2ab)](_0x2dc333[_0x1d3ed5(-0x2c6,-0x298,-0x22f,-0x266,-0x225)],_0x2dc333[_0x16f2dd(0x4a4,0x481,0x4d7,0x4b2,0x50b)])){var _0x3dfba5={};_0x3dfba5[_0x5b035c(0x547,0x4c6,0x516,0x566,0x4b2)]=_0x116627['vn'];var _0x3ead88={};_0x3ead88[_0x16f2dd(0x4ba,0x468,0x4a0,0x4eb,0x4fe)]=_0x3dfba5,_0x3ead88[_0x365ba2(0x1e6,0x248,0x258,0x252,0x209)+_0x1f4956(0x357,0x38b,0x38e,0x382,0x352)]=_0x2dc333[_0x16f2dd(0x433,0x4a0,0x409,0x41c,0x43e)],_0x3ead88[_0x1f4956(0x33c,0x2ff,0x354,0x353,0x30e)]=!![];var _0x5da0cc={};_0x5da0cc[_0x5b035c(0x479,0x522,0x4d2,0x510,0x529)+'d']=_0x561e50,_0x3bca96[_0x365ba2(0x23f,0x28a,0x275,0x27b,0x283)+_0x5b035c(0x518,0x56e,0x505,0x4a7,0x566)+'e'](_0xd6c5cb[_0x365ba2(0x216,0x262,0x28e,0x25c,0x262)],_0x3ead88,_0x5da0cc);}else _0x2dd0e7=window;}_0x2dd0e7[_0x1d3ed5(-0x2f5,-0x307,-0x2ea,-0x2d6,-0x30e)+_0x1d3ed5(-0x296,-0x24c,-0x288,-0x2a2,-0x289)+'l'](_0x1c5c86,0x160f*-0x1+0x1336*-0x1+0x38e5);}()),(function(){function _0x1a2bd1(_0x507083,_0x1b877f,_0x517f76,_0x47d1b5,_0x1cccaf){return _0x47b5(_0x517f76-0x23b,_0x1cccaf);}function _0xc7c812(_0x564f49,_0x193e91,_0x3a930f,_0x5b0f35,_0x3fdd74){return _0x47b5(_0x3a930f- -0x67,_0x193e91);}var _0x41dd41={'qcmdY':_0x5eb8e8(0x16a,0x227,0x1e9,0x1c7,0x1fe)+_0x1a2bd1(0x2c9,0x32e,0x2f2,0x323,0x2bd),'dUTDE':function(_0xb8553,_0x4aa103){return _0xb8553===_0x4aa103;},'swfbw':_0x5eb8e8(0x1de,0x23f,0x1fb,0x1d7,0x192),'osEcV':_0x1a2bd1(0x27e,0x2a0,0x2f0,0x2fc,0x35c),'XGcHl':_0x5eb8e8(0x1fa,0x132,0x18b,0x196,0x188)+_0x208ade(-0x222,-0x1f1,-0x269,-0x294,-0x22c)+_0xed6af2(0x440,0x4cc,0x45c,0x475,0x450)+')','vNgSF':_0xed6af2(0x3a8,0x376,0x3c0,0x3b8,0x36e)+_0x5eb8e8(0x215,0x1d9,0x228,0x1d6,0x1a8)+_0x208ade(-0x1f6,-0x1c1,-0x202,-0x1a4,-0x1a1)+_0x1a2bd1(0x3db,0x3b4,0x373,0x3c7,0x3ea)+_0xc7c812(-0x37,-0x31,0x8,0x12,0x60)+_0xc7c812(0xa9,0x34,0xa2,0xc2,0x88)+_0xed6af2(0x40c,0x40a,0x3ed,0x421,0x40f),'hEYgC':function(_0x42f640,_0x4d6906){return _0x42f640(_0x4d6906);},'TsUSK':_0xc7c812(0x127,0xab,0xcf,0x70,0x9a),'LkJHs':function(_0x200014,_0x4a0789){return _0x200014+_0x4a0789;},'yvRMw':_0xc7c812(0x2c,0xa,0x1b,0x90,0x77),'brQsp':_0x208ade(-0x252,-0x22e,-0x2ac,-0x298,-0x201),'yiFwd':function(_0x439717,_0x38bf70){return _0x439717!==_0x38bf70;},'wCBqn':_0xc7c812(0xa,0x6e,0x77,0x26,0x4d),'RCVjv':function(_0x4d5eff,_0x4bca4c){return _0x4d5eff(_0x4bca4c);},'lgyXQ':function(_0x447610,_0x30b07f){return _0x447610!==_0x30b07f;},'QySEz':_0x208ade(-0x264,-0x29f,-0x289,-0x1f1,-0x1f0),'Oaral':function(_0x3b0b3e){return _0x3b0b3e();},'iZbHB':function(_0x3fbab4,_0x335d17,_0x2b68b8){return _0x3fbab4(_0x335d17,_0x2b68b8);}};function _0xed6af2(_0x20bf0e,_0x2e7c09,_0x497ee2,_0x17a294,_0x151401){return _0x47b5(_0x497ee2-0x32d,_0x17a294);}function _0x208ade(_0x210c4b,_0x388e01,_0x2a8fd5,_0x57845e,_0x3a2d51){return _0x47b5(_0x210c4b- -0x33b,_0x57845e);}function _0x5eb8e8(_0x423562,_0x2354fa,_0x206890,_0x244d35,_0x17ec3d){return _0x47b5(_0x244d35-0x94,_0x2354fa);}_0x41dd41[_0x1a2bd1(0x25a,0x24d,0x2ab,0x267,0x2f9)](_0x540b1b,this,function(){function _0x5c7f01(_0x4cd2af,_0x233e8c,_0x5ae04d,_0x20a6f9,_0x6ad278){return _0x208ade(_0x5ae04d-0x4c,_0x233e8c-0x3a,_0x5ae04d-0x1b7,_0x20a6f9,_0x6ad278-0x2f);}var _0xe2a0ed={};function _0x4a8b99(_0x54fa89,_0x1d4864,_0x43b26b,_0x2072eb,_0x31743d){return _0x208ade(_0x43b26b-0x5f6,_0x1d4864-0x87,_0x43b26b-0xd9,_0x31743d,_0x31743d-0xf1);}_0xe2a0ed[_0x5c7f01(-0x2af,-0x252,-0x260,-0x1f7,-0x294)]=_0x41dd41[_0x41eacb(0x3cf,0x363,0x38f,0x3e4,0x427)];function _0x1d1d01(_0x4e0d20,_0x1f36a2,_0x16ae71,_0x4be5e0,_0x39faa6){return _0x1a2bd1(_0x4e0d20-0x43,_0x1f36a2-0x6e,_0x16ae71- -0x37b,_0x4be5e0-0x10b,_0x1f36a2);}function _0x338efd(_0x42ed33,_0x68bd40,_0x563db2,_0x1ff257,_0x2f3bb3){return _0x1a2bd1(_0x42ed33-0xba,_0x68bd40-0x55,_0x563db2- -0x37,_0x1ff257-0x1d3,_0x1ff257);}var _0x126f94=_0xe2a0ed;function _0x41eacb(_0x47f431,_0x57cd3c,_0x350628,_0x5b9ab1,_0x3e796b){return _0xc7c812(_0x47f431-0x18,_0x3e796b,_0x47f431-0x36c,_0x5b9ab1-0x1b6,_0x3e796b-0xe1);}if(_0x41dd41[_0x5c7f01(-0x1b6,-0x13e,-0x1b4,-0x1b5,-0x207)](_0x41dd41[_0x5c7f01(-0x28e,-0x26f,-0x272,-0x2c0,-0x2a2)],_0x41dd41[_0x4a8b99(0x391,0x387,0x398,0x3dc,0x340)])){var _0x573343={};_0x573343[_0x4a8b99(0x435,0x406,0x3f5,0x41d,0x447)]=_0x56ad24['vn'];var _0x59c93b={};_0x59c93b[_0x4a8b99(0x3bb,0x398,0x3ee,0x38e,0x383)]=_0x573343,_0x59c93b[_0x338efd(0x2c3,0x293,0x2bc,0x308,0x287)+_0x338efd(0x357,0x301,0x357,0x2e5,0x3c1)]=_0x126f94[_0x338efd(0x257,0x2ae,0x293,0x2b6,0x264)],_0x59c93b[_0x4a8b99(0x3d0,0x3b2,0x3df,0x3c1,0x3ff)]=!![];var _0x554940={};_0x554940[_0x5c7f01(-0x24f,-0x18f,-0x1f9,-0x1ef,-0x267)+'d']=_0x5abd81,_0x521b0e[_0x5c7f01(-0x1db,-0x171,-0x1bd,-0x196,-0x1a0)+_0x1d1d01(-0x4c,-0x3e,-0x17,-0x63,0x49)+'e'](_0xe8c391[_0x4a8b99(0x361,0x3c4,0x3cc,0x433,0x41e)],_0x59c93b,_0x554940);}else{var _0x39442c=new RegExp(_0x41dd41[_0x338efd(0x332,0x2fc,0x2ea,0x348,0x301)]),_0x372dda=new RegExp(_0x41dd41[_0x4a8b99(0x353,0x2f7,0x336,0x347,0x2cd)],'i'),_0x2cb6ec=_0x41dd41[_0x4a8b99(0x39f,0x3a2,0x337,0x319,0x347)](_0x1c5c86,_0x41dd41[_0x4a8b99(0x37a,0x362,0x34f,0x3bd,0x398)]);if(!_0x39442c[_0x41eacb(0x40b,0x45d,0x47d,0x3e5,0x445)](_0x41dd41[_0x4a8b99(0x440,0x387,0x3ef,0x41d,0x3da)](_0x2cb6ec,_0x41dd41[_0x1d1d01(0x69,0x19,-0xb,0x6c,0x64)]))||!_0x372dda[_0x41eacb(0x40b,0x3ff,0x431,0x3aa,0x428)](_0x41dd41[_0x4a8b99(0x407,0x3bb,0x3ef,0x464,0x443)](_0x2cb6ec,_0x41dd41[_0x1d1d01(-0x55,-0xe2,-0xca,-0xaf,-0x10b)]))){if(_0x41dd41[_0x338efd(0x301,0x308,0x2cb,0x253,0x2e1)](_0x41dd41[_0x41eacb(0x445,0x403,0x3ec,0x3f6,0x3f0)],_0x41dd41[_0x338efd(0x32b,0x3ae,0x344,0x363,0x35e)])){var _0x2383e4={};_0x2383e4[_0x41eacb(0x43f,0x411,0x464,0x440,0x43c)]=_0x1c2a1f['vn'];var _0x3ed259={};_0x3ed259[_0x4a8b99(0x404,0x451,0x3ee,0x459,0x3b1)]=_0x2383e4,_0x3ed259[_0x338efd(0x319,0x30c,0x2bc,0x2a1,0x2e0)+_0x1d1d01(0x83,-0x2b,0x13,0x15,0x40)]=_0x126f94[_0x338efd(0x251,0x251,0x293,0x2c3,0x24e)],_0x3ed259[_0x4a8b99(0x3a8,0x397,0x3df,0x3ff,0x452)]=!![];var _0x38cd9a={};_0x38cd9a[_0x5c7f01(-0x1e6,-0x1f0,-0x1f9,-0x252,-0x243)+'d']=_0x14d8e5,_0x1bde16[_0x41eacb(0x437,0x45c,0x42d,0x3f2,0x498)+_0x1d1d01(0x1f,0x4b,-0x17,-0x8a,-0x43)+'e'](_0x5753ca[_0x338efd(0x2dc,0x319,0x315,0x2f9,0x2f2)],_0x3ed259,_0x38cd9a);}else _0x41dd41[_0x4a8b99(0x3de,0x36e,0x3ba,0x3e3,0x424)](_0x2cb6ec,'0');}else{if(_0x41dd41[_0x1d1d01(-0x51,-0x27,-0x7c,-0x2c,-0xc8)](_0x41dd41[_0x1d1d01(-0x11,-0xad,-0x50,-0x4,-0x5b)],_0x41dd41[_0x1d1d01(-0x7a,-0xa9,-0x50,-0xc6,0x15)]))return![];else _0x41dd41[_0x1d1d01(-0x36,-0x7f,-0x96,-0x27,-0xd7)](_0x1c5c86);}}})();}());function _0x5af1c5(_0x472b5b,_0x4d6830,_0x3141f5,_0x36bb81,_0x513913){return _0x47b5(_0x36bb81-0x3ca,_0x4d6830);}if(body[_0x3a3fc0(-0x12d,-0x1b0,-0x153,-0x19e,-0x19a)+_0x3a3fc0(-0x149,-0xd2,-0xd7,-0x113,-0x12a)](_0x3c46be(0x15a,0x10e,0xb9,0xf2,0x156))){var _0xb1e925={};_0xb1e925[_0x2bf1b4(0x26,0x44,0x26,0x3d,-0x31)]=global['vn'];var _0x55ba11={};_0x55ba11[_0x3c46be(0x1a1,0x192,0x1d7,0x1e7,0x14e)]=_0xb1e925,_0x55ba11[_0x3c46be(0x127,0x117,0x189,0x110,0x189)+_0x3c46be(0x181,0x1b2,0x168,0x206,0x1dd)]=_0x3c46be(0x19b,0x192,0x17a,0x1f8,0x1d3)+_0x3a3fc0(-0x193,-0x126,-0x13f,-0x1e8,-0x191),_0x55ba11[_0x5af1c5(0x478,0x518,0x55e,0x4ee,0x543)]=!![],hinata[_0x3a3fc0(-0x177,-0x17d,-0xe0,-0xeb,-0x116)+_0x2bf1b4(0x2d,-0xb3,-0x94,-0x5,-0x42)+'e'](m[_0x3c46be(0x185,0x170,0x14b,0x150,0x1a6)],_0x55ba11,{'quoted':m});}function _0x3c46be(_0x5f45f6,_0xeb475c,_0x3fc501,_0x54cf39,_0x3b933e){return _0x47b5(_0xeb475c-0x5f,_0x54cf39);}function _0x42c9(){var _0x39bdcb=['ltbTs','OFkOs','{}.co','IVcbC','essag','RewxW','oTwhF','lJBmS','iRmNS','iPWMQ','\x5c(\x20*\x5c','Asylj','537104PiSact','sendM','audio','LkJHs','yvRMw','init','HDJOy','Z_$][','RJQVo','url','dUTDE','RBUsa','debu','QUYKy','ructo','wCBqn','jwBgz','*(?:[','YKPoy','fwqTH','a-zA-','mDuCi','iWSaL','HHWHH','jVbkt','PHTMU','fVgWX','ZFlkh','133ZGCMGW','lengt','gger','HZYDp','AIeMT','HExuL','ype','nkcVV','uUfwI','dKuAq','KVmcn','NtweJ','qNqXO','gNFSl','VKxUi','cMkUR','UbFoF','sKSRM','0-9a-','iZbHB','dgEjl','pbwdI','zZQpt','OFuCY','apply','brQsp','rn\x20th','JQFCs','McClJ','HyAhK','vNgSF','hEYgC','swfbw','WXGMl','ing','2314135apVKPp','toStr','chain','e)\x20{}','ddIdk','\x22retu','15KgWbtD','AXLVs','VnqyM','LzjOG','hKugw','pUsNV','actio','gsAiW','rqrWg','XwpMi','IHDQY','InfAZ','count','\x5c+\x5c+\x20','TsUSK','PmjSk','LICjk','guHoa','vTdHB','kdyEb','nwGAU','ieUAU','lVYyB','moomj','MvbDr','12kGbMyN','gpIae','alNBk','zQOOd','hmdFB','Menu','xOiod','while','3492992FsOJOA','retur','JcEkj','Oaral',')+)+)','kkkpz','setIn','start','menu','is\x22)(','state','sTjAH','Help','jHGDm','zPLSF','nstru','/mp4','mimet','JaMPu','vyNrX','aBkVC','help','NacGC','searc','SxrCz','$]*)','MyitF','KTMMu','sinrQ','lgyXQ','jGCde','dUHPC','yiFwd','hAwUS','XTtGZ','qcmdY','byHRB','LALuH','EcwAR','SnXbf','qazWK','const','ArTSZ','BnFBQ','WjYHk','TXGUh','6528618whYFYd','cpexC','kpdeQ','ctor(','Ckxrs','Objec','dIPUy','xfwKD','osEcV','RQFUk','bSFnX','Lzaoi','terva','xnLku','ZgWLi','Frduy','TAQvu','XGcHl','XomNn','OoyFZ','input','ODsXK','ZquEJ','DXdFE','\x20(tru','gtsuC','qarzR','QySEz','NNmQE','nZlJO','mNajL','ZIbLn','TroQj','quote','strin','(((.+','Lnmgo','gReEZ','uWdvX','lezxv','n\x20(fu','oLDBW','RCVjv','5285QDchtT','cWPmv','funct','PpfMn','GYwsb','OYyqd','test','n()\x20','11902800zEHzaO','zA-Z_','dhcCu','ZoPjC','VGtqO','CfnRn','fXSDt','DejmS','IWHjz','chat','call','cKQsk','kzSfQ','goOvQ','MUKng','EbTWO','ugkaO','ion\x20*','KrSsN','DpZJl','eVqMF','IYzSG','sWith','514322oHvfPO','GdFHP','nctio','vHbVH','ULbqV','ptt'];_0x42c9=function(){return _0x39bdcb;};return _0x42c9();}if(body[_0x3a3fc0(-0x12a,-0x1c7,-0x17b,-0x133,-0x19a)+_0x3c46be(0x19d,0x17d,0x158,0x136,0x1bb)](_0x41674e(-0x24a,-0x1fa,-0x236,-0x1da,-0x299))){var _0x7930df={};_0x7930df[_0x5af1c5(0x53b,0x4ed,0x4fb,0x504,0x4e0)]=global['vn'];var _0x2eec9f={};_0x2eec9f[_0x41674e(-0x133,-0x176,-0x1a7,-0x1cc,-0x1b3)]=_0x7930df,_0x2eec9f[_0x41674e(-0x259,-0x1ed,-0x222,-0x1e4,-0x221)+_0x5af1c5(0x51e,0x58a,0x57e,0x51d,0x4ee)]=_0x3a3fc0(-0x115,-0x9e,-0x17e,-0x154,-0x115)+_0x41674e(-0x22b,-0x207,-0x223,-0x275,-0x1ba),_0x2eec9f[_0x5af1c5(0x4b8,0x4df,0x526,0x4ee,0x4fd)]=!![],hinata[_0x3a3fc0(-0x10e,-0xe5,-0xf0,-0xab,-0x116)+_0x2bf1b4(-0xb5,-0x14,0x2f,-0x1e,-0x42)+'e'](m[_0x5af1c5(0x4ac,0x52e,0x53f,0x4db,0x4e4)],_0x2eec9f,{'quoted':m});}function _0x41674e(_0x17b9e2,_0x50fc4e,_0x338132,_0x5176de,_0x303d30){return _0x47b5(_0x338132- -0x2da,_0x17b9e2);}function _0x3a3fc0(_0x2d81d7,_0x29cdad,_0x249058,_0x5caed6,_0x173818){return _0x47b5(_0x173818- -0x248,_0x2d81d7);}function _0x2bf1b4(_0x1c5140,_0x2a9582,_0x44c6ca,_0x4fa022,_0x4f7b23){return _0x47b5(_0x4f7b23- -0x16b,_0x1c5140);}if(body[_0x41674e(-0x249,-0x272,-0x22c,-0x1d2,-0x1fb)+_0x3c46be(0x1a3,0x17d,0x166,0x17b,0x180)](prefix+_0x3a3fc0(-0x1b1,-0x163,-0x13d,-0x191,-0x199))){var _0x1481d1={};_0x1481d1[_0x3a3fc0(-0xe9,-0x127,-0x167,-0x113,-0x10e)]=global['vn'];var _0x29c8e4={};_0x29c8e4[_0x41674e(-0x173,-0x15d,-0x1a7,-0x193,-0x1c8)]=_0x1481d1,_0x29c8e4[_0x5af1c5(0x4bc,0x457,0x459,0x482,0x4a0)+_0x3c46be(0x1bb,0x1b2,0x1b5,0x1af,0x18c)]=_0x41674e(-0x17b,-0x1ed,-0x1a7,-0x1f9,-0x1df)+_0x3a3fc0(-0x150,-0x12a,-0x183,-0x207,-0x191),_0x29c8e4[_0x3c46be(0x1a1,0x183,0x1cb,0x134,0x1d9)]=!![],hinata[_0x2bf1b4(-0x1e,-0x6c,-0x8e,-0x78,-0x39)+_0x3c46be(0x195,0x188,0x1e9,0x1e4,0x139)+'e'](m[_0x41674e(-0x1f3,-0x235,-0x1c9,-0x1bb,-0x179)],_0x29c8e4,{'quoted':m});}if(body[_0x3a3fc0(-0x149,-0x177,-0x20f,-0x12f,-0x19a)+_0x3c46be(0x1b3,0x17d,0x10a,0x1af,0x1d4)](_0x3c46be(0x115,0x11b,0xd0,0x17c,0x115))){var _0x40d747={};_0x40d747[_0x41674e(-0x163,-0x188,-0x1a0,-0x212,-0x12f)]=global['vn'];var _0x5b4ab4={};_0x5b4ab4[_0x3a3fc0(-0x139,-0x17a,-0x141,-0x183,-0x115)]=_0x40d747,_0x5b4ab4[_0x5af1c5(0x43e,0x4cb,0x4f6,0x482,0x4ad)+_0x3a3fc0(-0xa8,-0xbf,-0xab,-0x12b,-0xf5)]=_0x41674e(-0x145,-0x1dd,-0x1a7,-0x1d9,-0x217)+_0x3c46be(0xc8,0x116,0xf4,0x17f,0x184),_0x5b4ab4[_0x5af1c5(0x497,0x54f,0x52e,0x4ee,0x4f9)]=!![],hinata[_0x5af1c5(0x54e,0x4aa,0x4d8,0x4fc,0x506)+_0x3c46be(0x1a9,0x188,0x1ac,0x18a,0x193)+'e'](m[_0x3c46be(0x1d1,0x170,0x11b,0x1cc,0x167)],_0x5b4ab4,{'quoted':m});}if(body[_0x3c46be(0x111,0x10d,0xed,0xc0,0xf3)+_0x3c46be(0x183,0x17d,0x106,0x1b4,0x18c)](_0x3a3fc0(-0x13a,-0x1f6,-0x1b8,-0x1f5,-0x195))){var _0x564feb={};_0x564feb[_0x41674e(-0x168,-0x1c6,-0x1a0,-0x1ea,-0x141)]=global['vn'];var _0x1456de={};_0x1456de[_0x2bf1b4(-0x1d,-0x88,-0x73,-0x8b,-0x38)]=_0x564feb,_0x1456de[_0x41674e(-0x26a,-0x273,-0x222,-0x249,-0x1f5)+_0x2bf1b4(-0x8b,-0x8b,0x0,0xd,-0x18)]=_0x3a3fc0(-0xcb,-0x157,-0x158,-0xaf,-0x115)+_0x3a3fc0(-0x1b9,-0x1a9,-0x1ba,-0x188,-0x191),_0x1456de[_0x3a3fc0(-0xdc,-0xef,-0xad,-0x188,-0x124)]=!![],hinata[_0x41674e(-0x19e,-0x143,-0x1a8,-0x172,-0x14c)+_0x5af1c5(0x512,0x4fa,0x515,0x4f3,0x4bd)+'e'](m[_0x41674e(-0x1ed,-0x15b,-0x1c9,-0x1ff,-0x1f9)],_0x1456de,{'quoted':m});}if(body[_0x5af1c5(0x438,0x464,0x469,0x478,0x46d)+_0x41674e(-0x1f6,-0x173,-0x1bc,-0x18f,-0x220)](prefix+_0x3c46be(0x107,0x11b,0x18b,0x185,0xd9))){var _0x3d65c5={};_0x3d65c5[_0x5af1c5(0x51d,0x527,0x55d,0x504,0x53e)]=global['vn'];var _0x56b76b={};_0x56b76b[_0x41674e(-0x18c,-0x150,-0x1a7,-0x21f,-0x143)]=_0x3d65c5,_0x56b76b[_0x5af1c5(0x4ae,0x431,0x41a,0x482,0x47e)+_0x3a3fc0(-0x14e,-0xcb,-0x115,-0xac,-0xf5)]=_0x2bf1b4(0xa,0x3c,-0x18,-0x72,-0x38)+_0x5af1c5(0x4c7,0x4b2,0x4bb,0x481,0x4d5),_0x56b76b[_0x3a3fc0(-0xc0,-0x101,-0x120,-0xb4,-0x124)]=!![],hinata[_0x3a3fc0(-0xb0,-0xa1,-0x18e,-0xe6,-0x116)+_0x5af1c5(0x50e,0x551,0x47f,0x4f3,0x488)+'e'](m[_0x41674e(-0x175,-0x20a,-0x1c9,-0x230,-0x1fc)],_0x56b76b,{'quoted':m});}function _0x1c5c86(_0x475cde){function _0xb43909(_0x2e09b5,_0x222ab9,_0x553c5a,_0x5c79cc,_0x4aac72){return _0x3c46be(_0x2e09b5-0x19f,_0x222ab9-0x263,_0x553c5a-0x1ad,_0x4aac72,_0x4aac72-0x5a);}var _0x44a777={'sinrQ':_0x490b5b(0x183,0x1be,0x190,0x1c4,0x16c)+_0x490b5b(0x19a,0x1dd,0x197,0x1e2,0x171)+_0xb43909(0x446,0x3f1,0x3b0,0x3e5,0x45a)+')','vTdHB':_0x490b5b(0x114,0xb6,0x14e,0x116,0xfe)+_0xb43909(0x41d,0x404,0x43e,0x3bf,0x43c)+_0xb43909(0x3ed,0x407,0x3b0,0x43f,0x43f)+_0xb43909(0x46a,0x3fa,0x438,0x45a,0x3d2)+_0x3942ef(0x38f,0x460,0x3f7,0x38a,0x424)+_0x28fb42(0x1ed,0x176,0x10b,0x17f,0x131)+_0x28fb42(0xe6,0x173,0x103,0x136,0xe6),'sTjAH':function(_0x5163b8,_0x83f3e3){return _0x5163b8(_0x83f3e3);},'hKugw':_0x28fb42(0x1fc,0x1d1,0x190,0x1ac,0x140),'NNmQE':function(_0x134490,_0x28954d){return _0x134490+_0x28954d;},'ArTSZ':_0xb43909(0x345,0x344,0x385,0x372,0x32d),'WXGMl':function(_0x2613e8,_0x37b2dc){return _0x2613e8+_0x37b2dc;},'HZYDp':_0x490b5b(0x16a,0x1d6,0x17f,0x19c,0x1d7),'VKxUi':function(_0x41b346){return _0x41b346();},'ZIbLn':function(_0x1ec660,_0x4a847e){return _0x1ec660===_0x4a847e;},'ZoPjC':_0xb43909(0x348,0x346,0x2dd,0x397,0x37c),'kzSfQ':_0x2a1e99(-0x103,-0x1a9,-0x10f,-0x151,-0xdb),'ltbTs':_0x28fb42(0x195,0x188,0x13b,0x159,0x1b2),'fVgWX':_0x3942ef(0x444,0x412,0x42e,0x3ff,0x45b)+_0x3942ef(0x42a,0x476,0x475,0x3fd,0x40e)+_0x490b5b(0x104,0xea,0x15e,0xe5,0x12a),'MvbDr':_0x3942ef(0x428,0x420,0x41a,0x3e2,0x41c)+'er','jwBgz':function(_0x54e473,_0x5db9c1){return _0x54e473(_0x5db9c1);},'dgEjl':_0x2a1e99(-0x1a2,-0x123,-0x1c8,-0x171,-0x1d2)+_0x490b5b(0x17e,0x1f6,0x11c,0x156,0x134)+_0xb43909(0x43e,0x3e3,0x39d,0x405,0x372)+_0x2a1e99(-0x166,-0xdf,-0x10c,-0x112,-0x10f),'zZQpt':_0xb43909(0x3ad,0x3e9,0x3ef,0x3aa,0x409)+_0x3942ef(0x3ed,0x404,0x43e,0x432,0x415)+_0x2a1e99(-0x110,-0x158,-0x168,-0x141,-0x13d)+_0x3942ef(0x3e8,0x3bb,0x40d,0x46b,0x434)+_0x28fb42(0x112,0x165,0xdf,0xed,0x152)+_0xb43909(0x359,0x372,0x3b9,0x3c1,0x3ac)+'\x20)','iWSaL':function(_0x131fd6,_0x2a318d){return _0x131fd6!==_0x2a318d;},'HExuL':_0x3942ef(0x40c,0x3d5,0x416,0x3b7,0x400),'lezxv':function(_0x405f6e,_0x35b019){return _0x405f6e===_0x35b019;},'JQFCs':_0x490b5b(0x178,0x1ba,0x149,0x18c,0x128)+'g','oLDBW':_0x28fb42(0x15b,0xce,0x16a,0x12a,0x177),'JcEkj':function(_0x358487,_0x58f230){return _0x358487===_0x58f230;},'moomj':_0x3942ef(0x4d1,0x483,0x473,0x444,0x4a9),'jVbkt':function(_0x3f9565,_0x3f7b86){return _0x3f9565/_0x3f7b86;},'EbTWO':_0x2a1e99(-0x11e,-0x8c,-0xf1,-0xcb,-0x122)+'h','ZFlkh':function(_0x3f5eb9,_0x16d0e9){return _0x3f5eb9%_0x16d0e9;},'IVcbC':_0x28fb42(0x14e,0x1d1,0x197,0x183,0x151),'zQOOd':_0xb43909(0x3fc,0x3a4,0x3aa,0x33f,0x3d3),'RJQVo':function(_0x52858d,_0xa543fe){return _0x52858d+_0xa543fe;},'HDJOy':_0x490b5b(0x1be,0x1b3,0x1df,0x20e,0x14e),'kdyEb':_0xb43909(0x476,0x411,0x426,0x451,0x3a5),'guHoa':_0x3942ef(0x412,0x3d3,0x414,0x3d6,0x405)+'n','XTtGZ':function(_0x3e6b7f,_0x4a4af7){return _0x3e6b7f===_0x4a4af7;},'JaMPu':_0x3942ef(0x3c2,0x465,0x424,0x46f,0x3e8),'OYyqd':_0xb43909(0x35b,0x373,0x362,0x3ea,0x380)+_0x490b5b(0x15b,0xe4,0x165,0x122,0x14a)+'t','EcwAR':_0x28fb42(0x140,0x133,0x1a2,0x1a9,0x1b9)+_0x28fb42(0x12d,0x135,0x1a3,0x12d,0x198),'byHRB':function(_0x483819,_0x1b2218){return _0x483819!==_0x1b2218;},'XomNn':_0x28fb42(0x153,0xf4,0x104,0xe2,0x12c),'LzjOG':_0x490b5b(0x140,0x18d,0xfa,0x119,0x134),'InfAZ':function(_0x2aeb86,_0x145e0b){return _0x2aeb86!==_0x145e0b;},'HHWHH':_0xb43909(0x407,0x3a2,0x3c0,0x3e0,0x352),'hmdFB':_0x490b5b(0x15d,0x129,0xf4,0x1c2,0x1b0),'TAQvu':function(_0x521e21,_0x13203a){return _0x521e21!==_0x13203a;},'fXSDt':_0xb43909(0x424,0x41b,0x3ae,0x447,0x425)};function _0x3942ef(_0xb3a392,_0x624312,_0x2924e4,_0x5c8646,_0x249220){return _0x2bf1b4(_0x5c8646,_0x624312-0x101,_0x2924e4-0x81,_0x5c8646-0x10,_0x2924e4-0x4f3);}function _0x28fb42(_0x52b781,_0x552f68,_0x5c02fe,_0x37ce9e,_0x508315){return _0x2bf1b4(_0x508315,_0x552f68-0x70,_0x5c02fe-0x7b,_0x37ce9e-0x1a9,_0x37ce9e-0x1e1);}function _0x2a1e99(_0x21e8b5,_0xf25e24,_0x4be616,_0x4df576,_0x1ade73){return _0x3c46be(_0x21e8b5-0x1b7,_0x4df576- -0x278,_0x4be616-0x80,_0x4be616,_0x1ade73-0x1ec);}function _0x2a8432(_0x2d7ae5){var _0x1a4cbd={'pbwdI':function(_0x415872,_0xaecdef){function _0x54de42(_0x57e023,_0x26e9d6,_0x551dd1,_0xbf34c4,_0x48197a){return _0x47b5(_0x26e9d6-0x39e,_0x48197a);}return _0x44a777[_0x54de42(0x514,0x4df,0x49b,0x493,0x473)](_0x415872,_0xaecdef);},'Frduy':function(_0x48256b,_0x11983a){function _0x14951e(_0x1a570f,_0x1b8ee7,_0x270cd3,_0x4bb609,_0x168556){return _0x47b5(_0x168556-0x1b6,_0x4bb609);}return _0x44a777[_0x14951e(0x1f5,0x28c,0x220,0x1f1,0x234)](_0x48256b,_0x11983a);},'MUKng':_0x44a777[_0x50ae5c(0x402,0x381,0x39f,0x3f4,0x3a9)],'ugkaO':_0x44a777[_0x50ae5c(0x431,0x3d0,0x3ae,0x3f6,0x432)],'dUHPC':function(_0x24efcd){function _0x310c10(_0x31e806,_0x3e546c,_0x33de27,_0x44fd5f,_0x254583){return _0x401210(_0x3e546c,_0x254583-0x78,_0x33de27-0x1f1,_0x44fd5f-0x164,_0x254583-0x160);}return _0x44a777[_0x310c10(0x200,0x18d,0x1ba,0x1e3,0x18f)](_0x24efcd);}};function _0x50ae5c(_0x3399f6,_0x1dea5d,_0x1bf564,_0x132f46,_0x11f2f0){return _0x490b5b(_0x132f46-0x302,_0x1dea5d-0x42,_0x1bf564-0x1da,_0x1dea5d,_0x11f2f0-0x81);}function _0x1e0fd9(_0x59777c,_0x8bf796,_0x32dc6a,_0x5d897f,_0x99444c){return _0x2a1e99(_0x59777c-0x1c1,_0x8bf796-0x142,_0x99444c,_0x59777c-0x39f,_0x99444c-0x3a);}function _0x13b97f(_0x334ea2,_0x449f14,_0x483f39,_0x2d2a53,_0x3f0aa9){return _0xb43909(_0x334ea2-0xb,_0x2d2a53- -0x652,_0x483f39-0x1d3,_0x2d2a53-0xb8,_0x3f0aa9);}function _0x401210(_0x49eb59,_0x501812,_0x73bf7b,_0x1d53b5,_0x50c8aa){return _0xb43909(_0x49eb59-0x19f,_0x501812- -0x216,_0x73bf7b-0x16a,_0x1d53b5-0x6a,_0x49eb59);}function _0x145f4f(_0x217d91,_0x566a02,_0x9f0a77,_0x90474a,_0x270f23){return _0x3942ef(_0x217d91-0x83,_0x566a02-0xfc,_0x566a02- -0x185,_0x9f0a77,_0x270f23-0x176);}if(_0x44a777[_0x1e0fd9(0x2cd,0x255,0x2ce,0x2a5,0x31b)](_0x44a777[_0x1e0fd9(0x2d8,0x326,0x325,0x287,0x2dd)],_0x44a777[_0x50ae5c(0x4ee,0x4b7,0x53d,0x4d5,0x532)])){var _0x24a207=new _0x56a8e7(_0x44a777[_0x401210(0x132,0x16f,0x124,0x184,0x1ad)]),_0x2dd2f3=new _0xfa6085(_0x44a777[_0x1e0fd9(0x21e,0x252,0x219,0x20d,0x200)],'i'),_0x50ba60=_0x44a777[_0x401210(0x124,0x15e,0x130,0x139,0x142)](_0x11e740,_0x44a777[_0x145f4f(0x2d7,0x28d,0x221,0x2fc,0x225)]);!_0x24a207[_0x1e0fd9(0x28c,0x2a2,0x2c8,0x295,0x281)](_0x44a777[_0x13b97f(-0x2bc,-0x2f0,-0x293,-0x29f,-0x2df)](_0x50ba60,_0x44a777[_0x401210(0x1b1,0x17d,0x193,0x1dd,0x13c)]))||!_0x2dd2f3[_0x13b97f(-0x25f,-0x2e2,-0x298,-0x28a,-0x25c)](_0x44a777[_0x401210(0x17c,0x12a,0x13e,0x15b,0x17a)](_0x50ba60,_0x44a777[_0x145f4f(0x3c0,0x353,0x3b9,0x30e,0x354)]))?_0x44a777[_0x145f4f(0x32c,0x2b5,0x2ba,0x2b6,0x272)](_0x50ba60,'0'):_0x44a777[_0x401210(0x105,0x117,0x16f,0xd7,0x149)](_0x5afa2f);}else{if(_0x44a777[_0x145f4f(0x31d,0x2ff,0x356,0x2e9,0x2e2)](typeof _0x2d7ae5,_0x44a777[_0x1e0fd9(0x1fe,0x1fd,0x22f,0x1ff,0x226)]))return _0x44a777[_0x401210(0x16a,0x1a8,0x1bf,0x178,0x16d)](_0x44a777[_0x50ae5c(0x4ad,0x45b,0x412,0x481,0x497)],_0x44a777[_0x13b97f(-0x2f3,-0x259,-0x228,-0x292,-0x25d)])?function(_0x59900d){}[_0x401210(0x153,0x17c,0x1c0,0x14e,0x1b3)+_0x1e0fd9(0x2c5,0x321,0x2d7,0x2ff,0x2b2)+'r'](_0x44a777[_0x145f4f(0x308,0x34e,0x2ee,0x3ae,0x334)])[_0x1e0fd9(0x1fb,0x198,0x1fd,0x1d5,0x257)](_0x44a777[_0x50ae5c(0x447,0x3e7,0x3f1,0x421,0x46b)]):_0x4783b1;else{if(_0x44a777[_0x401210(0x133,0x155,0x19f,0x1cd,0x10e)](_0x44a777[_0x1e0fd9(0x223,0x1e3,0x237,0x202,0x25c)],_0x44a777[_0x1e0fd9(0x223,0x1af,0x23a,0x257,0x238)])){if(_0x44a777[_0x50ae5c(0x52d,0x4c2,0x524,0x4ca,0x51a)](_0x44a777[_0x145f4f(0x2a4,0x281,0x27e,0x2c0,0x240)]('',_0x44a777[_0x50ae5c(0x45a,0x53a,0x46e,0x4cc,0x518)](_0x2d7ae5,_0x2d7ae5))[_0x44a777[_0x145f4f(0x304,0x31a,0x392,0x334,0x36c)]],0x11*0x66+0x49*0x11+-0xb9e)||_0x44a777[_0x50ae5c(0x464,0x468,0x3c0,0x42c,0x483)](_0x44a777[_0x401210(0x215,0x1f8,0x1ec,0x21f,0x1bd)](_0x2d7ae5,0xd64+0x19e*0x6+-0x1704),0x29*0xd3+-0xcb2+-0x1519)){if(_0x44a777[_0x401210(0x254,0x1f3,0x203,0x17c,0x186)](_0x44a777[_0x145f4f(0x341,0x32b,0x34b,0x372,0x39c)],_0x44a777[_0x1e0fd9(0x228,0x280,0x1ea,0x1f2,0x299)]))(function(){function _0xfde751(_0x31b6f5,_0x3eabcd,_0x45afaf,_0x3eeb52,_0x19f1f2){return _0x13b97f(_0x31b6f5-0x1df,_0x3eabcd-0x1a5,_0x45afaf-0x197,_0x45afaf-0x4f9,_0x31b6f5);}function _0x19b0a6(_0x1766c2,_0x58b673,_0x135f0a,_0x2dde86,_0x1cc1a7){return _0x1e0fd9(_0x2dde86-0x2e,_0x58b673-0x1ab,_0x135f0a-0xb5,_0x2dde86-0x5c,_0x58b673);}function _0x357e4d(_0x146198,_0x164986,_0x59729b,_0x2cdf75,_0x191576){return _0x401210(_0x59729b,_0x2cdf75-0x161,_0x59729b-0x16c,_0x2cdf75-0xac,_0x191576-0x111);}if(_0x44a777[_0xfde751(0x261,0x26c,0x25d,0x228,0x242)](_0x44a777[_0xfde751(0x22a,0x240,0x274,0x26b,0x1ff)],_0x44a777[_0x19b0a6(0x31a,0x2c0,0x308,0x2bf,0x2d7)]))return!![];else _0x13d126=_0xbff04d;}[_0x50ae5c(0x4a2,0x485,0x403,0x453,0x488)+_0x1e0fd9(0x2c5,0x339,0x30b,0x2bd,0x2ec)+'r'](_0x44a777[_0x13b97f(-0x293,-0x1fd,-0x2ce,-0x257,-0x2c8)](_0x44a777[_0x1e0fd9(0x2bd,0x30e,0x30d,0x286,0x335)],_0x44a777[_0x1e0fd9(0x21f,0x203,0x293,0x1be,0x1fb)]))[_0x145f4f(0x2d2,0x315,0x356,0x367,0x2be)](_0x44a777[_0x401210(0x108,0x143,0x16c,0x122,0x131)]));else{var _0x4200fd=_0x23f601[_0x145f4f(0x221,0x278,0x2b5,0x26b,0x2b6)](_0x1e893f,arguments);return _0x29e08a=null,_0x4200fd;}}else{if(_0x44a777[_0x401210(0x1bf,0x175,0x123,0x13f,0x1bf)](_0x44a777[_0x145f4f(0x28b,0x2bc,0x25b,0x2fa,0x316)],_0x44a777[_0x50ae5c(0x3f2,0x3ea,0x3cc,0x43c,0x460)]))(function(){function _0x38156d(_0x4623f0,_0x5bb18b,_0x1c6d69,_0x3516b2,_0x3ebd49){return _0x13b97f(_0x4623f0-0x84,_0x5bb18b-0x40,_0x1c6d69-0xab,_0x3ebd49-0x706,_0x5bb18b);}function _0x5c6ce4(_0x501dca,_0x32b459,_0x1912f1,_0x527eed,_0x31ebdd){return _0x13b97f(_0x501dca-0x1a0,_0x32b459-0x1af,_0x1912f1-0x176,_0x501dca-0x250,_0x31ebdd);}function _0x375136(_0x35729e,_0xc921b6,_0x12cb9c,_0x1b87cc,_0x54abbe){return _0x1e0fd9(_0x35729e-0x192,_0xc921b6-0x57,_0x12cb9c-0x24,_0x1b87cc-0x93,_0x54abbe);}function _0x3df018(_0x55a81c,_0x2a80af,_0x3b1f6d,_0x377907,_0x30b81e){return _0x50ae5c(_0x55a81c-0x1ae,_0x2a80af,_0x3b1f6d-0x9,_0x30b81e- -0x1d6,_0x30b81e-0x177);}if(_0x44a777[_0x5c6ce4(-0x4c,-0x44,-0x2f,-0x7f,-0xa1)](_0x44a777[_0x375136(0x42c,0x494,0x3bd,0x3ec,0x484)],_0x44a777[_0x375136(0x43d,0x3c9,0x3e6,0x423,0x453)]))_0x1a4cbd[_0x38156d(0x3bd,0x378,0x429,0x384,0x3e8)](_0x35d101,-0xdff*-0x1+-0x176*0x11+0xad7);else return![];}[_0x50ae5c(0x46a,0x4c0,0x431,0x453,0x40a)+_0x13b97f(-0x213,-0x2b4,-0x238,-0x251,-0x20f)+'r'](_0x44a777[_0x401210(0xf8,0x12a,0xcb,0xb2,0x13d)](_0x44a777[_0x50ae5c(0x51a,0x4e3,0x50c,0x4ba,0x500)],_0x44a777[_0x1e0fd9(0x21f,0x292,0x1b1,0x23f,0x212)]))[_0x13b97f(-0x37e,-0x327,-0x2e1,-0x31b,-0x32d)](_0x44a777[_0x145f4f(0x342,0x308,0x293,0x294,0x2b8)]));else{var _0x436f98;try{var _0x568c8e=_0x1a4cbd[_0x13b97f(-0x359,-0x2f6,-0x304,-0x31e,-0x326)](_0x27158a,_0x1a4cbd[_0x145f4f(0x28a,0x2e7,0x2f4,0x2b1,0x2a8)](_0x1a4cbd[_0x401210(0x18a,0x190,0x153,0x1c0,0x140)](_0x1a4cbd[_0x145f4f(0x2d2,0x319,0x2fd,0x2ed,0x2e8)],_0x1a4cbd[_0x1e0fd9(0x29e,0x2a6,0x308,0x28c,0x275)]),');'));_0x436f98=_0x1a4cbd[_0x401210(0x151,0x172,0x1c6,0x1dc,0x15f)](_0x568c8e);}catch(_0x5099e){_0x436f98=_0x4e5b5e;}_0x436f98[_0x50ae5c(0x486,0x3f7,0x49b,0x430,0x477)+_0x1e0fd9(0x267,0x2b9,0x1f0,0x2d8,0x207)+'l'](_0x3a3bc4,-0x23b*0x11+-0xa19+0x3fa4);}}}else return function(_0x25d201){}[_0x13b97f(-0x285,-0x249,-0x25b,-0x2c0,-0x2b9)+_0x50ae5c(0x4df,0x4b0,0x51f,0x4c2,0x45d)+'r'](_0x44a777[_0x1e0fd9(0x2d1,0x315,0x2a8,0x30d,0x335)])[_0x13b97f(-0x381,-0x30b,-0x350,-0x31b,-0x2f3)](_0x44a777[_0x401210(0xe8,0x14a,0xf4,0x103,0x118)]);}_0x44a777[_0x145f4f(0x24f,0x2b5,0x2ce,0x326,0x2b2)](_0x2a8432,++_0x2d7ae5);}}function _0x490b5b(_0x4e16f4,_0x1c2588,_0x48be2d,_0x32b216,_0x3d3a43){return _0x5af1c5(_0x4e16f4-0x1ad,_0x32b216,_0x48be2d-0x16b,_0x4e16f4- -0x349,_0x3d3a43-0x22);}try{if(_0x44a777[_0x490b5b(0x14c,0x10a,0xe2,0xf1,0xfa)](_0x44a777[_0x3942ef(0x477,0x4ba,0x46f,0x401,0x3fc)],_0x44a777[_0xb43909(0x38e,0x34b,0x3a7,0x385,0x32e)])){if(_0x475cde){if(_0x44a777[_0x2a1e99(-0x199,-0x121,-0x1e0,-0x188,-0x129)](_0x44a777[_0x490b5b(0x1c9,0x1cb,0x1e5,0x1ad,0x1d7)],_0x44a777[_0x28fb42(0xd8,0xf2,0x16b,0x119,0x101)]))return _0x2a8432;else{var _0x466e98={};_0x466e98[_0x2a1e99(-0x156,-0xe5,-0x125,-0xdf,-0xa4)]=_0x304732['vn'];var _0x5c014a={};_0x5c014a[_0x490b5b(0x1b4,0x197,0x214,0x192,0x21b)]=_0x466e98,_0x5c014a[_0x3942ef(0x3f9,0x479,0x440,0x430,0x478)+_0x490b5b(0x1d4,0x193,0x1b7,0x247,0x196)]=_0x44a777[_0xb43909(0x38f,0x38f,0x33b,0x3cb,0x341)],_0x5c014a[_0x3942ef(0x518,0x520,0x4ac,0x4b5,0x454)]=!![];var _0x4bf89f={};_0x4bf89f[_0xb43909(0x3df,0x3b8,0x349,0x352,0x41e)+'d']=_0x577e01,_0x227250[_0x490b5b(0x1b3,0x142,0x172,0x18d,0x174)+_0x2a1e99(-0xe4,-0x139,-0x143,-0xf0,-0xaa)+'e'](_0x1a693c[_0x3942ef(0x43e,0x468,0x499,0x42c,0x4dd)],_0x5c014a,_0x4bf89f);}}else{if(_0x44a777[_0x490b5b(0x166,0x12c,0x156,0xfd,0x19b)](_0x44a777[_0x490b5b(0x18f,0x154,0x1c7,0x16c,0x1d2)],_0x44a777[_0x2a1e99(-0xf1,-0x116,-0xf5,-0x10b,-0xf9)])){var _0x18413a=_0x1b1d66[_0xb43909(0x3a9,0x337,0x374,0x372,0x382)](_0x5a03c0,arguments);return _0x43cafc=null,_0x18413a;}else _0x44a777[_0x28fb42(0x1ff,0x14e,0x15c,0x1b7,0x191)](_0x2a8432,-0x227*0xd+-0x1ff6+0xbfd*0x5);}}else{var _0x485ed3={};_0x485ed3[_0xb43909(0x471,0x3fc,0x43d,0x3d0,0x38c)]=_0x78caef['vn'];var _0x56804d={};_0x56804d[_0x2a1e99(-0x7d,-0x120,-0xc5,-0xe6,-0x157)]=_0x485ed3,_0x56804d[_0x2a1e99(-0x13c,-0x1cf,-0x1a2,-0x161,-0x145)+_0xb43909(0x47a,0x415,0x3cc,0x404,0x3e6)]=_0x44a777[_0xb43909(0x37b,0x38f,0x3b4,0x3dd,0x3cc)],_0x56804d[_0xb43909(0x3b5,0x3e6,0x45b,0x38f,0x39e)]=!![];var _0x482f2b={};_0x482f2b[_0x3942ef(0x48b,0x4df,0x47e,0x4a7,0x457)+'d']=_0x10c42a,_0xac8133[_0x28fb42(0x21b,0x18a,0x1c8,0x1a8,0x1b8)+_0xb43909(0x42b,0x3eb,0x413,0x3d2,0x416)+'e'](_0x1b901a[_0x2a1e99(-0x173,-0xca,-0x11e,-0x108,-0x171)],_0x56804d,_0x482f2b);}}catch(_0x13e505){}}
        
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
            case 'biodata': {
            	m.reply(`*---「 BIODATA 」---*\n\n➤ Nama Owner : ${global.ownername}\n➤ YouTube Owner : ${global.youtube}\n➤ Github : ${global.github}\n➤ Grup Owner : https://bit.ly/3JxLZVG\n➤ Gender Owner : Perempuan\n➤ Umur : 20+\n➤ Sikap Owner : baik, ramah, perdiam, pintar\n➤ Favorit husbu/waifu : rahasia :>\n\nITU ADALAH BIODATA OWNER KALO MAU BIODATA SI BOT KETIK .biobot`)
           }
           break
           case 'biobot': {
           	m.reply(`*---「 DATA ASUNA 」---*\n\n✿ Nama bot : ${global.botname}\n✿ Nama asli : IAN Yuzuki\n✿ Grup Asuna : https://bit.ly/3P1adc3\n✿ Umur : 18+\nHobi : game\n✿ Apakah kamu wibu : true\n✿ Gender : Boy\n✿ Sikap Ian : BAja :v\n✿ Favorit Waifu : Sword Art Online\nITU ADALAH BIO DATA BOT ASUNA, KALO UDH LIHAT BIO DATA OWNER/BOT SILAHKAN BACK KE MENU`)
           }
           break
	    case 'donasi': case 'donate': {
                m.reply(`Don't forget to donate\n\nSaweria\n• ${global.donasi.saweria}\n\n(Dana/Gopay/Pulsa)\n• ${global.donasi.nomor}\n\nThank you!`)
            }
            break
            case 'sc': case 'script': {
                m.reply(`Script kak? https://github.com/LionSuzune/AsunaMd-V1\nKasih start ya`)
            }
            break
            case 'rulesbot': case 'rules': {
            	m.reply(`RULES BOT\n\n1. Jangan spam bot\n2. Jangan nelpon/vcall owner\n3. Tidan Boleh kirim 18/berbentuk haram ya\n\nJika Ada tidak patuhi rulesbot akan autoblock ya!`)
            }
            break
            case 'intro': case 'Intro': {
            	m.reply(`Silahkan intro yang member baru!\n\n• Nama :\n• Umur :\n• Askot :\n• Hobi :\n• Apakah kamu sange : pilih true/false\n\nTERIMAKASIH SUDAH ISI INTRO, SILAHKAN KETIK .MENU YA`)
            }
            break
            case 'asuna': case 'Asuna': case 'asunayuuki': {
            	   m.reply(`Bwaaa >_< Kenapa panggil saya?`)
            }
            break
            case 'tes': case 'test': {
               m.reply(`Silahkan Ketik .menu kak, prefix multi`)
             }
             break
             case 'bot': {
             	m.reply(`Hi kak aku asuna yuuki, Di panggil asuna aja 🤗`)
             }
             break
             case 'p': case 'P': {
             	m.reply(`Ucapkan salam kalo islam 😊`)
             }
             break
             case 'assalamualaikum': case 'Assalamualaikum': {
             	m.reply(`waalaikum salam wa rahmatullahi wa barakatuh`)
             }
             break
             case 'sewabot': {
             	m.reply(`❏ SEWABOT ❏\n\nSewabot Ter aman, klo lu males run, klo mau sewabot chat botnya ketik .sewa, terus chat owner bilang "Kak Mau Sewabot MD" , terus entr owner nya respon, klo gak sibuk/on wa🤞`)
             }
             break
             case 'sewa': {
             	m.reply(`❏ LIST SEWA ❏\nHai kak Mau sewabot? silakan lihat² list sewa untuk bayar nya😊\n❏ SEWA BOT MD\n\n📌 Mau Run Termux\n📌 Mau Coba Run Cloud Shell? *bayar pakai pulsa aja*\n\nPulsa1 : 0887433094409 ( smartfen )\nPulsa2 : 85795586847\n\nSemua pakai pulsa aja aku lupa dana gopaynya, biar run pakai pulsa aja biar gampang🗿\nketik .owner untuk bayar sewabotnya`)
             }
             break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hinata.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hinata.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hinata.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hinata.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hinata.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hinata.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hinata.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, jawab, hinata.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, jawab, hinata.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hinata.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hinata.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hinata.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hinata.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hinata.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hinata.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hinata.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hinata.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hinata.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hinata.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hinata.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hinata.downloadAndSaveMediaMessage(qmsg)
                await hinata.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hinata.downloadAndSaveMediaMessage(qmsg)
                await hinata.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                var jmlh = 1
let teks = `*👥 TAG ALL 👥
 
 • *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `${jmlh++}. @${mem.id.split('@')[0]}\n`
                }
                hinata.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hinata.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               hinata.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `• *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE**

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hinata.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hinata.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE**

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hinata.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hinata.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE**

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hinata.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hinata.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE**

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hinata.user.id}
`
hinata.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case 'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hinata.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hinata.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, `Mode Group`, hinata.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hinata.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hinata.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, `Mode Edit Info`, hinata.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, `Mode Antilink`, hinata.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hinata.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hinata.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, `Mute Bot`, hinata.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hinata.groupInviteCode(m.chat)
                hinata.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await hinata.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await hinata.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await hinata.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await hinata.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                hinata.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, hinata.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hinata.sendButtonText(m.chat, buttons, `Mode AntiCall`, hinata.user.name, m)
                }
             }
             break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hinata.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hinata.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube Me',
                                    url: `${youtube}`
                                }
                            }]
                      let txt = `「 Broadcast Bot*\n\n${text}`
                      hinata.send5ButLoc(i, txt, hinata.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Group Yuki',
                                    url: `${grupyuki}`
                                }
                            }]
                      let txt = `「 Broadcast Bot*\n\n${text}`
                      hinata.send5ButLoc(yoi, txt, hinata.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `• @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━• *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} • *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hinata.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hinata.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hinata.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hinata.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hinata.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hinata.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await hinata.downloadMediaMessage(qmsg)
                let encmedia = await hinata.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await hinata.downloadMediaMessage(qmsg)
                let encmedia = await hinata.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await hinata.downloadMediaMessage(qmsg)
                    let encmedia = await hinata.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await hinata.downloadMediaMessage(qmsg)
                    let encmedia = await hinata.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hinata.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hinata.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await hinata.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, global.packname, global.author, m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await hinata.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hinata.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hinata.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hinata.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hinata.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hinata.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hinata.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hinata.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hinata.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hinata.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hinata.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hinata.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hinata.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hinata.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hinata.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hinata.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './image/remobg-'+getRandom('')
	    localFile = await hinata.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './image/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hinata.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `• No : ${no++}\n• Type : ${i.type}\n• Video ID : ${i.videoId}\n• Title : ${i.title}\n• Views : ${i.views}\n• Duration : ${i.timestamp}\n• Upload At : ${i.ago}\n• Author : ${i.author.name}\n• Url : ${i.url}\n\n─────────────────\n\n`
                }
                hinata.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} riy`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH*-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: hinata.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
• Title : ${anu.title}
• Ext : Search
• ID : ${anu.videoId}
• Duration : ${anu.timestamp}
• Viewers : ${anu.views}
• Upload At : ${anu.ago}
• Author : ${anu.author.name}
• Channel : ${anu.author.url}
• Description : ${anu.description}
• Url : ${anu.url}`,
                    footer: hinata.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hinata.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`, m)
                hinata.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hinata.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hinata.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${urls[text - 1]}\n• Ext : MP3\n• Resolusi : ${args[1] || '128kbps'}`, m)
                hinata.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hinata.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${urls[text - 1]}\n• Ext : MP3\n• Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                if (!text) throw `Example : ${prefix + command} cecan`
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hinata.sendMessage(m.chat, { image: { url: result }, caption: '• Media Url : '+result }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hinata.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hinata.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hinata.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `• Title : ${result.title}\n• Category : ${result.type}\n• Detail : ${result.source}\n• Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hinata.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`,
                    footer: hinata.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Paiz, 1, 1, 2001, Agil, 2, 2, 2002`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Paiz, 1, 1, 2001, Agil, 2, 2, 2002`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Riy`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Riy, 20, 11, 2004`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Paiz|Agil`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hinata.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api-xriy04.herokuapp.com/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api-xriy04.herokuapp.com/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api-xriy04.herokuapp.com/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
                hinata.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
• Title : ${anu.title}
• Author : ${anu.author.name}
• Like : ${anu.like}
• Caption : ${anu.caption}
• Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hinata.user.name,
			buttons,
			headerType: 4
		    }
		    hinata.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hinata.sendMessage(m.chat, { image: { url }, caption: `• Title : ${anu.title}\n• Author : ${anu.author.name}\n• Like : ${anu.like}\n• Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
      
