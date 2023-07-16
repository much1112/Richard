const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite-link')
		.setDescription("Provide invite link"),
	async execute(interaction) {
		await interaction.reply('https://discord.gg/kfKdbDJErp');
	},
};