const { Client, Intents} = require('discord.js')
const client = new Client({intents:32767})

client.once('ready', ()=>{
    console.log("봇이 준비되었습니다")
})

client.on('messageCreate', message => {
    if(message.content == "배재영"){
        message.reply("사람 아님")
    }
    if(message.content == "김도형"){
        message.reply("여치 그 자체")
    }
    if(message.content == "박민혁"){
        message.reply("민전여조")
    }
    if(message.content == "강웅빈"){
        message.reply("천재 그 자체")
    }
    if(message.content == "정혜민"){
        message.reply("최양락")
    }
    if(message.content == "문소정"){
        message.reply("잠만 쳐 잠")
    }
    if(message.content == "김윤빈"){
        message.reply("환오랑 눈 못 마주침")
    }
})

client.login("OTA5MzgyMTU4MTU2NzIyMjA2.YZDeIg.FOqgg-Dtgda02ive4s-0iW7ZHQ8")