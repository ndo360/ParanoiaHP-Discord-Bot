const Discord = require("discord.js");
const TOKEN = "NDQ0ODI1MTkzNDcxNTQxMjU4.DdhjQw.6lD1EzkxeCfo6OxXLv24LBKG0p0";
const PREFIX = "!"
var bot = new Discord.Client();

bot.on("messsage", function(message) {
	console.log(message.content);
});

var Addiction = "**Addiction:** You have something specific you can't live without. A specific drug, flavour of B3 or Toothpaste, or even blood.\n"
var Bizarre_Experiment = "**Bizarre Experiment:** You're a survivor - or result - of a bizarre experiment. Maybe you're a sentient android or a time traveller. Whatever you are, you're pretending to be a high programmer.\n"
var Brain_in_a_Jar = "**Brain in a Jar:** You're a brain in a jar. You've got robotic attachments and servants so you can affect the world but you're still physically impaired, because you're a brain in a jar.\n"
var Bursting_with_energy = "**Bursting with energy:** Not using your mutant power for too long may have side effects.\n"
var Cyborged = "**Cyborged:** You've got bot bits, they're obvious, and you are affected by attacks that affect bots.\n"
var Degenerate = "**Degenerate:** You overindulge in something, food, alcohol, drugs, or something else.\n"
var Demanding_Boss = "**Demanding Boss:** Your pushing of minions with healthy competition has caused unhealthy competition, and your minions have... difficulty... working with each other.\n"
var Dirty_Laundry = "**Dirty Laundry:** You lose 2 ACCESS for each failed secret society mission.\n"
var Easily_Infiltrated = "**Easily Infiltrated:** Commies et al find no difficulty in infiltrating your minions.\n"
var Fat_Fingers = "**Fat Fingers:** Occasionally, you'll call the wrong minion.\n"
var Hypochodriac = "**Hypochodriac:** Afraid of catching airborne diseases from your minions, you have instructed a good number of them to wear masks at all times.\n"
var Impending_Doom = "**Impending Doom:** Inform the GM of this, and move along citizen, nothing to see here.\n"
var Infamous = "**Infamous:** the public hate you, you now have a public standing that starts a 0 and can never go above 0.\n"
var Insane = "**Insane:** You're a grade-A nutso. Despite this, you're still mostly functional. Sure, you may think you're a giant cockroach, but you still make it to the situation room.\n"
var Mechanical_Refinement = "**Mechanical Refinement:** Friend Computer and all bots are particularly polite towards you.\n"
var Memorable = "**Memorable:** You are now a public figure, and all gains and losses in public standing are doubled.\n"
var Misfiring_Memomax = "**Misfiring Memomax:** One of your skills at random each session and each clone is a little different.\n"
var Mistrusted = "**Mistrusted:** Friend Computer doesn't trust you, you start each game and new clone with 10 treason points.\n"
var No_more_hormone_suppressants = "**No more hormone suppressants:** You're free of hormone suppressants, and lust after attractive members of the opposite sex. You've probably got a harem or even children.\n"
var Obsessive_Collector = "**Obessive Collector:** You have an obsessive interest in collecting something: specific old reckoning artefacts, trilobites, WMDs, or something else specific.\n"
var Phobia = "**Phobia:** You're unreasonably afraid of something. Pick the something.\n"
var Quantum_Record = "**Quantum Record:** Your IntSec record is stored in Experimental Quantum Storage.\n"
var Race_Condition = "**Race Condition:** You will sometimes recieve calls control will sometimes call you with misleading or downright false information two or more operations at the same time.\n"
var Rival = "**Rival:** Another high programmer, an NPC, really really hates you.\n"
var Rube_Goldberg = "**Rube Goldberg:** In one out of every ten rolls, the minion has rolled on the troubleshooter table instead.\n"
var Secret_Society_Debt = "**Secret Society Debt:** You owe a random secret society something big. You must attempt to complete their missions, but gain no benefit from doing so.\n"
var Service_Group_Debt = "**Service Group Debt:** You owe a random service group something big. Any time their directives are failed, you lose 5 ACCESS.\n"
var Showoff = "**Showoff:** You like people to hear the sound of your voice, so much that you can't make private calls.\n"
var Skeleton_in_the_Closet = "**Skeleton in the Closet:** You did something in your past that's an erasable offence. Decide what it is and tell the GM.\n"
var Squid_Touched = "**Squid Touched:** As the daycycle wears on, your minions may seem a litte.... odd.\n"
var Terrifying = "**Terrifying:** Your minions will never admit they failed.\n"
var Yellow_Arm_Brigade_Leader = "**Yellow Arm Brigade Leader:** You have trouble getting anyone to help you except the genetically challenged.\n"
var Yellow_Armband = "**Yellow Armband:** You have an obvious and not at all useful mutation on top of your useful mutations, and are a registered mutant.\n"


