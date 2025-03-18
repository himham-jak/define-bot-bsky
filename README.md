# define-bot-bsky
A bot meant to be knowledgable and useful with knowledge from various dictionaries.


## Narrative

- This is my first attempt at a Bluesky bot (and my first Typescript project) and meant to be instructive to myself and others.

- I'll begin by installing the [Skyware/bot](https://github.com/skyware-js/bot) package with `npm install @skyware/bot`, Typescript with `npm install Typescript`, and [dotenv](https://www.npmjs.com/package/dotenv) with `npm install dotenv`.

- Since the bot's login details are stored in the env per the [Documentation](https://skyware.js.org/guides/bot/introduction/getting-started/), we'll need to [.gitignore](https://www.geeksforgeeks.org/how-to-create-gitignore-file/) them, among other things.

- I'll create an `src` directory and within it, a `main.ts` file.

- Now the code can be transpiled to javascript with `npx tsc src/main.ts`, then run with `node src/main.js`.

- To make iterating simple, I'll create a script in `package.json` to run both commands sequentially: `npx tsc src/main.ts && node src/main.js`.