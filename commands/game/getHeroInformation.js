const {ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder} = require('discord.js');
const getAovHeroCategory = require('../../AOV/getAovHeroCategory');

const heroFolderData = getAovHeroCategory()

module.exports = {
  name: '英雄資訊',
  description: '獲取英雄資訊',
  options: [
    {
      name: '英雄',
      description: '英雄',
      require: true,
      type: ApplicationCommandOptionType.String,
      choices: heroFolderData
    }
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],

  callback: async (client, interaction) => {
    const chosenOption = interaction.options.getString('英雄');
    const {heroName, heroCategory, heroImage} = require(chosenOption)

    const exampleEmbed = {
      color: 0xD69A69,
      title: heroName,
      description: heroCategory,
      thumbnail: {
        url: heroImage,
      },
      fields: [
        {
          name: 'Regular field title',
          value: 'Some value here',
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Inline field title',
          value: 'Some value here',
          inline: true,
        },
        {
          name: 'Inline field title',
          value: 'Some value here',
          inline: true,
        },
        {
          name: 'Inline field title',
          value: 'Some value here',
          inline: true,
        },
      ],
    };
  
    await interaction.reply({ embeds: [exampleEmbed] });
  }
}
