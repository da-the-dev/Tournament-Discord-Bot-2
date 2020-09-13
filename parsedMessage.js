const Discord = require('discord.js')
class ParsedMessage {
    /**@param {Discord.Message} msg Message from event */
    constructor(msg) {
        /**@type {Discord.Message} */
        this.msg = msg
        /**@type {string} */
        this.content = msg.content
        /**@type {string} */
        this.prefix = this.content[0]
        /**@type {Array<string>} */
        this.args = messsage.slice(1).split(" ")
        /**@type {string} */
        this.command = this.args.shift()
    }
}
module.exports = ParsedMessage