var Bette = "**Alert! Bette-I-YDL stranded and facing the commie threat! Retrieve Bette-I-YDL safely!** \nBette-I-YDL is the current head of the Alpha Complex Space Agency. After many previous clones getting terminated due to incompetence, Bette-I-YDL has led a mission to the moon to ensure it goes well. \nUnfortunately, Mu Complex is shooting down all capsules heading to the moon, including Bette-I-YDL's. \nAll the service groups want the honour of saving Bette-I-YDL.\n"
var Karina = "**Citizens! Karina-V-DWP is due for erasure later today. Make sure their name is purged from all databanks before their public erasure.** \nBit of background. In the year 182, there was another Karina-V-DWP who got a bit too high up too fast, and so a clever high-programmer made that particular phrase summon Friend Computer Immediately. \nThe summons also modifies friend computer's threat level, raising it by one each time its name is said. Each time FC hears Karina-V-DWP's name, it shows up with a suddenly hightened threat level and doesn't know why. \nKarina-V-DWP only reached VIOLET three days ago, and is already up for erasure. FC suspects something about the name, which is why it requests a full purge. \nAnagram: TTS- Treason Tracking Server. \nKarina-V-DWP took an extremely large dose of the drug RadicalMankey, which is a major mutagenic, and it will kick in whenever appropriate.\n"
var Hygine = "**Citizens! Hygiene is dropping at a rapid rate. Rectify situation.** \nThe Phlegms are fighting a shadow war in the walls and vents, and have secret bases in two locations. \nThe Phlegminists are in FunFoods MegaPark. The Phlegms' rights movements are in Compnode A. \nHowever, the fighting is taking its toll on the life support systems. Air, water, power, and sewerage lines are all getting damaged.\n"
var K1765 = "**Alert! RD Project 59K-176/H has gone missing from location databanks. Find and recover immediately. 59K-176/H is classified INDIGO.** \n59K-176/H is a highly destructive weapon capable of vapourising 1/10th of the sector's population each time it is fired (their clothes and belongings are intact) \n59K-176/H has a delay between firings (whatever is thematically appropriate) \n59K-176/H has been stolen by a FCCC-P splinter cell, and threatens to destroy the sector unless their demands are met. \nThe demands start large (Live coverage on the sector Vidscreens) and get even more elaborate (Promotion of all the sect to VIOLET). \nRemember to find the scapegoat for this. It was lost at a transfer between R&D and AF, overseen by CPU.\n"
var termfund = "**ALERT: Authorised Termination rates are at 0. Rectify immediately! This information is classified GREEN.** \n CPU recently cut funding to termination stamping, leaving only one worker stamping all vouchers: Mike-Y-IXC. \nA few daycycles ago, he lost his ME card in the pneumatic tubes, making him unable to leave the room or get help. \nDiligently, he kept stamping in the hope someone would come find him, he died from lack of water yesterdaycycle.\nNo vouchers have been authorised in a day, meaning no authorised terminations have taken place.\n"
var tubecont = "**Beloved Citizens! The contract for transtube maintenance is up for tender today! Please monitor the situation and decide on the best service group to maintain the tubes. Contract is clearance ORANGE.** \nDue to a large string of timetable failures and deaths, the computer has decided on a competition: one day in which PS, TS, and HPD split the tracks and manage them. \nThe transtubes are split equally between PS, TS, and HPD. \nObviously there's not nearly enough time for the other two to manage their tubes properly, so they're planning on sabotaging the hell out of Power Services networks.\n"

