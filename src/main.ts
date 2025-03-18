// import .env
require('dotenv').config()


function greeting(name:string){
	console.log(`Hello ${name}`);
}

greeting('You');

console.log(process.env.BSKY_USERNAME)
console.log(process.env.BSKY_PASSWORD)

