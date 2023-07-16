const { SlashCommandBuilder } = require('@discordjs/builders');

const config = require('../../config.json');
const {roleID} = config;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mycommand')
        .setDescription('My slash command')
        .addStringOption(option =>
            option.setName('myarg')
                .setDescription('My choice argument')
				.addChoices([
					{ name: '傳說', value: 'option1' },
					{ name: '原神', value: 'option2' },
					{ name: 'Minecraft', value: 'option3' }
				])
        )
        .toJSON(),

    async execute(interaction) {
        const chosenOption = interaction.options.getString('myarg');

        // Use the chosen value in your code
        if (chosenOption === 'option1') {
            console.log(1);
        } else if (chosenOption === 'option2') {
            // Handle option 2
        } else if (chosenOption === 'option3') {
            // Handle option 3
        }

        // Rest of your code...
    }
};
