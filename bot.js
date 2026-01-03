/** @format */

const { Client, GatewayIntentBits } = require("discord.js");
const { DiscordHandler } = require("goated-discord-handler");
const { Logger } = require("term-logger");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

new DiscordHandler({
  token: process.env.DISCORD_BOT_TOKEN,
  client: client, // The Discord client instance
  commandsPath: "./commands",
  eventsPath: "./events",
  validationsPath: "./validations",
  testServer: process.env.DISCORD_TEST_GUILD_ID,
  logger: Logger,
  refreshCommands: true,
  toggleCommands: true,
});
