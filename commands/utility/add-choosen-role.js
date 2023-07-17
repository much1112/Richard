const { SlashCommandBuilder } = require('@discordjs/builders');

const config = require('../../config.json');
const {roleID} = config;

const convertedArray = Object.entries(roleID).map(([name, value]) => ({ name, value }));
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('領取身分組')
      .setDescription('取得身分組')
      .addStringOption(option =>
        option.setName('身分組')
          .setDescription('身分組')
          .addChoices(...convertedArray)
      ),
  

    async execute(interaction) {
        const chosenOption = interaction.options.getString('身分組');
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id);
		let testRole = interaction.guild.roles.cache.find(role => role.id === chosenOption);
		await interactionUser.roles.add(testRole);

        if (chosenOption === roleID.原神){
            await interaction.reply('原神！啟動！嘻嘻嘻嘻嘻！我最喜歡玩原神了，我是可莉玩家！你看😍這是我新買的衣服～可莉！！蹦蹦炸彈～')
        }
        else{
            await interaction.reply('success');
        }
    }
};
