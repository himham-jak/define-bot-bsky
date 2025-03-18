// import .env
require('dotenv').config();
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting('You');
console.log(process.env.BSKY_USERNAME);
console.log(process.env.BSKY_PASSWORD);
