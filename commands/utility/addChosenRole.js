const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

const config = require('../../roleID.json');
const {roleID} = config;

const convertedArray = Object.entries(roleID).map(([name, value]) => ({ name, value }));

module.exports = {
  name: '領取身分組',
  description: '領取遊戲身分組',
  options: [
    {
      name: '身分組',
      description: '身分組',
      require: true,
      type: ApplicationCommandOptionType.String,
      choices: convertedArray
    }
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],

  callback: async (client, interaction) => {
      const chosenOption = interaction.options.getString('身分組');

      const interactionUser = await interaction.guild.members.fetch(interaction.user.id);
      let testRole = interaction.guild.roles.cache.find(role => role.id === chosenOption);
      await interactionUser.roles.add(testRole);
  
      if (chosenOption === roleID.原神){
          await interaction.reply('原神！啟動🤪嘻嘻嘻嘻嘻😁我最喜歡玩原神了🤠我是可莉玩家😜你看😍這是我新買的衣服～可莉！！蹦蹦炸彈～')
      }
      else if (chosenOption === roleID.傳說){
          await interaction.reply('傷害不夠啦😒呂布沒有魔🙄難怪剛剛傷害沒有打上去🤔原來是呂布沒有魔😑那呂布沒有魔應該早點退阿🫠')
      }
      else {
              await interaction.reply('success');
      }
  }
}