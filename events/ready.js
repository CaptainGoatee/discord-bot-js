const { Logger } = require("term-logger");

module.exports = (event) => {
  Logger.success(`Logged in as ${event.client.user.tag}`);
};

// This event is triggered when the bot is ready