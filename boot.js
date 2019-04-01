const fs = require(`fs`);
const Discord = require(`discord.js`);

const client = new Discord.Client();
var giphyAPIClient = require(`giphy-js-sdk-core`);
giphy = giphyAPIClient(process.env.GIPHY_KEY);
 
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./bot_commands`).filter(file => file.endsWith(`.js`));
for (const file of commandFiles) {
	const command = require(`./bot_commands/${file}`);
	bot.commands.set(command.name, command);
}

client.on(`ready`, () => {
    console.log(`I am ready!`);

});

 

client.on(`message`, message => {
    if (message.content === `!ping`) {
       message.channel.send(`${message.author} Pong! :ping_pong:`);
       }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
