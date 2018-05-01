var count = 0;
var stat = 0;
var ready = 0;
var setup = 0;
var prefix = "^";
var rbx = require('roblox-js');
var Discord = require('discord.js');
var client = new Discord.Client();
const token = process.env.BOT_TOKEN; //NDEwMTg1MDkwMDE0OTA0MzIx.DZMjOA.nb8rC8Me67WhejIKEL6Wm9yZQVU
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
function n(){};
//const ytdl = require('ytdl-core');
//let voice = client.channels.find('name', 'music');
//var connection = undefined;
//voice.join().then((con)=>{
//	connection = con;
//});
function run(){try{
const request = require('request')
function repeat(func, times) {
    func();
    --times && repeat(func, times);
}
function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else
                console.log(`Logged in. Token: ${token}`);
}
function login() {
	rbx.login(username, password);
}
login();
setInterval(login, 864000);
client.on('ready', () => {
ready = 1;
  //console.log('I am ready!');
 setInterval(function(){
	client.user.setPresence({ game: { name: 'Anime Life', type: 1 } });
},30000)
	//client.user.setPresence({ game: { name: 'with housestan17', type: 1 } });
  //stat = 1;
  //console.log("Finished!");
});
function SetRank(userId){
	rbx.setRank(3620561, userId, 2);
}
client.on('message', message => {
try {
	var prefix = "%";
	if (message.content.substr(0,prefix.length) == prefix){
		if (message.member.guild.name == "Hebby"){
			if (message.channel.name != "bot-commands") if (message.channel.name != undefined){
				message.reply("Commands can only be used in #bot-commands and DMs").then((msg)=>{
					setTimeout(function(){
						msg.delete();
					}, 5000);
				});
				message.delete();
				return;
			};
		};
	};
	if (message.content == prefix+"verify"){
	   message.channel.startTyping();
       var games = JSON.parse(body).games;
       message.reply({embed:{
           color: 16099589,
           title: "Verifying...",
           footer: {
               text: `Verifying ${message.author.username}`,
               icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
           }
       }});
	   var user = message.channel.server.detailsOf(message.author).nick;
	   var regexp = user.match(/(\S+)/)[0];
	   if (!regexp) message.reply("You need to be verified with RoVer to use this command.\nPlease run `!verify` in <#402320341654962176>."); message.channel.stopTyping(); return;
	   try{request(`https://api.roblox.com/users/get-by-username?username=${regexp}`, function (error, response, body){
		   if(error) message.reply("UMX_RESPONSE_INVALID::" + response); return;
		   var id = JSON.parse(body).Id;
		   if (id){
			   SetRank(id);
		   }
	   });}catch(err){console.log(err);message.reply("There was an error computing your request. Please try again later.");}
	   message.channel.stopTyping();
    };
///////////////////////////////////////////////////////////////
} catch(err) {
	console.log(`=== [ Error Encountered ] ===\n\n${err.message}\n\n=================`);
};
});
//if (stat == 1){
//	client.user.setPresence({ game: { name: 'House, help', type: 2 } });
//} else if (stat == 2){
//	client.user.setPresence({ game: { name: `${client.guilds.size} servers`, type: 3 } });
//} else if (stat == 3){
//	client.user.setPresence({ game: { name: 'with housestan17', type: 1 } });
//	stat = 1
//};
if (setup == 0){
client.on('ready', () => {
setInterval(function(){
	if (ready == 1){
	client.user.setPresence({ game: { name: '^help', type: 2 } });
	//setTimeout(n,20000);
    //client.user.setPresence({ game: { name: `${client.guilds.size}	servers`, type: 3 } });
	//setTimeout(n,20000);
    //client.user.setPresence({ game: { name: 'with House Bot', type: 1 } });
	//setTimeout(n,20000);
	//stat++;
	};
},1);
});
setup = 1;
};
stat++;
count++;
console.log(`refreshed robot (${count})`);
}catch(err){console.log(`=== [ Error Encountered ] ===\n\n${err.message}\n\n=================`);};};
run();
client.login(token);
//setInterval(run,60000);
//setInterval(function(){
//	console.log("playing music");
//	connection.play(ytdl('https://www.youtube.com/watch?v=n0svuurLibQ',{filter: 'audioonly'}));
//	wait(6660);
//	console.log("done");
//}, 1);
