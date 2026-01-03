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
  refreshCommands: false, // Adds a command called /app refreshCommands to refresh the commands to the Discord API
  toggleCommands: false, // Adds a command called /app enable/disable <command> to enable a previously disabled command
});

// This is the main file for the bot. It handles creating commands, logging in, and handling events for you.


// `/app refresh_commands`
// Reloads all commands and functions. Useful for development.

// `/app enable <command>`
// Enables a previously disabled command.

// `/app disable <command>`
// Disables a command (resets when the bot is restarted).