function randomchoose() {
	var rand = ["Bette", "Karina", "Hygine", "K1765", "termfund", "tubecont"];
	var act = [Bette, Karina, Hygine, K1765, termfund, tubecont];
	randomNumber = Math.floor(Math.random()*rand.length)
	chosen = act[randomNumber]
	choose = rand[randomNumber]
	return [chosen, choose];
}

function roll(max) {
	return rolled = Math.floor(Math.random() * max) + 1
}

function randomDrawback(amount) {
	var dmvar = [Addiction, Bizarre_Experiment, Brain_in_a_Jar, Bursting_with_energy, Cyborged, Degenerate, Demanding_Boss, Dirty_Laundry, Easily_Infiltrated, Fat_Fingers, Hypochodriac, Impending_Doom, Infamous, Insane, Mechanical_Refinement, Memorable, Misfiring_Memomax, Mistrusted, No_more_hormone_suppressants, Obsessive_Collector, Phobia, Quantum_Record, Race_Condition, Rival, Rube_Goldberg, Secret_Society_Debt, Service_Group_Debt, Showoff, Skeleton_in_the_Closet, Squid_Touched, Terrifying, Yellow_Arm_Brigade_Leader, Yellow_Armband]
	var logvar = [" Addiction" , " Bizarre Experiment" , " Brain in a Jar" , " Bursting with energy" , " Cyborged" , " Degenerate" , " Demanding Boss" , " Dirty Laundry" , " Easily Infiltrated" , " Fat Fingers" , " Hypochodriac" , " Impending Doom" , " Infamous" , " Insane" , " Mechanical Refinement" , " Memorable" , " Misfiring Memomax" , " Mistrusted" , " No more hormone suppressants" , " Obsessive Collector" , " Phobia" , " Quantum Record" , " Race Condition" , " Rival" , " Rube Goldberg" , " Secret Society Debt" , " Service Group Debt" , " Showoff" , " Skeleton in the Closet" , " Squid Touched" , " Terrifying" , " Yellow Arm Brigade Leader" , "Yellow Armband "]
	var check = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
	var resultlog = [];
	var resultdm = [];
	while (amount > 0) {
		randomNumber2 = Math.floor(Math.random()*dmvar.length)
		if (check[randomNumber2] === false) {
			check[randomNumber2] = true
			resultdm.push(dmvar[randomNumber2]);
			resultlog.push(logvar[randomNumber2]);
			amount = amount-1
		}
	}
	check = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
	return [resultlog, resultdm];
};


bot.on("ready", function() {
	console.log("All modules launched!")
	console.log("Engines fired up!")
	console.log("We're in action commander!")
	bot.user.setStatus('dnd') // 'available', 'idle', 'dnd', or 'invisible'
	bot.user.setPresence({
		game: {
			name: '!help for commands',
			type: 0
		}
	});
});

bot.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' joined')
	bot.channels.get('444510272481394698').send('User ' + member.user.username + ' joined on ' + member.joinedAt)
	var verify = member.guild.roles.find('name', 'Troubleshooter');
	member.addRole(verify)
});

