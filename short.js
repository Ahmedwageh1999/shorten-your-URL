const { Discord, EmbedBuilder, ActionRowBuilder, Interaction, ButtonBuilder, ButtonStyle, ApplicationCommandOptionType } = require("discord.js")
var isgd = require('isgd');
module.exports = {
    name: 'short',
    description: 'Shorten a link',

    options: [
        {
            name: 'link',
            description: 'The link',
            type: ApplicationCommandOptionType.String,
            required: true
        },

    ],

    run: async (client, interaction) => {
        const link = interaction.options.getString("link")
        if (link) {

            isgd.shorten(`${link}`, async function (res) {
                await interaction.deferReply({ fetchReply: true, ephemeral: true })
                await interaction.editReply({ content: `<@${interaction.user.id}>`, embeds: [new EmbedBuilder().setColor("DarkGold").setTitle("Your link here").setURL(`${res}`).setDescription(`**Here you link** ${res}`)] })




            })






        }


        
        if (!link) await interaction.followUp({ content: `**<@${interaction.user.id}> this is not a valid link**` })






    }




}