const Discord = require('discord.js')
const dotenv = require('dotenv').config()

var client = new Discord.Client()
client.login(process.env.KEY)
client.once('ready', () => {
    console.log('Tournament Discord Bot 2 is ready!')
})

client.on("message", (message) => {

})