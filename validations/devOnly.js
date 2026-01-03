/** @format */

module.exports = (interaction, commandObj, handler, client) => {
  if (commandObj.devOnly) {
    if (interaction.member.id !== process.env.DISCORD_DEVELOPER_ID) {
      interaction.reply("This command is for the developer only");
      return true; // This must be added to stop the command from being executed.
    }
  }
};

// This restricts the command to only be used by the developer
// by adding 'devOnly: true' to the command object
