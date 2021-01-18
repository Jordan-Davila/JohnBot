const DISCORD = require('discord.js');
const bot = new DISCORD.Client();

const TOKEN = "YOUR BOT TOKEN";

bot.login(TOKEN);

bot.on('ready', () => {
  console.log('YOU ARE IN!!!');
});

const prefix = "!";

const johns = [
  {
    "id": 1,
    "john": "Good match",
    "category": "sportsmanship",
  },
  {
    "id": 2,
    "john": "Nice combo",
    "category": "sportsmanship",
  },
  {
    "id": 3,
    "john": "I suck",
    "category": "sportsmanship",
  },
  {
    "id": 4,
    "john": "You're much better than me",
    "category": "sportsmanship",
  },
  {
    "id": 5,
    "john": "I should quit",
    "category": "sportsmanship",
  },
  {
    "id": 6,
    "john": "I'm going to lose",
    "category": "sportsmanship",
  },
  {
    "id": 7,
    "john": "I got lucky",
    "category": "sportsmanship",
  },
  {
    "id": 8,
    "john": "You're too good",
    "category": "sportsmanship",
  },
  {
    "id": 9,
    "john": "Nice mindgames",
    "category": "sportsmanship",
  },
  {
    "id": 10,
    "john": "Good DI",
    "category": "sportsmanship",
  },
  {
    "id": 11,
    "john": "Nice tech",
    "category": "sportsmanship",
  },
  {
    "id": 12,
    "john": "Good sweetspot",
    "category": "sportsmanship",
  },
  {
    "id": 13,
    "john": "I wasn't trying",
    "category": "self",
  },
  {
    "id": 14,
    "john": "I let you win",
    "category": "self",
  },
  {
    "id": 15,
    "john": "My fingers hurt",
    "category": "self",
  },
  {
    "id": 16,
    "john": "My hands are sweaty / greasy",
    "category": "self",
  },
  {
    "id": 17,
    "john": "My eyes hurt",
    "category": "self",
  },
  {
    "id": 18,
    "john": "I don't have my glasses",
    "category": "self",
  },
  {
    "id": 19,
    "john": "I'm tired",
    "category": "self",
  },
  {
    "id": 20,
    "john": "I've been drinking / toking",
    "category": "self",
  },
  {
    "id": 21,
    "john": "I'm hungry",
    "category": "self",
  },
  {
    "id": 22,
    "john": "I'm out of practice",
    "category": "self",
  },
  {
    "id": 23,
    "john": "I don't care",
    "category": "self",
  },
  {
    "id": 24,
    "john": "I don't own this game",
    "category": "self",
  },
  {
    "id": 25,
    "john": "I have a life",
    "category": "self",
  },
  {
    "id": 26,
    "john": "I'll win next time",
    "category": "self",
  },
  {
    "id": 27,
    "john": "I kept killing myself",
    "category": "self",
  },
  {
    "id": 28,
    "john": "I would win if I didn't SD so much",
    "category": "self",
  },
  {
    "id": 29,
    "john": "I'll whoop your ass at another game",
    "category": "self",
  },
  {
    "id": 30,
    "john": "I just started learning how to play",
    "category": "self",
  },
  {
    "id": 31,
    "john": "I'm just playing for fun",
    "category": "self",
  },
  {
    "id": 32,
    "john": "I don't money match",
    "category": "self",
  },
  {
    "id": 33,
    "john": "I need my name tag on",
    "category": "self",
  },
  {
    "id": 34,
    "john": "I was the wrong color",
    "category": "self",
  },
  {
    "id": 35,
    "john": "I hate this controller slot",
    "category": "self",
  },
  {
    "id": 36,
    "john": "I need music while I play",
    "category": "self",
  },
  {
    "id": 37,
    "john": "I was just sandbagging",
    "category": "self",
  },
  {
    "id": 38,
    "john": "I know I'm better than you",
    "category": "self",
  },
  {
    "id": 39,
    "john": "You need high-tier characters win",
    "category": "foe",
  },
  {
    "id": 40,
    "john": "You have to counter-pick me to win",
    "category": "foe",
  },
  {
    "id": 41,
    "john": "You play this game way too much",
    "category": "foe",
  },
  {
    "id": 42,
    "john": "You play cheap",
    "category": "foe",
  },
  {
    "id": 43,
    "john": "You hack / cheat / glitch",
    "category": "foe",
  },
  {
    "id": 44,
    "john": "You're already warmed up",
    "category": "foe",
  },
  {
    "id": 45,
    "john": "You play with better people",
    "category": "foe",
  },
  {
    "id": 46,
    "john": "You take this too seriously",
    "category": "foe",
  },
  {
    "id": 47,
    "john": "The television is laggy",
    "category": "hardware",
  },
  {
    "id": 48,
    "john": "My controller is malfunctioning",
    "category": "hardware",
  },
  {
    "id": 49,
    "john": "I just got this controller",
    "category": "hardware",
  },
  {
    "id": 50,
    "john": "This isn't my controller",
    "category": "hardware",
  },
  {
    "id": 51,
    "john": "My controller is really old",
    "category": "hardware",
  },
  {
    "id": 52,
    "john": "I'm not used to this version of smash",
    "category": "hardware",
  },
  {
    "id": 53,
    "john": "It's not my gamecube / memory card",
    "category": "hardware",
  },
  {
    "id": 54,
    "john": "I hate this starting position",
    "category": "gameplay",
  },
  {
    "id": 55,
    "john": "The level gayed me",
    "category": "gameplay",
  },
  {
    "id": 56,
    "john": "The game glitched",
    "category": "gameplay",
  },
  {
    "id": 57,
    "john": "The camera sucks on this level",
    "category": "gameplay",
  },
  {
    "id": 58,
    "john": "Pause messed me up",
    "category": "gameplay",
  },
  {
    "id": 59,
    "john": "Vibration is throwing me off",
    "category": "gameplay",
  },
  {
    "id": 60,
    "john": "How did you hit me?",
    "category": "gameplay",
  },
  {
    "id": 61,
    "john": "How did I miss you?",
    "category": "gameplay",
  },
  {
    "id": 62,
    "john": "Pitch a tent, camper",
    "category": "gameplay",
  },
  {
    "id": 63,
    "john": "Spam some more",
    "category": "gameplay",
  },
  {
    "id": 64,
    "john": "You only have one move",
    "category": "gameplay",
  },
  {
    "id": 65,
    "john": "There's nothing I can do!",
    "category": "gameplay",
  },
  {
    "id": 66,
    "john": "Stop running from me",
    "category": "gameplay",
  },
  {
    "id": 67,
    "john": "Chainthrowing is gay",
    "category": "gameplay",
  },
  {
    "id": 68,
    "john": "That's so broken",
    "category": "gameplay",
  },
  {
    "id": 69,
    "john": "Wow that took no skill",
    "category": "gameplay",
  },
  {
    "id": 70,
    "john": "You're so predictable!",
    "category": "gameplay",
  },
  {
    "id": 71,
    "john": "I wish my character would do what I wanted",
    "category": "gameplay",
  },
  {
    "id": 72,
    "john": "Whatever this isn't my main",
    "category": "gameplay",
  },
  {
    "id": 73,
    "john": "C-stick is cheap",
    "category": "gameplay",
  },
  {
    "id": 74,
    "john": "How did I miss the ledge?",
    "category": "gameplay",
  },
  {
    "id": 75,
    "john": "Where was my midair?!",
    "category": "gameplay",
  },
  {
    "id": 76,
    "john": "I so teched that",
    "category": "gameplay",
  },
  {
    "id": 77,
    "john": "This game is so stupid",
    "category": "gameplay",
  },
  {
    "id": 78,
    "john": "* L R A Start *",
    "category": "gameplay",
  },
  {
    "id": 79,
    "john": "* hits controller, ganks plug *",
    "category": "gameplay",
  },
  {
    "id": 80,
    "john": "No johns",
    "category": "meta",
  }
];

