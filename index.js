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
        /**@type Name of the tournament */
        this.name = name
    }
}
var tournament
client.on("message", (message) => {
    var msg = new pm(message)
    if(msg.prefix == '!' && !msg.msg.author.bot)
        switch(msg.command) {
            case "start":
                var tournament = new Tournament
                break
            default:
                msg.msg.reply('unknown command')
                break
        }
})