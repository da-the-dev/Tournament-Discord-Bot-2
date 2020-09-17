const Discord = require('discord.js')
const dotenv = require('dotenv').config()
const pm = require('./parsedMessage.js')

var client = new Discord.Client()
client.login(process.env.KEY)
client.once('ready', () => {
    console.log('Tournament Discord Bot 2 is ready!')
})

class Tournament {
    /**@param {string} name Tournament's name */
    constructor(name) {
        /**@type {string} Name of the tournament */
        this.name = name
        /**@type {Array<Discord.GuildMember>} Array of tournament members */
        this.members = new Array
        /**@type {Array<Array<Discord.GuildMember>>} Tournament members in order */
        this.tournament = new Array
    }
    /**@param {Discord.GuildMember} member Add a member to paticipants list */
    addMember(member) {
        this.members.push(member)
    }
}
/**@type {Tournament} */
var tournament
client.on("message", (message) => {
    var msg = new pm(message)
    if(msg.prefix == '!' && !msg.msg.author.bot)
        switch(msg.command) {
            case "start":
                if(msg.args[0])
                    tournament = new Tournament(msg.args[0])
                else
                    msg.msg.reply('no tournament name specified'); return
                break
            case "addMember":
                var memberMentioned = msg.msg.mentions.members.first()
                if(memberMentioned)
                    tournament.addMember(msg.msg.mentions.members.first())
                else
                    msg.msg.reply('invalid member'); return
                break
            case "ping":
                msg.msg.reply(client.ws.ping)
                break
            case "start":
                break
            case "postMembers":
                console.log(tournament.members)
                break
            default:
                msg.msg.reply('unknown command')
                break
        }
})