bot.on('message', (msg) => {
  if (msg.content[0] !== prefix) {
    console.log("No Prefix Set")
    return;
  }

  const args = msg.content.slice(prefix.length).trim().split(" ");
  const command = args[0];
  const type = args[1];
  const value = args[2];

  if (command == "john") {
    if (type == "id") {
      // Johns by ID
      let john = johns.find(x => x.id == value);
      if (typeof john !== "undefined") {
        let message = "\n" + capitalizeFirstLetter(john.category) + " John\n" + "#" + john.id + " - " + john.john;
        msg.reply(message);
      } else {
        let message = "\n" + "Delusional John\n#??? - No such john";
        msg.reply(message);
      }
    } else if (type == "type") {
      // Johns by category
      let check = johns.find(x => x.category == value);

      if (typeof check !== "undefined") {
        let message = "\n" + capitalizeFirstLetter(value) + " John";
        johns.map((john) => {
          if (john.category == value) {
            message = message + "\n#" + john.id + " - " + john.john;
          }
        });
        msg.reply(message);
      } else {
        let message = "\n" + "No such category";
        msg.reply(message);
      }
    } else {
      let message = "\n**Help Menu**\n";
      message = message + "Usage: \n!john [command] [value]\n\n";
      message = message + "Commands: \n";
      message = message + "*id:* Find a john by its id #\n";
      message = message + "*type:* List all johns by type. (sportsmanship, self, foe, hardware, gameplay, meta)";
      msg.reply(message);
    }
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
