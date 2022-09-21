const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('About Retriever-ng')
	.setURL('https://retriever.gsheps.net/')
	.setAuthor({ name: 'Retriever-ng', url: 'https://retriever.gsheps.net' })
	.addFields(
		{ name: 'What is Retriever?', value: 'Retriever is a Discord bot written purely on the basis of making funny dog jokes for entertainment.' },
		{ name: 'What can it do?', value: 'Well, that depends on how you interpet terribly written dog jokes, and what they mean to you. If you like dog jokes as much as we do, then we guarentee you\u0027ll enjoy him as much as I do!' },
		{ name: 'Written by:', value: 'Phoenix#0001 (Phoenix@PhoenixNet.tech)', inline: true },
		{ name: 'Based off of a previous project:', value: '"Retriever" written by Phoenix, Magik Manz, and Nexure.', inline: true },
	)
	.setFooter({ text: 'PhoenixNet-Labs 2022 🐕'});

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Information related to Retriever-ng'),
	async execute(interaction) {
		await channel.send({ embeds: [exampleEmbed] });
	},
};