bot.on("message", async message => {

	if (!message.content.startsWith(PREFIX)) return;

	if (['227931352689803264'].includes(message.guild.id)) {

	if (['444509614843625472'].includes(message.channel.id)) return;

	if (message.author.equals(bot.user)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0].toLowerCase()) {
		case "help":
		message.author.send("```Commands: \n - !help \n - !quicktut (gives a short description of the game)\n - !gen \n - !roll <number> \n - !WhatIs <Drawback Name, Secret Society Name, etc.>\n - !all <Drawbacks>```")
		break;
		case "gen":
		randomchoose();
		message.author.send('-------------\nYour scenario is:\n-------------\n' + chosen);
		bot.channels.get('444510272481394698').send('User ' + message.author.tag + ' generated scenario ' + choose + ' successfully')
		break;
		case "quicktut":
		message.author.send("You are a high programmer among other high programmers, the highest rank in the game\nYou are essentially all inside a panic-like room\n")
		break;
		case "gendrawback":
		const genCount = parseInt(args[1]);
		if (isNaN(genCount)) {
			return message.channel.send("That wasn't a number!")
		}
		if (genCount < 1) {
			return message.channel.send("between 1 and 3 please!")
		}
		if (genCount > 3) {
			return message.channel.send("between 1 and 3 please!")
		}
		var [resultlog, resultdm] = randomDrawback(genCount)
		message.author.send('-------------\nDrawback(s) generated are:\n-------------\n' + resultdm)
		bot.channels.get('444510272481394698').send('User ' + message.author.tag + ' generated drawbacks:' + "**" + resultlog + "**" +' successfully')
		break;
		case "roll":
		const rollCount = parseInt(args[1]);
		if (isNaN(rollCount)) {
			return message.channel.send("That wasn't a number!")
		}
		if (rollCount < 1) {
			return message.channel.send("Higher than 1 please!")
		}
		message.channel.send("Rolled: " + "**" + roll(rollCount) + "**")
		bot.channels.get('444510272481394698').send('User ' + message.author.tag + ' rolled ' + rolled)
		break;
		case "all":
		if (message.content.match(/Drawbacks/i)) {
			message.auther.send("-------------\nWhatIsAll found the following:\n-------------")
			message.author.send("**Addiction:** You have something specific you can't live without. A specific drug, flavour of B3 or Toothpaste, or even blood.\n**Bizarre Experiment:** You're a survivor - or result - of a bizarre experiment. Maybe you're a sentient android or a time traveller. Whatever you are, you're pretending to be a high programmer.\n**Brain in a Jar:** You're a brain in a jar. You've got robotic attachments and servants so you can affect the world but you're still physically impaired, because you're a brain in a jar.\n**Bursting with energy:** Not using your mutant power for too long may have side effects.\n**Cyborged:** You've got bot bits, they're obvious, and you are affected by attacks that affect bots.\n**Degenerate:** You overindulge in something, food, alcohol, drugs, or something else\n**Demanding Boss:** Your pushing of minions with healthy competition has caused unhealthy competition, and your minions have... difficulty... working with each other.\n**Dirty Laundry:** You lose 2 ACCESS for each failed secret society mission.\n**Easily Infiltrated:** Commies et al find no difficulty in infiltrating your minions.\n**Fat Fingers:** Occasionally, you'll call the wrong minion.\n**Hypochodriac:** Afraid of catching airborne diseases from your minions, you have instructed a good number of them to wear masks at all times.\n**Impending Doom:** Inform the GM of this, and move along citizen, nothing to see here.\n**Infamous:** the public hate you, you now have a public standing that starts a 0 and can never go above 0.\n**Insane:** You're a grade-A nutso. Despite this, you're still mostly functional. Sure, you may think you're a giant cockroach, but you still make it to the situation room.\n**Mechanical Refinement:** Friend Computer and all bots are particularly polite towards you.\n**Memorable:** You are now a public figure, and all gains and losses in public standing are doubled.")
			message.author.send("**Misfiring Memomax:** One of your skills at random each session and each clone is a little different.\n**Mistrusted:** Friend Computer doesn't trust you, you start each game and new clone with 10 treason points.\n**No more hormone suppressants:** You're free of hormone suppressants, and lust after attractive members of the opposite sex. You've probably got a harem or even children.\n**Obessive Collector:** You have an obsessive interest in collecting something: specific old reckoning artefacts, trilobites, WMDs, or something else specific\n**Phobia:** You're unreasonably afraid of something. Pick the something.\n**Quantum Record:** Your IntSec record is stored in Experimental Quantum Storage.\n**Race Condition:** You will sometimes recieve calls control will sometimes call you with misleading or downright false information two or more operations at the same time.\n**Rival:** Another high programmer, an NPC, really really hates you.\n**Rube Goldberg:** In one out of every ten rolls, the minion has rolled on the troubleshooter table instead.\n**Secret Society Debt:** You owe a random secret society something big. You must attempt to complete their missions, but gain no benefit from doing so.\n**Service Group Debt:** You owe a random service group something big. Any time their directives are failed, you lose 5 ACCESS.\n**Showoff:** You like people to hear the sound of your voice, so much that you can't make private calls.\n**Skeleton in the Closet:** You did something in your past that's an erasable offence. Decide what it is and tell the GM.\n**Squid Touched:** As the daycycle wears on, your minions may seem a litte.... odd.\n**Terrifying:** Your minions will never admit they failed.\n**Yellow Arm Brigade Leader:** You have trouble getting anyone to help you except the genetically challenged.\n**Yellow Armband:** You have an obvious and not at all useful mutation on top of your useful mutations, and are a registered mutant.")
		}
		break;
		case "whatis":
		if (message.content.match(/Addiction/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Addiction:**\nYou have something specific you can't live without. A specific drug, flavour of B3 or Toothpaste, or even blood.")
		} else if (message.content.match(/Anti-Mutant/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Anti-Mutant:**\nClass: B\nSkills: Investigation, Wetwork +4, Biosciences\nDescription: Down with muties! Kill all the mutants!")
		} else if (message.content.match(/Anti-Mutant: Anti-Mutant Advisory Project/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Anti-Mutant: Anti-Mutant Advisory Project:**\nClass: B\nSkills: Thought Control, Biosciences, Mutant Studies\nDescription: Pressures other groups to take more action against mutants.")
		} else if (message.content.match(/Anti-Mutant: Citizens for a Mutant-Free Tomorrow/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Anti-Mutant: Citizens for a Mutant-Free Tomorrow:**\nClass: B\nSkills: Infiltration, Security Systems, Mutant Studies\nDescription: Mutants are the problem and are required to compensate pure strains, by force if neccessary.")
		} else if (message.content.match(/Anti-Mutant: Knights of Genetic Purity/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Anti-Mutant: Knights of Genetic Purity:**\nClass: B\nSkills: Thought Survey, Assault, Mutant Studies\nDescription: Mutant haters with an FCCC-P twist. Crusaders with reflec plate armour.")
		} else if (message.content.match(/Anti-Mutant: Mutie Spotters/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Anti-Mutant: Mutie Spotters:**\nClass: B\nSkills: Investigation, Surveillance, Mutant Studies\nDescription: Investigative branch, goes to extraordinary lengths to find mutations.")
		} else if (message.content.match(/Anti-Mutant: Project Pyroxidine/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Anti-Mutant: Project Pyroxidine:**\nClass: B\nSkills: Bot Engineering, Bot Programming, Mutant Studies\nDescription: Specifically aimed at combatting machine empaths with specially constructed bots.")
		} else if (message.content.match(/Bot Liberation Front/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Bot Liberation Front:**\nClass: B\nSkills: Thought Control, Defence, Bot Engineering\nDescription: Lunatics who try and remove the azimov circuits from bots.")
		} else if (message.content.match(/Bothren/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Bothren:**\nClass: A\nSkills: Bot Programming, Communications, Rapid Response\nDescription: ERROR!")
		} else if (message.content.match(/CLA/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**C.L.A.:**\nClass: B\nSkills: Assault +4, Defence, Bigger Guns\nDescription: The Complex Laser Association. Clones with big guns who believe everyone else is a commie.")
		} else if (message.content.match(/Circuit of Life/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Circuit of Life:**\nClass: B\nSkills: Bot Engineering +4, Bot Programming +4, Hacking\nDescription: ERROR!")
		} else if (message.content.match(/Clone Arrangers/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Clone Arrangers:**\nClass: B\nSkills: Biosciences, Cloning +4, Mutant Studies\nDescription: A conspiracy to run the clone tanks for some mysterious and ill-defined reason.")
		} else if (message.content.match(/Communists/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Communists:**\nClass: C\nSkills: Assault, Habitat Eng, Propaganda +4\nDescription:The enemies of Alpha Complex. Good as scapegoats.")
		} else if (message.content.match(/Communists: ComIntern/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Communists: ComIntern:**\nClass: C\nSkills: Investigation, Black Marketeering, Propaganda +4\nDescription: Spreads communist propaganda and blackmails senior officials.")
		} else if (message.content.match(/Communists: The Red Army/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Communists: The Red Army:**\nClass: C\nSkills: Assault +4, Bigger Guns, Propaganda\nDescription: Proles with laser pistols and furry hats.")
		} else if (message.content.match(/Computer Phreaks/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Computer Phreaks:**\nClass: C\nSkills:Data Retrieval, Hacking +4, Media Manipulation\nDescription: Underground network of hackers and script kiddies")
		} else if (message.content.match(/Underground network of hackers and script kiddies/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Underground network of hackers and script kiddies:**\nClass: C\nSkills: Computer Security, Financial Systems, Hacking\nDescription: Aggresively crashes networks and steals creds.")
		} else if (message.content.match(/Computer Phreaks: The Network/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Computer Phreaks: The Network:**\nClass: C\nSkills: Co-Ordination, Black Marketeering, Logistics\nDescription: Co-ordinates subfactions and keeps the grey subnets online.")
		} else if (message.content.match(/Corpore Metal/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Corpore Metal:**\nClass: B\nSkills: Bot Engineering +4, Bot Programming, Cyborging\nDescription: Bots are good! Humans should be more like bots! Let's stick wires in our heads!")
		} else if (message.content.match(/Corpore Metal: CFLC/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Corpore Metal: CFLC:**\nClass: B\nSkills: Bot Programming, Biosciences +4, Cyborging\nDescription: Citizens for Loyalty Cards. Want to replace every clone's grey matter with loyalty chipped cybernetic brains.")
		} else if (message.content.match(/Corpore Metal: Ctrl-Del/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Corpore Metal: Ctrl-Del:**\nClass: C\nSkills: Assault, Wetwork +4, Bot Engineering\nDescription: Recycle all humans into lubricant.")
		} else if (message.content.match(/Corpore Metal: Esc/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Corpore Metal: Esc:**\nClass: B\nSkills: Covert Operations, Bot Engineering, Outdoor Studies\nDescription: Humanity should go live outside while bots inherit the complex.")
		} else if (message.content.match(/Corpore Metal: Organic Reclaimation League/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Weird Science, Biosciences, Cyborging:**\nClass:  Blue\nSkills: Weird Science, Biosciences, Cyborging\nDescription: Upgrade all humans into borgs or upload them all to storage.")
		} else if (message.content.match(/Corpore Metal: Robots for a Meat Free Tomorrowcycle/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Corpore Metal: Robots for a Meat Free Tomorrowcycle:**\nClass: C\nSkills: Wetwork, Bot Programming, Hacking\nDescription: Override all bots' Asimov circuits, kill all the humans.")
		} else if (message.content.match(/Death Leopard/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Death Leopard:**\nClass: A\nSkills: Assault +4, Demolition, Disruption\nDescription: Free-thinking ultraviolent anarchists who want to bring down the system. Mostly petty vandalism and posing.")
		} else if (message.content.match(/Death Leopard: Anarchists/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Death Leopard: Anarchists:**\nClass: A\nSkills: Sabotage, Assault, Demolition\nDescription: Respect no authority but your own. Point them at an enemy and let a thousand petty vandalisms bloom.")
		} else if (message.content.match(/Death Leopard: Project Chaos/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Death Leopard: Project Chaos:**\nClass: A\nSkills: Co-Ordination, Sabotage, Demolition\nDescription: Instead of petty acts of vandalism, they aim for BIG acts of (generally explosive) vandalism.")
		} else if (message.content.match(/Death Leopard: Reunion Tour Operators/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Death Leopard: Reunion Tour Operators:**\nClass: A\nSkills: Covert Operations, Weird Science, Cloning\nDescription: Freeze the best leopards when the heat is on for the greatest reunion tour sometime in the future.")
		} else if (message.content.match(/FCCC-P/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**FCCC-P:**\nClass: A\nSkills: Interrogation, Thought Control +4, Covert Operations\nDescription: First Church of Christ the Computer Programmer. Mostly harmless FC worshippers with the occasional fanatic splinter group.")
		} else if (message.content.match(/FCCC-P: COIL/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**FCCC-P: COIL:**\nClass: A\nSkills: Interrogation +4, Thought Control, Wetwork\nDescription: Nobody sustpects the Combined Order of Inquisition and Liquidation.")
		} else if (message.content.match(/FCCC-P: Church of the Impending Reboot/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**FCCC-P: Church of the Impending Reboot:**\nClass: B\nSkills: Assault, Total War, Bigger Guns\nDescription: Fringe worshippers preparing for the very near invasion of the commie hordes.")
		} else if (message.content.match(/FCCC-P: Lasers of the Faithful/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**FCCC-P: Lasers of the Faithful:**\nClass: A\nSkills: Assault, Wetwork, Rapid Response\nDescription: We must be armed to protect our Lord from the invasion of the commie hordes!")
		} else if (message.content.match(/FCCC-P: Programologists/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**FCCC-P: Programologists:**\nClass: A\nSkills: Thought Control, Thought Survey, Intimidation\nDescription: Your memomax is corrupted by Space Communisms! We can cleanse your imprint for just $800,000 per monthcycle!")
		} else if (message.content.match(/Femme Fatale/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Femme Fatale:**\nClass: B\nSkills: Co-Ordination, Covert Operations, Infiltration\nDescription: Femclones are underrepresented in positions of power! Demote menclones to INFRARED where they belong!")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/1/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**:**\nClass:\nSkills:\nDescription:")
		} else if (message.content.match(/Bizarre Experiment/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Bizarre Experiment:**\nYou're a survivor - or result - of a bizarre experiment. Maybe you're a sentient android or a time traveller. Whatever you are, you're pretending to be a high programmer.")
		} else if (message.content.match(/Brain in a Jar/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Brain in a Jar:**\nYou're a brain in a jar. You've got robotic attachments and servants so you can affect the world but you're still physically impaired, because you're a brain in a jar.")
		} else if (message.content.match(/Bursting with energy/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Bursting with energy:**\nNot using your mutant power for too long may have side effects.")
		} else if (message.content.match(/Cyborged/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Cyborged:**\nYou've got bot bits, they're obvious, and you are affected by attacks that affect bots.")
		} else if (message.content.match(/Degenerate/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Degenerate:**\nYou overindulge in something, food, alcohol, drugs, or something else.")
		} else if (message.content.match(/Demanding Boss/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Demanding Boss:**\nYour pushing of minions with healthy competition has caused unhealthy competition, and your minions have... difficulty... working with each other.")
		} else if (message.content.match(/Dirty Laundry/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Dirty Laundry:**\nYou lose 2 ACCESS for each failed secret society mission.")
		} else if (message.content.match(/Easily Infiltrated/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Easily Infiltrated:**\nCommies and others find no difficulty in infiltrating your minions.")
		} else if (message.content.match(/Fat Fingers/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Fat Fingers:**\nOccasionally, you'll call the wrong minion.")
		} else if (message.content.match(/Hypochodriac/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Hypochodriac:**\nAfraid of catching airborne diseases from your minions, you have instructed a good number of them to wear masks at all times.")
		} else if (message.content.match(/Impending Doom/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Impending Doom:**\nInform the GM of this, and move along citizen, nothing to see here.")
		} else if (message.content.match(/Infamous/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Infamous:**\nThe public hate you, you now have a public standing that starts a 0 and can never go above 0.")
		} else if (message.content.match(/Insane/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Insane:**\nYou're a grade-A nutso. Despite this, you're still mostly functional. Sure, you may think you're a giant cockroach, but you still make it to the situation room.")
		} else if (message.content.match(/Mechanical Refinement/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Mechanical Refinement:**\nFriend Computer and all bots are particularly polite towards you.")
		} else if (message.content.match(/Memorable/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Memorable:**\nYou are now a public figure, and all gains and losses in public standing are doubled.")
		} else if (message.content.match(/Misfiring Memomax/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Misfiring Memomax:**\nOne of your skills at random each session and each clone is a little different.")
		} else if (message.content.match(/Mistrusted/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Mistrusted:**\nFriend Computer doesn't trust you, you start each game and new clone with 10 treason points.")
		} else if (message.content.match(/No more hormone suppressants/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**No more hormone suppressants:**\nYou're free of hormone suppressants, and lust after attractive members of the opposite sex. You've probably got a harem or even children.")
		} else if (message.content.match(/Obessive Collector/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Obessive Collector:**\nYou have an obsessive interest in collecting something: specific old reckoning artefacts, trilobites, WMDs, or something else specific.")
		} else if (message.content.match(/Phobia/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Phobia:**\nYou're unreasonably afraid of something. Pick the something.")
		} else if (message.content.match(/Quantum Record/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Quantum Record:**\nYour IntSec record is stored in Experimental Quantum Storage.")
		} else if (message.content.match(/Race Condition/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Race Condition:**\nYou will sometimes recieve calls control will sometimes call you with misleading or downright false information two or more operations at the same time.")
		} else if (message.content.match(/Rival/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Rival:**\nAnother high programmer, an NPC, really really hates you.")
		} else if (message.content.match(/Rube Goldberg/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Rube Goldberg**\nIn one out of every ten rolls, the minion has rolled on the troubleshooter table instead.")
		} else if (message.content.match(/Secret Society Debt/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Secret Society Debt:**\nYou owe a random secret society something big. You must attempt to complete their missions, but gain no benefit from doing so.")
		} else if (message.content.match(/Service Group Debt/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Service Group Debt:**\nYou owe a random service group something big. Any time their directives are failed, you lose 5 ACCESS.")
		} else if (message.content.match(/Showoff/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Showoff:**\nYou like people to hear the sound of your voice, so much that you can't make private calls.")
		} else if (message.content.match(/Skeleton in the Closet/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Skeleton in the Closet:**\nYou did something in your past that's an erasable offence. Decide what it is and tell the GM.")
		} else if (message.content.match(/Squid Touched/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Squid Touched:**\nAs the daycycle wears on, your minions may seem a litte.... odd.")
		} else if (message.content.match(/Terrifying/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Terrifying:**\nYour minions will never admit they failed.")
		} else if (message.content.match(/Yellow Arm Brigade Leader/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Yellow Arm Brigade Leader:**\nYou have trouble getting anyone to help you except the genetically challenged.")
		} else if (message.content.match(/Yellow Armband/i)) {
			message.author.send("-------------\nWhatIs found the following:\n-------------\n**Yellow Armband:\nYou have an obvious and not at all useful mutation on top of your useful mutations, and are a registered mutant.")
		} else {
			message.channel.send("Sorry, I dont know what that is, if you think this is an error contact Raven#2607!")
		}
}}});
bot.login(TOKEN);