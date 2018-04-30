var count = 0;
var stat = 0;
var ready = 0;
var setup = 0;
var prefix = "^";
var fs = require('fs');
const token = 'NDEwMTg1MDkwMDE0OTA0MzIx.DZMjOA.nb8rC8Me67WhejIKEL6Wm9yZQVU';
function n(){};
//const ytdl = require('ytdl-core');
//let voice = client.channels.find('name', 'music');
//var connection = undefined;
//voice.join().then((con)=>{
//	connection = con;
//});
function readFile(srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) throw err;
        if (data.substr(0,5) == "data:"){
			return data.substr(6);
		} else return;
    });
};
function writeFile(srcPath,data) {
	fs.writeFile (savPath, data, function(err) {
        if (err) throw err;
        console.log('wrote:'+data);
    });
};
function exists(file) {
	return fs.existsSync(file);
};
function run(){try{
var Discord = require('discord.js');
var client = new Discord.Client();
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
client.on('ready', () => {
ready = 1;
  //console.log('I am ready!');
var stat = 0;
 setInterval(function(){
	stat++;
	if (stat == 0){
		client.user.setPresence({ game: { name: '^help', type: 2 } });
	} else if (stat == 1){
		client.user.setPresence({ game: { name: `${client.guilds.size}	servers`, type: 3 } });
		stat = -1;
	} else if (stat == 2){
		client.user.setPresence({ game: { name: 'with Sebby', type: 1 } });
		stat = 0;
	}
},30000)
	//client.user.setPresence({ game: { name: 'with housestan17', type: 1 } });
  //stat = 1;
  //console.log("Finished!");
});
client.on('message', message => {
try {
	var prefix = "^";
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
	if (message.content.toLowerCase().substr(0,10) == "&setPrefix "){
		if (message.author.owner){
		message.reply({embed:{
            color: 16099589,
            title: "Prefix Changed",
            description: "The prefix was changed from **`" + readFile("data/robot/" + message.member.guild.id) + "`** to **`" + message.content.toLowerCase().substr(10) + "`**",
            footer: {
                text: `The prefix for RoBot on this server is now "${message.content.toLowerCase().substr(0,10)}"`
            }
        }});
		writeFile("data/robot/" + message.member.guild.id, message.content.toLowerCase().substr(10));
		} else
		message.reply({embed:{
            color: 16099589,
            title: "Permission Denied",
            description: "You do not have permission to execute that command.",
            footer: {
                text: "No permission"
            }
        }});
	};
	if (message.content.toLowerCase() == prefix+"help" || message.content.toLowerCase() == "^help"){
			message.reply({embed:{
                color: 16099589,
                title: "Invite RoBot",
                description: "**&setPrefix {prefix}**\n Sets the prefix used by the bot\n\n**hotgames**\n Shows a list of the hottest games on roblox\n**topgames**\n Shows a list of the top games right now on roblox\n**topdevs**\n Shows a list of the top developers on roblox\n**topgamesalltime**\n Shows a list of top games all time\n**getdetails {place id}**\n Gets all the info for the specified place\n**search {place name}**\n Search for a place with the name provided\n**topearning**\n Shows a list of the top earning games on roblox",
                url: "https://discordapp.com/api/oauth2/authorize?client_id=410185090014904321&permissions=26624&scope=bot",
                footer: {
                    text: `The prefix for RoBot on this server is "${prefix}"`
                }
            }});
	};
	var cmd = false;
	if (message.content.toLowerCase() == prefix+"stats"){
		const guild = message.member.guild;
		cmd = true;
		var explicit_filter = undefined;
		if (guild.explicitContentFilter == 0){
			explicit_filter = "Disabled";
		};
		if (guild.explicitContentFilter == 1){
			explicit_filter = "Members without roles";
		};
		if (guild.explicitContentFilter == 2){
			explicit_filter = "All members";
		};
		var verification = undefined;
		if (guild.verificationLevel == 0){
			verification = "[0] Unrestricted";
		};
		if (guild.verificationLevel == 1){
			verification = "[1] Must have verified email on account";
		};
		if (guild.verificationLevel == 2){
			verification = "[2] Must be registered on Discord for longer than 5 minutes";
		};
		if (guild.verificationLevel == 3){
			verification = "[3] Must be a member of the server for longer than 10 minutes";
		};
		if (guild.verificationLevel == 4){
			verification = "[4] Must have a verified phone number";
		};
		var member_count = "`" + guild.memberCount + "`";
		message.channel.startTyping();
        //request({url: 'https://discordapp.com/api/users/@me/guilds',headers: {'Authorization': 'Bot NDA4NzE4Mjk3NDAwNDc1NjY4.DVUleg.VJV1fHSXPvXV_TX3CtJor-oAX8I'}};, function (error, response, body){
            message.reply({embed:{
                color: 16099589,
                title: "RoBot Statistics",
                description: `
					Running in ` + "`" + client.guilds.size + "`" + ` servers
					Prefix: ` + "`" + prefix + "`" + `
				`,
                url: "https://discordapp.com/api/oauth2/authorize?client_id=410185090014904321&permissions=26624&scope=bot",
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        //});
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase() == prefix+"topgames"){
		message.channel.startTyping();
        request("http://www.roblox.com/games/list-json?sortFilter=1", function (error, response, body){
			var games = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Top Games",
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].Name+"](https://web.roblox.com/games/"+games[0].PlaceID+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].Name+"](https://web.roblox.com/games/"+games[1].PlaceID+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].Name+"](https://web.roblox.com/games/"+games[2].PlaceID+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].Name+"](https://web.roblox.com/games/"+games[3].PlaceID+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].Name+"](https://web.roblox.com/games/"+games[4].PlaceID+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].Name+"](https://web.roblox.com/games/"+games[5].PlaceID+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].Name+"](https://web.roblox.com/games/"+games[6].PlaceID+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].Name+"](https://web.roblox.com/games/"+games[7].PlaceID+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].Name+"](https://web.roblox.com/games/"+games[8].PlaceID+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].Name+"](https://web.roblox.com/games/"+games[9].PlaceID+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase() == prefix+"hotgames"){
		message.channel.startTyping();
        request("http://www.roblox.com/games/list-json?TimeFilter=2&SortFilter=11&MaxRows=45", function (error, response, body){
			var games = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Hottest Games",
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].Name+"](https://web.roblox.com/games/"+games[0].PlaceID+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].Name+"](https://web.roblox.com/games/"+games[1].PlaceID+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].Name+"](https://web.roblox.com/games/"+games[2].PlaceID+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].Name+"](https://web.roblox.com/games/"+games[3].PlaceID+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].Name+"](https://web.roblox.com/games/"+games[4].PlaceID+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].Name+"](https://web.roblox.com/games/"+games[5].PlaceID+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].Name+"](https://web.roblox.com/games/"+games[6].PlaceID+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].Name+"](https://web.roblox.com/games/"+games[7].PlaceID+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].Name+"](https://web.roblox.com/games/"+games[8].PlaceID+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].Name+"](https://web.roblox.com/games/"+games[9].PlaceID+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase() == prefix+"topdevs"){
		message.channel.startTyping();
        request("http://www.roblox.com/games/list-json?sortFilter=1&MaxRows=45", function (error, response, body){
			var games = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Top Developers",
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].CreatorName+"]("+games[0].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].CreatorName+"]("+games[1].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].CreatorName+"]("+games[2].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].CreatorName+"]("+games[3].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].CreatorName+"]("+games[4].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].CreatorName+"]("+games[5].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].CreatorName+"]("+games[6].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].CreatorName+"]("+games[7].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].CreatorName+"]("+games[8].CreatorUrl+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].CreatorName+"]("+games[9].CreatorUrl+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase() == prefix+"hotgames"){
		message.channel.startTyping();
        request("http://www.roblox.com/games/list-json?TimeFilter=2&SortFilter=11&MaxRows=45", function (error, response, body){
			var games = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Hottest Games",
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].Name+"](https://web.roblox.com/games/"+games[0].PlaceID+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].Name+"](https://web.roblox.com/games/"+games[1].PlaceID+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].Name+"](https://web.roblox.com/games/"+games[2].PlaceID+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].Name+"](https://web.roblox.com/games/"+games[3].PlaceID+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].Name+"](https://web.roblox.com/games/"+games[4].PlaceID+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].Name+"](https://web.roblox.com/games/"+games[5].PlaceID+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].Name+"](https://web.roblox.com/games/"+games[6].PlaceID+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].Name+"](https://web.roblox.com/games/"+games[7].PlaceID+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].Name+"](https://web.roblox.com/games/"+games[8].PlaceID+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].Name+"](https://web.roblox.com/games/"+games[9].PlaceID+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase() == prefix+"topgamesalltime"){
		message.channel.startTyping();
        request("http://www.roblox.com/games/list-json?sortFilter=1", function (error, response, body){
			var games = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Top Games All Time",
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].Name+"](https://web.roblox.com/games/"+games[0].PlaceID+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].Name+"](https://web.roblox.com/games/"+games[1].PlaceID+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].Name+"](https://web.roblox.com/games/"+games[2].PlaceID+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].Name+"](https://web.roblox.com/games/"+games[3].PlaceID+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].Name+"](https://web.roblox.com/games/"+games[4].PlaceID+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].Name+"](https://web.roblox.com/games/"+games[5].PlaceID+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].Name+"](https://web.roblox.com/games/"+games[6].PlaceID+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].Name+"](https://web.roblox.com/games/"+games[7].PlaceID+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].Name+"](https://web.roblox.com/games/"+games[8].PlaceID+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].Name+"](https://web.roblox.com/games/"+games[9].PlaceID+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase() == prefix+"topearning"){
		message.channel.startTyping();
        request("http://www.roblox.com/games/list-json?sortFilter=8&MaxRows=45", function (error, response, body){
			var games = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Top Earning",
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].Name+"](https://web.roblox.com/games/"+games[0].PlaceID+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].Name+"](https://web.roblox.com/games/"+games[1].PlaceID+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].Name+"](https://web.roblox.com/games/"+games[2].PlaceID+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].Name+"](https://web.roblox.com/games/"+games[3].PlaceID+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].Name+"](https://web.roblox.com/games/"+games[4].PlaceID+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].Name+"](https://web.roblox.com/games/"+games[5].PlaceID+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].Name+"](https://web.roblox.com/games/"+games[6].PlaceID+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].Name+"](https://web.roblox.com/games/"+games[7].PlaceID+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].Name+"](https://web.roblox.com/games/"+games[8].PlaceID+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].Name+"](https://web.roblox.com/games/"+games[9].PlaceID+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase().substr(0,prefix.length+10) == prefix+"getdetails"){
		message.channel.startTyping();
        request("https://www.roblox.com/places/api-get-details?assetId="+message.content.substr(11+prefix.length), function (error, response, body){
			var game = JSON.parse(body);
            message.reply({embed:{
                color: 16099589,
                title: "Place Info For "+game.Name,
				fields: [
					{
						name: "Name",
						value: `[${game.Name}](${game.Url})`
					},
					{
						name: "Description",
						value: game.Description
					},
					{
						name: "Visits",
						value: game.VisitedCount
					},
					{
						name: "Online",
						value: game.OnlineCount
					},
					{
						name: "Max Players",
						value: game.MaxPlayers
					},
					{
						name: "Likes",
						value: game.TotalUpVotes
					},
					{
						name: "Dislikes",
						value: game.TotalDownVotes
					},
					{
						name: "Created",
						value: game.Created
					},
					{
						name: "Updated",
						value: game.Updated
					},
					{
						name: "Genre",
						value: game.AssetGenre
					},
					{
						name: "Creator",
						value: `[${game.Builder}](${game.BuilderAbsoluteUrl})`
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
		message.channel.stopTyping();
    };
	if (message.content.toLowerCase().substr(0,prefix.length+6) == prefix+"search"){
		message.channel.startTyping();
        request("https://games.roblox.com/v1/games/list?model.keyword="+encodeURIComponent(message.content.substr(7+prefix.length)), function (error, response, body){
			var games = JSON.parse(body).games;
            message.reply({embed:{
                color: 16099589,
                title: "Search For "+message.content.substr(7+prefix.length),
				fields: [
					{
						name: "**#1**",
						value: "*["+games[0].name+"](https://web.roblox.com/games/"+games[0].placeId+")*\n**by** *["+games[0].creatorName+"](https://roblox.com/users/"+games[0].creatorId+")*",
						inline: true
					},
					{
						name: "**#2**",
						value: "*["+games[1].name+"](https://web.roblox.com/games/"+games[1].placeId+")*\n**by** *["+games[1].creatorName+"](https://roblox.com/users/"+games[1].creatorId+")*",
						inline: true
					},
					{
						name: "**#3**",
						value: "*["+games[2].name+"](https://web.roblox.com/games/"+games[2].placeId+")*\n**by** *["+games[2].creatorName+"](https://roblox.com/users/"+games[2].creatorId+")*",
						inline: true
					},
					{
						name: "**#4**",
						value: "*["+games[3].name+"](https://web.roblox.com/games/"+games[3].placeId+")*\n**by** *["+games[3].creatorName+"](https://roblox.com/users/"+games[3].creatorId+")*",
						inline: true
					},
					{
						name: "**#5**",
						value: "*["+games[4].name+"](https://web.roblox.com/games/"+games[4].placeId+")*\n**by** *["+games[4].creatorName+"](https://roblox.com/users/"+games[4].creatorId+")*",
						inline: true
					},
					{
						name: "**#6**",
						value: "*["+games[5].name+"](https://web.roblox.com/games/"+games[5].placeId+")*\n**by** *["+games[5].creatorName+"](https://roblox.com/users/"+games[5].creatorId+")*",
						inline: true
					},
					{
						name: "**#7**",
						value: "*["+games[6].name+"](https://web.roblox.com/games/"+games[6].placeId+")*\n**by** *["+games[6].creatorName+"](https://roblox.com/users/"+games[6].creatorId+")*",
						inline: true
					},
					{
						name: "**#8**",
						value: "*["+games[7].name+"](https://web.roblox.com/games/"+games[7].placeId+")*\n**by** *["+games[7].creatorName+"](https://roblox.com/users/"+games[7].creatorId+")*",
						inline: true
					},
					{
						name: "**#9**",
						value: "*["+games[8].name+"](https://web.roblox.com/games/"+games[8].placeId+")*\n**by** *["+games[8].creatorName+"](https://roblox.com/users/"+games[8].creatorId+")*",
						inline: true
					},
					{
						name: "**#10**",
						value: "*["+games[9].name+"](https://web.roblox.com/games/"+games[9].placeId+")*\n**by** *["+games[9].creatorName+"](https://roblox.com/users/"+games[9].creatorId+")*",
						inline: true
					},
					
				],
                footer: {
                    text: `Requested by ${message.author.username}`,
                    icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                }
            }});
        });
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