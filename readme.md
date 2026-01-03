## Discord Bot (JS) — base template

A minimal Discord bot built with `discord.js` + `goated-discord-handler`.

## Quick start

### Install

```bash
npm install
```

### Configure environment

Set these environment variables:

- `DISCORD_BOT_TOKEN`: your bot token
- `DISCORD_TEST_GUILD_ID`: Optional - Register commands to a specific guild for testing
- `DISCORD_DEVELOPER_ID`: your user ID (used by the `devOnly` validation)

Example (macOS/Linux):

```bash
export DISCORD_BOT_TOKEN="..."
export DISCORD_TEST_GUILD_ID="..."
export DISCORD_DEVELOPER_ID="..."
```
OR

.env (DOTENV):

```bash
DISCORD_BOT_TOKEN=
DISCORD_MAIN_GUILD_ID=
DISCORD_TEST_GUILD_ID=
DISCORD_DEVELOPER_ID=
```

### Run

```bash
node bot.js
```

## Project structure

- `bot.js`: creates the client + initializes `DiscordHandler`
- `commands/`: slash commands (example: `ping`)
- `events/`: event handlers (example: `ready`)
- `validations/`: per-command validations (example: `devOnly`)

## Notes

- Commands can be marked developer-only by adding `devOnly: true` to the command export (see `commands/ping.js`).
- Some handler features (like command refresh/toggling) are controlled via flags in `bot.js` (`refreshCommands`, `toggleCommands`).