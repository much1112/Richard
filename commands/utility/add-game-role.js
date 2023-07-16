const { SlashCommandBuilder } = require('@discordjs/builders');

const config = require('../../config.json');
const {roleID} = config;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game-role')
		.setDescription('Give game-role'),
	async execute(interaction) {
		const interactionUser = await interaction.guild.members.fetch(interaction.user.id);
		let testRole = interaction.guild.roles.cache.find(role => role.id === roleID);
		await interactionUser.roles.add(testRole);
		await interaction.reply('success');
	},
};