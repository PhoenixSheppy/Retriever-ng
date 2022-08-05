// I mean, the guide said make another JS file to keep this from entering your primary workflow, might as well.

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'commandId'))  // commandId = ID from integrations tab within Discord.
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);