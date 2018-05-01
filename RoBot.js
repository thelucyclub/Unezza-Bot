var count = 0;
var stat = 0;
var ready = 0;
var setup = 0;
var prefix = "%";
var rbx = require('noblox.js');
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
	request("http://api.roblox.com/currency/balance", function (err, resp, bod){
		console.log(bod);
	});
	console.log("Logged in");
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
	console.log("Setting rank of \""+userId+"\"");
	rbx.setRank({group: 3620561, target: userId, roleset: 2});
	request.post({url:'http://www.roblox.com/groups/api/change-member-rank?groupId=3620561&newRoleSetId=2&targetUserId=' + userId});
	console.log("Successfully set rank of "+userId+" to \"2\"");
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
	   var user = message.member.nickname;
	   var regexp = user.match(/(\S+)/)[0];
		//if (!regexp) console.log("User not verified `"+regexp+"`"); message.reply("You need to be verified with RoVer to use this command.\nPlease run `!verify` in <#402320341654962176>."); message.channel.stopTyping(); return;
	   regexp = regexp.substr(1, regexp.length - 2);
       message.reply("Verifying as \""+regexp+"\"...");
	   console.log("Pre-verify");
	   console.log("requesting resource");
		request(`https://api.roblox.com/users/get-by-username?username=${regexp}`, function (error, response, body){
		   if(error){
			  console.log("Err::" + error.message + "::" + response.code);
			  message.reply("UMX_RESPONSE_INVALID::" + response.code + "::" + error.message);
			  return;
		   }
		   var id = JSON.parse(body).Id;
		   console.log("UID: "+id);
		   if (id){
			   SetRank(id);
			   message.reply("Successfully verified as "+regexp+" ("+id+")");
			   return;
		   } else
			   message.reply("Can't verify you, sorry! :(");
			   return;
	   });
	   console.log("End of stack");
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
