const { Logger } = require("term-logger");

module.exports = (event) => {
  Logger.success(`Logged in as ${event.client.user.tag}`);
};
