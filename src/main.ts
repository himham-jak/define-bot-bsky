import { Bot } from "@skyware/bot";

const bot = new Bot();

console.log(process.env.BSKY_USERNAME);
console.log(process.env.BSKY_PASSWORD);

const login = await bot.login({
	identifier: process.env.BSKY_USERNAME,
	password: process.env.BSKY_PASSWORD,
});
console.log(login.uri);