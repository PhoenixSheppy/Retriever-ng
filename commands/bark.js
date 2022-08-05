const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bark')
		.setDescription('Get the whole neighborhood making noise!'),
	async execute(interaction) {
		await interaction.reply('Woof Woof Bark!');
	},
};