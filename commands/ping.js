/** @format */

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot"),
  devOnly: true,
  run: async ({ client, interaction }) => {
    await interaction.reply({
      content:
        "Pong! Response time: " +
        client.ws.ping +
        "ms. API Latency: " +
        interaction.createdTimestamp -
        interaction.createdTimestamp +
        "ms. Bot Latency: " +
        Math.round(Date.now() - interaction.createdTimestamp) +
        "ms.",
      ephemeral: true,
    });
  },
};

// This command is used to ping the bot and get the response time
