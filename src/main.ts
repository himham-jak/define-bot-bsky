import { Bot } from "@skyware/bot";

// import .env
require('dotenv').config()

function greeting(name:string){
	return `Hello ${name}`;
}

greeting = greeting('Bluesky');

const post = await bot.post({
	text: greeting
});
console.log(post.uri);
