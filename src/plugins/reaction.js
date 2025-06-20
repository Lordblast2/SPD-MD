const axios = require('axios');

// Fetching reaction images from the API
const fetchReactionImage = async ({ Striker, m, reply, command }) => {
  try {
    const { data } = await axios.get(`https://api.waifu.pics/sfw/${command}`);
    await Striker.sendImageAsSticker(m.chat, data.url, m, {
      packname: global.packname,  // Set the packname globally
      author: global.author,      // Set author globally for the sticker
    });
  } catch (error) {
    reply(`❌ Error fetching image: ${error.message}`);
  }
};

module.exports = [
  { command: ["8ball"], operate: async (jinwoox) => fetchReactionImage({ ...Strikerx, command: "8ball" }) },
  { command: ["avatar"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "avatar" }) },
  { command: ["awoo"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "awoo" }) },
  { command: ["bite"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "bite" }) },
  { command: ["blush"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "blush" }) },
  { command: ["bonk"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "bonk" }) },
  { command: ["bully"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "bully" }) },
  { command: ["cringe"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "cringe" }) },
  { command: ["cry"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "cry" }) },
  { command: ["cuddle"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "cuddle" }) },
  { command: ["dance"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "dance" }) },
  { command: ["feed"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "feed" }) },
  { command: ["foxgirl"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "foxgirl" }) },
  { command: ["gecg"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "gecg" }) },
  { command: ["glomp"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "glomp" }) },
  { command: ["goose"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "goose" }) },
  { command: ["handhold"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "handhold" }) },
  { command: ["happy"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "happy" }) },
  { command: ["highfive"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "highfive" }) },
  { command: ["hug"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "hug" }) },
  { command: ["kill"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "kill" }) },
  { command: ["kiss"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "kiss" }) },
  { command: ["lick"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "lick" }) },
  { command: ["lizard"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "lizard" }) },
  { command: ["meow"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "meow" }) },
  { command: ["nom"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "nom" }) },
  { command: ["pat"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "pat" }) },
  { command: ["poke"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "poke" }) },
  { command: ["shinobu"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "shinobu" }) },
  { command: ["slap"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "slap" }) },
  { command: ["smile"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "smile" }) },
  { command: ["smug"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "smug" }) },
  { command: ["spank"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "spank" }) },
  { command: ["tickle"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "tickle" }) },
  { command: ["wave"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "wave" }) },
  { command: ["wink"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "wink" }) },
  { command: ["woof"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "woof" }) },
  { command: ["yeet"], operate: async (Strikerx) => fetchReactionImage({ ...Strikerx, command: "yeet" }) },
];
